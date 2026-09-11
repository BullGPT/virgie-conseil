import {
  hasErrors,
  normalize,
  renderContactEmail,
  validate,
} from "@/lib/contact";

/**
 * Réception des demandes de contact.
 *
 * L'envoi passe par l'API REST de Resend en `fetch` direct : aucune
 * dépendance npm à installer, et changer de prestataire ne touche que la
 * fonction `sendEmail` ci-dessous.
 *
 * Variables d'environnement attendues (voir .env.example) :
 *   RESEND_API_KEY       clé d'API du prestataire d'envoi
 *   CONTACT_TO_EMAIL     adresse du cabinet qui reçoit les demandes
 *   CONTACT_FROM_EMAIL   expéditeur, sur un domaine vérifié chez Resend
 */

/** Fenêtre glissante par IP. */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

/**
 * Anti-abus minimal, en mémoire. Suffisant sur un serveur unique ; en
 * hébergement sans état (Vercel), chaque instance a son propre compteur.
 * TODO: passer sur un store partagé (Upstash, Redis) si le volume le justifie.
 */
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "inconnue";
}

async function sendEmail(payload: {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Envoi non configuré : RESEND_API_KEY, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL sont requis.",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend a répondu ${response.status} : ${detail}`);
  }
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, reason: "rate-limit" },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (body === null || typeof body !== "object") {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  // Piège à robots : un champ caché qu'un humain ne remplit jamais.
  // On répond 200 pour ne pas renseigner le robot sur la détection.
  if (typeof (body as { website?: unknown }).website === "string" &&
      (body as { website: string }).website !== "") {
    return Response.json({ ok: true });
  }

  const values = normalize(body);
  const errors = validate(values);
  if (hasErrors(errors)) {
    return Response.json({ ok: false, reason: "invalid", errors }, { status: 400 });
  }

  const source =
    typeof (body as { source?: unknown }).source === "string"
      ? (body as { source: string }).source.slice(0, 200)
      : "inconnue";

  const email = renderContactEmail(values, {
    submittedAt: new Date(),
    source,
  });

  try {
    await sendEmail({ ...email, replyTo: values.email });
  } catch (error) {
    // En développement, l'envoi n'est en général pas configuré : on trace la
    // demande complète dans la console pour pouvoir tester le parcours.
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] envoi non effectué :", (error as Error).message);
      console.info(`[contact] e-mail qui aurait été envoyé :\n\n${email.text}\n`);
      return Response.json({ ok: true, delivered: false });
    }

    // En production, une demande perdue en silence serait pire qu'une erreur
    // affichée : on remonte l'échec au visiteur.
    console.error("[contact] échec de l'envoi :", error);
    return Response.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true, delivered: true });
}

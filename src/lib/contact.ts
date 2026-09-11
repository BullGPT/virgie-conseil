/* ==========================================================================
   Demande de contact — schéma, validation et rendu de l'e-mail.
   Ce module est partagé par le formulaire (client) et la route d'API
   (serveur) : la même validation s'applique des deux côtés, celle du
   serveur faisant foi.
   ========================================================================== */

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactField = keyof ContactPayload;

/** Codes d'erreur ; les libellés affichés vivent dans content/site.ts. */
export type ContactErrorCode = "required" | "email" | "tooLong";

export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

/** Le téléphone est le seul champ facultatif. */
const REQUIRED: ContactField[] = ["firstName", "lastName", "email", "message"];

/** Garde-fous de longueur, alignés sur le serveur pour éviter les abus. */
export const MAX_LENGTH: Record<ContactField, number> = {
  firstName: 80,
  lastName: 80,
  email: 160,
  phone: 40,
  message: 4000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const EMPTY_CONTACT: ContactPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

/** Normalise une entrée inconnue en payload de chaînes nettoyées. */
export function normalize(input: unknown): ContactPayload {
  const source = (input ?? {}) as Record<string, unknown>;
  const read = (key: ContactField) =>
    typeof source[key] === "string" ? (source[key] as string).trim() : "";

  return {
    firstName: read("firstName"),
    lastName: read("lastName"),
    email: read("email"),
    phone: read("phone"),
    message: read("message"),
  };
}

/** Rend un objet vide si tout est valide. */
export function validate(values: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  for (const field of REQUIRED) {
    if (values[field] === "") errors[field] = "required";
  }

  for (const field of Object.keys(MAX_LENGTH) as ContactField[]) {
    if (!errors[field] && values[field].length > MAX_LENGTH[field]) {
      errors[field] = "tooLong";
    }
  }

  if (!errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "email";
  }

  return errors;
}

export const hasErrors = (errors: ContactErrors) =>
  Object.keys(errors).length > 0;

/* -------------------------------------------------------------------------- */
/* Rendu de l'e-mail                                                          */
/* -------------------------------------------------------------------------- */

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(date);

export type ContactMeta = {
  submittedAt: Date;
  /** Page depuis laquelle la demande a été envoyée. */
  source: string;
};

/**
 * Compose l'e-mail reçu par le cabinet. L'objet porte le nom du demandeur
 * pour être lisible dans une liste, le corps met le message en avant, et
 * les coordonnées sont cliquables. Le `replyTo` est posé sur l'adresse du
 * demandeur côté route : répondre à l'e-mail lui répond directement.
 */
export function renderContactEmail(
  values: ContactPayload,
  meta: ContactMeta,
): { subject: string; text: string; html: string } {
  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const phone = values.phone === "" ? "Non renseigné" : values.phone;
  const when = formatDateTime(meta.submittedAt);

  const subject = `Nouvelle demande de contact — ${fullName}`;

  const text = [
    `Nouvelle demande de contact`,
    ``,
    `Nom          : ${fullName}`,
    `Email        : ${values.email}`,
    `Téléphone    : ${phone}`,
    `Envoyée le   : ${when}`,
    `Depuis       : ${meta.source}`,
    ``,
    `Sa situation :`,
    ``,
    values.message,
    ``,
    `— Répondre à cet e-mail écrit directement à ${values.email}.`,
  ].join("\n");

  const row = (label: string, value: string) => `
      <tr>
        <th align="left" style="padding:10px 16px;border-bottom:1px solid #e6e9f0;font:500 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#4a5a78;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</th>
        <td style="padding:10px 16px;border-bottom:1px solid #e6e9f0;font:400 15px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#10254f;">${value}</td>
      </tr>`;

  const html = `<!doctype html>
<html lang="fr">
<body style="margin:0;padding:24px;background:#f1f4f8;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6e9f0;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="padding:24px 16px;background:#10254f;">
        <p style="margin:0;font:600 16px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;color:#ffffff;">Nouvelle demande de contact</p>
        <p style="margin:6px 0 0;font:400 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#bae6ff;">${escapeHtml(when)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Nom", `<strong>${escapeHtml(fullName)}</strong>`)}
          ${row("Email", `<a href="mailto:${escapeHtml(values.email)}" style="color:#1f55d6;">${escapeHtml(values.email)}</a>`)}
          ${row("Téléphone", values.phone === "" ? "Non renseigné" : `<a href="tel:${escapeHtml(values.phone.replace(/\s/g, ""))}" style="color:#1f55d6;">${escapeHtml(values.phone)}</a>`)}
          ${row("Envoyée depuis", escapeHtml(meta.source))}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px;">
        <p style="margin:0 0 8px;font:500 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#4a5a78;">Sa situation</p>
        <div style="padding:16px;background:#f1f4f8;border-radius:12px;font:400 15px/1.65 -apple-system,Segoe UI,Roboto,sans-serif;color:#10254f;white-space:pre-wrap;">${escapeHtml(values.message)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:0 16px 24px;">
        <a href="mailto:${escapeHtml(values.email)}?subject=${encodeURIComponent(`Re : votre demande — ${fullName}`)}" style="display:inline-block;padding:12px 24px;background:#2f6bf6;border-radius:999px;font:500 14px/1 -apple-system,Segoe UI,Roboto,sans-serif;color:#ffffff;text-decoration:none;">Répondre à ${escapeHtml(values.firstName)}</a>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { solutions } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Bande des solutions : fond blanc, bordures haute et basse, 4 items séparés
 * par des filets verticaux 1px. En 2×2 sur mobile, sans filets.
 * Reprend la structure de l'ancienne barre de chiffres clés, l'illustration
 * prenant la place de la valeur.
 */
export function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-titre"
      className="border-y border-line bg-surface"
    >
      <Container>
        {/* La bande n'a pas de titre visible ; celui-ci nomme la section
            pour les lecteurs d'écran et garde la hiérarchie continue. */}
        <h2 id="solutions-titre" className="sr-only">
          {solutions.title}
        </h2>

        <ul className="grid grid-cols-2 gap-y-12 py-12 lg:grid-cols-4 lg:py-14">
          {solutions.cards.map((card, index) => (
            <li
              key={card.title}
              className={cn(
                "flex flex-col items-center px-4 text-center lg:px-8",
                index > 0 && "lg:border-l lg:border-line",
              )}
            >
              {/* Cadre carré : le dessin est affiché en entier, jamais rogné. */}
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                sizes="128px"
                className="size-28 object-contain"
              />
              <p className="mt-4 font-display text-h3 text-ink">{card.title}</p>
              <p className="mt-2 text-small text-ink-soft">{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

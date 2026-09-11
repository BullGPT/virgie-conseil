import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/content/site";

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-titre"
      className="bg-mist py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="solutions-titre"
          title={solutions.title}
          intro={solutions.intro}
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.cards.map((card) => (
            <li key={card.title}>
              <Card
                href={card.href}
                className="flex h-full flex-col overflow-hidden"
              >
                {/* Cadre carré : le dessin est affiché en entier, jamais rogné. */}
                <div className="aspect-square w-full p-4">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                    className="size-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 text-center">
                  <h3 className="text-h3 text-signal">{card.title}</h3>
                  <p className="mt-2 text-small text-ink-soft">
                    {card.description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

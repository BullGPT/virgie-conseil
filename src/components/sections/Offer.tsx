import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offer } from "@/content/site";

export function Offer() {
  return (
    <section
      id="offre"
      aria-labelledby="offre-titre"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="offre-titre"
          title={offer.title}
          intro={offer.intro}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {offer.cards.map((card) => (
            <li key={card.title}>
              <Card className="flex h-full flex-col items-center p-8 text-center">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  sizes="120px"
                  className="size-[120px] object-contain"
                />
                <h3 className="mt-6 text-h3 text-ink">{card.title}</h3>
                <p className="mt-3 text-body text-ink-soft">{card.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { needs } from "@/content/site";

export function Needs() {
  return (
    <section
      id="besoins"
      aria-labelledby="besoins-titre"
      className="bg-mist py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-16">
          {/* L'illustration porte son propre fond clair : sur le gris de la
              section, une bordure et un arrondi la posent comme une carte.
              Plus de forme organique derrière — le visuel a déjà la sienne. */}
          <div className="mx-auto w-full max-w-[480px] lg:max-w-none">
            <Image
              src={needs.image.src}
              alt={needs.image.alt}
              width={needs.image.width}
              height={needs.image.height}
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="h-auto w-full rounded-2xl border border-line object-cover"
            />
          </div>

          <div>
            <SectionHeading
              id="besoins-titre"
              title={needs.title}
              intro={needs.intro}
            />
            <Accordion items={needs.items} defaultOpen={0} className="mt-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}

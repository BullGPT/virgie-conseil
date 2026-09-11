import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Blob } from "@/components/ui/Blob";
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
          {/* Illustration, posée sur une forme organique colorée. */}
          {/* `isolate` crée le contexte d'empilement : sans lui, la forme
              en `-z-10` passerait derrière le fond de la section. */}
          {/* La forme est calée sur l'illustration, pas sur la colonne :
              elle reste centrée derrière elle à toutes les largeurs. */}
          <div className="relative isolate mx-auto w-full max-w-[420px] lg:max-w-none">
            <Blob
              shape="soft"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src={needs.image.src}
              alt={needs.image.alt}
              width={needs.image.width}
              height={needs.image.height}
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="h-auto w-full object-contain"
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

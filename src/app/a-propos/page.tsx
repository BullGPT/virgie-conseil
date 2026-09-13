import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { pages } from "@/content/site";
import { cn } from "@/lib/utils";

const page = pages.about;

export const metadata: Metadata = {
  /* `absolute` : le titre porte déjà la marque, le gabarit du layout
     l'ajouterait une seconde fois. */
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      {page.sections.map((section, index) => {
        // Fonds alternés, et le visuel change de côté d'une section à l'autre.
        const shaded = index % 2 === 1;

        return (
          <section
            key={section.title}
            className={cn(
              "py-20 lg:py-28",
              shaded ? "bg-mist" : "bg-surface",
            )}
          >
            <Container>
              <div
                className={cn(
                  section.image &&
                    "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                )}
              >
                {section.image && (
                  <div className={cn(shaded && "lg:order-2")}>
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      sizes="(min-width: 1024px) 46vw, 90vw"
                      /* Le cadre fixe le format : les deux photos n'ont pas
                         le même rapport à la source. */
                      className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
                    />
                  </div>
                )}

                <div className={cn(!section.image && "max-w-[760px]")}>
                  <SectionMarker className="mb-6" />
                  <h2 className="max-w-[18ch] text-h2 text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-6 flex flex-col gap-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="measure text-body text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { pages } from "@/content/site";

const page = pages.legal;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
  robots: { index: false, follow: true },
};

/** Nombre d'informations encore manquantes, affiché en tête de page. */
const missing = page.sections
  .flatMap((section) => section.body)
  .filter((paragraph) => paragraph.startsWith("[TODO]")).length;

export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="flex max-w-[760px] flex-col gap-12">
            {/* Rappel de chantier : disparaît de lui-même une fois les
                dernières informations renseignées dans content/site.ts. */}
            {missing > 0 && (
              <p
                role="status"
                className="rounded-2xl border border-signal/40 bg-signal-050 px-6 py-5 text-small text-ink"
              >
                <strong className="font-medium">
                  Page incomplète — {missing} information
                  {missing > 1 ? "s" : ""} à fournir.
                </strong>{" "}
                Les encadrés ci-dessous marquent ce qui manque. Cette page ne
                doit pas être publiée en l&apos;état : les mentions légales
                sont obligatoires et engagent la responsabilité de l&apos;éditeur.
              </p>
            )}

            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h3 text-ink">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-4">
                  {section.body.map((paragraph) =>
                    paragraph.startsWith("[TODO]") ? (
                      <p
                        key={paragraph}
                        className="rounded-xl border border-dashed border-signal/50 bg-mist px-4 py-3 text-small text-ink-soft"
                      >
                        <span className="font-medium text-signal-600">
                          À compléter —{" "}
                        </span>
                        {paragraph.replace("[TODO] ", "")}
                      </p>
                    ) : (
                      <p key={paragraph} className="text-body text-ink-soft">
                        {paragraph}
                      </p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

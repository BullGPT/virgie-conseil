import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { pages, type LegalBlock } from "@/content/site";

const page = pages.legal;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
  robots: { index: false, follow: true },
};

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "lines") {
    // Bloc de coordonnées : lignes serrées, sans puce.
    return (
      <ul className="flex flex-col gap-1 text-body text-ink-soft">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.kind === "list") {
    return (
      <ul className="flex list-disc flex-col gap-2 ps-5 text-body text-ink-soft">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className="text-body text-ink-soft">{block.value}</p>;
}

export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="flex max-w-[760px] flex-col gap-12">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h3 text-ink">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-4">
                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <p className="border-t border-line pt-8 text-small text-ink-soft">
              Dernière mise à jour : {page.updatedAt}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

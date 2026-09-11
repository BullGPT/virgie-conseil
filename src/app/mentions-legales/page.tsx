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
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-body text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

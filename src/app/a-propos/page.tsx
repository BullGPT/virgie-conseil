import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { pages } from "@/content/site";

const page = pages.about;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-16">
            {page.sections.map((section) => (
              <section key={section.title}>
                <SectionMarker className="mb-6" />
                <h2 className="max-w-[18ch] text-h2 text-ink">{section.title}</h2>
                <div className="mt-6 flex flex-col gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="measure text-body text-ink-soft">
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

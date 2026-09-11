import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { pages } from "@/content/site";

const page = pages.approach;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <ol className="flex flex-col gap-6">
            {page.steps.map((step, index) => (
              <li key={step.title}>
                <Card className="flex flex-col gap-5 p-8 sm:flex-row lg:p-10">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-signal-050 font-display text-h3 text-signal"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-h3 text-ink">{step.title}</h2>
                    <div className="mt-3 flex flex-col gap-4">
                      {step.body.map((paragraph) => (
                        <p key={paragraph} className="measure text-body text-ink-soft">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { pages } from "@/content/site";

const page = pages.faq;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="max-w-[820px]">
            <Accordion items={page.items} defaultOpen={0} />
          </div>
        </Container>
      </div>
    </>
  );
}

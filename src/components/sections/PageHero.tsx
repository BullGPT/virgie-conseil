import { Container } from "@/components/layout/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";

/** Hero simplifié des pages secondaires : marqueur + h1 + chapô. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-line bg-mist py-16 lg:py-24">
      <Container>
        <SectionMarker className="mb-6" />
        <p className="text-small font-medium text-signal-600">{eyebrow}</p>
        <h1 className="mt-3 max-w-[18ch] text-h1 text-ink">{title}</h1>
        <p className="measure mt-6 text-body text-ink-soft">{lead}</p>
      </Container>
    </section>
  );
}

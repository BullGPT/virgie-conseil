import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/content/site";

export function Expertise() {
  return (
    <section
      id="savoir-faire"
      aria-labelledby="savoir-faire-titre"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="savoir-faire-titre"
          title={expertise.title}
          intro={expertise.intro}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {expertise.cards.map((card) => (
            <li key={card.title}>
              <Card className="flex h-full gap-5 p-8">
                <Icon name={card.icon} className="size-10 shrink-0 text-signal" />
                <div>
                  <h3 className="text-h3 text-ink">{card.title}</h3>
                  <p className="mt-3 text-body text-ink-soft">{card.body}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

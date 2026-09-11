import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-titre"
      className="bg-surface py-24 lg:py-32"
    >
      <Container>
        {/* Colonne unique centrée : pas de visuel sur la headline. */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <p className="inline-flex items-center rounded-full bg-signal-050 px-4 py-2 text-small font-medium text-signal-600">
            {hero.eyebrow}
          </p>
          <h1 id="hero-titre" className="mt-6 text-h1 text-ink">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-body text-ink-soft">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

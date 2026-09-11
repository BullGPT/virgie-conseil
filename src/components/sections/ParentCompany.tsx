import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { parentCompany } from "@/content/site";

/** Seul endroit du site où le vert profond apparaît. */
export function ParentCompany() {
  return (
    <section
      id="societe"
      aria-labelledby="societe-titre"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <div className="flex flex-col items-center rounded-3xl bg-signal-050 px-6 py-14 text-center lg:px-16 lg:py-20">
          <h2 id="societe-titre" className="text-h2 text-ink">
            {parentCompany.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[720px] text-body text-ink-soft">
            {parentCompany.body}
          </p>
          <Button
            href={parentCompany.cta.href}
            variant="primary"
            size="lg"
            className="mt-9"
          >
            {parentCompany.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

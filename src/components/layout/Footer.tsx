import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { legalCta } from "@/content/navigation";

/** Pied de page réduit à son strict minimum : un seul bouton. */
export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container>
        <div className="flex justify-center py-10">
          <Button href={legalCta.href} variant="outline" size="md">
            {legalCta.label}
          </Button>
        </div>
      </Container>
    </footer>
  );
}

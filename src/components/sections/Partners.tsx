import { Container } from "@/components/layout/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { partners } from "@/content/site";

/**
 * Bloc « écosystème ». Il remplace le carrousel de logos partenaires :
 * aucun partenaire n'est signé à ce jour, et des cases vides comme des logos
 * empruntés desserviraient le cabinet. Le jour où de vrais logos existent,
 * ce bloc peut redevenir un carrousel.
 */
export function Partners() {
  return (
    <section
      id="partenaires"
      aria-labelledby="partenaires-titre"
      className="bg-mist py-20 lg:py-28"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionMarker className="mb-6" />
          <h2 id="partenaires-titre" className="max-w-[20ch] text-h2 text-ink">
            {partners.title}
          </h2>
          <p className="mt-6 max-w-[62ch] text-body text-ink-soft">
            {partners.body}
          </p>
        </div>
      </Container>
    </section>
  );
}

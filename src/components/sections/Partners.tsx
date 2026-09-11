import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { partners } from "@/content/site";

export function Partners() {
  return (
    <section
      id="partenaires"
      aria-labelledby="partenaires-titre"
      className="overflow-hidden bg-mist py-20 lg:py-28"
    >
      <LogoMarquee
        heading={
          <div>
            <SectionMarker className="mb-6" />
            <h2 id="partenaires-titre" className="max-w-[18ch] text-h2 text-ink">
              {partners.title}
            </h2>
          </div>
        }
        rowOne={partners.rowOne}
        rowTwo={partners.rowTwo}
        pauseLabel={partners.pauseLabel}
        playLabel={partners.playLabel}
      />
    </section>
  );
}

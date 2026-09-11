import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { contactSection } from "@/content/site";

/** Encart de contact de l'accueil : le formulaire, dans le panneau bleu. */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-titre"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <div className="rounded-3xl bg-signal-050 px-6 py-14 lg:px-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <SectionMarker className="mb-6" />
            <h2 id="contact-titre" className="max-w-[20ch] text-h2 text-ink">
              {contactSection.title}
            </h2>
            <p className="mt-5 max-w-[60ch] text-body text-ink-soft">
              {contactSection.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[720px] rounded-2xl border border-line bg-surface p-7 lg:p-9">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { brand, contactSection } from "@/content/site";

/** Les deux moyens de joindre le cabinet, dans l'ordre d'affichage. */
const channels = [
  {
    label: contactSection.emailLabel,
    value: brand.email,
    href: `mailto:${brand.email}`,
    Icon: Mail,
  },
  {
    label: contactSection.phoneLabel,
    value: brand.phone,
    href: `tel:${brand.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
];

/** Encart de contact de l'accueil : contact direct, sans formulaire. */
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

          <ul className="mx-auto mt-10 grid max-w-[760px] gap-4 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-8 text-center transition-colors hover:border-signal"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-signal-050 text-signal-600">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.6} />
                  </span>
                  <span className="text-small text-ink-soft">{label}</span>
                  {/* `break-words` : l'adresse est longue et ne doit pas
                      déborder de la carte sur les petites largeurs. */}
                  <span className="font-display text-h3 break-words text-signal-600">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { SocialIcon } from "@/components/ui/Icon";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { brand, pages } from "@/content/site";

const page = pages.contact;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <div className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:gap-16">
            <div>
              <SectionMarker className="mb-6" />
              <h2 className="text-h3 text-ink">{page.infoTitle}</h2>
              <p className="measure mt-4 text-body text-ink-soft">{page.infoBody}</p>

              <address className="mt-6 not-italic text-body text-ink-soft">
                <span className="block font-medium text-ink">{brand.name}</span>
                <span className="block">{brand.address.street}</span>
                <span className="block">
                  {brand.address.postalCode} {brand.address.city}
                </span>
                <span className="block">{brand.address.country}</span>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-3 block text-signal-600 underline-offset-4 hover:underline"
                >
                  {brand.email}
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="block text-signal-600 underline-offset-4 hover:underline"
                >
                  {brand.phone}
                </a>
              </address>

              <ul className="mt-6 flex items-center gap-3">
                {brand.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-signal hover:text-signal"
                    >
                      <SocialIcon name={social.icon} className="size-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line p-7 lg:p-9">
              <h2 className="text-h3 text-ink">{page.formTitle}</h2>
              <ContactForm className="mt-6" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

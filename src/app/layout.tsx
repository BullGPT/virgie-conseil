import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/content/site";
import "./globals.css";

/* Hind + Amulya viennent de Fontshare, pas de Google Fonts : les .woff2
   sont auto-hébergés dans ./fonts et servis par next/font/local, ce qui
   évite toute requête vers un domaine tiers au chargement.
   Seules les graisses réellement utilisées sont embarquées. */

/** Titres — Hind Bold. Sert aussi au logo et aux chiffres clés. */
const hind = localFont({
  src: [{ path: "./fonts/Hind-700.woff2", weight: "700", style: "normal" }],
  variable: "--font-hind",
  display: "swap",
});

/** Texte courant — Amulya Regular, et Medium pour les libellés et boutons. */
const amulya = localFont({
  src: [
    { path: "./fonts/Amulya-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Amulya-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-amulya",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    // TODO: ajouter une image Open Graph 1200×630 en PNG/JPG dans /public
    // et la déclarer ici : images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true },
};

/** Une valeur encore marquée [TODO] ne doit pas partir dans les données
    structurées : mieux vaut un champ absent qu'un champ faux. */
const filled = (value: string) => !value.startsWith("[TODO]");

const postalAddress = [
  brand.address.street,
  brand.address.postalCode,
  brand.address.city,
].every(filled)
  ? {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      postalCode: brand.address.postalCode,
      addressLocality: brand.address.city,
      addressCountry: "FR",
    }
  : undefined;

const sameAs = brand.socials.map((social) => social.href).filter(filled);

/** JSON-LD décrivant le cabinet, repris par les moteurs de recherche. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: brand.name,
  description: brand.description,
  url: brand.url,
  logo: `${brand.url}/logo-vigie.png`,
  email: filled(brand.email) ? brand.email : undefined,
  telephone: filled(brand.phone) ? brand.phone : undefined,
  areaServed: { "@type": "Country", name: "France" },
  address: postalAddress,
  sameAs: sameAs.length > 0 ? sameAs : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${amulya.variable} ${hind.variable}`}>
      <body className="bg-surface text-ink-soft antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-100 focus:rounded-full focus:bg-signal focus:px-5 focus:py-3 focus:text-small focus:font-medium focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/content/site";
import "./globals.css";

/* Excon + Ranade viennent de Fontshare, pas de Google Fonts : les .woff2
   sont auto-hébergés dans ./fonts et servis par next/font/local, ce qui
   évite toute requête vers un domaine tiers au chargement.
   Seules les graisses réellement utilisées sont embarquées. */

/** Titres — Excon Medium, et Bold pour le logo et les chiffres clés. */
const excon = localFont({
  src: [
    { path: "./fonts/Excon-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Excon-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-excon",
  display: "swap",
});

/** Texte courant — Ranade Light, et Medium pour les libellés et boutons. */
const ranade = localFont({
  src: [
    { path: "./fonts/Ranade-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Ranade-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ranade",
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

/** JSON-LD. Toutes les valeurs sont des placeholders à confirmer. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: brand.name,
  description: brand.description,
  url: brand.url,
  email: brand.email,
  telephone: brand.phone,
  areaServed: { "@type": "Country", name: "France" },
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    postalCode: brand.address.postalCode,
    addressLocality: brand.address.city,
    addressCountry: "FR",
  },
  sameAs: brand.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${ranade.variable} ${excon.variable}`}>
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

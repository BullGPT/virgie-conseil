import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Nécessaire uniquement pour les placeholders SVG de /public.
       TODO: retirer ces trois options une fois les visuels définitifs
       (PNG/JPG/WebP) livrés. */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

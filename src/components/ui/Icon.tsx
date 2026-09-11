import {
  Compass,
  FileText,
  Handshake,
  Landmark,
  LineChart,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/site";

/**
 * Registre d'icônes de trait. Passer par ce mapping plutôt que d'importer
 * lucide directement dans les sections : changer de jeu d'icônes plus tard
 * ne touchera que ce fichier.
 */
const icons: Record<IconName, LucideIcon> = {
  "shield-check": ShieldCheck,
  compass: Compass,
  handshake: Handshake,
  "line-chart": LineChart,
  scale: Scale,
  users: Users,
  landmark: Landmark,
  "file-text": FileText,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" strokeWidth={1.6} />;
}

/* -------------------------------------------------------------------------- */
/* Icônes de réseaux sociaux                                                  */
/* -------------------------------------------------------------------------- */
/* lucide ne fournit plus les marques depuis la v1 : glyphes dessinés ici,
   en aplat, pour hériter de currentColor. */

export type SocialIconName = "linkedin" | "instagram" | "youtube";

const socialPaths: Record<SocialIconName, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.46h-4v-4.84c0-1.16-.02-2.65-1.61-2.65-1.62 0-1.87 1.26-1.87 2.57v4.92h-3.97v-11Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.26-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.26-.06 1.64-.07 4.85-.07Zm0 1.98c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07Zm0 3.37a5.49 5.49 0 1 1 0 10.98 5.49 5.49 0 0 1 0-10.98Zm0 9.05a3.56 3.56 0 1 0 0-7.12 3.56 3.56 0 0 0 0 7.12Zm6.99-9.27a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0Z" />
  ),
  youtube: (
    <path d="M21.58 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.43A2.5 2.5 0 0 0 2.42 7.2C2 8.77 2 12 2 12s0 3.23.42 4.8a2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.43a2.5 2.5 0 0 0 1.77-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.8ZM10 15.02V8.98L15.25 12 10 15.02Z" />
  ),
};

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {socialPaths[name]}
    </svg>
  );
}

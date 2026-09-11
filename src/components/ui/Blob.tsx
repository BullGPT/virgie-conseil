import { cn } from "@/lib/utils";

/** Les deux formes organiques de la marque. */
const shapes = {
  /** Grande forme allongée : débordement à droite du hero. */
  hero: "M41.1,-36.9C49.2,-22.5,49.1,-5.7,45,9.5C40.9,24.7,32.9,38.2,18.7,48.9C4.5,59.6,-15.9,67.4,-28.6,60.8C-41.4,54.1,-46.5,32.9,-51.8,11.4C-57,-10.2,-62.4,-32.1,-53.8,-46.7C-45.2,-61.2,-22.6,-68.2,-3.1,-65.8C16.4,-63.3,32.9,-51.3,41.1,-36.9Z",
  /** Forme plus ramassée : fond coloré d'une illustration. */
  soft: "M31.4,-34.9C40.5,-29.7,47.7,-19.7,48.3,-9.5C49,0.8,43.2,11.2,36.5,19.4C29.7,27.6,22,33.5,13.5,36.2C5,38.9,-4.4,38.3,-12.6,35.1C-20.8,31.9,-27.8,26,-39,17.3C-50.3,8.6,-65.9,-2.9,-68.6,-16.4C-71.3,-29.9,-61.2,-45.4,-47.6,-49.8C-34.1,-54.2,-17,-47.5,-3,-44C11.1,-40.5,22.3,-40.1,31.4,-34.9Z",
} as const;

export type BlobShape = keyof typeof shapes;

/**
 * Forme organique décorative, toujours purement illustrative : masquée aux
 * lecteurs d'écran et posée en `-z-10` derrière le contenu. La couleur vient
 * du token `--color-sky`, comme le reste de la charte.
 */
export function Blob({
  shape = "hero",
  className,
}: {
  shape?: BlobShape;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={cn("fill-sky", className)}
    >
      <path d={shapes[shape]} transform="translate(100 100)" />
    </svg>
  );
}

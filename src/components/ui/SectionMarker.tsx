import { cn } from "@/lib/utils";

/**
 * Motif signature de la marque : un trait horizontal arrondi de 48 × 5px
 * posé au-dessus de chaque titre de section, aligné avec le titre.
 * Purement décoratif : masqué aux lecteurs d'écran.
 */
export function SectionMarker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-[5px] w-12 rounded-full bg-signal", className)}
    />
  );
}

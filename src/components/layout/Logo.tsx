import { cn } from "@/lib/utils";

/**
 * Logo placeholder « Vigie » : une marque géométrique (le faisceau d'une
 * vigie) + le nom. À remplacer par le logo définitif fourni par le client.
 * Dessiné en SVG inline pour hériter des couleurs de la charte.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="15" cy="15" r="14" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15 7.5 L20.5 22 M15 7.5 L9.5 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="15" cy="7.5" r="2.75" fill="var(--color-signal)" />
      </svg>
      <span className="font-display text-[1.375rem] font-bold tracking-[-0.03em]">
        Vigie
      </span>
    </span>
  );
}

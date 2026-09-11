"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Index ouvert au chargement ; `null` pour tout replier. */
  defaultOpen?: number | null;
  className?: string;
};

/**
 * Accordéon accessible : un seul panneau ouvert à la fois.
 * L'animation de hauteur passe par `grid-template-rows: 0fr → 1fr`,
 * ce qui évite toute mesure en JavaScript.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);

  /** Flèches, Home et End déplacent le focus entre les en-têtes. */
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const moves: Record<string, number> = {
      ArrowDown: (index + 1) % items.length,
      ArrowUp: (index - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    triggers.current[next]?.focus();
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => {
        const expanded = open === index;
        const headerId = `${baseId}-header-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-surface transition-colors duration-200",
              expanded ? "border-signal/40" : "border-line",
            )}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                ref={(node) => {
                  triggers.current[index] = node;
                }}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-display text-h3 text-ink transition-colors hover:text-signal"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-signal-050 text-signal"
                >
                  {/* Barre horizontale : toujours visible. */}
                  <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                  {/* Barre verticale : disparaît quand le panneau est ouvert. */}
                  <span
                    className={cn(
                      "absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-200",
                      expanded ? "scale-y-0" : "scale-y-100",
                    )}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              /* `inert` plutôt que `hidden` : le panneau reste dans le flux
                 pour que l'animation de hauteur fonctionne, tout en sortant
                 de l'arbre d'accessibilité et de l'ordre de tabulation. */
              inert={!expanded}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="measure px-6 pb-6 text-body text-ink-soft">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

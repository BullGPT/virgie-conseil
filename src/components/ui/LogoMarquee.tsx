"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export type MarqueeLogo = {
  name: string;
  logo: string;
};

type LogoMarqueeProps = {
  /** Bloc de titre, posé sur la même ligne que le bouton pause/lecture. */
  heading: ReactNode;
  rowOne: MarqueeLogo[];
  rowTwo: MarqueeLogo[];
  pauseLabel: string;
  playLabel: string;
};

/**
 * Deux rangées de logos défilant en sens opposés. Le défilement est en CSS
 * pur (liste dupliquée + translateX de 50%) : aucun JavaScript de scroll.
 * Il se met en pause au survol et via le bouton. Avec
 * `prefers-reduced-motion`, le marquee est figé et la rangée devient une
 * grille statique scrollable (voir globals.css).
 */
export function LogoMarquee({
  heading,
  rowOne,
  rowTwo,
  pauseLabel,
  playLabel,
}: LogoMarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <Container>
        <div className="flex items-end justify-between gap-6">
          {heading}
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-signal-050 text-signal transition-colors hover:bg-signal hover:text-white"
          >
            {paused ? (
              <Play className="size-5" aria-hidden="true" />
            ) : (
              <Pause className="size-5" aria-hidden="true" />
            )}
            <span className="sr-only">{paused ? playLabel : pauseLabel}</span>
          </button>
        </div>
      </Container>

      <div className="mt-12 flex flex-col gap-5">
        <MarqueeRow items={rowOne} direction="rtl" paused={paused} />
        <MarqueeRow items={rowTwo} direction="ltr" paused={paused} />
      </div>
    </>
  );
}

function MarqueeRow({
  items,
  direction,
  paused,
}: {
  items: MarqueeLogo[];
  direction: "ltr" | "rtl";
  paused: boolean;
}) {
  return (
    <div className="marquee-viewport group">
      <div
        className={cn(
          "marquee-track",
          direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr",
          "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationPlayState: paused ? "paused" : undefined }}
      >
        <LogoList items={items} />
        <LogoList items={items} duplicate />
      </div>
    </div>
  );
}

function LogoList({
  items,
  duplicate = false,
}: {
  items: MarqueeLogo[];
  duplicate?: boolean;
}) {
  return (
    <ul
      className={cn("flex shrink-0 gap-5 pr-5", duplicate && "marquee-duplicate")}
      aria-hidden={duplicate || undefined}
    >
      {items.map((item) => (
        <li
          key={`${duplicate ? "dup-" : ""}${item.name}`}
          className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface px-6 grayscale transition-[filter] duration-200 hover:grayscale-0"
        >
          <Image
            src={item.logo}
            alt={item.name}
            width={160}
            height={44}
            sizes="160px"
            className="h-auto max-h-11 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

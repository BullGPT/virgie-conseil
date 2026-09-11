import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  /** Si fourni, la carte entière devient cliquable. */
  href?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Carte de base : définie par une bordure 1px, jamais par une ombre.
 * Le survol se limite à un changement de couleur de bordure.
 */
export function Card({ href, className, children }: CardProps) {
  const classes = cn(
    "block rounded-2xl border border-line bg-surface transition-colors duration-200",
    href && "hover:border-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
    !href && "hover:border-signal/45",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-signal " +
  "disabled:cursor-not-allowed disabled:opacity-55";

/* Une seule couleur d'accent : la hiérarchie entre deux actions passe par
   la forme du bouton, plein ou contour, et non par la teinte. */
const variants: Record<ButtonVariant, string> = {
  // Bleu plein : l'action principale. Un seul par section.
  primary: "bg-signal text-white hover:bg-signal-600",
  // Contour : action secondaire, jamais deux fois dans le même bloc.
  outline:
    "border border-line bg-surface text-ink hover:border-signal hover:text-signal",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-small",
  md: "h-12 px-6 text-small",
  lg: "h-14 px-8 text-body",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

/**
 * Un bouton pilule. Avec `href` il rend un <Link>, sinon un <button> qui
 * accepte les attributs natifs (type, onClick, disabled…).
 */
export type ButtonProps =
  | (CommonProps & { href: string })
  | (CommonProps &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
        href?: undefined;
      });

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // `rest` est le reste de la branche <button> de l'union : sans href,
  // seuls les attributs natifs de bouton peuvent s'y trouver.
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button {...buttonProps} type={buttonProps.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}

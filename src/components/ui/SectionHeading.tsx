import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionMarker } from "./SectionMarker";

type SectionHeadingProps = {
  /** Niveau de titre : respecte la hiérarchie de la page (h2 par défaut). */
  as?: "h1" | "h2" | "h3";
  title: string;
  /** Un ou plusieurs paragraphes d'introduction. */
  intro?: string | string[];
  align?: "left" | "center";
  /** id posé sur le titre, pour un aria-labelledby sur la <section>. */
  id?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  as: Tag = "h2",
  title,
  intro,
  align = "left",
  id,
  className,
  children,
}: SectionHeadingProps) {
  const paragraphs = intro === undefined ? [] : Array.isArray(intro) ? intro : [intro];
  const centered = align === "center";

  return (
    <div className={cn(centered && "flex flex-col items-center text-center", className)}>
      <SectionMarker className="mb-6" />
      <Tag
        id={id}
        className={cn(
          Tag === "h1" ? "text-h1" : "text-h2",
          "text-ink",
          centered ? "max-w-[20ch]" : "max-w-[18ch]",
        )}
      >
        {title}
      </Tag>
      {paragraphs.length > 0 && (
        <div
          className={cn(
            "mt-6 flex flex-col gap-4 text-body text-ink-soft",
            centered ? "max-w-[68ch]" : "max-w-[640px]",
          )}
        >
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}

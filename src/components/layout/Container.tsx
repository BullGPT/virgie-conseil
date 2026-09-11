import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Conteneur centré : 1180px max, gouttières 24px mobile / 40px desktop. */
export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-site px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}

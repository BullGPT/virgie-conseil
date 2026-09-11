import Image from "next/image";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";

/** Dimensions du fichier détouré, pour réserver le bon rapport. */
const LOGO = { src: "/logo-vigie.png", width: 525, height: 279 };

/**
 * Logo de la marque. Le fichier est détouré (fond transparent), ce qui lui
 * permet de se poser sur la pilule translucide de la navbar sans y dessiner
 * un rectangle blanc.
 * `alt=""` : le lien qui l'entoure porte déjà son propre libellé.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={LOGO.src}
      alt=""
      width={LOGO.width}
      height={LOGO.height}
      priority
      sizes="120px"
      className={cn("h-11 w-auto", className)}
      title={brand.name}
    />
  );
}

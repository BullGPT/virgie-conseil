export type NavLink = {
  label: string;
  /**
   * Ancre vers une section de l'accueil, au format `/#id`. Le préfixe `/`
   * permet au lien de fonctionner depuis n'importe quelle page : on revient
   * à l'accueil puis on descend jusqu'à la section.
   */
  href: string;
};

/**
 * Navigation principale. Chaque entrée fait défiler la page jusqu'à la
 * section correspondante de l'accueil ; les `id` sont posés sur les
 * balises <section> des composants de src/components/sections.
 */
export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "À propos", href: "/#societe" },
  { label: "Notre démarche", href: "/#savoir-faire" },
  { label: "FAQ", href: "/#besoins" },
];

/** CTA du header : pilule bleue pleine, toujours à droite. */
export const headerCta = {
  label: "[TODO] CTA header — 2 mots",
  href: "/contact",
};

/** Unique bouton du pied de page. */
export const legalCta = {
  label: "[TODO] Libellé du bouton — 2 à 4 mots",
  href: "/mentions-legales",
};

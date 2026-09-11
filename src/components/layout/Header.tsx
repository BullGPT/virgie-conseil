"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { headerCta, mainNav } from "@/content/navigation";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";

/** `/#besoins` → `besoins`. Rend "" pour un lien de page classique. */
const idFromHref = (href: string) => href.split("#")[1] ?? "";

/**
 * Navbar flottante : une pilule posée à 16px du haut de l'écran, qui reste
 * collée en défilant. Les liens font défiler la page jusqu'à la section
 * visée plutôt que de changer de page, et le lien de la section en cours
 * est mis en avant.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);

  /** Ombre portée dès que la page a défilé de plus de 8px. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Le volet se referme à chaque changement de route. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /** Escape referme le volet et rend le focus au déclencheur. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /**
   * Repère la section à l'écran pour souligner le bon lien. La fenêtre
   * d'observation est resserrée sur le tiers haut du viewport : la section
   * devient active quand son début atteint le niveau de la navbar.
   */
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId("");
      return;
    }

    const sections = mainNav
      .map((link) => document.getElementById(idFromHref(link.href)))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  /**
   * Défilement doux vers la section visée. Si elle n'existe pas sur la page
   * courante, on laisse le <Link> naviguer vers l'accueil normalement.
   */
  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = idFromHref(href);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
      setOpen(false);
    },
    [],
  );

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full pt-4">
      <div className="mx-auto w-full max-w-5xl px-4">
        <nav
          aria-label="Navigation principale"
          className={cn(
            "relative flex flex-wrap items-center justify-between gap-2 rounded-3xl",
            "border bg-surface/90 p-2 ps-5 backdrop-blur-md",
            "transition-shadow duration-200 lg:flex-nowrap lg:py-0 lg:pe-2",
            scrolled ? "border-transparent shadow-header" : "border-line",
          )}
        >
          <Link
            href="/#accueil"
            onClick={(event) => handleNavClick(event, "/#accueil")}
            /* Le logo est une image : le survol joue sur l'opacité, la
               couleur n'étant plus héritée comme avec l'ancien SVG. */
            className="shrink-0 transition-opacity hover:opacity-70"
            aria-label={`${brand.name} — retour à l'accueil`}
          >
            <Logo />
          </Link>

          {/* CTA et hamburger : à droite de la pilule à toutes les tailles. */}
          <div className="flex items-center gap-2 lg:order-3">
            <Button href={headerCta.href} variant="primary" size="sm">
              {headerCta.label}
            </Button>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-principal"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-signal hover:text-signal lg:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
              <span className="sr-only">
                {open ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
            </button>
          </div>

          {/* Liens. En ligne à partir de lg ; sinon repliés sous la pilule,
              `basis-full` les faisant passer à la ligne suivante.
              On bascule la classe `hidden`/`block` plutôt que l'attribut
              `hidden`, que l'utilitaire `lg:block` écraserait. */}
          <div
            id="menu-principal"
            className={cn(
              "basis-full lg:order-2 lg:block lg:grow lg:basis-auto",
              open ? "block" : "hidden",
            )}
          >
            <ul className="flex flex-col gap-1 py-2 lg:flex-row lg:items-center lg:justify-center lg:gap-1 lg:py-0">
              {mainNav.map((link) => {
                const active = activeId === idFromHref(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      aria-current={active ? "location" : undefined}
                      className={cn(
                        "flex items-center rounded-full px-4 py-2.5 text-small font-medium transition-colors lg:h-10 lg:py-0",
                        active
                          ? "bg-signal-050 text-signal-600"
                          : "text-ink-soft hover:bg-mist hover:text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

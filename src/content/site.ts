/* ==========================================================================
   VIGIE — CONTENU DU SITE
   --------------------------------------------------------------------------
   TOUT le texte du site vit ici. Aucun texte en dur dans un composant JSX.
   Chaque valeur marquée [TODO] est un placeholder à remplacer par le
   copywriter ; la longueur cible est indiquée dans le placeholder lui-même.
   Les longueurs sont des garde-fous de mise en page, pas des règles absolues.
   ========================================================================== */

export type Cta = {
  label: string;
  href: string;
};

export type ImageSlot = {
  /** Chemin sous /public. Remplacer le placeholder par le visuel définitif. */
  src: string;
  /** alt = "" si le visuel est purement décoratif. */
  alt: string;
  width: number;
  height: number;
};

/** Icônes de trait autorisées (lucide-react). Voir components/ui/Icon.tsx. */
export type IconName =
  | "shield-check"
  | "compass"
  | "handshake"
  | "line-chart"
  | "scale"
  | "users"
  | "landmark"
  | "file-text";

export type Post = {
  slug: string;
  title: string;
  /** Date ISO : YYYY-MM-DD. */
  date: string;
  excerpt: string;
  /** Corps de l'article, un élément par paragraphe. */
  body: string[];
  cover: ImageSlot;
};

/* -------------------------------------------------------------------------- */
/* Identité                                                                   */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: "Vigie",
  /** Baseline courte, utilisée dans les métadonnées. */
  tagline: "[TODO] Baseline — 5 à 8 mots",
  /** Description générique reprise en SEO par défaut. */
  description:
    "[TODO] Description du cabinet pour le SEO — 150 à 160 caractères",
  /** URL canonique de production, sans slash final. */
  url: "https://www.example.com",
  email: "[TODO] email@vigie.fr",
  phone: "[TODO] +33 X XX XX XX XX",
  address: {
    street: "[TODO] Numéro et rue",
    postalCode: "[TODO] Code postal",
    city: "[TODO] Ville",
    country: "France",
  },
  socials: [
    { label: "LinkedIn", href: "[TODO] URL LinkedIn", icon: "linkedin" as const },
    { label: "Instagram", href: "[TODO] URL Instagram", icon: "instagram" as const },
    { label: "YouTube", href: "[TODO] URL YouTube", icon: "youtube" as const },
  ],
};

/* -------------------------------------------------------------------------- */
/* 2. Hero                                                                     */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "[TODO] Eyebrow — 3 à 5 mots",
  title: "[TODO] Titre principal — 6 à 10 mots, 3 lignes max en desktop",
  body: "[TODO] Paragraphe d'intro — 40 à 60 mots. Il porte la promesse : à qui s'adresse le cabinet, sur quoi il intervient, et ce qui le distingue des autres.",
  primaryCta: { label: "[TODO] CTA 1 — 2-3 mots", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "[TODO] CTA 2 — 2-3 mots", href: "/#savoir-faire" } satisfies Cta,
  // Pas de visuel sur la headline : le hero est une colonne unique centrée.
};

/* -------------------------------------------------------------------------- */
/* 4. Ce que nous proposons                                                    */
/* -------------------------------------------------------------------------- */

export const offer = {
  title: "[TODO] Titre de section — 3 à 6 mots",
  intro: [
    "[TODO] Paragraphe d'intro 1 — 35 à 50 mots",
    "[TODO] Paragraphe d'intro 2 — 35 à 50 mots",
  ],
  /** 3 cartes exactement. */
  cards: [
    {
      title: "[TODO] Titre carte 1 — 2 à 4 mots",
      body: "[TODO] Paragraphe carte 1 — 25 à 40 mots",
      image: {
        src: "/placeholders/offre-1-120x120.svg",
        alt: "",
        width: 120,
        height: 120,
      } satisfies ImageSlot,
    },
    {
      title: "[TODO] Titre carte 2 — 2 à 4 mots",
      body: "[TODO] Paragraphe carte 2 — 25 à 40 mots",
      image: {
        src: "/placeholders/offre-2-120x120.svg",
        alt: "",
        width: 120,
        height: 120,
      } satisfies ImageSlot,
    },
    {
      title: "[TODO] Titre carte 3 — 2 à 4 mots",
      body: "[TODO] Paragraphe carte 3 — 25 à 40 mots",
      image: {
        src: "/placeholders/offre-3-120x120.svg",
        alt: "",
        width: 120,
        height: 120,
      } satisfies ImageSlot,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 5. Vos principaux besoins                                                   */
/* -------------------------------------------------------------------------- */

export const needs = {
  title: "[TODO] Titre de section — 3 à 6 mots",
  intro: "[TODO] Paragraphe d'intro — 30 à 45 mots",
  image: {
    src: "/placeholders/besoins-illustration-520x560.svg",
    alt: "",
    width: 520,
    height: 560,
  } satisfies ImageSlot,
  /** 7 items exactement. Le premier est ouvert par défaut. */
  items: [
    {
      question: "[TODO] Besoin 1 — 4 à 8 mots",
      answer: "[TODO] Réponse 1 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 2 — 4 à 8 mots",
      answer: "[TODO] Réponse 2 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 3 — 4 à 8 mots",
      answer: "[TODO] Réponse 3 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 4 — 4 à 8 mots",
      answer: "[TODO] Réponse 4 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 5 — 4 à 8 mots",
      answer: "[TODO] Réponse 5 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 6 — 4 à 8 mots",
      answer: "[TODO] Réponse 6 — 40 à 70 mots",
    },
    {
      question: "[TODO] Besoin 7 — 4 à 8 mots",
      answer: "[TODO] Réponse 7 — 40 à 70 mots",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 6. Bloc de contact                                                          */
/* -------------------------------------------------------------------------- */

/** Encart de contact de l'accueil. */
export const contactSection = {
  title: "[TODO] Titre du bloc contact — 4 à 7 mots",
  subtitle: "[TODO] Sous-titre — 20 à 35 mots",
};

/**
 * Libellés du formulaire de contact. Partagés par l'encart de l'accueil et
 * par la page /contact : un seul endroit à modifier.
 */
export const contactForm = {
  firstName: "[TODO] Prénom",
  lastName: "[TODO] Nom",
  email: "[TODO] Email",
  phone: "[TODO] Téléphone",
  message: "[TODO] Votre situation",
  /** Aide affichée sous le champ de message. */
  messageHint: "[TODO] Aide sous le champ situation — 10 à 20 mots",
  /** Suffixe des champs facultatifs, ex. « (facultatif) ». */
  optionalSuffix: "[TODO] (facultatif)",
  submitLabel: "[TODO] Libellé du bouton — 2 à 3 mots",
  sendingLabel: "[TODO] Libellé pendant l'envoi — 2 à 3 mots",
  consent: "[TODO] Mention de consentement RGPD — 15 à 25 mots",
  success: "[TODO] Message de succès — 10 à 20 mots",
  /** Messages d'erreur. */
  errorSend: "[TODO] Erreur d'envoi — 15 à 25 mots, avec un moyen de secours",
  errorRequired: "[TODO] Champ obligatoire — 2 à 4 mots",
  errorEmail: "[TODO] Adresse email invalide — 3 à 6 mots",
  errorTooLong: "[TODO] Texte trop long — 3 à 6 mots",
};

/* -------------------------------------------------------------------------- */
/* 7. Nos solutions                                                            */
/* -------------------------------------------------------------------------- */

export const solutions = {
  /** Titre non affiché : il nomme la bande pour les lecteurs d'écran. */
  title: "[TODO] Titre de section — 2 à 4 mots",
  /**
   * 4 items exactement, sur une seule ligne en desktop.
   * Les illustrations sont carrées (1254 × 1254) et affichées en entier :
   * le cadre respecte leur format, rien n'est rogné.
   * `alt` est vide car le titre juste en dessous nomme déjà le dessin.
   */
  cards: [
    {
      title: "Fiscalité",
      description: "[TODO] Description Fiscalité — 12 à 20 mots",
      href: "/contact",
      image: {
        src: "/solutions/fiscalite.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      title: "Patrimoine",
      description: "[TODO] Description Patrimoine — 12 à 20 mots",
      href: "/contact",
      image: {
        src: "/solutions/patrimoine.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      title: "Retraite",
      description: "[TODO] Description Retraite — 12 à 20 mots",
      href: "/contact",
      image: {
        src: "/solutions/retraite.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      title: "Trésorerie",
      description: "[TODO] Description Trésorerie — 12 à 20 mots",
      href: "/contact",
      image: {
        src: "/solutions/tresorerie.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 8. Notre savoir-faire                                                       */
/* -------------------------------------------------------------------------- */

export const expertise = {
  title: "[TODO] Titre de section — 2 à 4 mots",
  intro: "[TODO] Paragraphe d'intro — 30 à 45 mots",
  /** 4 cartes exactement, disposées en 2×2. */
  cards: [
    {
      icon: "shield-check" as IconName,
      title: "[TODO] Titre savoir-faire 1 — 2 à 5 mots",
      body: "[TODO] Paragraphe 1 — 30 à 45 mots",
    },
    {
      icon: "compass" as IconName,
      title: "[TODO] Titre savoir-faire 2 — 2 à 5 mots",
      body: "[TODO] Paragraphe 2 — 30 à 45 mots",
    },
    {
      icon: "handshake" as IconName,
      title: "[TODO] Titre savoir-faire 3 — 2 à 5 mots",
      body: "[TODO] Paragraphe 3 — 30 à 45 mots",
    },
    {
      icon: "line-chart" as IconName,
      title: "[TODO] Titre savoir-faire 4 — 2 à 5 mots",
      body: "[TODO] Paragraphe 4 — 30 à 45 mots",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 9. Parmi nos partenaires                                                    */
/* -------------------------------------------------------------------------- */

export const partners = {
  title: "[TODO] Titre de section — 3 à 5 mots",
  /** Libellés du bouton pause/lecture du marquee (accessibilité). */
  pauseLabel: "[TODO] Mettre le défilement en pause",
  playLabel: "[TODO] Reprendre le défilement",
  /** Rangée du haut : défile vers la gauche. */
  rowOne: [
    { name: "[TODO] Partenaire 1", logo: "/logos/partenaire-1.svg" },
    { name: "[TODO] Partenaire 2", logo: "/logos/partenaire-2.svg" },
    { name: "[TODO] Partenaire 3", logo: "/logos/partenaire-3.svg" },
    { name: "[TODO] Partenaire 4", logo: "/logos/partenaire-4.svg" },
    { name: "[TODO] Partenaire 5", logo: "/logos/partenaire-5.svg" },
    { name: "[TODO] Partenaire 6", logo: "/logos/partenaire-6.svg" },
  ],
  /** Rangée du bas : défile vers la droite. */
  rowTwo: [
    { name: "[TODO] Partenaire 7", logo: "/logos/partenaire-7.svg" },
    { name: "[TODO] Partenaire 8", logo: "/logos/partenaire-8.svg" },
    { name: "[TODO] Partenaire 9", logo: "/logos/partenaire-9.svg" },
    { name: "[TODO] Partenaire 10", logo: "/logos/partenaire-10.svg" },
    { name: "[TODO] Partenaire 11", logo: "/logos/partenaire-11.svg" },
    { name: "[TODO] Partenaire 12", logo: "/logos/partenaire-12.svg" },
  ],
};

/* -------------------------------------------------------------------------- */
/* 10. Bloc société / héritage                                                 */
/* -------------------------------------------------------------------------- */

export const parentCompany = {
  /** Le titre est rendu sur 2 lignes : une entrée de tableau par ligne. */
  titleLines: [
    "[TODO] Titre ligne 1 — 3 à 5 mots",
    "[TODO] Titre ligne 2 — 3 à 5 mots",
  ],
  body: "[TODO] Paragraphe — 50 à 80 mots. Seul endroit du site où le vert profond apparaît.",
  cta: { label: "[TODO] CTA — 2 à 4 mots", href: "/a-propos" } satisfies Cta,
};

/* -------------------------------------------------------------------------- */
/* 11. Actualités                                                              */
/* -------------------------------------------------------------------------- */

export const news = {
  title: "[TODO] Titre de section — 1 à 3 mots",
  intro: "[TODO] Paragraphe d'intro — 25 à 40 mots",
  readMoreLabel: "[TODO] Libellé du lien — 2 à 3 mots",
  allLabel: "[TODO] Libellé du bouton — 2 à 4 mots",
  backLabel: "[TODO] Retour à la liste — 3 à 5 mots",
};

/**
 * Articles. Typé pour accueillir un CMS plus tard : remplacer ce tableau
 * par un fetch renvoyant le même type `Post` et rien d'autre ne bouge.
 */
export const posts: Post[] = [
  {
    slug: "article-1",
    title: "[TODO] Titre article 1 — 6 à 12 mots",
    date: "2026-06-12",
    excerpt:
      "[TODO] Chapô article 1 — 25 à 40 mots, coupé à 3 lignes sur la carte",
    body: [
      "[TODO] Paragraphe 1 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 2 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 3 de l'article — 60 à 100 mots",
    ],
    cover: {
      src: "/placeholders/article-1-800x450.svg",
      alt: "[TODO] Description de l'image de couverture — 8 à 15 mots",
      width: 800,
      height: 450,
    },
  },
  {
    slug: "article-2",
    title: "[TODO] Titre article 2 — 6 à 12 mots",
    date: "2026-05-28",
    excerpt:
      "[TODO] Chapô article 2 — 25 à 40 mots, coupé à 3 lignes sur la carte",
    body: [
      "[TODO] Paragraphe 1 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 2 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 3 de l'article — 60 à 100 mots",
    ],
    cover: {
      src: "/placeholders/article-2-800x450.svg",
      alt: "[TODO] Description de l'image de couverture — 8 à 15 mots",
      width: 800,
      height: 450,
    },
  },
  {
    slug: "article-3",
    title: "[TODO] Titre article 3 — 6 à 12 mots",
    date: "2026-04-09",
    excerpt:
      "[TODO] Chapô article 3 — 25 à 40 mots, coupé à 3 lignes sur la carte",
    body: [
      "[TODO] Paragraphe 1 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 2 de l'article — 60 à 100 mots",
      "[TODO] Paragraphe 3 de l'article — 60 à 100 mots",
    ],
    cover: {
      src: "/placeholders/article-3-800x450.svg",
      alt: "[TODO] Description de l'image de couverture — 8 à 15 mots",
      width: 800,
      height: 450,
    },
  },
];


/* -------------------------------------------------------------------------- */
/* Pages secondaires                                                          */
/* -------------------------------------------------------------------------- */

export type PageSection = {
  title: string;
  body: string[];
};

export type QaItem = {
  question: string;
  answer: string;
};

export const pages = {
  about: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 3 à 6 mots",
    lead: "[TODO] Chapô — 40 à 60 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
    sections: [
      {
        title: "[TODO] Titre section 1 — 3 à 6 mots",
        body: ["[TODO] Paragraphe — 50 à 80 mots"],
      },
      {
        title: "[TODO] Titre section 2 — 3 à 6 mots",
        body: ["[TODO] Paragraphe — 50 à 80 mots"],
      },
      {
        title: "[TODO] Titre section 3 — 3 à 6 mots",
        body: ["[TODO] Paragraphe — 50 à 80 mots"],
      },
    ] as PageSection[],
  },

  approach: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 3 à 6 mots",
    lead: "[TODO] Chapô — 40 à 60 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
    /** Étapes de la démarche, numérotées automatiquement. */
    steps: [
      {
        title: "[TODO] Étape 1 — 2 à 5 mots",
        body: ["[TODO] Paragraphe — 40 à 60 mots"],
      },
      {
        title: "[TODO] Étape 2 — 2 à 5 mots",
        body: ["[TODO] Paragraphe — 40 à 60 mots"],
      },
      {
        title: "[TODO] Étape 3 — 2 à 5 mots",
        body: ["[TODO] Paragraphe — 40 à 60 mots"],
      },
      {
        title: "[TODO] Étape 4 — 2 à 5 mots",
        body: ["[TODO] Paragraphe — 40 à 60 mots"],
      },
    ] as PageSection[],
  },

  faq: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 2 à 5 mots",
    lead: "[TODO] Chapô — 40 à 60 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
    items: [
      { question: "[TODO] Question 1 — 6 à 12 mots", answer: "[TODO] Réponse 1 — 40 à 80 mots" },
      { question: "[TODO] Question 2 — 6 à 12 mots", answer: "[TODO] Réponse 2 — 40 à 80 mots" },
      { question: "[TODO] Question 3 — 6 à 12 mots", answer: "[TODO] Réponse 3 — 40 à 80 mots" },
      { question: "[TODO] Question 4 — 6 à 12 mots", answer: "[TODO] Réponse 4 — 40 à 80 mots" },
      { question: "[TODO] Question 5 — 6 à 12 mots", answer: "[TODO] Réponse 5 — 40 à 80 mots" },
      { question: "[TODO] Question 6 — 6 à 12 mots", answer: "[TODO] Réponse 6 — 40 à 80 mots" },
    ] as QaItem[],
  },

  news: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 1 à 3 mots",
    lead: "[TODO] Chapô — 40 à 60 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
  },

  contact: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 2 à 5 mots",
    lead: "[TODO] Chapô — 40 à 60 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
    /** Colonne d'informations pratiques, à gauche du formulaire. */
    infoTitle: "[TODO] Titre bloc infos — 3 à 5 mots",
    infoBody: "[TODO] Paragraphe — 30 à 50 mots",
    /** Titre posé au-dessus du formulaire. Les libellés des champs sont
        partagés avec l'accueil : voir `contactForm` plus haut. */
    formTitle: "[TODO] Titre du formulaire — 3 à 6 mots",
  },

  legal: {
    eyebrow: "[TODO] Eyebrow — 2 à 4 mots",
    title: "[TODO] Titre de page — 3 à 8 mots",
    lead: "[TODO] Chapô — 30 à 50 mots",
    metaTitle: "[TODO] Title SEO — 50 à 60 caractères",
    metaDescription: "[TODO] Description SEO — 150 à 160 caractères",
    sections: [
      {
        title: "[TODO] Éditeur du site",
        body: ["[TODO] Raison sociale, forme juridique, capital, RCS, SIRET, TVA, APE, siège"],
      },
      {
        title: "[TODO] Directeur de la publication",
        body: ["[TODO] Nom et qualité"],
      },
      {
        title: "[TODO] Hébergeur",
        body: ["[TODO] Nom, adresse et téléphone de l'hébergeur"],
      },
      {
        title: "[TODO] Statuts réglementés",
        body: ["[TODO] ORIAS, CIF, association agréée, courtage, carte T le cas échéant"],
      },
      {
        title: "[TODO] Médiation et réclamations",
        body: ["[TODO] Procédure de réclamation et coordonnées du médiateur"],
      },
      {
        title: "[TODO] Données personnelles",
        body: ["[TODO] Finalités, base légale, durée de conservation, droits RGPD, contact DPO"],
      },
      {
        title: "[TODO] Cookies",
        body: ["[TODO] Nature des cookies déposés et modalités de refus"],
      },
      {
        title: "[TODO] Propriété intellectuelle",
        body: ["[TODO] Paragraphe de propriété intellectuelle"],
      },
    ] as PageSection[],
  },
};

/* ==========================================================================
   VIGIE — CONTENU DU SITE
   --------------------------------------------------------------------------
   TOUT le texte du site vit ici. Aucun texte en dur dans un composant JSX.
   Les textes proviennent du document « Cabinet Vigie — Contenus du site »
   (Maxime Ernst, septembre 2026).

   VIGILANCE RÉGLEMENTAIRE — le vocabulaire est contraint. Ne jamais écrire :
   conseil en investissement, placement, rendement, performance, gestion de
   patrimoine, optimisation fiscale, défiscalisation, ni laisser entendre que
   le cabinet tient une comptabilité ou rédige des actes juridiques.
   Écrire à la place : pilotage financier, aide à la décision, patrimoine
   professionnel, structuration de détention, analyse comparative.
   La phrase « Nous ne vendons aucun produit et ne percevons aucune
   commission d'un tiers » est délibérément répétée : la conserver partout.

   Ce qui reste marqué [TODO] n'est pas couvert par le document et attend
   une valeur du client.
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
  /** Complète le nom dans le title : « Vigie — <tagline> ». */
  tagline: "Direction financière externalisée pour les libéraux de santé",
  description:
    "Vigie accompagne les professionnels libéraux de santé dans le pilotage financier de leur activité : trésorerie, charges, structuration. Audit initial gratuit.",
  /** URL canonique de production, sans slash final. */
  url: "https://www.cabinet-vigie.fr",
  email: "ernst.maxime@cabinet-vigie.fr",
  phone: "+33 6 08 64 79 20",
  address: {
    street: "12 bis rue de Bourbach le Bas",
    postalCode: "68290",
    city: "Lauw",
    country: "France",
  },
  /** [TODO] Comptes non fournis. Retirer les entrées inutilisées. */
  socials: [
    { label: "LinkedIn", href: "[TODO] URL LinkedIn", icon: "linkedin" as const },
  ],
};

/* -------------------------------------------------------------------------- */
/* 1. Accueil                                                                  */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Direction financière externalisée",
  /** Signature du cabinet. À ne pas modifier. */
  title: "Vous soignez. Nous veillons sur vos chiffres.",
  body: "Vigie accompagne les professionnels libéraux de santé dans le pilotage financier de leur activité. Trésorerie, charges, structure d'exercice, préparation de la retraite : le rôle d'un directeur financier, sans le coût d'un poste salarié. Nous ne vendons aucun produit et ne percevons aucune commission d'un tiers.",
  primaryCta: { label: "Demander un audit", href: "/#contact" } satisfies Cta,
  secondaryCta: { label: "Notre démarche", href: "/#savoir-faire" } satisfies Cta,
};

/* -------------------------------------------------------------------------- */
/* 2. Domaines d'intervention                                                  */
/* -------------------------------------------------------------------------- */

export const solutions = {
  /**
   * Titre non affiché : la bande n'a pas de titre visible, il sert d'étiquette
   * aux lecteurs d'écran. Le passer en visible si la mise en page évolue.
   */
  title: "Nos domaines d'intervention",
  /**
   * 4 items exactement, sur une seule ligne en desktop.
   * Les illustrations sont carrées (1254 × 1254) et affichées en entier.
   * `alt` est vide car le titre juste en dessous nomme déjà le dessin.
   */
  cards: [
    {
      title: "Fiscalité",
      description:
        "Analyse comparative des formes d'exercice, structure de rémunération, charges déductibles. Chiffrage précis, mise en œuvre avec votre expert-comptable.",
      image: {
        src: "/solutions/fiscalite.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      /* Cantonné au patrimoine professionnel : ne pas élargir aux placements
         ni à l'assurance-vie, qui relèvent d'activités réglementées. */
      title: "Patrimoine",
      description:
        "Immobilier professionnel, détention des murs, structuration de votre activité. Analyse chiffrée, actes confiés à votre notaire ou avocat.",
      image: {
        src: "/solutions/patrimoine.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      title: "Retraite",
      description:
        "Simulation de vos droits, estimation de l'écart avec vos besoins futurs, plan de comblage chiffré et progressif.",
      image: {
        src: "/solutions/retraite.png",
        alt: "",
        width: 1254,
        height: 1254,
      } satisfies ImageSlot,
    },
    {
      title: "Trésorerie",
      description:
        "Plan sur douze mois glissants, lissage des cotisations, provisionnement mensuel. Fin des mauvaises surprises de fin d'année.",
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
/* 3. Formats d'intervention                                                   */
/* -------------------------------------------------------------------------- */

export const offer = {
  title: "Trois façons de travailler ensemble",
  intro: [
    "Chaque cabinet a ses contraintes. Un praticien qui s'installe n'a pas les mêmes besoins qu'un cabinet établi depuis quinze ans. Nos interventions s'adaptent à votre situation, à votre disponibilité et au niveau d'accompagnement que vous souhaitez.",
    "Dans tous les cas, la relation commence par un audit initial gratuit. Vous savez ce que nous avons identifié et ce que cela représente avant de vous engager. Si nous ne trouvons rien d'utile, nous vous le disons.",
  ],
  cards: [
    {
      title: "Audit initial",
      body: "Un état des lieux complet de votre situation financière. Analyse de vos charges, de votre structure et de vos échéances. Restitution chiffrée sous trois semaines. Gratuit et sans engagement.",
      image: {
        src: "/offre/audit.png",
        alt: "",
        width: 383,
        height: 383,
      } satisfies ImageSlot,
    },
    {
      title: "Accompagnement annuel",
      body: "Un suivi continu sur l'année : tableaux de bord, plan de trésorerie, points réguliers et arbitrages. Nous coordonnons vos interlocuteurs et préparons vos décisions importantes.",
      image: {
        src: "/offre/accompagnement.png",
        alt: "",
        width: 383,
        height: 383,
      } satisfies ImageSlot,
    },
    {
      title: "Mission ponctuelle",
      body: "Une question précise, une décision à prendre : installation, achat de murs, association, recrutement. Nous intervenons sur un périmètre défini, avec un livrable et un délai.",
      image: {
        src: "/offre/mission.png",
        alt: "",
        width: 383,
        height: 383,
      } satisfies ImageSlot,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 4. Questions fréquentes                                                     */
/* -------------------------------------------------------------------------- */

export const needs = {
  title: "Les questions que vous vous posez",
  intro:
    "Nous intervenons dans un environnement où beaucoup de praticiens ont déjà été démarchés, parfois maladroitement. Voici, sans détour, les réponses aux questions qui reviennent le plus souvent lors d'un premier échange.",
  /* Illustration décorative : elle porte le mot « FAQ », que le titre de
     section dit déjà. `alt` vide pour ne pas le faire lire deux fois. */
  image: {
    src: "/faq.png",
    alt: "",
    width: 1536,
    height: 1024,
  } satisfies ImageSlot,
  /**
   * 7 questions, classées par ordre d'importance. Le premier item est ouvert
   * par défaut. Pour alléger, ne garder que les quatre premières — mais
   * conserver la septième, qui délimite par écrit le périmètre du cabinet.
   */
  items: [
    {
      question: "J'ai déjà un expert-comptable",
      answer:
        "C'est indispensable, et nous ne le remplaçons pas. Votre expert-comptable tient vos comptes, établit votre bilan et vos déclarations : c'est son métier et il en a le monopole. Le nôtre commence après. Lire ces chiffres, les projeter, préparer vos décisions et coordonner vos interlocuteurs. Nous travaillons avec lui, jamais à sa place.",
    },
    {
      question: "Combien coûte un accompagnement ?",
      answer:
        "Nos honoraires dépendent de la taille de votre cabinet et du niveau d'accompagnement. Ils sont fixés à l'avance, par écrit, avant toute intervention. À titre indicatif, un accompagnement annuel se situe entre mille et huit mille euros selon les situations. Ces honoraires sont déductibles de votre résultat professionnel.",
    },
    {
      question: "Comment êtes-vous rémunéré ?",
      answer:
        "Uniquement par nos clients. Nous ne vendons aucun produit financier ou d'assurance, nous ne percevons aucune commission, aucune rétrocession, aucun apport d'affaires de la part d'un tiers. Personne d'autre que vous ne nous paie. C'est ce qui garantit que nos recommandations ne servent que votre intérêt.",
    },
    {
      question: "Comment se déroule une intervention ?",
      answer:
        "En deux temps. D'abord un diagnostic : nous réunissons vos éléments, nous analysons, nous vous restituons un document chiffré et hiérarchisé. Ensuite seulement la mise en œuvre, avec les professionnels habilités selon les sujets — votre expert-comptable, un avocat, un notaire. Vous décidez à chaque étape.",
    },
    {
      question: "Je n'ai pas le temps",
      answer:
        "C'est précisément la raison d'être du cabinet. L'audit initial demande une heure d'échange et la transmission de documents que vous possédez déjà. Ensuite, le travail est de notre côté. Nos clients consacrent en moyenne trois à quatre heures par an à leur pilotage financier. Nous nous occupons du reste.",
    },
    {
      question: "Je viens de m'installer",
      answer:
        "C'est le meilleur moment. Les choix faits en début d'exercice — forme juridique, structure de rémunération, protection sociale — vous suivent pendant des années. Les corriger plus tard coûte du temps et de l'argent. Nous accompagnons les praticiens dès l'installation, avec un format allégé et adapté.",
    },
    {
      /* Question la plus importante du site : elle délimite le périmètre du
         cabinet par écrit. Ne pas la supprimer, même en allégeant la FAQ. */
      question: "Que ne faites-vous pas ?",
      answer:
        "Nous ne tenons pas votre comptabilité, nous ne rédigeons pas d'actes juridiques et nous ne commercialisons aucun placement ni contrat d'assurance. Ces activités relèvent de professions réglementées et de nos partenaires. Notre métier est le pilotage financier de votre activité et la coordination de vos interlocuteurs.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 5. Contact                                                                  */
/* -------------------------------------------------------------------------- */

export const contactSection = {
  title: "Contactez-nous",
  /* Seule la première proposition s'écarte du document : elle renvoyait au
     formulaire, remplacé par un contact direct. La suite est conservée. */
  subtitle:
    "Écrivez-nous ou appelez-nous. Nous revenons vers vous sous quarante-huit heures pour convenir d'un premier échange, sans engagement de votre part.",
  emailLabel: "Par email",
  phoneLabel: "Par téléphone",
};

/**
 * Libellés du formulaire de contact. Partagés par l'encart de l'accueil et
 * par la page /contact : un seul endroit à modifier.
 */
export const contactForm = {
  firstName: "Prénom",
  lastName: "Nom",
  email: "Email professionnel",
  phone: "Téléphone",
  message: "Votre situation",
  messageHint:
    "Votre profession, votre mode d'exercice, et ce sur quoi vous souhaitez être accompagné.",
  optionalSuffix: "(facultatif)",
  submitLabel: "Envoyer ma demande",
  consent:
    "Vos informations sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni cédées ni exploitées à des fins commerciales.",
  /* Messages d'état de l'interface : non couverts par le document, rédigés
     ici pour rester cohérents avec la promesse de réponse sous 48 heures. */
  sendingLabel: "Envoi en cours",
  success:
    "Votre demande est bien envoyée. Nous revenons vers vous sous quarante-huit heures.",
  errorSend:
    "L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement à ernst.maxime@cabinet-vigie.fr.",
  errorRequired: "Champ obligatoire",
  errorEmail: "Adresse email invalide",
  errorTooLong: "Texte trop long",
};

/* -------------------------------------------------------------------------- */
/* 6. Notre démarche                                                           */
/* -------------------------------------------------------------------------- */

export const expertise = {
  title: "Notre démarche",
  intro:
    "Quatre principes guident chacune de nos interventions. Ils expliquent pourquoi des praticiens déjà entourés d'un expert-comptable, d'un banquier et d'un assureur trouvent une utilité à travailler avec un cabinet comme le nôtre.",
  cards: [
    {
      icon: "shield-check" as IconName,
      title: "Une seule spécialité",
      body: "Nous n'accompagnons que des professionnels libéraux de santé. Cotisations, conventionnement, formes d'exercice, régimes de retraite : ce sont des mécaniques particulières, que l'on maîtrise en s'y consacrant entièrement plutôt qu'en les traitant occasionnellement.",
    },
    {
      icon: "scale" as IconName,
      title: "Indépendance complète",
      body: "Aucun produit vendu, aucune commission perçue d'un tiers, aucun partenariat rémunéré. Nos honoraires viennent exclusivement de nos clients. Nos recommandations n'ont donc pas d'autre objectif que l'amélioration de votre situation.",
    },
    {
      icon: "compass" as IconName,
      title: "Une vision d'ensemble",
      body: "Votre comptable connaît vos comptes, votre banquier vos financements, votre assureur vos contrats. Personne ne rapproche ces éléments. C'est exactement ce que nous faisons : relier, arbitrer, et vous présenter une lecture cohérente de votre situation.",
    },
    {
      icon: "line-chart" as IconName,
      title: "Des chiffres, pas des intuitions",
      body: "Grille d'analyse des charges, plan de trésorerie glissant, comparateur de formes d'exercice : chaque recommandation repose sur un chiffrage que nous vous remettons. Vous pouvez le vérifier, le contester et le conserver.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 7. Écosystème                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Remplace le carrousel de logos partenaires : aucun partenaire n'est signé
 * à ce jour, des cases vides ou des logos empruntés desserviraient le
 * cabinet. À reconvertir en carrousel le jour où de vrais logos existent.
 */
export const partners = {
  title: "Un écosystème de professionnels",
  body: "Nous n'intervenons jamais seuls. Selon les sujets, nous travaillons avec votre expert-comptable, un avocat fiscaliste, un notaire ou votre banque. Chacun exerce son métier dans son périmètre ; notre rôle est de faire circuler l'information entre eux et de préparer vos décisions.",
};

/* -------------------------------------------------------------------------- */
/* 8. Bloc de clôture                                                          */
/* -------------------------------------------------------------------------- */

export const parentCompany = {
  /** Le titre est rendu sur 2 lignes : une entrée de tableau par ligne. */
  titleLines: ["Vous soignez vos patients.", "Nous veillons sur vos chiffres."],
  body: "J'ai grandi avec un père professionnel libéral de santé. J'ai vu les questions qu'il se posait le soir, une fois la tournée terminée, et les décisions prises faute de temps ou d'interlocuteur. Aujourd'hui encore en poste dans un établissement de santé, je côtoie quotidiennement des soignants. Vigie est né d'une conviction simple : votre activité mérite le même pilotage financier qu'une entreprise, sans que vous ayez à devenir gestionnaire.",
  cta: { label: "Découvrir le cabinet", href: "/a-propos" } satisfies Cta,
};

/* -------------------------------------------------------------------------- */
/* Actualités                                                                 */
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
  /** Visuel facultatif, posé à côté du texte en deux colonnes. */
  image?: ImageSlot;
};

export type QaItem = {
  question: string;
  answer: string;
};

/**
 * Blocs des mentions légales. `lines` sert aux blocs de coordonnées, dont
 * les lignes doivent rester serrées ; `list` aux énumérations à puces.
 */
export type LegalBlock =
  | { kind: "text"; value: string }
  | { kind: "lines"; items: string[] }
  | { kind: "list"; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export const pages = {
  about: {
    eyebrow: "Le cabinet",
    title: "Un cabinet, une conviction",
    lead: "Vigie est né d'un constat simple : les professionnels libéraux de santé dirigent une entreprise sans en avoir les moyens. Pas de directeur financier, pas de tableau de bord, pas d'interlocuteur qui regarde l'ensemble. Le cabinet existe pour occuper cette place, aux côtés de leurs conseils habituels.",
    metaTitle: "À propos — Cabinet Vigie, conseil aux libéraux de santé",
    metaDescription:
      "Cabinet Vigie accompagne les professionnels libéraux de santé dans le pilotage financier de leur activité. Basé en Alsace, intervention dans toute la France.",
    sections: [
      {
        title: "Ancrés en Alsace, disponibles partout",
        body: [
          "Le cabinet est installé à Lauw, dans le Haut-Rhin. Cet ancrage n'est pas anodin : c'est en Alsace que le projet est né, au contact de cabinets libéraux et de praticiens de terrain. Nos échanges se tiennent aussi bien en présentiel qu'à distance, ce qui nous permet d'accompagner des professionnels partout en France. La proximité tient à la disponibilité, pas au kilométrage.",
        ],
        /* Le fichier est stocké en paysage avec une rotation EXIF : les
           dimensions déclarées sont celles après rotation. */
        image: {
          src: "/a-propos/bureaux.jpg",
          alt: "Les bureaux du cabinet Vigie à Lauw, dans le Haut-Rhin.",
          width: 3024,
          height: 4032,
        } satisfies ImageSlot,
      },
      {
        title: "Maxime Ernst, fondateur",
        body: [
          "Après une classe préparatoire aux grandes écoles, j'ai été formé au Master Finance de Grenoble École de Management. J'ai ensuite travaillé en conseil financier auprès de PME et d'ETI à Paris, sur des sujets de financement et de structure de coûts, puis en optimisation des achats en Suisse. J'exerce aujourd'hui encore au sein d'un établissement de santé suisse, au contact quotidien des soignants.",
        ],
        image: {
          src: "/a-propos/maxime-ernst.png",
          alt: "Portrait de Maxime Ernst, fondateur du cabinet Vigie.",
          width: 1080,
          height: 1350,
        } satisfies ImageSlot,
      },
      {
        title: "Pourquoi ce cabinet existe",
        body: [
          "Mon père a exercé vingt ans comme professionnel libéral de santé. J'ai grandi avec les questions qu'il se posait le soir, une fois la tournée terminée, et les décisions prises faute de temps ou d'interlocuteur. Arbitre de football depuis huit ans, j'ai appris à observer, à rester impartial et à décider sous pression. C'est exactement ce qu'on attend d'une vigie : regarder plus loin, et alerter avant.",
        ],
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

  /**
   * Mentions légales, fournies telles quelles par le client.
   * Texte juridique : ne rien reformuler sans son accord.
   * La numérotation des articles est celle de sa rédaction — elle saute
   * volontairement le 5, et l'article 7 renvoie à « l'article 1 ».
   */
  legal: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    lead: "Informations relatives à l'éditeur du site, à son hébergement, au périmètre de son activité et au traitement de vos données personnelles.",
    metaTitle: "Mentions légales — Vigie",
    metaDescription:
      "Mentions légales du cabinet Vigie : éditeur, hébergeur, périmètre d'activité, propriété intellectuelle et traitement des données personnelles.",
    updatedAt: "12 septembre 2026",
    sections: [
      {
        title: "1. Éditeur du site",
        blocks: [
          { kind: "text", value: "Le site cabinet-vigie.fr est édité par :" },
          {
            kind: "lines",
            items: [
              "Maxime ERNST, entrepreneur individuel (EI)",
              "Exerçant sous le nom commercial Cabinet Vigie",
              "Siège : 12 bis rue de Bourbach le Bas, 68290 Lauw, France",
              "SIREN : 109512293",
              "Code APE : 7022Z",
              "Numéro de TVA intracommunautaire : non applicable",
              "TVA non applicable, article 293 B du Code général des impôts.",
              "Adresse électronique : ernst.maxime@cabinet-vigie.fr",
            ],
          },
          {
            kind: "text",
            value:
              "Activité : conseil pour les affaires et autres conseils de gestion — activité libérale non réglementée.",
          },
        ],
      },
      {
        title: "2. Directeur de la publication",
        blocks: [
          {
            kind: "text",
            value: "Maxime ERNST, en sa qualité d'entrepreneur individuel.",
          },
        ],
      },
      {
        title: "3. Hébergement",
        blocks: [
          { kind: "text", value: "Le site est hébergé par :" },
          {
            kind: "lines",
            items: [
              "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com",
              "Nom de domaine enregistré auprès de : Google Workspace",
            ],
          },
        ],
      },
      {
        title: "4. Nature de l'activité et périmètre d'intervention",
        blocks: [
          {
            kind: "text",
            value:
              "Cabinet Vigie exerce une activité de conseil en gestion et en organisation. Ses prestations consistent en l'analyse, le diagnostic et le pilotage financier de l'activité de ses clients, ainsi qu'en la coordination des professionnels qui les accompagnent.",
          },
          {
            kind: "text",
            value:
              "Cabinet Vigie n'exerce aucune activité réglementée. En particulier, le cabinet :",
          },
          {
            kind: "list",
            items: [
              "ne fournit aucun service de conseil en investissement financier et n'est pas enregistré en qualité de conseiller en investissements financiers ;",
              "n'exerce aucune activité d'intermédiation en assurance ou en opérations de banque et services de paiement, et n'est pas immatriculé à l'ORIAS ;",
              "ne réalise aucun acte relevant du monopole de l'expert-comptable, notamment la tenue, la centralisation, l'ouverture et l'arrêté des comptes ;",
              "ne délivre aucune consultation juridique à titre principal et ne rédige aucun acte sous seing privé pour autrui.",
            ],
          },
          {
            kind: "text",
            value:
              "Les prestations relevant de ces domaines sont assurées par les professionnels habilités avec lesquels le cabinet travaille en partenariat, sous leur seule responsabilité.",
          },
        ],
      },
      {
        title: "6. Propriété intellectuelle",
        blocks: [
          {
            kind: "text",
            value:
              "L'ensemble des éléments composant le site — structure, textes, marques, logos, illustrations, documents téléchargeables — est la propriété exclusive de Maxime ERNST ou fait l'objet d'une autorisation d'utilisation.",
          },
          {
            kind: "text",
            value:
              "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, par quelque procédé que ce soit et sur quelque support que ce soit, sans autorisation écrite préalable, est interdite et constituerait une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.",
          },
        ],
      },
      {
        title: "7. Données personnelles",
        blocks: [
          {
            kind: "text",
            value:
              "Responsable du traitement : Maxime ERNST, aux coordonnées indiquées à l'article 1.",
          },
          {
            kind: "text",
            value:
              "Données collectées : les informations transmises volontairement via le formulaire de contact, à savoir nom, prénom, adresse électronique, numéro de téléphone le cas échéant, et les éléments relatifs à la situation décrite par l'utilisateur.",
          },
          {
            kind: "text",
            value:
              "Finalité : répondre aux demandes de contact et, le cas échéant, établir une relation contractuelle.",
          },
          {
            kind: "text",
            value:
              "Base légale : l'intérêt légitime du responsable de traitement à répondre aux sollicitations qui lui sont adressées, et l'exécution de mesures précontractuelles prises à la demande de l'utilisateur.",
          },
          {
            kind: "text",
            value:
              "Destinataires : les données sont destinées au seul responsable de traitement. Elles ne font l'objet d'aucune cession, location ou transmission à des tiers à des fins commerciales.",
          },
          {
            kind: "text",
            value:
              "Durée de conservation : 36 mois à compter du dernier contact pour les demandes n'ayant pas abouti à une relation contractuelle.",
          },
          {
            /* Le texte fourni portait « par courrier électronique à X » ;
               l'adresse de l'article 1 a été reprise. À confirmer. */
            kind: "text",
            value:
              "Droits : conformément au Règlement (UE) 2016/679 et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Ces droits s'exercent par courrier électronique à ernst.maxime@cabinet-vigie.fr ou par courrier postal à l'adresse du siège.",
          },
          {
            kind: "text",
            value:
              "Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr",
          },
        ],
      },
      {
        title: "8. Cookies",
        blocks: [
          {
            kind: "text",
            value:
              "Le site ne dépose aucun cookie de mesure d'audience ni de suivi publicitaire. Seuls peuvent être utilisés des cookies strictement nécessaires au fonctionnement du site, qui ne requièrent pas de consentement préalable.",
          },
        ],
      },
      {
        title: "9. Responsabilité",
        blocks: [
          {
            kind: "text",
            value:
              "Les informations publiées sur le site sont fournies à titre général et informatif. Elles ne constituent ni un conseil personnalisé, ni un engagement contractuel, et ne sauraient se substituer à une analyse individuelle de votre situation.",
          },
          {
            kind: "text",
            value:
              "Cabinet Vigie s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, sans pouvoir garantir leur exhaustivité. La responsabilité de l'éditeur ne saurait être engagée à raison de l'utilisation faite de ces informations.",
          },
          {
            kind: "text",
            value:
              "Le site peut comporter des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur leur contenu et décline toute responsabilité à cet égard.",
          },
        ],
      },
      {
        title: "10. Droit applicable",
        blocks: [
          {
            kind: "text",
            value:
              "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
          },
        ],
      },
    ] as LegalSection[],
  },
};

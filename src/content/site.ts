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
  /** Le domaine est imposé par le document ; la partie locale est à confirmer. */
  email: "contact@cabinet-vigie.fr",
  phone: "[TODO] +33 X XX XX XX XX",
  address: {
    street: "[TODO] Numéro et rue",
    postalCode: "[TODO] Code postal",
    city: "[TODO] Ville",
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
        src: "/placeholders/offre-1-120x120.svg",
        alt: "",
        width: 120,
        height: 120,
      } satisfies ImageSlot,
    },
    {
      title: "Accompagnement annuel",
      body: "Un suivi continu sur l'année : tableaux de bord, plan de trésorerie, points réguliers et arbitrages. Nous coordonnons vos interlocuteurs et préparons vos décisions importantes.",
      image: {
        src: "/placeholders/offre-2-120x120.svg",
        alt: "",
        width: 120,
        height: 120,
      } satisfies ImageSlot,
    },
    {
      title: "Mission ponctuelle",
      body: "Une question précise, une décision à prendre : installation, achat de murs, association, recrutement. Nous intervenons sur un périmètre défini, avec un livrable et un délai.",
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
/* 4. Questions fréquentes                                                     */
/* -------------------------------------------------------------------------- */

export const needs = {
  title: "Les questions que vous vous posez",
  intro:
    "Nous intervenons dans un environnement où beaucoup de praticiens ont déjà été démarchés, parfois maladroitement. Voici, sans détour, les réponses aux questions qui reviennent le plus souvent lors d'un premier échange.",
  image: {
    src: "/placeholders/besoins-illustration-520x560.svg",
    alt: "",
    width: 520,
    height: 560,
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
  title: "Commençons par un premier échange",
  subtitle:
    "Décrivez votre situation en quelques lignes. Nous revenons vers vous sous quarante-huit heures pour convenir d'un premier échange, sans engagement de votre part.",
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
    "L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement à contact@cabinet-vigie.fr.",
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

  /**
   * Mentions légales — obligatoires. Le document fixe les éléments à faire
   * figurer ; les valeurs que seul le client connaît restent en [TODO].
   * Faire relire par un professionnel avant publication.
   */
  legal: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    lead: "Informations relatives à l'éditeur du site, à son hébergement et au traitement de vos données personnelles.",
    metaTitle: "Mentions légales — Vigie",
    metaDescription:
      "Mentions légales du cabinet Vigie : éditeur, hébergeur, périmètre d'activité et traitement des données personnelles.",
    sections: [
      {
        title: "Éditeur du site",
        body: [
          "Maxime Ernst, entrepreneur individuel, exerçant sous l'enseigne Vigie.",
          "[TODO] Adresse du siège — numéro, rue, code postal, ville",
          "[TODO] SIRET — à renseigner dès réception",
          "Adresse électronique : contact@cabinet-vigie.fr",
          "TVA non applicable, article 293 B du CGI.",
        ],
      },
      {
        title: "Directeur de la publication",
        body: ["Maxime Ernst."],
      },
      {
        title: "Hébergement",
        body: ["[TODO] Nom, adresse et téléphone de l'hébergeur du site"],
      },
      {
        title: "Périmètre d'activité",
        body: [
          "Le cabinet Vigie n'exerce aucune activité réglementée de conseil en investissement financier ni d'intermédiation en assurance. Il ne tient aucune comptabilité et ne rédige aucun acte juridique, ces activités relevant de professions réglementées.",
          "Vigie ne vend aucun produit et ne perçoit aucune commission d'un tiers. Ses honoraires sont réglés exclusivement par ses clients.",
        ],
      },
      {
        title: "Données personnelles",
        body: [
          "Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni cédées ni exploitées à des fins commerciales.",
          "[TODO] Durée de conservation, base légale et modalités d'exercice des droits RGPD (accès, rectification, effacement, opposition)",
        ],
      },
      {
        title: "Cookies",
        body: ["[TODO] Nature des cookies déposés et modalités de refus"],
      },
      {
        title: "Propriété intellectuelle",
        body: ["[TODO] Paragraphe de propriété intellectuelle"],
      },
    ] as PageSection[],
  },
};

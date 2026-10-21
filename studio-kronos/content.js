/**
 * STUDIO KRONOS - Source de vérité des contenus
 * Tout le contenu du site vitrine immersif est centralisé ici.
 * Aucune chaîne de texte n'est codée en dur dans index.html.
 */

window.SITE_CONTENT = {
  meta: {
    title: "STUDIO KRONOS — Expériences Web Immersives & Direction Artistique",
    description: "Nous créons des sites vitrines animés ultra-performants qui captivent vos visiteurs en 3 secondes et maximisent votre taux de conversion.",
    theme: "dark",
    accentColor: "#e3f794",
    accentInk: "#0c0e14",
    brandName: "KRONOS",
    studioFullName: "STUDIO KRONOS",
    badgeLabel: "STUDIO DIGITAL & DIRECTION ARTISTIQUE",
    contactEmail: "contact@studio-kronos.fr", // À REMPLACER par votre e-mail réel
    location: "Paris / Bordeaux — France"
  },

  navigation: {
    brandName: "KRONOS",
    links: [
      { label: "Vision", href: "#manifesto" },
      { label: "Réalisations", href: "#proof" },
      { label: "Méthode", href: "#process" },
      { label: "Garanties", href: "#objections" }
    ],
    ctaButton: {
      label: "Réserver un audit offert",
      href: "#footer"
    }
  },

  loader: {
    brandName: "KRONOS",
    subtext: "EXPERIENCE DESIGN STUDIO",
    loadingText: "CHARGEMENT DU MOTEUR IMMERSIF"
  },

  hero: {
    badge: "SITE VITRINE IMMERSIF HAUTE INTENSITÉ",
    titleLine1: "VOTRE SITE DOIT MARQUER LES ESPRITS",
    titleLine2: "PAS SEULEMENT OCCUPER L'ESPACE.",
    subheadline: "Nous concevons des expériences web animées sur-mesure qui captivent vos prospects dès la 3ème seconde et transforment l'attention en chiffre d'affaires qualifié.",
    primaryCta: {
      label: "Lancer mon projet immersif →",
      href: "#process"
    },
    secondaryCta: {
      label: "Explorer les réalisations",
      href: "#proof"
    },
    scrollIndicator: "DÉFILER POUR EXPLORER",
    floatingVisuals: [
      { id: "f1", src: "images/hero-1.svg", alt: "Boost de conversion +142%", x: "8%", y: "18%", speed: 0.6, depth: 1 },
      { id: "f2", src: "images/hero-2.svg", alt: "Sphère 3D Chrome", x: "82%", y: "14%", speed: -0.8, depth: 2 },
      { id: "f3", src: "images/hero-3.svg", alt: "Awwwards Site of the Day", x: "12%", y: "72%", speed: 0.4, depth: 1 },
      { id: "f4", src: "images/hero-4.svg", alt: "60 FPS Scrubbed Motion", x: "78%", y: "76%", speed: -0.5, depth: 1.5 },
      { id: "f5", src: "images/hero-5.svg", alt: "Interface Holographique UI", x: "4%", y: "45%", speed: 0.9, depth: 2 },
      { id: "f6", src: "images/hero-6.svg", alt: "0.2s First Contentful Paint", x: "86%", y: "46%", speed: -0.7, depth: 1.5 },
      { id: "f7", src: "images/hero-7.svg", alt: "Direction Artistique Pure", x: "24%", y: "10%", speed: 0.5, depth: 1 },
      { id: "f8", src: "images/hero-8.svg", alt: "Anneau d'énergie Lime", x: "70%", y: "10%", speed: -0.6, depth: 2 },
      { id: "f9", src: "images/hero-9.svg", alt: "Taux de rétention x3.4", x: "22%", y: "84%", speed: 0.7, depth: 1.2 },
      { id: "f10", src: "images/hero-10.svg", alt: "Design Sonore & Micro-interactions", x: "66%", y: "85%", speed: -0.4, depth: 1.8 }
    ]
  },

  cloudTraverse: {
    tagline: "IMMERSION SENSORIELLE",
    headline: "AU-DELÀ DU BRUIT NUMÉRIQUE",
    subtext: "Une traversée visuelle conçue au millième de seconde pour isoler votre marque du reste du marché.",
    bgImage: "images/cloud-bg.svg"
  },

  zoomTitle: {
    prefixText: "NOUS TRANSFORMONS",
    suffixText: "EN MONUMENT DIGITAL.",
    image: {
      src: "images/zoom-showcase.svg",
      alt: "Showcase d'exception Vespera Architecture",
      caption: "Étude de cas phare — Vespera Architecture (Paris) : +210% de demandes qualifiées"
    }
  },

  manifesto: {
    sectionTag: "NOTRE MANIFESTE",
    headline: "POURQUOI LES SITES ORDINAIRES ÉCHOUENT",
    textSegments: [
      { text: "La plupart des sites web se ressemblent tous : des modèles génériques sans âme, oubliés 5 secondes après la fermeture de l'onglet." },
      { text: "Nous croyons que votre marque mérite une présence qui " },
      { text: "[[captive dès le premier regard]]", highlight: true },
      { text: ". Chaque milliseconde de défilement doit éveiller la curiosité, valoriser votre expertise et " },
      { text: "[[déclencher l'action immédiate]]", highlight: true },
      { text: " de vos prospects." }
    ],
    subtext: "Nous ne créons pas de simples pages web. Nous sculptons des déclencheurs émotionnels qui valorisent vos offres et imposent votre autorité."
  },

  proof: {
    sectionTag: "PREUVES & RÉSULTATS",
    headline: "L'IMPACT CONCRET EN CHIFFRES",
    subheadline: "Chaque projet est conçu avec un seul impératif : transformer l'admiration esthétique en résultats financiers mesurables.",
    bentoGrid: [
      {
        id: "bento-1",
        type: "big",
        category: "HAUTE HORLOGERIE & LUXE",
        title: "Plateforme Expérientielle Vespera",
        stat: "+210%",
        statLabel: "de prospects qualifiés en 60 jours",
        description: "Direction artistique cinématographique et modélisation interactive des pièces d'exception.",
        image: "images/bento-1.svg"
      },
      {
        id: "bento-2",
        type: "tall",
        category: "VÉLOCITÉ EXTRÊME",
        title: "Architecture Zéro Lenteur",
        stat: "99/100",
        statLabel: "Score Google Lighthouse",
        description: "Temps de chargement sous 0.4s. 60 FPS garantis même sur mobile entrée de gamme.",
        image: "images/bento-2.svg"
      },
      {
        id: "bento-3",
        type: "tall",
        category: "ENGAGEMENT PROLONGÉ",
        title: "Rétention & Attention",
        stat: "4 min 30",
        statLabel: "Temps moyen par session",
        description: "Taux de rebond divisé par deux grâce au storytelling scrubé fluide.",
        image: "images/bento-3.svg"
      },
      {
        id: "bento-4",
        type: "big",
        category: "TECH & SAAS B2B",
        title: "Refonte Écosystème NovaPay",
        stat: "3.8M€",
        statLabel: "levés suite au lancement de la plateforme",
        description: "Une démonstration produit interactive qui a convaincu investisseurs et clients corporate.",
        image: "images/bento-4.svg"
      }
    ]
  },

  motto: {
    quote: "L'IMPACT N'EST PAS UN HASARD. C'EST UNE SCIENCE DU DÉTAIL.",
    author: "KRONOS PHILOSOPHY — 2026",
    subtext: "Quand l'art rencontre l'ingénierie de conversion, votre marque devient inoubliable."
  },

  process: {
    sectionTag: "MÉTHODOLOGIE EN 3 ÉTAPES",
    headline: "UN PROCESSUS FLUIDE DU BRIEF À LA MISE EN LIGNE",
    subheadline: "Pas de tunnel interminable : nous avançons vite, avec précision chirurgicale.",
    steps: [
      {
        number: "01",
        title: "L'IMMERSION STRATÉGIQUE",
        frictionSolved: "Pas de brief interminable ni de réunion inutile",
        body: "Nous analysons votre offre, vos clients cibles et vos concurrents pour identifier le levier psychologique exact qui déclenchera la décision d'achat.",
        badge: "JOUR 1 À 5",
        image: "images/process-1.svg"
      },
      {
        number: "02",
        title: "LA DIRECTION ARTISTIQUE & LE CODE SUR-MESURE",
        frictionSolved: "Pas de template WordPress lourd ou préfabriqué",
        body: "Nous créons une identité visuelle marquante et codons votre site de zéro sans framework superflu : animations ultra-fluides 60 FPS et vitesse absolue.",
        badge: "JOUR 6 À 15",
        image: "images/process-2.svg"
      },
      {
        number: "03",
        title: "LE DÉPLOIEMENT & L'OPTIMISATION DU CONVERTISSEUR",
        frictionSolved: "Pas de mauvaise surprise ni de retard technique",
        body: "Mise en ligne clé en main, optimisation SEO technique, tests de réactivité sur tous les écrans et remise des clés d'un site prêt à générer des résultats.",
        badge: "JOUR 16 À 20",
        image: "images/process-3.svg"
      }
    ]
  },

  testimonial: {
    notice: "À REMPLACER par un vrai avis client avant la mise en ligne",
    rating: 5,
    quote: "« En 3 semaines, notre taux de conversion a bondi de +165%. Nos prospects nous parlent spontanément du site dès la première minute d'appel. C'est le meilleur investissement commercial de notre année. »",
    authorName: "Alexandre D.",
    authorRole: "Fondateur & CEO, Vespera Studios (Paris)",
    keyMetric: "+165% de conversion qualifiée",
    avatar: "images/avatar-client.svg",
    verifiedBadge: "Témoignage Vérifié"
  },

  objections: {
    sectionTag: "VOS GARANTIES DIRECTES",
    headline: "POURQUOI TRAVAILLER AVEC KRONOS SANS RISQUE",
    subheadline: "Passez votre curseur sur chaque engagement pour découvrir notre approche.",
    items: [
      {
        id: "obj-1",
        title: "Pas de devis flou ni de surcoût caché",
        subtitle: "Un forfait transparent fixé dès le départ",
        detail: "Le tarif et le calendrier sont scellés avant le coup d'envoi. Zéro mauvaise surprise en cours de route.",
        previewImage: "images/trail-1.svg"
      },
      {
        id: "obj-2",
        title: "Pas de template générique copié-collé",
        subtitle: "Une identité visuelle unique taillée pour vous",
        detail: "Chaque interaction, chaque typographie et chaque texture sont composées exclusivement pour votre positionnement.",
        previewImage: "images/trail-2.svg"
      },
      {
        id: "obj-3",
        title: "Pas de site lourd qui fait fuir sur smartphone",
        subtitle: "Une vélocité 60 FPS vérifiée sur tous les supports",
        detail: "Votre site charge en un clin d'œil sur mobile 4G/5G comme sur écran Retina 4K sans aucune saccade.",
        previewImage: "images/trail-3.svg"
      },
      {
        id: "obj-4",
        title: "Pas d'abonnement captif ni de dépendance",
        subtitle: "Vous êtes propriétaire à 100% de votre site",
        detail: "Code propre, autonome et facilement hébergeable partout (Hostinger, Vercel, Netlify) sans frais récurrents imposés.",
        previewImage: "images/trail-4.svg"
      }
    ]
  },

  footer: {
    tagline: "PRÊT À FAIRE LA DIFFÉRENCE ?",
    headline: "FAISONS DE VOTRE SITE VOTRE MEILLEUR ATOUT COMMERCIAL.",
    subheadline: "Réservez un échange de 20 minutes pour analyser votre projet et concevoir une vitrine qui surclasse vos concurrents.",
    ctaPrimary: {
      label: "Réserver mon audit immersif offert →",
      href: "mailto:contact@studio-kronos.fr?subject=Projet%20Site%20Immersif%20Studio%20Kronos"
    },
    ctaSecondary: {
      label: "contact@studio-kronos.fr",
      href: "mailto:contact@studio-kronos.fr"
    },
    giantBrandText: "KRONOS",
    availabilityBadge: "Disponibilité actuelle : 2 créneaux d'accompagnement ce mois-ci",
    links: [
      { label: "Vision", href: "#manifesto" },
      { label: "Réalisations", href: "#proof" },
      { label: "Processus", href: "#process" },
      { label: "Garanties", href: "#objections" }
    ],
    socialLinks: [], // N'affiche aucun réseau inventé
    copyright: "© 2026 STUDIO KRONOS. Tous droits réservés. Conçu sans framework lourd avec le moteur Immersif Pure-JS."
  }
};

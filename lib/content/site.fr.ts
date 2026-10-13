export const siteContent = {
  meta: {
    keywords: [
      "Pipilintu",
      "film documentaire",
      "expédition",
      "balsa de totora",
      "lac Titicaca",
      "Amazone",
      "Bolivie",
      "Brésil",
      "aventure",
      "low-tech",
      "documentaire aventure",
    ],
    ogImageAlt:
      "Deux équipiers manœuvrent les longues rames de la balsa Pipilintu sur un fleuve amazonien",
    title: "Pipilintu — Des Andes à l'Atlantique",
    description:
      "Film documentaire sur l'expédition Pipilintu : 3 600 km à la rame et à la voile sur une balsa traditionnelle en totora, des Andes à l'Atlantique.",
  },
  nav: {
    synopsis: "Synopsis",
    projections: "Projections",
    team: "Équipage",
    media: "Presse",
    blog: "Blog",
  },
  /** Screen-reader labels and small interface words */
  ui: {
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    footerNav: "Navigation pied de page",
    menu: "Menu",
    openMenu: "Ouvrir le menu",
    language: "Langue",
    portraitOf: "Portrait de",
    rights: "Tous droits réservés.",
  },
  hero: {
    title: "Pipilintu",
    subtitle: "Le film",
    tagline:
      "Des Andes à l'Atlantique, 3600km à la rame sur un radeau traditionnel",
    cta: "S'inscrire à la newsletter",
    ctaHint:
      "Soyez informé de la sortie VOD et des projections en France et ailleurs.",
    instagramCta: "@baboune_lowtech",
  },
  trailer: {
    title: "Bande-annonce",
    placeholder: "Bande-annonce bientôt disponible",
    placeholderHint:
      "Le trailer sera publié ici dès sa sortie. Inscrivez-vous à la newsletter pour ne rien manquer.",
  },
  synopsis: {
    title: "Synopsis",
    facts: [
      { label: "Durée", value: "56 min" },
      { label: "Sortie", value: "Automne 2026" },
      { label: "Durée tournage", value: "4 mois" },
    ],
    body: [
      "Fabien a un rêve en tête : naviguer sur l’immense fleuve Amazone, en silence et à la rame.",
      "Alors qu’il voyage au lac Titicaca, il découvre le bateau idéal pour réaliser son rêve : une « balsa de totora », une embarcation traditionnelle entièrement conçue en roseau.",
      "Loin des clichés de l’aventure amazonienne, l’équipage de Pipilintu se retrouve plongé au cœur d’un territoire vivant, connecté et profondément humain.",
      "Accompagné par la marine bolivienne, l’équipage se retrouve malgré lui au cœur d’une étrange affaire d’espionnage, alimentée par une rumeur qui circule dans les médias locaux.",
      "Pipilintu, c’est l’odyssée silencieuse et organique de cinq aventuriers sur un bateau de roseaux, dont la traversée prend une dimension inimaginable. Comme un papillon au terme de sa migration, leur embarcation éphémère se décompose, laissant planer le doute sur leur objectif initial, situé à 3 600 kilomètres : l’Atlantique.",
    ],
  },
  /** Map shown in the synopsis facts column — no longer its own section */
  itinerary: {
    caption:
      "De Guanay en Bolivie à Macapá au Brésil, 3600 km par les fleuves Kaka, Béni, Madeira et Amazone.",
    imageAlt:
      "Carte de l'itinéraire de l'expédition Pipilintu, de la Bolivie à Macapá au Brésil",
    mapLink: "https://eur-share.explore.garmin.com/pipilintu",
    mapLinkLabel: "📍 Tracé GPS de l'expédition 🗺️",
  },
  /** Rendered as a card at the bottom of the Projections section */
  organizeProjection: {
    title: "Organiser une projection",
    description:
      "Vous souhaitez projeter Pipilintu dans votre salle, festival ou association ? Contactez-nous pour organiser une projection publique ou privée.",
    emailCta: "Nous écrire par email",
    whatsappCta: "Nous écrire sur WhatsApp",
    emailSubject: "Demande de projection — Pipilintu",
    emailBody:
      "Bonjour,\n\nNous souhaiterions organiser une projection du film Pipilintu.\n\nStructure / lieu :\nVille :\nDate envisagée :\nJauge estimée :\nProjection publique ou privée :\n\nMerci !",
    whatsappMessage:
      "Bonjour ! Nous souhaiterions organiser une projection du film Pipilintu. Pouvons-nous en discuter ?",
  },
  projections: {
    title: "Projections",
    description: "Dates des projections passées et à venir du film Pipilintu.",
    emptyTitle: "Aucune projection programmée pour le moment",
    emptyDescription:
      "Les dates de projection seront annoncées ici. Inscrivez-vous à la newsletter pour être informé en premier.",
    upcomingLabel: "À venir",
    pastLabel: "Passées",
    moreInfo: "Plus d'infos",
    mapLabel: "Voir le lieu sur la carte",
  },
  gallery: {
    label: "Images de l'expédition",
    carousel: "carrousel",
    slide: "diapositive",
    /** "{n} sur {total}" */
    position: "{n} sur {total}",
    previous: "Image précédente",
    next: "Image suivante",
    pause: "Mettre le diaporama en pause",
    play: "Lancer le diaporama",
    /** "Aller à l'image {n}" */
    goTo: "Aller à l'image {n}",
    albumCta: "Voir l'album complet (308 photos)",
    albumLabel: "Album photo complet sur Google Photos (nouvel onglet)",
    /** Alt text for each photo, keyed by its path in lib/constants.ts */
    alts: {
      "/images/gallery/20250514_155424.jpg":
        "Une main tient une tige de totora coupée, révélant la moelle alvéolée qui donne sa flottabilité à la balsa",
      "/images/gallery/IMG_20250608_090721_860.jpg":
        "Un équipier et un artisan aymara ligaturent ensemble une botte de totora pendant la construction de la balsa",
      "/images/gallery/IMG-20250711-WA0016.jpg":
        "L'équipage et des militaires portent à l'épaule une coque de totora déchargée d'un camion, au bord du fleuve",
      "/images/gallery/IMG-20250717-WA0041.jpg":
        "Cérémonie de départ : un officier de l'Armada Boliviana accueille l'équipage en gilets de sauvetage devant la balsa",
      "/images/gallery/dji_fly_20250716_124850_121_1754012171847_video(1).jpg":
        "Vue aérienne de la balsa naviguant dans une gorge encaissée aux parois couvertes de forêt",
      "/images/gallery/dji_fly_20250716_125114_124_1754012391243_video(1).jpg":
        "Vue aérienne à la verticale du fleuve brun entre deux rives rocheuses, la balsa suivie de deux embarcations",
      "/images/gallery/DSC03139.jpg":
        "Deux équipiers manœuvrent les longues rames de bois sur le pont de la balsa, la forêt en arrière-plan",
      "/images/gallery/DSC05646.jpg":
        "La balsa au milieu du fleuve sous sa voile blanche peinte d'un grand papillon orange et du nom Pipilintu",
      "/images/gallery/DSC05264.jpg":
        "Au crépuscule, un membre de l'équipage échange avec trois enfants montés à bord de la balsa",
      "/images/gallery/DSC04170.jpg":
        "Une barge d'orpaillage bâchée de bleu, suivie de ses dragues, ancrée au milieu du fleuve amazonien",
      "/images/gallery/DSC06162.jpg":
        "Portrait d'un équipier au chapeau de toile, souriant, lors d'une escale dans un village de rive",
      "/images/gallery/DSC05487.jpg":
        "L'écusson brodé « Expedición Pipilintu » posé sur la coque de totora à demi immergée",
      "/images/gallery/DSC05606.jpg":
        "Quatre équipiers posent à bord de la balsa en déployant le drapeau Expedición Pipilintu",
      "/images/gallery/PXL_20251014_204520898.MP.jpg":
        "Trois équipiers devant la balsa échouée sur une berge de vase, au terme de l'expédition",
      "/images/gallery/IMG-20251014-WA0016.jpg":
        "La balsa, mât pavoisé, échouée sur une plage bordée de mangrove près de l'embouchure de l'Amazone",
    } as Record<string, string>,
  },
  team: {
    title: "L'équipage",
    members: [
      {
        name: "Fabien Gallier",
        nickname: "Baboune",
        role: "Capitaine",
        image: "/images/crew/fabien.png",
        bio: "Ingénieur-bricoleur et instigateur de l'expédition, Fabien a navigué 10 000 km à bord de son voilier La Baboune à la rencontre d'initiatives low-tech. Lauréat de la Transformation Écologique de la Fondation Veolia en 2023, il poursuit une même quête : rencontrer des façons soutenables d'habiter le monde.",
      },
      {
        name: "Erwan Rolland",
        nickname: "Santiago",
        role: "Maître voilier",
        image: "/images/crew/erwan.png",
        bio: "Marin-aventurier de 26 ans, Santi est capitaine sur son voilier, après une transatlantique et une année en mer des Caraïbes il rejoint l'expédition, il y apporte son expertise technique et son tempérament calme. Il est notre maître fermenteur et fait d'excellents fromages frais.",
      },
      {
        name: "Benjamin",
        nickname: "Benji",
        role: "Documentariste",
        image: "/images/crew/benji.png",
        bio: "Vagabond-ingénieur de 28 ans, Benji voyage sobrement et lentement à travers ses passions pour la grimpe, le vélo et le bricolage. Il quitte sa traversée du continent sud-américain à bicyclette pour rejoindre l'expédition.",
      },
      {
        name: "Télio Nouraud",
        nickname: "Telito",
        role: "Photographe / Vidéaste",
        image: "/images/crew/telito.png",
        bio: "Voyageur photographe, Télio parcourt l'Amérique du Sud depuis trois ans. Il documente ses aventures à travers son objectif, et se lance dans la vidéo à bord du projet Pipilintu. Fuyant la chaleur, les moustiques et les eaux troubles, rejoindre l'expédition en cours de navigation était donc une évidence !",
      },
      {
        name: "Thomas Merzlic",
        nickname: "Toto",
        role: "Cuistot",
        image: "/images/crew/toto.png",
        bio: "Équipier temporaire, Toto s'est spontanément joint à l'expédition. Il parcourt le continent sud-américain à la rencontre de projets inspirants et de ses habitants. Passionné de cuisine, il adore rassembler autour d'un bon repas et faire voyager à travers l'assiette.",
      },
    ],
  },
  contact: {
    /** Rendered as an aria-label on the footer's social link row */
    title: "Contact & réseaux sociaux",
    emailLabel: "Envoyez-nous un email",
    instagramLabel: "Suivez-nous sur Instagram",
    whatsappLabel: "Contactez-nous sur WhatsApp",
  },
  /** The /media page: press coverage, data in lib/content/media.ts */
  media: {
    title: "Presse",
    description:
      "Articles, reportages télé et vidéos consacrés à l'expédition, des préparatifs à l'arrivée sur l'Atlantique, et au film.",
    articles: "Articles",
    videos: "Télé, vidéos et réseaux sociaux",
    untitledVideo: "Vidéo",
  },
  blog: {
    title: "Journal de l'expédition",
    description:
      "Les récits de l'équipage, écrits au fil du fleuve — de la construction de la balsa sur le Titicaca à l'arrivée dans l'Atlantique.",
    emptyTitle: "Aucun article pour le moment",
    emptyDescription:
      "Les récits de l'expédition seront publiés ici prochainement.",
    backToBlog: "Tous les articles",
    backHome: "Retour à l'accueil",
    /** Prefix for the byline, e.g. "Par Fabien Gallier" */
    byline: "Par",
  },
  footer: {
    copyright: "Expédition Pipilintu",
    tagline: "Prochain arrêt : le grand écran",
    producedWith: "Un film produit en collaboration avec",
    solidreamLabel: "Solidream — visiter le site (nouvel onglet)",
  },
}

export type SiteContent = typeof siteContent

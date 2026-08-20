export const siteContent = {
  meta: {
    title: "Pipilintu — Des Andes à l'Atlantique",
    description:
      "Film documentaire sur l'expédition Pipilintu : 3 600 km à la rame et à la voile sur une balsa traditionnelle en totora, des Andes boliviennes jusqu'à l'Atlantique.",
  },
  hero: {
    title: "Pipilintu",
    subtitle: "Expédition Pipilintu",
    tagline:
      "Une navigation pour l'avenir — Des Andes à l'Atlantique en balsa traditionnelle",
    cta: "S'inscrire à la newsletter",
    ctaHint:
      "Soyez informé de la sortie VOD et des projections en France et ailleurs.",
  },
  newsletter: {
    title: "Restez informé",
    description:
      "Inscrivez-vous pour être prévenu de la disponibilité du film en VOD, des projections en France et dans le monde.",
    fallbackLabel: "Ouvrir le formulaire d'inscription",
  },
  trailer: {
    title: "Bande-annonce",
    placeholder: "Bande-annonce bientôt disponible",
    placeholderHint:
      "Le trailer sera publié ici dès sa sortie. Inscrivez-vous à la newsletter pour ne rien manquer.",
  },
  synopsis: {
    title: "Synopsis",
    intro:
      "L'expédition Pipilintu (« papillon » en langue aymara) célèbre le patrimoine bolivien à l'occasion du bicentenaire avec une navigation à la rame et à la voile sur une balsa traditionnelle en totora.",
    body: [
      "L'expédition s'élance en juillet 2025 de Guanay en Bolivie, et traverse les fleuves Kaka et Béni.",
      "Puis, au Brésil, en descendant les rios Madeira et Amazone, la balsa file jusqu'à Macapá, à l'embouchure de l'Amazone avec l'Océan Atlantique — soit environ 3 600 km.",
    ],
    objectivesTitle: "Objectifs",
    objectives: [
      "Valoriser le savoir-faire bolivien traditionnel.",
      "Soutenir l'inscription des balsas en totora comme Patrimoine Culturel Immatériel de l'UNESCO.",
      "Inspirer la transition vers un avenir durable, avec ce défi sportif, écologique et culturel.",
    ],
    support:
      "Avec le soutien de la marine bolivienne (Armada Boliviana).",
  },
  itinerary: {
    title: "Itinéraire",
    description:
      "De Guanay en Bolivie jusqu'à Macapá au Brésil, en suivant les fleuves Kaka, Béni, Madeira et Amazone.",
    imageAlt:
      "Carte de l'itinéraire de l'expédition Pipilintu, de la Bolivie à Macapá au Brésil",
  },
  gallery: {
    title: "Images du film",
    description: "Quelques images de l'expédition et du tournage.",
    placeholderLabel: "Image à venir",
  },
  expeditionDates: {
    title: "Dates clés de l'expédition",
    description:
      "Les étapes marquantes de la construction, du lancement et de la navigation.",
    dates: [
      {
        date: "13 mai 2025",
        isoDate: "2025-05-13",
        label: "Début de la construction de la balsa",
      },
      {
        date: "21 juin 2025",
        isoDate: "2025-06-21",
        label: "Mise à l'eau à Huatajata à l'occasion du nouvel an Aymara",
      },
      {
        date: "14 juillet 2025",
        isoDate: "2025-07-14",
        label: "Début de la navigation à Guanay",
      },
      {
        date: "14 octobre 2025",
        isoDate: "2025-10-14",
        label: "Arrivée à Macapá au Brésil, fin de l'expédition",
      },
    ],
  },
  organizeProjection: {
    title: "Organiser une projection",
    description:
      "Vous souhaitez projeter Pipilintu dans votre salle, festival ou association ? Contactez-nous pour organiser une projection publique ou privée.",
    cta: "Nous contacter",
    emailSubject: "Demande de projection — Pipilintu",
  },
  projections: {
    title: "Projections",
    description:
      "Dates des projections passées et à venir du film Pipilintu.",
    emptyTitle: "Aucune projection programmée pour le moment",
    emptyDescription:
      "Les dates de projection seront annoncées ici. Inscrivez-vous à la newsletter pour être informé en premier.",
    upcomingLabel: "À venir",
    pastLabel: "Passées",
  },
  team: {
    title: "L'équipage",
    description:
      "Les membres de l'équipage ont été sélectionnés pour leurs compétences techniques, physiques et humaines. Une attention particulière a été portée à la capacité de chacun à vivre en collectivité, à garder son calme face à l'imprévu, et à apporter des compétences précises au projet.",
    members: [
      {
        name: "Fabien Gallier",
        nickname: "Baboune",
        role: "Capitaine",
        skills: [],
      },
      {
        name: "Erwan Rolland",
        nickname: "Santiago",
        role: "Maître voilier",
        skills: ["Expert fermentation"],
      },
      {
        name: "Benjamin",
        nickname: "Benji",
        role: "Documentariste",
        skills: ["Couturier"],
      },
      {
        name: "Télio Nouraud",
        nickname: "Telito",
        role: "Photographe / Vidéaste",
        skills: ["Cuisinier"],
      },
      {
        name: "Thomas Merzlic",
        nickname: "Toto",
        role: "Raboteur de safran",
        skills: ["Cuisinier"],
      },
    ],
  },
  contact: {
    title: "Contact & réseaux sociaux",
    description: "Suivez l'aventure et contactez l'équipe.",
    emailLabel: "Envoyez-nous un email",
    instagramLabel: "Suivez-nous sur Instagram",
    whatsappLabel: "Contactez-nous sur WhatsApp",
  },
  blog: {
    title: "Blog",
    stubTitle: "Le blog arrive bientôt",
    stubDescription:
      "Les articles de l'expédition seront publiés ici prochainement.",
    backHome: "Retour à l'accueil",
  },
  footer: {
    copyright: "Expédition Pipilintu",
    tagline: "Prochain arrêt : le grand écran",
  },
} as const

export type SiteContent = typeof siteContent

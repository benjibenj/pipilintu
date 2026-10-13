import type { SiteContent } from "@/lib/content/site.fr"

export const siteContent: SiteContent = {
  meta: {
    keywords: [
      "Pipilintu",
      "película documental",
      "expedición",
      "balsa de totora",
      "lago Titicaca",
      "Amazonas",
      "Bolivia",
      "Brasil",
      "aventura",
      "low-tech",
      "documental de aventura",
    ],
    ogImageAlt:
      "Dos tripulantes manejan los largos remos de la balsa Pipilintu en un río amazónico",
    title: "Pipilintu — De los Andes al Atlántico",
    description:
      "Documental sobre la expedición Pipilintu: 3600 km a remo y vela en una balsa tradicional de totora, de los Andes al Atlántico.",
  },
  nav: {
    synopsis: "Sinopsis",
    projections: "Proyecciones",
    team: "Tripulación",
    blog: "Blog",
  },
  ui: {
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    footerNav: "Navegación del pie de página",
    menu: "Menú",
    openMenu: "Abrir el menú",
    language: "Idioma",
    portraitOf: "Retrato de",
    rights: "Todos los derechos reservados.",
  },
  hero: {
    title: "Pipilintu",
    subtitle: "La película",
    tagline:
      "De los Andes al Atlántico, 3600 km a remo en una balsa tradicional",
    cta: "Suscribirse al boletín",
    ctaHint:
      "Entérate del estreno en plataformas y de las proyecciones en Francia y en otros lugares.",
    instagramCta: "@baboune_lowtech",
  },
  trailer: {
    title: "Tráiler",
    placeholder: "Tráiler disponible próximamente",
    placeholderHint:
      "El tráiler se publicará aquí en cuanto salga. Suscríbete al boletín para no perdértelo.",
  },
  synopsis: {
    title: "Sinopsis",
    facts: [
      { label: "Duración", value: "56 min" },
      { label: "Estreno", value: "Otoño 2026" },
      { label: "Rodaje", value: "4 meses" },
    ],
    body: [
      "Fabien tiene un sueño en mente: navegar por el inmenso río Amazonas, en silencio y a remo.",
      "Durante un viaje al lago Titicaca, descubre la embarcación ideal para hacer realidad su sueño: una «balsa de totora», una embarcación tradicional construida enteramente con juncos.",
      "Lejos de los clichés de la aventura amazónica, la tripulación de Pipilintu se encuentra inmersa en el corazón de un territorio vivo, conectado y profundamente humano.",
      "Acompañada por la Armada Boliviana, la tripulación se ve envuelta a su pesar en un extraño caso de espionaje, alimentado por un rumor que circula en los medios locales.",
      "Pipilintu es la odisea silenciosa y orgánica de cinco aventureros a bordo de un barco de juncos, cuya travesía adquiere una dimensión inimaginable. Como una mariposa al final de su migración, su embarcación efímera se descompone, sembrando la duda sobre su objetivo inicial, situado a 3600 kilómetros: el Atlántico.",
    ],
  },
  itinerary: {
    caption:
      "De Guanay en Bolivia a Macapá en Brasil, 3600 km por los ríos Kaka, Beni, Madeira y Amazonas.",
    imageAlt:
      "Mapa del itinerario de la expedición Pipilintu, de Bolivia a Macapá en Brasil",
    mapLink: "https://eur-share.explore.garmin.com/pipilintu",
    mapLinkLabel: "📍 Recorrido GPS de la expedición 🗺️",
  },
  organizeProjection: {
    title: "Organizar una proyección",
    description:
      "¿Quieres proyectar Pipilintu en tu sala, festival o asociación? Contáctanos para organizar una proyección pública o privada.",
    emailCta: "Escríbenos por email",
    whatsappCta: "Escríbenos por WhatsApp",
    emailSubject: "Solicitud de proyección — Pipilintu",
    emailBody:
      "Hola:\n\nNos gustaría organizar una proyección de la película Pipilintu.\n\nOrganización / lugar:\nCiudad:\nFecha prevista:\nAforo estimado:\nProyección pública o privada:\n\n¡Gracias!",
    whatsappMessage:
      "¡Hola! Nos gustaría organizar una proyección de la película Pipilintu. ¿Podemos hablarlo?",
  },
  projections: {
    title: "Proyecciones",
    description: "Fechas de las proyecciones pasadas y próximas de Pipilintu.",
    emptyTitle: "Aún no hay proyecciones programadas",
    emptyDescription:
      "Las fechas de proyección se anunciarán aquí. Suscríbete al boletín para ser el primero en saberlo.",
    upcomingLabel: "Próximas",
    pastLabel: "Pasadas",
    moreInfo: "Más información",
    mapLabel: "Ver el lugar en el mapa",
  },
  gallery: {
    label: "Imágenes de la expedición",
    carousel: "carrusel",
    slide: "diapositiva",
    position: "{n} de {total}",
    previous: "Imagen anterior",
    next: "Imagen siguiente",
    pause: "Pausar la presentación",
    play: "Reproducir la presentación",
    goTo: "Ir a la imagen {n}",
    albumCta: "Ver el álbum completo (308 fotos)",
    albumLabel: "Álbum de fotos completo en Google Photos (nueva pestaña)",
    alts: {
      "/images/gallery/20250514_155424.jpg":
        "Una mano sostiene un tallo de totora cortado, mostrando la médula alveolada que hace flotar la balsa",
      "/images/gallery/IMG_20250608_090721_860.jpg":
        "Un tripulante y un artesano aimara amarran un haz de totora durante la construcción de la balsa",
      "/images/gallery/IMG-20250711-WA0016.jpg":
        "La tripulación y unos militares cargan al hombro un casco de totora descargado de un camión, a orillas del río",
      "/images/gallery/IMG-20250717-WA0041.jpg":
        "Ceremonia de partida: un oficial de la Armada Boliviana recibe a la tripulación, con chalecos salvavidas, frente a la balsa",
      "/images/gallery/dji_fly_20250716_124850_121_1754012171847_video(1).jpg":
        "Vista aérea de la balsa navegando por un cañón encajonado de paredes cubiertas de bosque",
      "/images/gallery/dji_fly_20250716_125114_124_1754012391243_video(1).jpg":
        "Vista aérea cenital del río marrón entre dos orillas rocosas, la balsa seguida de dos embarcaciones",
      "/images/gallery/DSC03139.jpg":
        "Dos tripulantes manejan los largos remos de madera en la cubierta de la balsa, con el bosque al fondo",
      "/images/gallery/DSC05646.jpg":
        "La balsa en medio del río bajo su vela blanca pintada con una gran mariposa naranja y el nombre Pipilintu",
      "/images/gallery/DSC05264.jpg":
        "Al atardecer, un tripulante conversa con tres niños que han subido a bordo de la balsa",
      "/images/gallery/DSC04170.jpg":
        "Una barcaza minera cubierta con lona azul, seguida de sus dragas, anclada en medio del río amazónico",
      "/images/gallery/DSC06162.jpg":
        "Retrato de un tripulante sonriente con sombrero de tela, durante una escala en un pueblo ribereño",
      "/images/gallery/DSC05487.jpg":
        "El parche bordado «Expedición Pipilintu» sobre el casco de totora medio sumergido",
      "/images/gallery/DSC05606.jpg":
        "Cuatro tripulantes posan a bordo de la balsa desplegando la bandera de la Expedición Pipilintu",
      "/images/gallery/PXL_20251014_204520898.MP.jpg":
        "Tres tripulantes delante de la balsa varada en una orilla de lodo, al final de la expedición",
      "/images/gallery/IMG-20251014-WA0016.jpg":
        "La balsa, con el mástil engalanado, varada en una playa bordeada de manglar cerca de la desembocadura del Amazonas",
    },
  },
  team: {
    title: "La tripulación",
    members: [
      {
        name: "Fabien Gallier",
        nickname: "Baboune",
        role: "Capitán",
        image: "/images/crew/fabien.png",
        bio: "Ingeniero manitas e impulsor de la expedición, Fabien ha navegado 10 000 km a bordo de su velero La Baboune al encuentro de iniciativas low-tech. Galardonado con el premio Transformación Ecológica de la Fundación Veolia en 2023, persigue una misma búsqueda: descubrir formas sostenibles de habitar el mundo.",
      },
      {
        name: "Erwan Rolland",
        nickname: "Santiago",
        role: "Maestro velero",
        image: "/images/crew/erwan.png",
        bio: "Marinero aventurero de 26 años, Santi es capitán de su propio velero. Tras una travesía del Atlántico y un año en el mar Caribe, se une a la expedición aportando su experiencia técnica y su temperamento sereno. Es además nuestro maestro fermentador y hace excelentes quesos frescos.",
      },
      {
        name: "Benjamin",
        nickname: "Benji",
        role: "Documentalista",
        image: "/images/crew/benji.png",
        bio: "Ingeniero vagabundo de 28 años, Benji viaja de forma sobria y lenta, guiado por sus pasiones: la escalada, la bicicleta y el bricolaje. Interrumpe su travesía del continente sudamericano en bicicleta para unirse a la expedición.",
      },
      {
        name: "Télio Nouraud",
        nickname: "Telito",
        role: "Fotógrafo / Videógrafo",
        image: "/images/crew/telito.png",
        bio: "Fotógrafo viajero, Télio recorre Sudamérica desde hace tres años. Documenta sus aventuras a través de su objetivo y se lanza al video a bordo del proyecto Pipilintu. Huyendo del calor, los mosquitos y las aguas turbias, ¡unirse a la expedición en plena navegación era evidente!",
      },
      {
        name: "Thomas Merzlic",
        nickname: "Toto",
        role: "Cocinero",
        image: "/images/crew/toto.png",
        bio: "Tripulante temporal, Toto se sumó espontáneamente a la expedición. Recorre el continente sudamericano al encuentro de proyectos inspiradores y de sus habitantes. Apasionado de la cocina, le encanta reunir a la gente alrededor de una buena comida y hacer viajar a través del plato.",
      },
    ],
  },
  contact: {
    title: "Contacto y redes sociales",
    emailLabel: "Envíanos un email",
    instagramLabel: "Síguenos en Instagram",
    whatsappLabel: "Contáctanos por WhatsApp",
  },
  blog: {
    title: "Diario de la expedición",
    description:
      "Los relatos de la tripulación, escritos al hilo del río — de la construcción de la balsa en el Titicaca a la llegada al Atlántico.",
    emptyTitle: "Aún no hay artículos",
    emptyDescription:
      "Los relatos de la expedición se publicarán aquí próximamente.",
    backToBlog: "Todos los artículos",
    backHome: "Volver al inicio",
    byline: "Por",
  },
  footer: {
    copyright: "Expedición Pipilintu",
    tagline: "Próxima parada: la gran pantalla",
    producedWith: "Una película producida en colaboración con",
    solidreamLabel: "Solidream — visitar el sitio (nueva pestaña)",
  },
}

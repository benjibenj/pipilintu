/**
 * Press coverage of the expedition, shown on the /media page. Titles are kept
 * in the language they were published in. Order doesn't matter: the page sorts
 * by date, newest first.
 *
 * Links were checked on 2026-10-14. Two dead ones were dropped (ATB Digital's
 * copy of the La Razón article, and Go Communication Bolivia); Facebook and
 * Instagram links can't be checked without logging in, so they're kept.
 */
export type MediaItem = {
  /** YYYY-MM-DD */
  date: string
  outlet: string
  /** Headline in its original language; omit when the post has none */
  title?: string
  url: string
  /** Language the piece is in, as a code: "fr", "en", "es", "pt", "de"… */
  language: string
  /** "article" for written press, "video" for TV, reels and video posts */
  kind: "article" | "video"
}

export const MEDIA: MediaItem[] = [
  // Arrival in Brazil
  {
    date: "2025-10-14",
    outlet: "g1 (Globo)",
    title:
      "Franceses encerram expedição de três meses pela Amazônia com chegada ao Amapá",
    url: "https://g1.globo.com/ap/amapa/noticia/2025/10/14/franceses-encerram-expedicao-de-tres-meses-pela-amazonia-com-chegada-ao-amapa-video.ghtml",
    language: "pt",
    kind: "article",
  },
  {
    date: "2025-10-14",
    outlet: "Portal Amazônia",
    title: "Franceses encerram expedição de 3 meses pela Amazônia",
    url: "https://portalamazonia.com/cultura/franceses-expedicao-amazonia/",
    language: "pt",
    kind: "article",
  },
  {
    date: "2025-10-14",
    outlet: "TV Equinócio — Eder Brasil",
    title:
      "Da Bolívia até Macapá: a chegada da expedição na Fazendinha, ao vivo",
    url: "https://www.instagram.com/reel/DPzS2WNCaMC/",
    language: "pt",
    kind: "video",
  },
  {
    date: "2025-10-14",
    outlet: "Aquí En Vivo (Bolivisión)",
    title: "La expedición francesa «Pipilintu» ha llegado al Océano Atlántico",
    url: "https://www.facebook.com/reel/818664237377054/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-09-15",
    outlet: "Amazônia Incrível",
    title:
      "Expedição Pipilintu navega a remo do Lago Titicaca à foz do Rio Amazonas em Macapá",
    url: "https://amazoniaincrivel.com/amazonas/expedicao-pipilintu-navega-a-remo-do-lago-titicaca-a-foz-do-rio-amazonas-em-macapa",
    language: "pt",
    kind: "article",
  },

  // Crossing Bolivia
  {
    date: "2025-08-18",
    outlet: "Bolivia TV",
    title:
      "Armada Boliviana acompañó la histórica travesía de la balsa de totora Pipilintu",
    url: "https://www.facebook.com/BTVCanalOficial/videos/787773700510050/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-08-09",
    outlet: "Quinto Poder Noticias Riberalta",
    title:
      "Riberalta da la bienvenida a embarcación artesanal de totora Pipilintu, en aymara «mariposa»",
    url: "https://www.facebook.com/share/v/1Q1p6cqs8n/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-08-01",
    outlet: "Armada Boliviana — La Armada en Acción",
    url: "https://www.facebook.com/100064357164733/posts/1187951470026747/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-08-01",
    outlet: "Bolivia TV",
    url: "https://www.facebook.com/BTVCanalOficial/videos/606859372486174/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-27",
    outlet: "La Razón",
    title:
      "Proeza a remo y vela: una balsa de totora recorre los ríos de Bolivia",
    url: "https://larazon.bo/sociedad/2025/07/27/proeza-a-remo-y-vela-una-balsa-de-totora-recorre-los-rios-de-bolivia/",
    language: "es",
    kind: "article",
  },
  {
    date: "2025-07-24",
    outlet: "Que No Me Pierda",
    title: "QNMP, 24 de julio de 2025",
    url: "https://fb.watch/Bd5Htf0LzT/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-23",
    outlet: "ABI — Agencia Boliviana de Información",
    title:
      "Expedición «Pipilintu» rinde homenaje al Bicentenario con una travesía histórica por los ríos de Bolivia",
    url: "https://abi.bo/index.php/seguridad2/37-notas/noticias/sociedad/66708-expedicion-pipilintu-rinde-homenaje-al-bicentenario-con-una-travesia-historica-por-los-rios-de-bolivia",
    language: "es",
    kind: "article",
  },
  {
    date: "2025-07-22",
    outlet: "El Deber",
    title:
      "La Armada Boliviana resguarda la expedición que atraviesa el continente en balsa de totora hasta el Atlántico",
    url: "https://eldeber.com.bo/s/n_523613/",
    language: "es",
    kind: "article",
  },
  {
    date: "2025-07-22",
    outlet: "El Fulgor",
    title:
      "Los ríos de Bolivia cobran vida en histórica travesía de la balsa de totora «Pipilintu» con apoyo de la Armada",
    url: "https://elfulgor.com/reportajes/los-rios-de-bolivia-cobran-vida-en-historica-travesia-de-la-balsa-de-totora-pipilintu-con-apoyo-de-la-armada",
    language: "es",
    kind: "article",
  },
  {
    date: "2025-07-22",
    outlet: "Informe Amazónico",
    url: "https://www.facebook.com/share/19dM22r1L6/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-22",
    outlet: "Turismo y Cultura GAM Rurrenabaque",
    title:
      "Rurrenabaque abrió sus puertas a los marineros franceses de la embarcación Pipilintu",
    url: "https://www.facebook.com/share/p/16NdqdpsDY/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-22",
    outlet: "Rurre Noticias",
    url: "https://www.facebook.com/share/v/1ChG7MzXeQ/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-21",
    outlet: "Aquí En Vivo (Bolivisión)",
    title: "Rutas de navegación en Bolivia: rumbo al Atlántico por el Amazonas",
    url: "https://www.facebook.com/share/v/1G6MPTrfz8/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-21",
    outlet: "Facebook",
    title: "Acto de reconocimiento a los ciudadanos franceses",
    url: "https://fb.watch/A_zOEERPJL/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-21",
    outlet: "Rio Television",
    url: "https://www.facebook.com/share/p/1AVB5sJYHn/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-20",
    outlet: "SEO TV Yungas",
    title: "Expedición «Pipilintu» desde Guanay hasta el Océano Atlántico",
    url: "https://www.facebook.com/share/v/16gNjiVZ68/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-18",
    outlet: "Informe Amazónico",
    url: "https://www.facebook.com/share/v/1AHEViXNtH/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-17",
    outlet: "Red Amazónica",
    title: "Llegada de la embarcación de totora con ciudadanos franceses",
    url: "https://www.facebook.com/RedAmazonica/videos/4039941672919266/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-17",
    outlet: "Informe Amazónico",
    url: "https://www.facebook.com/100086492613905/videos/1241449037131042/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-14",
    outlet: "Constelación Guanay",
    url: "https://www.facebook.com/fernando.quevedo.romero/videos/1272478054310978/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-14",
    outlet: "Constelación Guanay",
    url: "https://www.facebook.com/fernando.quevedo.romero/videos/701732176025115/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-14",
    outlet: "Constelación Guanay",
    url: "https://www.facebook.com/fernando.quevedo.romero/videos/744997214770215/",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-07-10",
    outlet: "Facebook",
    url: "https://www.facebook.com/reel/628080843646202",
    language: "es",
    kind: "video",
  },

  // Before departure
  {
    date: "2025-06-24",
    outlet: "EL DEBER Radio — Aquí Estoy",
    url: "https://www.youtube.com/watch?v=keoCXq7VXE8",
    language: "es",
    kind: "video",
  },
  {
    date: "2025-06-21",
    outlet: "El Deber",
    title:
      "En Año Nuevo Aimara: navegarán en balsa de totora desde Bolivia hasta el océano Atlántico",
    url: "https://eldeber.com.bo/pais/en-ano-nuevo-aimara-navegaran-en-balsa-de-totora-desde-bolivia-hasta-el-oceano-atlantico_519089/",
    language: "es",
    kind: "article",
  },
  {
    date: "2025-06-21",
    outlet: "MC Noticias",
    title:
      "De los Andes al Amazonas: una balsa de totora emprende una hazaña ecológica y cultural",
    url: "https://mcnoticias.com.bo/articles/1017",
    language: "es",
    kind: "article",
  },
]

import type { NextConfig } from "next"

/**
 * The old pipilintu.com blog stripped accented letters from slugs while
 * generating them, so most of its URLs don't match the current, correctly
 * accented slugs in lib/content/blog. These are 308s (permanent) so search
 * engines transfer ranking signal to the new URL instead of re-indexing it
 * from scratch. Source: old live site's /blog-fr listing, confirmed against
 * lib/content/blog/fr on 2026-08-25 — two old slugs were already accent-free
 * and need no entry (la-balsa-tombe-en-lambeaux,
 * pourquoi-voyager-sur-un-bateau-en-roseau).
 */
const OLD_BLOG_SLUG_REDIRECTS: Record<string, string> = {
  "3-semaines-sur-le-rio-madeira": "rio-madeira-or-espions-complications",
  "se-nourrir-en-expdition": "se-nourrir-en-expedition",
  "du-bni-au-madeira-changement-de-monde-dlicat":
    "du-beni-au-madeira-changement-de-monde-delicat",
  "une-journe-en-bolivie-bord-de-pipilintu":
    "une-journee-en-bolivie-a-bord-de-pipilintu",
  "notrdans-la-communaut-indigne-tacana-iii":
    "notre-passage-dans-une-communaute-tacana-i",
  "escale-folle-rurrenabaque": "escale-folle-a-rurrenabaque",
  "lhistoire-des-balsas-de-totora": "l-histoire-des-balsas-de-totora",
  "j1-j4-journal-de-bord-de-guanay-rurrenabaque":
    "journal-de-bord-de-guanay-a-rurrenabaque",
  "j-40j-1-comment-on-a-prpar-lexpdition":
    "comment-a-t-on-prepare-l-expedition",
}

/**
 * The old site (confirmed live at pipilintu.com on 2026-08-25, still
 * indexed) had standalone pages this single-page French site collapses into
 * homepage sections, or drops entirely. Crew profiles fold into the Team
 * section; the boat/safety/press pages have no replacement content here, so
 * they fall back to the homepage rather than 404ing on indexed URLs.
 * Non-French locale trees (/en, /es, /pt-br, ~50 URLs) are intentionally
 * left unredirected for now — out of scope until those routes exist.
 */
const OLD_PAGE_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/blog-fr", destination: "/blog" },
  { source: "/crew", destination: "/#team" },
  { source: "/crew/fabien-gallier-baboune", destination: "/#team" },
  { source: "/crew/erwan-rolland-santiago", destination: "/#team" },
  { source: "/crew/benjamin-vaysse-benji", destination: "/#team" },
  { source: "/crew/tlio-nouraud", destination: "/#team" },
  { source: "/crew/thomas-merzlic-toto", destination: "/#team" },
  { source: "/balsa-fr", destination: "/" },
  { source: "/securite", destination: "/" },
  { source: "/media", destination: "/" },
]

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(OLD_BLOG_SLUG_REDIRECTS).map(([oldSlug, newSlug]) => ({
        source: `/blog/${oldSlug}`,
        destination: `/blog/${newSlug}`,
        permanent: true,
      })),
      ...OLD_PAGE_REDIRECTS.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig

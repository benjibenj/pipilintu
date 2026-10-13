# Pipilintu

Website of **Pipilintu**, a documentary about a 3,600 km expedition by oar and
sail on a traditional totora reed boat, from Lake Titicaca in the Andes to the
mouth of the Amazon.

**[pipilintu.com](https://pipilintu.com)** — in French, English, Spanish and
Portuguese.

## How the site is organised

It is a single home page (hero with trailer, synopsis and photo carousel,
screenings, crew, latest articles) plus a blog with the crew's expedition
journal.

Almost everything you'd want to change is **text in `lib/content/`** — you
rarely need to touch the components.

| What                         | Where                                               |
| ---------------------------- | --------------------------------------------------- |
| All site text, per language  | `lib/content/site.fr.ts`, `.en.ts`, `.es.ts`, `.pt.ts` |
| Blog articles                | `lib/content/blog/<language>/*.md`                  |
| Screening dates              | `lib/content/projections.yml`                       |
| Photos                       | `public/images/`                                    |
| Gallery order, links, emails | `lib/constants.ts`                                  |
| Page sections                | `components/sections/`                              |
| Pages and routing            | `app/[lang]/`, `next.config.ts`                     |

### Languages

French is the main language and lives at the root: `/`, `/blog`,
`/blog/<article>`. The others are prefixed: `/en`, `/es`, `/pt`.

- **Site text** — `site.fr.ts` is the reference. The other three files must
  have exactly the same keys; TypeScript fails the build if one is missing, so
  a forgotten translation can't slip through.
- **Blog articles** — each article exists once per language folder. The
  `translationKey` in the front matter is what links translations together:
  the language switcher and search engines use it to go from an article to the
  same article in another language. Give all versions of an article the same
  `translationKey`.
- Under the hood every page lives in `app/[lang]/`; rewrites in
  `next.config.ts` serve French without the `/fr` prefix.

### Writing a blog article

Add a Markdown file to each `lib/content/blog/<language>/` folder. The file
name becomes the URL.

```markdown
---
title: "La balsa tombe en lambeaux"
date: 2025-08-11
language: fr
translationKey: the-balsa-falls-apart
author: "Benjamin"
nickname: "Benji"
cover: /images/blog/the-balsa-falls-apart/cover.jpg
---

Text of the article…

![Photo description](/images/blog/the-balsa-falls-apart/photo.jpg)
```

Put the images in `public/images/blog/<article>/`. Their sizes are read
automatically.

## Editing screenings (no coding needed)

Screening dates live in a single file:
**[`lib/content/projections.yml`](lib/content/projections.yml)**.

1. Open the file on GitHub and click the pencil ✏️ ("Edit this file").
2. Copy an existing block, paste it at the bottom and change the values. The
   instructions are at the top of the file.
3. Click **Commit changes**. The site updates by itself within a few minutes.

"Upcoming" / "Past" is worked out from the date, so there's nothing to move
after a screening. If something is mistyped (date, time, a missing or
misspelled field), a red ✗ appears next to the commit on GitHub with a message
explaining what to fix — and the live site stays unchanged until it's fixed.

Event names, venues and the `info` line are shown as written on every
language version of the site.

## Running it locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

Before pushing:

```bash
npm run lint
npm run typecheck
npm run check:projections   # just the screenings file
npm run build               # also validates projections.yml and every translation
```

## Tech

[Next.js](https://nextjs.org) (App Router) with React and TypeScript,
[Tailwind CSS](https://tailwindcss.com), components from
[shadcn/ui](https://ui.shadcn.com). Pages are pre-rendered at build time; the
home page refreshes hourly so past screenings move to the right list on their
own. Deployed on [Vercel](https://vercel.com) from `main`.

## Credits

Film produced in collaboration with [Solidream](https://solidream.net/).
Photos © their authors, including Télio Nouraud. Please don't reuse the photos
or texts without asking — contact
[pipilintuexpedition@gmail.com](mailto:pipilintuexpedition@gmail.com).

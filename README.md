# LS Global Holdings — Group Website

The parent-company site for **LS Global Holdings** (*Lowe Saho Global Holdings*),
a multi-sector group operating across the United States, Senegal and The Gambia.

> **One Group. Many Solutions. Real Impact.**

Its main job is to be a **hub**: a visitor who lands here should be one click
from whichever operating company they actually need. Every company card, the
hero panel, the footer and the 404 page all link out to the subsidiaries'
own domains.

Built with React 18, TypeScript, Vite 6, Tailwind CSS v4, React Router 6 and
lucide-react — the same stack as the Sound Fire & Safety and LS Transport sites.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
npm run lint       # typecheck only
```

## The five companies it links to

These links are the whole point of the site. They live in one place —
`src/data/companies.ts` — and the cards, footer, contact page, 404 page and the
`subOrganization` JSON-LD in `index.html` all read from there.

**Every link below was checked, not assumed.** Three companies are live on their
custom domains. Two are live, but their custom domains are **not in DNS yet**
(both return `NXDOMAIN`), so this site links to their working Vercel
deployments instead — a hub whose links 404 is worse than one pointing at a
working temporary URL.

| Company | Sector | Country | Site links to | Status |
| --- | --- | --- | --- | --- |
| 1st Edmonds Adult Family Home | Care Services | United States | `www.1stedmonds.com` | ✅ live (200) |
| Bothell Serenity Corp | Care Services | United States | `www.bothellserenity.com` | ✅ live (200) |
| Continental EV & Energy Center | Energy & EV Infrastructure | The Gambia | `www.gambiaev.com` | ✅ live (200) |
| Sound Fire & Safety LLC | Fire Safety & Protection | United States | `sound-fire-safety.vercel.app` | ⚠️ live (200), but `soundfireandsafety.com` is **not registered / not in DNS** |
| LS Transport | Transportation Services | Senegal | `ls-transport.vercel.app` | ⚠️ live (200), but `lstransport.sn` is **not registered / not in DNS** — and was itself only ever an assumption |

### Switching the two pending domains over

Once `soundfireandsafety.com` or `lstransport.sn` is registered and pointed at
its site, edit that company's entry in `src/data/companies.ts`:

```ts
website: 'https://www.soundfireandsafety.com',   // was the vercel.app URL
websiteLabel: 'www.soundfireandsafety.com',      // must match `website`
// delete the `pendingDomain` line
```

Then update the matching `subOrganization` URL in `index.html`. Nothing else
changes — every link on the site reads from that one entry.

## Before launch — content the client must confirm

Everything below is flagged with a `TODO` comment at the source.

| What | Where | Status |
| --- | --- | --- |
| **Phone number** | `src/data/site.ts` → `phones` | **Empty on purpose.** The content document gave no contact details at all for the holding company. Rather than publish a fake number, every phone CTA (top bar, mobile header, footer, contact page) stays hidden. Add one entry to `phones` and they all switch on automatically. |
| **Email address** | `src/data/site.ts` → `contact.email` | `info@lsglobalholdings.com` is a placeholder built from the company name. |
| **Public domain** | `src/data/site.ts` → `site.url`, plus `index.html`, `public/sitemap.xml`, `public/robots.txt` | `https://www.lsglobalholdings.com` is assumed. |
| **Registered address** | `src/data/site.ts` → `contact.regions` | No address was supplied, so the site names the three countries and what each does instead. Swap in a real head-office address when there is one. |
| **Logo** | `public/images/logo.svg` (+ `logo.png`) | A placeholder mark drawn for this build: an ink-and-brass "LS" inside a globe. Replace both files at the same paths and it changes everywhere — header, footer, favicon, OG image. |
| **Two subsidiary domains** | `src/data/companies.ts` → `pendingDomain` | `soundfireandsafety.com` and `lstransport.sn` are not in DNS. See the table above. |
| **Leadership photographs** | `public/images/team/` | Two of seven supplied. See below. |

### Three corrections made to the content document

1. The mission statement ended in a stray `p`; it was dropped.
2. Non-breaking hyphens in "high‑impact" and "multi‑sector" were normalised to
   ordinary hyphens so the text is searchable and wraps properly.
3. The Energy sector paragraph names the company "Gambia EV & Energy Center" in
   its body while the heading above it reads "CONTINENTAL EV & ENERGY CENTER".
   **Continental EV & Energy Center** is used throughout, matching the heading
   and the company's own governance (its Company Secretary and Director of
   Operations are both named in the board bios). Its website is still
   `gambiaev.com`.

Two spellings were also reconciled: the document heads one entry **Hady Saho**
and spells her **Haddy Saho** in every paragraph — "Haddy" is used, matching the
care-home sites. Abdoulie Lowe is "Group Chairman/CEO" on the board list and
"Group Chief Executive Officer" under management; both titles are shown, in
their respective sections.

## Structure

```
src/
  data/            All copy and config — edit here, not in components
    site.ts        Group name, contact, navigation, mailto helpers
    companies.ts   The five companies + four sectors, and the outbound domains
    leadership.ts  Board and management, with full bios
    group.ts       Mission, vision, values, strategic advantage, footprint, stats
  lib/             cn() class helper, useSeo() per-route title/meta/canonical
  components/
    ui/            Container, Button, SectionHeading, PageHero, Reveal
    layout/        Header (+ TopBar), Footer, Layout shell
    home/          Homepage-only sections (Hero, StatStrip)
    sections/      Sections reused across pages — CompanyCard, CompaniesSection,
                   SectorsSection, FootprintSection, AboutPanel, CoreValues,
                   AdvantageSection, PersonCard, LeadershipPreview, FutureBand,
                   CtaBand, ContactForm
  pages/           One file per route
public/images/
  logos/           The five companies' own marks
  companies/       One photograph per company
  team/            Leadership portraits
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, stats, about, sectors, companies, footprint, values, leadership, outlook |
| `/about` | About the group — mission, vision, values, strategic advantage, footprint, future |
| `/companies` | All five companies, plus the four sectors |
| `/companies/:slug` | One company: what they do, and a prominent link to their own site |
| `/leadership` | Board of Directors and Management |
| `/leadership/:slug` | One person's full bio |
| `/contact` | Company routing panel first, then the group's own form |

## How enquiries reach the group

The contact page deliberately **routes before it collects**. Most visitors want
an operating company, not the holding company, so the first thing on the page is
a grid of the five companies linking to their own sites. Only below that does
the group's own form appear.

The form POSTs JSON to `VITE_CONTACT_ENDPOINT` when it is set (see
`.env.example`) — Formspree, Netlify Forms, Web3Forms or your own endpoint. When
it is **not** set the submit button falls back to opening the visitor's mail
client with everything pre-filled, so the form is never a dead end. It carries a
honeypot field and a "Regarding" selector listing all five companies, so a
misdirected enquiry can still be routed by hand.

## Photography

No new stock was downloaded for this site. Every photograph is already licensed
and already in use on one of the group's other sites, which is deliberate: a
visitor who clicks through from a company card should recognise the picture when
they arrive.

| Used here | Taken from |
| --- | --- |
| Company logos (all five) | Each company's own repository — client artwork |
| `companies/1st-edmonds.jpg`, `companies/bothell-serenity.jpg` | The care-home sites (client-supplied photographs of the actual homes) |
| `companies/continental-ev.webp`, `sector-energy.webp`, `footprint-gambia.webp`, `future.webp` | The Gambia EV & Energy Center site |
| `companies/sound-fire-safety.jpg`, `sector-safety.jpg` | The Sound Fire & Safety site (Pexels) |
| `companies/ls-transport.jpg`, `sector-transport.jpg`, `boardroom.jpg`, `strategy.jpg`, `footprint-senegal.jpg` | The LS Transport site (Pexels) |
| `sector-care.jpg`, `footprint-usa.jpg` | The care-home sites (Pexels) |

Stock photography is used under the
[Pexels License](https://www.pexels.com/license/). Full per-file attributions
live in the source repositories' own credit files.

**Leadership portraits.** Photographs were supplied for two of the seven
directors — Abdoulie Lowe and Nixon Kwaku Duah Jr, carried over from the
care-home sites. The other five render as an **initials monogram** in group
colours rather than a stock portrait of someone else: nobody should mistake a
model for a director. To switch one on, drop a file into
`public/images/team/<slug>.jpg` and set `photo` on that person in
`src/data/leadership.ts`.

## Design

The group palette is **ink** (deep navy) and **brass**, set in Fraunces over
Inter. It is deliberately *not* any subsidiary's palette: Sound Fire's flame
red, the care homes' blue-green and LS Transport's gold each appear only as the
accent on that company's own card, so a colour on this site always tells you
whose it is. The recurring globe-meridian texture behind dark bands is the same
motif as the logo mark.

## Deployment

`vercel.json` rewrites everything to `index.html` for client-side routing;
`public/_redirects` does the same for Netlify.

```bash
npm run build     # → dist/
```

Point the domain at `dist/`, then update `site.url` in `src/data/site.ts`,
the canonical link in `index.html`, `public/robots.txt` and
`public/sitemap.xml` if the final domain differs from the assumed one.

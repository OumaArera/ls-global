# LS Global Holdings — Group Website

The parent-company site for **LS Global Holdings**,
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
| Continental EV & Energy Center | Energy & EV Infrastructure | The Gambia | `www.continentalev.com` | ✅ live (200) — the name the client asked for; `gambiaev.com` serves the same site |
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

## Client review — September 2026

Everything raised in `GLOBAL WEBSITE -Review.docx` has been applied.

**Wording**
- Mission statement replaced with the client's rewrite ("We develop and manage
  high-impact businesses…").
- Group titles now read **Global Chief …**, not *Group Chief …*, both as card
  titles and inside the bios. Abdoulie Lowe is **Global Chairman / CEO**.
  Nixon's *Group Chairman, KDuah Ministries* is a role at a different
  organisation and deliberately keeps its own wording.
- **"Lowe Saho Global Holdings" is gone from the site entirely** — the About
  copy, the outlook paragraph, the footer line and the JSON-LD. The footer now
  reads "Registered as LS Global Holdings."
- Abdoulie Lowe and Haddy Saho are now based in **Washington State, United
  States** rather than the three-country string.
- Every word on the leadership pages is now the client's: each card's
  standfirst is that person's own opening sentence, lifted from their bio,
  rather than a summary written here.

**Contact**
- Phone numbers added, so the top bar, mobile call button, footer and contact
  page all switch their phone CTAs on. The footer lists all three.
- Continental EV links to and displays **continentalev.com** everywhere — cards,
  footer, contact page and JSON-LD. Checked: it resolves and serves the same
  site as `gambiaev.com`.

**Design**
- The slogan now shows at **every** width. It had been hidden below the `sm`
  breakpoint, so a phone lost it from the lockup entirely.
- The footer was lifted off `navy-950` onto `navy-900` and every text tone
  raised a step, per "this section is too dark for me".

**Photography** — every picture the review flagged was replaced:

| Where | Was | Now |
| --- | --- | --- |
| Energy & EV sector | Solar panel array | An EV at a charging post |
| Transportation sector | Freight trucks on a motorway | An intercity coach |
| Fire Safety sector | A dark extinguisher on a post | Extinguishers in daylight |
| 1st Edmonds card | A sitting-room interior | The edited front view of the home |
| Sound Fire card | A firefighter and appliance | A range of extinguisher types |
| Continental EV card | A charging bay | An electric SUV (vehicle-led) |
| LS Transport card | A coach | A different coach, so it does not repeat the sector card |
| Strategic advantage | A man presenting in casual dress | Colleagues meeting in business dress |
| All three country cards | Forest, waterfront, street scene | Corporate buildings |

On "can we get a brighter picture — if possible to all the pictures": the six
photos below ~50% mean luminance were given a midtone gamma lift (and the
footprint cards' gradient overlay was softened), measured before and after so
that under 0.5% of any image is blown out.

## Before launch — content the client must confirm

Everything below is flagged with a `TODO` comment at the source.

| What | Where | Status |
| --- | --- | --- |
| **Third phone number** | `src/data/site.ts` → `phones` | The review gave `425-350-2217 / 425-346-9231 / 325-703-0636`. The first two are Washington (425); the third has a **325** prefix, which is a Texas area code. Worth confirming it is not a typo for `425-703-0636`. |
| **Email address** | `src/data/site.ts` → `contact.email` | `info@lsglobalholdings.com` is a placeholder built from the company name. |
| **Public domain** | `src/data/site.ts` → `site.url`, plus `index.html`, `public/sitemap.xml`, `public/robots.txt` | `https://www.lsglobalholdings.com` is assumed. |
| **Registered address** | `src/data/site.ts` → `contact.regions` | No address has been supplied, so the site names the three countries and what each does instead. Swap in a real head-office address when there is one. |
| ~~Logo~~ | `public/images/logo.png` | ✅ **Done** — the client's own mark, taken from the business-cards brand assets. |
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

The palette is sampled from the client's own logo: in the mark, the globe and
the **L** are navy, the **S** and the orbiting swoosh are **green**. So navy
carries the structure — dark bands, headings, body text — and green is the
accent on eyebrows, primary buttons and hover states. The two key values are
taken straight off the artwork:

| Token | Hex | Where it comes from |
| --- | --- | --- |
| `navy-900` | `#042f66` | The deep blue of the globe |
| `navy-700` | `#165592` | The mid blue of the "L" |
| `leaf-700` | `#106536` | The green of the "S" |

Set in Fraunces over Inter. The recurring globe-meridian texture behind dark
bands echoes the mark.

Each operating company keeps its **own** accent on its own card and page —
Sound Fire's flame red, the care homes' blue, LS Transport's amber — so a
colour always tells you whose it is. The Energy sector's green is close to the
group green by nature; it is held at `#17803D`, which keeps the 4.5:1 contrast
the small accent text needs.

### Logo files

| File | What it is | Used for |
| --- | --- | --- |
| `logo.png` | The mark, transparent | Header, footer — reads on white and on navy |
| `logo-full.png` | The artwork as supplied, on white | Reference / print |
| `icon-180.png` | 180×180, transparent | `apple-touch-icon` |
| `favicon.png` | 64×64, transparent | Browser tab |

All four came from `business_cards/` — the same assets the group's business
cards are printed from, so the site and the cards match.

## Deployment

`vercel.json` rewrites everything to `index.html` for client-side routing;
`public/_redirects` does the same for Netlify.

```bash
npm run build     # → dist/
```

Point the domain at `dist/`, then update `site.url` in `src/data/site.ts`,
the canonical link in `index.html`, `public/robots.txt` and
`public/sitemap.xml` if the final domain differs from the assumed one.

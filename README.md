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

## The other group repositories

The 27 September review was checked line by line against the other four group
codebases. What it turned out to affect, and what it did not:

| Repo | Outcome |
| --- | --- |
| `ev-gambia` (Continental EV) | **Changed.** The tagline takes full stops — "Drive Electric. Live Better." — per the review, in `web/src/lib/site.ts`, `web/index.html`, the Django `SITE_TAGLINE` and the email template. |
| `ls-transport` | **Changed.** `index.html`'s `og:title` read "Your Journey, Our Commitment" while the site's own tagline, and the review, use full stops. Now consistent. |
| `sound-fire-safety` | No change needed — its tagline already matches the review exactly. |
| `edmonds/websites` (1st Edmonds, Bothell) | No change needed — see below. |

**Why the leadership changes stop at this site.** The review's "Global Chief …"
titles are *group* roles. On the subsidiary sites the same people hold
*company* roles — Abdoulie Lowe is "Chief Executive Officer / Provider" at 1st
Edmonds and "Chief Operating Officer" at Bothell Serenity, Haddy Saho is the
reverse, and both are simply "Chief Executive/Operating Officer" of LS
Transport and Sound Fire. A search for "Group Chief" across all four repos
returns nothing, so there was no group title to correct there.

Likewise "Lowe Saho" appears in none of them, and none of the subsidiary sites
carries LS Global Holdings branding or links back to the group, so the
registered-name and footer changes had nowhere to land.

**Continental EV's domain move is already under way, by hand.** That repo has
uncommitted work adding `continentalev.com` to `DJANGO_ALLOWED_HOSTS`, CORS,
CSRF and the mail host while keeping `gambiaev.com` serving. It was left alone
rather than half-migrated from here.

## Client review — 27 September 2026

`Global Holding Website -Reviews.docx` supplied replacement copy for most of
the site. All 36 of its screenshots are of the LS Global Holdings site, and
every instruction in it has been applied.

| Section | Now reads |
| --- | --- |
| About panel | "A group creating Value Through Businesses That Keep the World Moving", with three new paragraphs |
| Vision | Rewritten (mission was already rewritten in the earlier review) |
| Mission & Vision cards | The "What we do" / "Where we are going" captions removed |
| Sectors | "Essential Services. Shared Strength." — the client's stated preference from five options. Its old sub-line is gone and all four sector blurbs are rewritten |
| Companies | "One Global Group. Essential Services.", new intro, and a new tagline and summary for all five companies |
| Where we operate | "Global Reach. Local Presence.", new intro, and new copy for all three countries. The two label lines swap round — the place leads (Washington State / Banjul / Dakar) with the country beneath |
| Core values | The strapline "What every company in the group is held to" removed; all four value statements rewritten |
| Leadership (home) | "Leadership Across the Group" |
| Leadership (page hero) | "Proven Experience. Strategic Leadership." |
| Management | "Executive Leadership in Action" |
| Leadership cards | All seven standfirsts replaced with the supplied text; Abdoulie Lowe is "Group Chairman & Chief Executive Officer" |
| Our future | "Building a Legacy Across Generations" |
| Work with the group | "Choose a company or connect with LS Global Holdings." |
| Footer | New group description |

**The last item is now resolved.** The final screenshot in the document is the
*Contact* page hero, but the copy against it — "Executive Leadership in
Action" — is management copy. Confirmed with the client: it belongs to the
**Management** section on `/leadership`, which now carries it in place of
"Leading the Group Day to Day" from earlier in the same document. The Contact
hero is unchanged.

**Nothing in the document applies to the other group sites.** Every screenshot
is of this site. There are no instructions for `ls-transport`,
`sound-fire-safety` or `edmonds/websites` (1st Edmonds and Bothell Serenity),
so no changes were made in those repositories.

## Client review — earlier September 2026

Everything raised in `GLOBAL WEBSITE -Review.docx` has been applied.

**Wording**
- Mission statement replaced with the client's rewrite ("We develop and manage
  high-impact businesses…").
- Group titles now read **Global Chief …**, not *Group Chief …*, both as card
  titles and inside the bios. Abdoulie Lowe stays **Group Chairman / CEO** —
  the change is to "Chief", not to "Chairman". Nixon's *Group Chairman, KDuah
  Ministries* is a role at a different organisation and keeps its own wording.
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
| ~~Third phone number~~ | `src/data/site.ts` → `phones` | ✅ **Verified, not a typo.** All three numbers from the review are already in use on the Continental EV site (`ev-gambia/web/src/lib/site.ts`), where `+1 (325) 703-0636` is the WhatsApp line. |
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
   and the company's own governance (two of its board members are named in the
   LS Global board bios).

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
                   SectorsSection, MissionVision, FootprintSection, AboutPanel,
                   CoreValues, AdvantageSection, PersonCard, LeadershipPreview,
                   FutureBand, CtaBand, ContactForm
  pages/           One file per route
public/images/
  logos/           The five companies' own marks
  companies/       One photograph per company
  team/            Leadership portraits
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, stats, about, mission & vision, sectors, companies, footprint, values, leadership, outlook |
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

**Leadership portraits.** Photographs exist for five of the seven directors —
Abdoulie Lowe, Haddy Saho, Nixon Kwaku Duah Jr, Yankuba Sonko and Alagie
Marong. Daniel Abuga and Ambassador Sherrif Baldeh still render as an
**initials monogram** in group colours rather than a stock portrait of someone
else: nobody should mistake a model for a director. To switch one on, drop a
file into `public/images/team/<slug>.jpg` and set `photo` on that person in
`src/data/leadership.ts`. Portraits are cropped to 4:5 at 900px wide, which is
the shape the cards render.

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

### Company logos

The five marks range from square (Sound Fire, ratio 1.0) to a very wide
wordmark (1st Edmonds, 3.3). Anywhere they appear they are given a **wide,
fixed-height box** with `object-contain` rather than a square one — a square
rendered the wide wordmarks at 48×15px, which is unreadable. The files are also
trimmed to their content bounds, so none of the box is spent on baked-in
margin. `logoClass` in `src/data/companies.ts` carries any per-logo tweak.

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

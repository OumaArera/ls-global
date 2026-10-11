import {
  BatteryCharging,
  Bus,
  Flame,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';

/**
 * The operating companies, and the sectors they sit in.
 *
 * This file is what makes the group site a hub: every company carries the
 * public domain of its own website, and the card, the detail page and the
 * footer all link out to it. Those five domains are the handover points — if
 * one changes, change it here and it changes everywhere.
 *
 * `website` is where a visitor actually lands TODAY — it is checked, not
 * assumed. Two of the five companies have no custom domain in DNS yet
 * (soundfireandsafety.com and lstransport.sn both return NXDOMAIN), so they
 * point at their live Vercel deployments instead. A hub whose links 404 is
 * worse than one pointing at a working temporary URL.
 *
 * Client review (Sep 2026): Continental EV now links to continentalev.com
 * rather than gambiaev.com. Both resolve and serve the same site;
 * continentalev.com is the name the client wants shown.
 *
 * TODO (client, before launch):
 *  - When a `pendingDomain` below is registered and pointed at its site, move
 *    it into `website`, update `websiteLabel` to match, and delete the
 *    `pendingDomain` line. Nothing else needs to change — the cards, footer,
 *    contact page, 404 page and JSON-LD all read from here.
 *  - `lstransport.sn` is itself only an assumption, carried over from the LS
 *    Transport build where it is still flagged unconfirmed.
 */

export type SectorSlug = 'care' | 'energy' | 'safety' | 'transport';

export type Sector = {
  slug: SectorSlug;
  name: string;
  /** Heading used in the document's own words. */
  label: string;
  icon: LucideIcon;
  /** Faithful to the operating company's own site palette. */
  accent: string;
  image: string;
  summary: string;
};

export const sectors: Sector[] = [
  {
    slug: 'care',
    name: 'Care Services',
    label: 'Care Services (Adult Family Homes)',
    icon: HeartHandshake,
    accent: '#1f81b1',
    image: '/images/sector-care.jpg',
    summary:
      '1st Edmonds and Bothell Serenity provide high-quality residential care focused on dignity, safety, and personalized support. Our homes combine compassionate care with professional standards in a safe and welcoming environment.',
  },
  {
    slug: 'energy',
    name: 'Energy & EV Infrastructure',
    label: 'Energy & EV Infrastructure',
    icon: BatteryCharging,
    accent: '#17803d',
    image: '/images/sector-energy.webp',
    summary:
      'Continental EV & Energy Center is building the infrastructure for The Gambia’s transition to electric mobility and clean energy. Through EV charging networks, scalable energy solutions, and market development, the company is positioned to support the country’s growing demand for modern, sustainable infrastructure.',
  },
  {
    slug: 'safety',
    name: 'Fire Safety & Protection',
    label: 'Fire Safety & Protection',
    icon: Flame,
    accent: '#c8102e',
    image: '/images/sector-safety.jpg',
    summary:
      'Sound Fire & Safety LLC provides essential fire protection, equipment, and compliance solutions across residential, commercial, and public sectors. Recurring inspections, maintenance, and refilling services foster long-term customer relationships and consistent service demand.',
  },
  {
    slug: 'transport',
    name: 'Transportation Services',
    label: 'Transportation Services',
    icon: Bus,
    accent: '#bd7616',
    image: '/images/sector-transport.jpg',
    summary:
      'LS Transport provides reliable mobility solutions across Senegal, connecting people, businesses, and communities. Its services strengthen regional connectivity and support economic growth.',
  },
];

export const sectorBySlug = (slug: SectorSlug) =>
  sectors.find((sector) => sector.slug === slug)!;

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  sector: SectorSlug;
  /** Where the link actually goes today. Verified to respond. */
  website: string;
  /** Bare host, shown as the link label. Always matches `website`. */
  websiteLabel: string;
  /** The custom domain this company is meant to move to, once it is in DNS. */
  pendingDomain?: string;
  country: string;
  location: string;
  logo: string;
  /** How the logo sits on a white card: some marks are square, some are wide. */
  logoClass: string;
  image: string;
  imageAlt: string;
  tagline: string;
  /** One-paragraph summary, used on the card. */
  summary: string;
  /** Longer copy for the company's own page on this site. */
  body: string[];
  highlights: string[];
};

export const companies: Company[] = [
  {
    slug: '1st-edmonds',
    name: '1st Edmonds Adult Family Home',
    shortName: '1st Edmonds AFH',
    sector: 'care',
    website: 'https://www.1stedmonds.com',
    websiteLabel: '1stedmonds.com',
    country: 'United States',
    location: 'Snohomish County, Washington',
    logo: '/images/logos/1st-edmonds.png',
    logoClass: 'h-12 w-auto',
    image: '/images/companies/1st-edmonds.jpg',
    imageAlt: 'The front of 1st Edmonds Adult Family Home, with its lawn and planted borders',
    tagline: 'Personalized Residential Care in Washington State',
    summary:
      'A licensed adult family home providing 24-hour care for seniors and vulnerable adults in a warm, home-like setting where dignity, comfort, safety, and personalized support come first.',
    body: [
      '1st Edmonds Adult Family Home is one of two licensed residential care providers LS Global Holdings operates in Washington State. Together with Bothell Serenity Corp it runs eight branches across Snohomish County, each known for high-quality service delivery and strong regulatory compliance.',
      'Care is person-centred: medication assistance, behavioural support, individualised care planning and coordination with healthcare professionals, delivered in a home rather than an institution. Group oversight ensures both homes maintain exceptional standards of care, safety and professionalism.',
    ],
    highlights: [
      'Licensed by Washington State',
      'Person-centred care planning',
      'Part of an eight-branch care network',
    ],
  },
  {
    slug: 'bothell-serenity',
    name: 'Bothell Serenity Corp',
    shortName: 'Bothell Serenity',
    sector: 'care',
    website: 'https://www.bothellserenity.com',
    websiteLabel: 'bothellserenity.com',
    country: 'United States',
    location: 'Bothell, Washington',
    logo: '/images/logos/bothell-serenity.png',
    logoClass: 'h-12 w-auto',
    image: '/images/companies/bothell-serenity.jpg',
    imageAlt: 'The exterior of a Bothell Serenity adult family home',
    tagline: 'Personalized Residential Care in Washington State',
    summary:
      'A licensed adult family home group providing 24-hour care tailored to each resident’s individual needs, preferences, and routines—delivered with compassion, dignity, and professional support in a home-like setting.',
    body: [
      'Bothell Serenity Corp operates licensed adult family homes in Washington State alongside 1st Edmonds, forming the group’s care services sector. Between them the two providers run eight branches, all held to the same standards of care, safety and compliance.',
      'Day-to-day operations are led with clinical oversight — medication management, resident wellness monitoring, individualised care planning and continuity of care with outside healthcare professionals — under Washington State’s Adult Family Home requirements.',
    ],
    highlights: [
      'Licensed by Washington State',
      'Clinical oversight of daily operations',
      'Part of an eight-branch care network',
    ],
  },
  {
    slug: 'continental-ev',
    name: 'Continental EV & Energy Center',
    shortName: 'Continental EV',
    sector: 'energy',
    website: 'https://www.continentalev.com',
    websiteLabel: 'continentalev.com',
    country: 'The Gambia',
    location: 'Banjul, The Gambia',
    logo: '/images/logos/continental-ev.png',
    logoClass: 'h-12 w-auto',
    image: '/images/companies/continental-ev.webp',
    imageAlt: 'An electric SUV on an open road under a bright sky',
    tagline: 'Drive Electric. Live Better.',
    summary:
      'Delivering practical clean-energy solutions for The Gambia through EV charging infrastructure, reliable energy systems, and public education—making electric mobility and sustainable energy more accessible for everyday use.',
    body: [
      'Continental EV & Energy Center is pioneering electric mobility and renewable energy adoption in The Gambia. It delivers EV charging infrastructure, energy solutions and public education in support of national modernization.',
      'The Center is one of the country’s pioneering private-sector initiatives in clean energy, and its work extends beyond infrastructure into workforce development — preparing the next generation of technicians and energy professionals. Governance and operations are led from within the group: Yankuba Sonko sits on its board as a Non-Executive Director, and Alagie Marong is its Director of Operations.',
    ],
    highlights: [
      'EV charging infrastructure',
      'Renewable energy solutions',
      'Technician training and public education',
    ],
  },
  {
    slug: 'sound-fire-safety',
    name: 'Sound Fire & Safety LLC',
    shortName: 'Sound Fire & Safety',
    sector: 'safety',
    website: 'https://soundfireandsafety.com',
    websiteLabel: 'soundfireandsafety.com',
    pendingDomain: 'www.soundfireandsafety.com',
    country: 'United States',
    location: 'Everett, Washington',
    logo: '/images/logos/sound-fire-safety.jpg',
    logoClass: 'h-12 w-auto rounded',
    image: '/images/companies/sound-fire-safety.jpg',
    imageAlt: 'A range of fire extinguisher types lined up against a white wall',
    tagline: 'Your Partner in Protection',
    summary:
      'Providing reliable fire and life-safety solutions across Washington, with ongoing inspections, maintenance, refilling, and compliance support designed to keep customers protected, prepared, and supported year after year.',
    body: [
      'Sound Fire & Safety LLC offers essential fire safety services, equipment, and compliance support for homes, businesses, and public institutions across Washington State.',
      'The company supplies and services fire extinguishers, carries out inspection and compliance work, and runs safety training for residential, commercial and industrial clients. It is expanding its service coverage across Washington with the group’s support in market development and service diversification.',
    ],
    highlights: [
      'Fire extinguisher supply and servicing',
      'Inspection and code compliance',
      'Fire and life-safety training',
    ],
  },
  {
    slug: 'ls-transport',
    name: 'LS Transport',
    shortName: 'LS Transport',
    sector: 'transport',
    website: 'https://lstransportsen.com',
    websiteLabel: 'lstransportsen.com',
    pendingDomain: 'www.lstransport.sn',
    country: 'Senegal',
    location: 'Dakar, Senegal',
    logo: '/images/logos/ls-transport.png',
    logoClass: 'h-12 w-auto',
    image: '/images/companies/ls-transport.jpg',
    imageAlt: 'An LS Transport intercity passenger coach',
    tagline: 'Your Journey. Our Commitment.',
    summary:
      'Providing reliable passenger, cargo, and corporate transport across Senegal—strengthening regional connectivity, expanding access to essential mobility, and supporting local economic development.',
    body: [
      'LS Transport in Senegal provides reliable mobility solutions, supporting community movement, logistics, and regional development.',
      'Operating out of Dakar, the company serves passengers, freight clients and corporate and government accounts, and is building the operational structure to take a lasting position in West Africa’s regional mobility and logistics markets.',
    ],
    highlights: [
      'Passenger and intercity transport',
      'Cargo and goods movement',
      'Corporate and government accounts',
    ],
  },
];

export const companyBySlug = (slug: string) =>
  companies.find((company) => company.slug === slug);

export const companiesInSector = (sector: SectorSlug) =>
  companies.filter((company) => company.sector === sector);

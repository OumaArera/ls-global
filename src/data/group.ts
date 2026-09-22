import {
  Award,
  Building2,
  Globe2,
  Layers,
  Lightbulb,
  Network,
  ScrollText,
  ShieldCheck,
  Users,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

/**
 * Group-level copy: mission, vision, values, strategic advantage and outlook.
 * Reproduced from the content document, with the mission statement replaced by
 * the rewrite supplied in the client review (Sep 2026). The non-breaking
 * hyphens in "high-impact" and "multi-sector" are normalised to ordinary
 * hyphens so the text is searchable and wraps properly.
 */

export const mission =
  'We develop and manage high-impact businesses that strengthen communities, elevate quality of life, and advance modern infrastructure across care services, energy, safety, management, and transportation.';

export const vision =
  'To become a leading multi-sector group in Africa and the United States — delivering trusted care, sustainable energy solutions, reliable transportation, and essential safety and management services that empower people and drive national development.';

export type Value = {
  name: string;
  body: string;
  icon: LucideIcon;
};

export const values: Value[] = [
  {
    name: 'Integrity',
    body: 'We operate with transparency, accountability, and trust.',
    icon: ShieldCheck,
  },
  {
    name: 'Innovation',
    body: 'We embrace modern solutions that elevate service quality and efficiency.',
    icon: Lightbulb,
  },
  {
    name: 'Community Impact',
    body: 'We prioritize people, safety, and long-term development.',
    icon: UsersRound,
  },
  {
    name: 'Excellence',
    body: 'We maintain high standards across all operations and services.',
    icon: Award,
  },
];

export type Advantage = {
  title: string;
  icon: LucideIcon;
};

export const advantages: Advantage[] = [
  { title: 'Multi-sector expertise across essential industries', icon: Layers },
  { title: 'Operations in both the U.S. and West Africa', icon: Globe2 },
  { title: 'Strong leadership with proven track records', icon: Users },
  { title: 'Commitment to modernization and national development', icon: Building2 },
  { title: 'Integrated systems, shared values, and unified governance', icon: Network },
];

export const future = {
  heading: 'Our Future',
  body: 'LS Global Holdings is expanding into new markets, strengthening its infrastructure, and investing in technology-driven solutions. Our long-term goal is to become a continental leader in care, energy, safety, and transport — building a legacy of impact across generations.',
  image: '/images/future.webp',
  imageAlt: 'A technician working on energy infrastructure',
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export const stats: Stat[] = [
  { value: '4', label: 'Sectors', detail: 'Care, energy, safety, transport' },
  { value: '5', label: 'Operating companies', detail: 'Each with its own website' },
  { value: '3', label: 'Countries', detail: 'United States, Senegal, The Gambia' },
  { value: '8', label: 'Care branches', detail: 'Across Washington State' },
];

export type Region = {
  country: string;
  city: string;
  image: string;
  imageAlt: string;
  /** Slugs from `companies`, in the order they should appear. */
  companySlugs: string[];
  body: string;
};

export const footprint: Region[] = [
  {
    country: 'United States',
    city: 'Washington State',
    image: '/images/footprint-usa.jpg',
    imageAlt: 'Modern corporate office towers against a clear sky',
    companySlugs: ['1st-edmonds', 'bothell-serenity', 'sound-fire-safety'],
    body: 'Licensed residential care across eight branches in Snohomish County, and fire-protection services for homes, businesses and public institutions statewide.',
  },
  {
    country: 'The Gambia',
    city: 'Banjul',
    image: '/images/footprint-gambia.jpg',
    imageAlt: 'A modern commercial office building and its forecourt',
    companySlugs: ['continental-ev'],
    body: 'EV charging infrastructure, renewable energy solutions and technician training — one of the country’s pioneering private-sector clean-energy initiatives.',
  },
  {
    country: 'Senegal',
    city: 'Dakar',
    image: '/images/footprint-senegal.jpg',
    imageAlt: 'A modern corporate building with a glass and metal facade',
    companySlugs: ['ls-transport'],
    body: 'Passenger mobility, cargo movement and corporate transport supporting community movement, logistics and regional development.',
  },
];

/** The "who we are" panel on the home and about pages. */
export const about = {
  eyebrow: 'Who we are',
  heading: 'A group built around essential services',
  body: [
    'LS Global Holdings is a multinational enterprise operating across the United States, Senegal and The Gambia. Its portfolio spans residential care, fire safety, transportation and clean-energy infrastructure.',
    'Each company runs its own operations, under its own brand, with its own customers. What they share is governance: one board, one set of values, and integrated financial, operational and compliance systems across all three countries.',
  ],
  image: '/images/boardroom.jpg',
  imageAlt: 'A group meeting around a table in an office',
  icon: ScrollText,
};

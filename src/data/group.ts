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
  'To become a leading multi-sector group across Africa and the United States, delivering trusted care, sustainable energy, reliable transportation, and essential safety and management services that strengthen communities and support long-term economic development.';

export type Value = {
  name: string;
  body: string;
  icon: LucideIcon;
};

export const values: Value[] = [
  {
    name: 'Integrity',
    body: 'We act with honesty, transparency, and accountability.',
    icon: ShieldCheck,
  },
  {
    name: 'Innovation',
    body: 'We embrace modern solutions to deliver better, faster, and more reliable services for our customers.',
    icon: Lightbulb,
  },
  {
    name: 'Community Impact',
    body: 'We strengthen communities through safer services, greater opportunity, and sustainable development.',
    icon: UsersRound,
  },
  {
    name: 'Excellence',
    body: 'We pursue excellence through exceptional standards, consistent quality, and dependable service.',
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
  title: 'Building a Legacy Across Generations',
  body: 'LS Global Holdings is expanding into new markets, strengthening infrastructure, and investing in technology-driven solutions. Our long-term vision is to build a leading multi-sector group across Africa and the United States—creating lasting value for communities, economies, and future generations.',
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
  /** The headline on the card — the place the companies actually operate in. */
  place: string;
  /** The smaller line beneath it. */
  country: string;
  image: string;
  imageAlt: string;
  /** Slugs from `companies`, in the order they should appear. */
  companySlugs: string[];
  body: string;
};

export const footprint: Region[] = [
  {
    place: 'Washington State',
    country: 'USA',
    image: '/images/footprint-usa.jpg',
    imageAlt: 'Modern corporate office towers against a clear sky',
    companySlugs: ['1st-edmonds', 'bothell-serenity', 'sound-fire-safety'],
    body: 'In Snohomish County, our residential care operations serve seniors and vulnerable adults across eight licensed locations. Statewide, our fire protection business provides safety equipment, inspections, maintenance, and compliance support for homes, businesses, and public institutions.',
  },
  {
    place: 'Banjul',
    country: 'The Gambia',
    image: '/images/footprint-gambia.jpg',
    imageAlt: 'A modern commercial office building and its forecourt',
    companySlugs: ['continental-ev'],
    body: 'One of The Gambia’s pioneering private-sector clean-energy initiatives, delivering EV charging infrastructure, practical renewable energy solutions, and technician training to support the country’s transition to sustainable energy.',
  },
  {
    place: 'Dakar',
    country: 'Senegal',
    image: '/images/footprint-senegal.jpg',
    imageAlt: 'A modern corporate building with a glass and metal facade',
    companySlugs: ['ls-transport'],
    body: 'Passenger transport, cargo and goods delivery, and dedicated corporate transport services—connecting communities, supporting business logistics, and strengthening regional development across Senegal.',
  },
];

export const about = {
  eyebrow: 'Who we are',
  heading: 'A group creating Value Through Businesses That Keep the World Moving',
  body: [
    'LS Global Holdings is a multinational group operating across the United States, Senegal, and The Gambia, with businesses in residential care, fire safety, transportation, and clean-energy infrastructure.',
    'Each company operates independently under its own brand and serves its own customers, while benefiting from the strength of a unified group. LS Global Holdings provides shared leadership, governance, financial oversight, operational standards, and compliance across all three countries.',
    'Together, our companies are united by a common purpose: to provide essential services that support people, communities, and sustainable growth.',
  ],
  image: '/images/boardroom.jpg',
  imageAlt: 'A group meeting around a table in an office',
  icon: ScrollText,
};

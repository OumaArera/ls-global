/**
 * Single source of truth for group-level details.
 *
 * TODO (client to confirm before launch):
 *  - The content document supplied NO contact details for the holding company
 *    itself — no phone, no email, no registered address. `phones` is therefore
 *    intentionally EMPTY and every phone CTA stays hidden until it is filled.
 *    `email` and `url` are placeholders built from the company name.
 */

export const site = {
  name: 'LS Global Holdings',
  shortName: 'LS Global',
  legalName: 'Lowe Saho Global Holdings',
  tagline: 'One Group. Many Solutions. Real Impact.',
  /** The client's mark, transparent — reads correctly on white and on navy. */
  logo: '/images/logo.png',
  /** The supplied artwork as delivered, on its white background. */
  logoFull: '/images/logo-full.png',
  url: 'https://www.lsglobalholdings.com',
  description:
    'LS Global Holdings is a multi-sector group operating across the United States, Senegal and The Gambia — in residential care, EV and energy infrastructure, fire safety, and transportation.',
} as const;

export type PhoneNumber = {
  label: string;
  display: string;
  href: string;
};

/**
 * Intentionally empty — see the TODO above. Once the group's number is
 * confirmed, add it here and the top bar, mobile header, footer and contact
 * page all switch their phone CTAs on automatically:
 *   { label: 'Group office', display: '+1 (425) 000-0000', href: 'tel:+14250000000' }
 */
export const phones: PhoneNumber[] = [];

export const contact = {
  email: 'info@lsglobalholdings.com',
  /** Washington State is where the U.S. operating companies are licensed. */
  regions: [
    { label: 'United States', detail: 'Washington State — care services and fire safety' },
    { label: 'The Gambia', detail: 'Banjul — EV and energy infrastructure' },
    { label: 'Senegal', detail: 'Dakar — transportation and logistics' },
  ],
} as const;

/**
 * Group-level CTAs open the visitor's mail client with the subject pre-filled,
 * rather than routing everything through the contact form.
 */
export const mailtoLink = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject: `${subject} — website enquiry` });
  if (body) params.set('body', body);
  return `mailto:${contact.email}?${params.toString().replace(/\+/g, '%20')}`;
};

export const partnerMailto = mailtoLink(
  'Partnership enquiry',
  [
    'Hello LS Global Holdings,',
    '',
    'I would like to discuss working with the group. My details:',
    '',
    'Name:',
    'Organisation:',
    'Country:',
    'Which company or sector this concerns:',
    'What I am proposing:',
    '',
  ].join('\n'),
);

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Companies',
    href: '/companies',
    children: [
      { label: '1st Edmonds AFH', href: '/companies/1st-edmonds' },
      { label: 'Bothell Serenity Corp', href: '/companies/bothell-serenity' },
      { label: 'Continental EV & Energy Center', href: '/companies/continental-ev' },
      { label: 'Sound Fire & Safety LLC', href: '/companies/sound-fire-safety' },
      { label: 'LS Transport', href: '/companies/ls-transport' },
    ],
  },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
];

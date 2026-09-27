/**
 * Single source of truth for group-level details.
 *
 * TODO (client to confirm before launch):
 *  - Phone numbers came from the client review (Sep 2026). NOTE: the third
 *    number was given as 325-703-0636; 325 is a Texas area code while the
 *    other two are Washington (425), so it is worth confirming it is not a
 *    typo for 425-703-0636.
 *  - `email` and `url` are still placeholders built from the company name —
 *    the content document and the review both left them unstated.
 */

export const site = {
  name: 'LS Global Holdings',
  shortName: 'LS Global',
  legalName: 'LS Global Holdings',
  tagline: 'One Group. Many Solutions. Real Impact.',
  /** The client's mark, transparent — reads correctly on white and on navy. */
  logo: '/images/logo.png',
  /** The supplied artwork as delivered, on its white background. */
  logoFull: '/images/logo-full.png',
  url: 'https://www.lsglobalholdings.com',
  description:
    'LS Global Holdings is a multi-sector group operating across the United States, Senegal, and The Gambia, delivering essential services in residential care, clean energy and EV infrastructure, fire safety, and transportation.',
} as const;

export type PhoneNumber = {
  label: string;
  display: string;
  href: string;
};

export const phones: PhoneNumber[] = [
  { label: 'Main', display: '(425) 350-2217', href: 'tel:+14253502217' },
  { label: 'Service', display: '(425) 346-9231', href: 'tel:+14253469231' },
  { label: 'Office', display: '(325) 703-0636', href: 'tel:+13257030636' },
];

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

/**
 * Board of Directors and Management.
 *
 * The content document lists the four executives twice — once under BOARD OF
 * DIRECTORS and again under MANAGEMENT, with identical bios. Rather than
 * duplicate the text, each person carries `board` and `management` flags and
 * the two sections on /leadership filter the same list.
 *
 * Bios are the client's own words, reproduced as supplied.
 *
 * TODO (client to confirm before launch):
 *  - Photographs exist for five of the seven. Daniel Abuga and Ambassador
 *    Sherrif Baldeh still render as an initials monogram in group colours;
 *    drop a file into `public/images/team/<slug>.jpg` and set `photo` to
 *    switch one on.
 *  - The document heads this person's entry "Hady Saho" and spells her
 *    "Haddy Saho" throughout the body. "Haddy" is used here, matching the
 *    care-home sites.
 *
 * Per the client review (Sep 2026): the group titles read "Global Chief …",
 * not "Group Chief …", in the card titles and inside the bios. The change is
 * to "Chief" only — Abdoulie Lowe stays "Group Chairman / CEO". Note that
 * Nixon's "Group Chairman, KDuah Ministries" is a role at a DIFFERENT
 * organisation and deliberately keeps its own wording.
 *
 * `lead` is the short card standfirst supplied in the Sep 2026 review, used
 * verbatim. `bio` holds the client's full write-up, shown on the detail page.
 */

import { companyBySlug } from './companies';

/** Read from the company list so the address survives the next domain change. */
const continentalEv = companyBySlug('continental-ev')?.website;

export type ExternalRole = {
  role: string;
  /** The organisation's own website, where it has one. */
  href?: string;
};

export type Person = {
  slug: string;
  name: string;
  /** Title as it appears under the Board of Directors. */
  boardRole: string;
  /** Title as it appears under Management, when they sit there too. */
  managementRole?: string;
  board: boolean;
  management: boolean;
  /** Executive directors sort above non-executives. */
  executive: boolean;
  photo?: string;
  /** Where in the group they are based, for the card. */
  based: string;
  /** Roles held outside the group, named in the document. */
  alsoServes?: ExternalRole[];
  /** Pulled to the top of the detail page as a standfirst. */
  lead: string;
  bio: string[];
};

export const people: Person[] = [
  {
    slug: 'abdoulie-lowe',
    name: 'Abdoulie Lowe',
    boardRole: 'Group Chairman & Chief Executive Officer',
    managementRole: 'Group Chief Executive Officer',
    board: true,
    management: true,
    executive: true,
    photo: '/images/team/abdi.jpeg',
    based: 'Washington State, United States',
    lead:
      'Abdoulie Lowe leads LS Global Holdings across the United States, Senegal, and The Gambia, providing strategic direction, executive leadership, and oversight across the group’s diverse portfolio of companies.',
    bio: [
      'Abdoulie Lowe is the Group Chairman and Chief Executive Officer of LS Global Holdings, a multinational enterprise operating across the United States, Senegal, and The Gambia. With a portfolio that spans healthcare, fire safety, transportation, and clean-energy infrastructure, Abdoulie leads the group with a strategic vision focused on sustainable growth, operational excellence, and community impact.',
      'In the United States, Abdoulie oversees 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, two licensed residential care facilities with eight branches known for high-quality service delivery and strong regulatory compliance. His leadership ensures that both homes maintain exceptional standards of care, safety, and professionalism for seniors and vulnerable adults. He also directs Sound Fire & Safety LLC, a Washington-based safety services company providing essential fire-protection solutions to homes, businesses, and public institutions.',
      'Across West Africa, Abdoulie has expanded LS Global Holdings into critical development sectors. In Senegal, he leads LS Transport, a mobility and logistics company supporting community movement and commercial activity. In The Gambia, he is the driving force behind Continental EV & Energy Center, one of the country’s pioneering private-sector initiatives in electric mobility and renewable-energy adoption. His work in clean-energy infrastructure is helping modernize national systems and prepare the next generation of technicians and energy professionals.',
      'Abdoulie’s leadership is defined by integrity, innovation, and a commitment to building businesses that strengthen communities. His long-term vision positions LS Global Holdings as a continental leader in essential services, delivering impact across regions while shaping a sustainable future for the next generation.',
    ],
  },
  {
    slug: 'haddy-saho',
    name: 'Haddy Saho',
    boardRole: 'Global Chief Operating Officer',
    managementRole: 'Global Chief Operating Officer',
    board: true,
    management: true,
    executive: true,
    photo: '/images/team/haddy-saho.jpg',
    based: 'Washington State, United States',
    lead:
      'Haddy Saho leads operations across LS Global Holdings in the United States, Senegal, and The Gambia, providing operational leadership, organizational oversight, and coordination across the group’s diverse portfolio of companies.',
    bio: [
      'Haddy Saho serves as the Global Chief Operating Officer of LS Global Holdings, providing operational leadership across the organization’s multi-sector portfolio in the United States, Senegal, and The Gambia. With a professional background in nursing, adult family home administration, and organizational management, Haddy brings a unique blend of clinical expertise, operational discipline, and strategic oversight to the group’s expanding footprint.',
      'In the United States, Haddy oversees day-to-day operations for 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, ensuring both facilities maintain the highest standards of care, compliance, and resident safety. Her clinical training and hands-on leadership style strengthen staff performance, regulatory adherence, and the overall quality of life for residents. She is also responsible for operational coordination within Sound Fire & Safety LLC, supporting the delivery of essential fire-protection services to homes, businesses, and public institutions.',
      'Across West Africa, Haddy plays a central role in the operational development of LS Global Holdings’ regional ventures. She supports strategic planning and organizational structure for LS Transport Senegal, helping build reliable mobility and logistics services that serve communities and commercial clients. In The Gambia, she contributes to the operational framework of Continental EV & Energy Center, guiding workforce development, administrative systems, and the implementation of clean-energy initiatives that support national modernization.',
      'Haddy’s leadership is defined by precision, accountability, and a deep commitment to service. Her ability to manage complex operations, build strong teams, and uphold high standards makes her an essential pillar of LS Global Holdings. Through her work, the group continues to strengthen its operational foundation, expand into new markets, and deliver impactful services across continents.',
    ],
  },
  {
    slug: 'nixon-kwaku-duah',
    name: 'Kwaku Duah Junior',
    boardRole: 'Global Chief Business Development Officer',
    managementRole: 'Global Chief Business Development Officer',
    board: true,
    management: true,
    executive: true,
    photo: '/images/team/nixon-kwaku-duah.jpg',
    based: 'Texas, United States',
    alsoServes: [
      { role: 'CEO, Nixol Management & Consult (Texas)' },
      { role: 'Group Chairman, KDuah Ministries (Ghana)' },
    ],
    lead:
      'Kwaku Duah Jr leads business development across LS Global Holdings in the United States, Senegal, and The Gambia, driving strategic growth, partnerships, and new market opportunities across the group’s diverse portfolio of companies.',
    bio: [
      'Kwaku Duah Jr serves as the Global Chief Business Development Officer of LS Global Holdings, leading the organization’s strategic growth initiatives across its multinational operations in the United States, Senegal, and The Gambia. With advanced academic training and a strong professional foundation—MSc, MBA, PMP, CFE, CPhT, RPhT—Kwaku brings a rare combination of analytical expertise, development management, and cross-sector leadership to the group’s long-term expansion strategy.',
      'Kwaku is also the Chief Executive Officer of Nixol Management & Consult in Texas, where he provides executive advisory, organizational development, and business optimization services to companies across multiple industries. His leadership at Nixol strengthens his ability to introduce structured growth systems, financial insight, and strategic foresight into LS Global Holdings’ global operations. Additionally, Kwaku serves as the Group Chairman of KDuah Ministries in Ghana, guiding organizational growth, leadership development, and community-impact initiatives that reflect his commitment to ethical governance and transformational leadership.',
      'In the United States, Kwaku plays a key role in strengthening the business infrastructure of 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, supporting operational planning, compliance systems, and growth initiatives that enhance service quality and organizational performance. His analytical approach and development expertise help both facilities maintain high standards while preparing for future expansion. Kwaku also contributes to strategic planning within Sound Fire & Safety LLC, supporting market development, service diversification, and operational alignment as the company expands its fire-protection services across Washington State.',
      'Across West Africa, Kwaku is instrumental in shaping LS Global Holdings’ continental growth strategy. He supports business development for LS Transport Senegal, helping the company strengthen its operational structure and position itself within regional mobility and logistics markets. In The Gambia, Kwaku plays a central role in the development of Continental EV & Energy Center, contributing to project planning, government engagement, and the establishment of EV charging infrastructure and renewable-energy initiatives that support national modernization.',
      'Kwaku’s leadership is defined by strategic thinking, disciplined execution, and a commitment to building sustainable, future-focused enterprises. His ability to integrate financial insight, development management, and cross-sector coordination makes him a key driver of LS Global Holdings’ long-term growth and continental impact.',
    ],
  },
  {
    slug: 'daniel-abuga',
    name: 'Daniel Abuga',
    boardRole: 'Global Chief Financial Officer',
    managementRole: 'Global Chief Financial Officer',
    board: true,
    management: true,
    executive: true,
    based: 'United States',
    photo: '/images/team/daniel_abuga.jpeg',
    alsoServes: [
      { role: 'CEO, Danclare Financial Group', href: 'https://danclare.com' },
      { role: 'Regional Marketing Director, Vantage Financial Alliance' },
    ],
    lead:
      'Daniel Abuga leads financial management across LS Global Holdings in the United States, Senegal, and The Gambia, providing financial strategy, oversight, and fiscal discipline across the group’s diverse portfolio of companies.',
    bio: [
      'Daniel Abuga serves as the Global Chief Financial Officer of LS Global Holdings, providing financial leadership across the organization’s multinational operations in the United States, Senegal, and The Gambia. With deep expertise in financial governance, investment strategy, and multi-entity fiscal management, Daniel plays a central role in ensuring the long-term financial strength, transparency, and sustainability of the group’s diverse business portfolio.',
      'Daniel is also the Chief Executive Officer of Danclare Financial Group, a U.S.-based financial services firm specializing in business finance, investment structuring, and organizational financial planning. Danclare’s own practice is built around strategic tax advisory for growing healthcare providers, spanning tax structure optimization, multi-entity planning, and tax compliance and preparation. Through Danclare, he brings advanced financial systems, disciplined governance, and strategic capital solutions that reinforce LS Global Holdings’ financial foundation and support its expansion across multiple sectors. In addition to his executive responsibilities, Daniel serves as the Regional Marketing Director for Vantage Financial Alliance, where he leads regional growth initiatives, financial education programs, and market development strategies.',
      'Within the United States, Daniel oversees financial operations for 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, managing budgeting, financial reporting, regulatory compliance, and cost-efficiency strategies that support high-quality care delivery. His disciplined financial approach ensures both facilities meet Washington State’s strict regulatory standards while maintaining strong operational performance. Daniel also directs financial planning for Sound Fire & Safety LLC, guiding revenue management, investment strategy, and financial forecasting as the company expands its fire-protection services across Washington State.',
      'Across West Africa, Daniel plays a key role in the financial development of LS Global Holdings’ regional ventures. He supports capital planning and financial structuring for LS Transport Senegal, ensuring sustainable growth supported by sound financial systems. In The Gambia, he contributes to the financial architecture of Continental EV & Energy Center, helping establish funding models, project financing, and governance frameworks for EV charging infrastructure and renewable-energy initiatives.',
      'Daniel’s leadership is defined by integrity, analytical precision, and a commitment to financial excellence. His ability to manage complex financial ecosystems across multiple countries makes him a critical pillar of LS Global Holdings’ growth, stability, and long-term strategic success.',
    ],
  },
  {
    slug: 'yankuba-sonko',
    name: 'Yankuba Sonko',
    boardRole: 'Non-Executive Director',
    board: true,
    management: false,
    executive: false,
    photo: '/images/team/yankuba.jpeg',
    based: 'The Gambia',
    alsoServes: [
      { role: 'Head of Chambers, Knight Legal Practice' },
      { role: 'Non-Executive Director, Continental EV & Energy Center', href: continentalEv },
    ],
    lead:
      'Yankuba Sonko brings more than four decades of experience in legal practice, national security, policing, diplomacy, governance, and public administration, providing LS Global Holdings with strategic insight, legal perspective, and governance oversight.',
    bio: [
      'Yankuba Sonko is a distinguished Gambian legal, security, and governance professional with more than four decades of service across policing, diplomacy, public administration, and legal practice. He holds a Bar Professional Certificate from The Gambia Law School, an LL.B (Honours) from Manchester Metropolitan University, a Certificate in Security Management from the Nigeria Police Academy, and earlier qualifications in teaching and police instruction. His academic and professional training form the foundation of a career defined by discipline, integrity, and national impact.',
      'Yankuba has served in some of the highest offices in The Gambia, including Minister of Interior, Inspector General of Police, State Counsel at the Ministry of Justice, and Diplomatic Relations Officer at the Ministry of Foreign Affairs. He has led major national institutions, managed complex security operations, and overseen reforms that strengthened governance and public safety. His leadership extended internationally when he served as Regional Commander under the United Nations Transitional Administration in East Timor (UNTAET), where he contributed to post-conflict stabilization and institutional rebuilding.',
      'In the legal sector, Yankuba is the Head of Chambers at Knight Legal Practice, where he provides advisory services, litigation expertise, and policy guidance. He has also chaired the Local Government Service Commission and served as a consultant for drafting the Police Act and developing intelligence models for national security services. His involvement in the State Land Allocation Taskforce further demonstrates his commitment to transparency, accountability, and institutional strengthening.',
      'As a Non-Executive Director of LS Global Holdings, Yankuba brings unmatched experience in governance, compliance, risk management, and organizational discipline. His background in law, policing, diplomacy, and public administration enables him to provide strategic guidance that supports the company’s operational integrity and long-term growth. He contributes a steady, principled voice to the board, ensuring that decisions are grounded in ethical leadership, regulatory alignment, and sound institutional judgment.',
    ],
  },
  {
    slug: 'sherrif-baldeh',
    name: 'Ambassador Sherrif Baldeh',
    boardRole: 'Non-Executive Director',
    board: true,
    management: false,
    executive: false,
    based: 'The Gambia',
    alsoServes: [
      { role: 'CEO and Chief Diplomatic Strategist, Sofora ITECH Diplomatic Consultancy' },
      { role: 'Represents The Gambia at the Africa World Conference of Mayors' },
    ],
    lead:
      'Ambassador Sherrif Baldeh brings more than two decades of experience in diplomacy, institutional development, municipal governance, and cross-border economic cooperation, providing LS Global Holdings with strategic insight into international partnerships, regional development, and multilateral engagement.',
    bio: [
      'Ambassador Sherrif Baldeh is a seasoned Pan-African diplomat, institutional architect, and development strategist with more than twenty years of experience in multilateral engagement, municipal governance, and cross-border economic cooperation. He serves as Chief Executive Officer and Chief Diplomatic Strategist of Sofora ITECH Diplomatic Consultancy and represents The Gambia at the Africa World Conference of Mayors (United Nations of Cities). His career reflects a unique ability to bridge African municipal governments, U.S. Black business networks, and global development institutions.',
      'Ambassador Baldeh has led high-level diplomatic and economic initiatives across Africa, the Americas, and the Caribbean. He coordinated the participation of H.E. President Joseph Nyuma Boakai, Sr. at the 124th National Black Business Conference and served as Diplomatic Corps Representative for the PanAmerican Global Trade Partnership, facilitating trade and cooperation for more than 3.6 million Black-led enterprises. His mediation work has received formal acknowledgment from the African Union, with the AU Mediation Division directed to explore collaboration with his office on the Pan African Network of the Wise (PanWise).',
      'He has played a central role in major financing efforts, including serving as principal liaison for a €1 billion international infrastructure proposal for Government priority projects in The Gambia. His strategic work aligns with global frameworks such as the UN Sustainable Development Goals, AU Agenda 2063, and the G7 Build Back Better World (B3W) initiative, with emphasis on climate resilience, digital transformation, health systems, and gender equity.',
      'Ambassador Baldeh strengthens LS Global Holdings with deep diplomatic access, continental networks, and proven experience mobilizing international capital, structuring public-private partnerships, and advancing municipal development. His leadership enhances the Group’s ability to expand across Africa and global markets while maintaining strong government relations and institutional credibility.',
    ],
  },
  {
    slug: 'alagie-marong',
    name: 'Alagie Marong',
    boardRole: 'Non-Executive Director',
    board: true,
    management: false,
    executive: false,
    photo: '/images/team/alagie-marong.jpg',
    based: 'The Gambia',
    alsoServes: [
      { role: 'Senior operations leader, Gambia Ports Authority' },
      { role: 'Director of Operations, Continental EV & Energy Center', href: continentalEv },
    ],
    lead:
      'Alagie Marong is a seasoned Gambian professional with extensive experience in banking, financial compliance, and port operations, bringing strong local market knowledge and valuable insight into financial governance, regulatory compliance, and operational oversight.',
    bio: [
      'Alagie Marong is a seasoned Gambian banking, compliance and port-operations leader who serves as a Non-Executive Director at LS Global Holdings.',
      'Alagie holds a Master of Public Administration (cum laude), a BA in Development Studies and Management Sciences, and professional teaching credentials. His early career as a graduate teacher reflects his commitment to developing people and leading teams with clarity and discipline.',
      'He brings more than two decades of experience across commercial banking, anti-money-laundering compliance, logistics operations and public-sector administration — strengthening the board’s governance, oversight and strategic execution.',
      'Alagie’s financial and risk-management expertise is rooted in his leadership roles at Ecobank Gambia and Access Bank, where he served as Branch Manager and Deputy Compliance Officer. His certifications in Anti-Money Laundering and Credit Restructuring & Writing reinforce his ability to guide the board on regulatory alignment, internal controls and responsible financial stewardship.',
      'His operational and infrastructure insight is shaped by his senior roles at the Gambia Ports Authority, where he oversees high-volume port activities and coordinates logistics systems essential to national commerce. His work includes leading the Claims Unit, Rating Unit and Delivery & Documentation Unit — experience that equips him to advise LS Global Holdings on operational efficiency, systems strengthening and sustainable growth.',
      'As a Non-Executive Director, Alagie leverages his extensive cross-sector experience to strengthen LS Global Holdings’ governance, strategic direction and operational discipline.',
    ],
  },
];

export const personBySlug = (slug: string) => people.find((person) => person.slug === slug);

export const board = people.filter((person) => person.board);
export const management = people.filter((person) => person.management);

/** "AL", "HS" — used where no photograph was supplied. */
export const initials = (name: string) =>
  name
    .replace(/^Ambassador\s+/i, '')
    .split(/\s+/)
    .filter((part) => !/^(jr|sr|i{1,3})\.?$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

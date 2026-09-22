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
 *  - Photographs exist for two of the seven. The other five render as an
 *    initials monogram in group colours; drop a file into
 *    `public/images/team/<slug>.jpg` and set `photo` to switch one on.
 *  - The document heads this person's entry "Hady Saho" and spells her
 *    "Haddy Saho" throughout the body. "Haddy" is used here, matching the
 *    care-home sites.
 *
 * Per the client review (Sep 2026): the group titles read "Global Chief …",
 * not "Group Chief …", in the card titles and inside the bios. Abdoulie Lowe's
 * chairmanship follows suit as "Global Chairman / CEO". Note that Nixon's
 * "Group Chairman, KDuah Ministries" is a role at a DIFFERENT organisation and
 * deliberately keeps its own wording.
 *
 * `lead` is each person's own opening sentence, lifted verbatim from `bio`,
 * so nothing on the leadership pages is written by us.
 */

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
  alsoServes?: string[];
  /** Pulled to the top of the detail page as a standfirst. */
  lead: string;
  bio: string[];
};

export const people: Person[] = [
  {
    slug: 'abdoulie-lowe',
    name: 'Abdoulie Lowe',
    boardRole: 'Global Chairman / CEO',
    managementRole: 'Global Chief Executive Officer',
    board: true,
    management: true,
    executive: true,
    photo: '/images/team/abdoulie-lowe.jpg',
    based: 'Washington State, United States',
    lead:
      'Abdoulie Lowe is the Global Chairman and Chief Executive Officer of LS Global Holdings, a multinational enterprise operating across the United States, Senegal, and The Gambia.',
    bio: [
      'Abdoulie Lowe is the Global Chairman and Chief Executive Officer of LS Global Holdings, a multinational enterprise operating across the United States, Senegal, and The Gambia. With a portfolio that spans healthcare, fire safety, transportation, and clean-energy infrastructure, Abdoulie leads the group with a strategic vision focused on sustainable growth, operational excellence, and community impact.',
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
    based: 'Washington State, United States',
    lead:
      'Haddy Saho serves as the Global Chief Operating Officer of LS Global Holdings, providing operational leadership across the organization’s multi-sector portfolio in the United States, Senegal, and The Gambia.',
    bio: [
      'Haddy Saho serves as the Global Chief Operating Officer of LS Global Holdings, providing operational leadership across the organization’s multi-sector portfolio in the United States, Senegal, and The Gambia. With a professional background in nursing, adult family home administration, and organizational management, Haddy brings a unique blend of clinical expertise, operational discipline, and strategic oversight to the group’s expanding footprint.',
      'In the United States, Haddy oversees day-to-day operations for 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, ensuring both facilities maintain the highest standards of care, compliance, and resident safety. Her clinical training and hands-on leadership style strengthen staff performance, regulatory adherence, and the overall quality of life for residents. She is also responsible for operational coordination within Sound Fire & Safety LLC, supporting the delivery of essential fire-protection services to homes, businesses, and public institutions.',
      'Across West Africa, Haddy plays a central role in the operational development of LS Global Holdings’ regional ventures. She supports strategic planning and organizational structure for LS Transport Senegal, helping build reliable mobility and logistics services that serve communities and commercial clients. In The Gambia, she contributes to the operational framework of Continental EV & Energy Center, guiding workforce development, administrative systems, and the implementation of clean-energy initiatives that support national modernization.',
      'Haddy’s leadership is defined by precision, accountability, and a deep commitment to service. Her ability to manage complex operations, build strong teams, and uphold high standards makes her an essential pillar of LS Global Holdings. Through her work, the group continues to strengthen its operational foundation, expand into new markets, and deliver impactful services across continents.',
    ],
  },
  {
    slug: 'nixon-kwaku-duah',
    name: 'Nixon Kwaku Duah Jr',
    boardRole: 'Global Chief Business Development Officer',
    managementRole: 'Global Chief Business Development Officer',
    board: true,
    management: true,
    executive: true,
    photo: '/images/team/nixon-kwaku-duah.jpg',
    based: 'Texas, United States',
    alsoServes: [
      'CEO, Nixol Management & Consult (Texas)',
      'Group Chairman, KDuah Ministries (Ghana)',
    ],
    lead:
      'Nixon Kwaku Duah Jr serves as the Global Chief Business Development Officer of LS Global Holdings, leading the organization’s strategic growth initiatives across its multinational operations in the United States, Senegal, and The Gambia.',
    bio: [
      'Nixon Kwaku Duah Jr serves as the Global Chief Business Development Officer of LS Global Holdings, leading the organization’s strategic growth initiatives across its multinational operations in the United States, Senegal, and The Gambia. With advanced academic training and a strong professional foundation—MSc, MBA, PMP, CFE, CPhT, RPhT—Nixon brings a rare combination of analytical expertise, development management, and cross-sector leadership to the group’s long-term expansion strategy.',
      'Nixon is also the Chief Executive Officer of Nixol Management & Consult in Texas, where he provides executive advisory, organizational development, and business optimization services to companies across multiple industries. His leadership at Nixol strengthens his ability to introduce structured growth systems, financial insight, and strategic foresight into LS Global Holdings’ global operations. Additionally, Nixon serves as the Group Chairman of KDuah Ministries in Ghana, guiding organizational growth, leadership development, and community-impact initiatives that reflect his commitment to ethical governance and transformational leadership.',
      'In the United States, Nixon plays a key role in strengthening the business infrastructure of 1st Edmonds Adult Family Home and Bothell Serenity Adult Family Home, supporting operational planning, compliance systems, and growth initiatives that enhance service quality and organizational performance. His analytical approach and development expertise help both facilities maintain high standards while preparing for future expansion. Nixon also contributes to strategic planning within Sound Fire & Safety LLC, supporting market development, service diversification, and operational alignment as the company expands its fire-protection services across Washington State.',
      'Across West Africa, Nixon is instrumental in shaping LS Global Holdings’ continental growth strategy. He supports business development for LS Transport Senegal, helping the company strengthen its operational structure and position itself within regional mobility and logistics markets. In The Gambia, Nixon plays a central role in the development of Continental EV & Energy Center, contributing to project planning, government engagement, and the establishment of EV charging infrastructure and renewable-energy initiatives that support national modernization.',
      'Nixon’s leadership is defined by strategic thinking, disciplined execution, and a commitment to building sustainable, future-focused enterprises. His ability to integrate financial insight, development management, and cross-sector coordination makes him a key driver of LS Global Holdings’ long-term growth and continental impact.',
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
    alsoServes: [
      'CEO, Danclare Financial Group',
      'Regional Marketing Director, Vantage Financial Alliance',
    ],
    lead:
      'Daniel Abuga serves as the Global Chief Financial Officer of LS Global Holdings, providing financial leadership across the organization’s multinational operations in the United States, Senegal, and The Gambia.',
    bio: [
      'Daniel Abuga serves as the Global Chief Financial Officer of LS Global Holdings, providing financial leadership across the organization’s multinational operations in the United States, Senegal, and The Gambia. With deep expertise in financial governance, investment strategy, and multi-entity fiscal management, Daniel plays a central role in ensuring the long-term financial strength, transparency, and sustainability of the group’s diverse business portfolio.',
      'Daniel is also the Chief Executive Officer of Danclare Financial Group, a U.S.-based financial services firm specializing in business finance, investment structuring, and organizational financial planning. Through Danclare, he brings advanced financial systems, disciplined governance, and strategic capital solutions that reinforce LS Global Holdings’ financial foundation and support its expansion across multiple sectors. In addition to his executive responsibilities, Daniel serves as the Regional Marketing Director for Vantage Financial Alliance, where he leads regional growth initiatives, financial education programs, and market development strategies.',
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
    based: 'The Gambia',
    alsoServes: ['Company Secretary, Continental EV & Energy Center'],
    lead:
      'Yankuba Sonko serves as a Non-Executive Director of LS Global Holdings, bringing decades of high-level governance, national security leadership, and institutional oversight to the group’s multinational operations.',
    bio: [
      'Yankuba Sonko serves as a Non-Executive Director of LS Global Holdings, bringing decades of high-level governance, national security leadership, and institutional oversight to the group’s multinational operations. As one of The Gambia’s most distinguished public service leaders, his experience strengthens LS Global Holdings’ strategic direction, compliance culture, and organizational integrity across all business units in the United States, Senegal, and The Gambia.',
      'Yankuba previously served as the Minister of Interior of The Gambia, where he provided executive leadership across national policing, immigration, public safety, and internal security coordination. Prior to his ministerial appointment, he served as the longest-serving Inspector General of Police (IGP) in the country’s history, overseeing major reforms, modernizing policing systems, and managing one of the nation’s most critical public institutions with professionalism and discipline.',
      'In addition to his role within LS Global Holdings, Yankuba is the Company Secretary of Continental EV & Energy Center in The Gambia, where he provides governance oversight, regulatory guidance, and administrative leadership for one of the country’s pioneering private-sector initiatives in electric mobility and renewable-energy infrastructure. His deep understanding of national systems, public administration, and inter-agency coordination strengthens the Center’s ability to operate responsibly and strategically within the national development framework.',
      'As a Non-Executive Director, Yankuba contributes to LS Global Holdings through high-level advisory support, risk oversight, and strategic governance. His extensive background in public service, combined with his commitment to ethical leadership and national development, makes him a key pillar of the group’s long-term stability, credibility, and continental impact.',
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
      'CEO and Chief Diplomatic Strategist, Sofora ITECH Diplomatic Consultancy',
      'Represents The Gambia at the Africa World Conference of Mayors',
    ],
    lead:
      'Ambassador Sherrif Baldeh is a seasoned Pan-African diplomat, institutional architect, and development strategist with more than twenty years of experience in multilateral engagement, municipal governance, and cross-border economic cooperation.',
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
    based: 'The Gambia',
    alsoServes: [
      'Director of Operations, Continental EV & Energy Center',
      'Senior operations leader, Gambia Ports Authority',
    ],
    lead:
      'Alagie Marong serves as a Non-Executive Director of LS Global Holdings, bringing extensive operational leadership, infrastructure experience, and public-sector insight to the group’s multinational portfolio.',
    bio: [
      'Alagie Marong serves as a Non-Executive Director of LS Global Holdings, bringing extensive operational leadership, infrastructure experience, and public-sector insight to the group’s multinational portfolio. With a distinguished career in logistics, port operations, and national infrastructure management, Alagie strengthens LS Global Holdings’ governance, strategic oversight, and cross-regional operational execution.',
      'Alagie is a senior operations leader at the Gambia Ports Authority, where he has spent years managing high-volume port activities, coordinating complex logistics systems, and ensuring the efficient movement of goods and services that support national commerce. His experience overseeing critical infrastructure gives him a unique ability to evaluate operational risks, strengthen organizational systems, and support large-scale project implementation across multiple countries.',
      'In addition to his role as a Non-Executive Director, Alagie serves as the Director of Operations for Continental EV & Energy Center, LS Global Holdings’ clean-energy and electric-mobility subsidiary in The Gambia. In this capacity, he leads operational planning, project coordination, and infrastructure deployment for one of the country’s pioneering private-sector initiatives in EV charging and renewable-energy development. His operational discipline and inter-agency experience ensure that the Center’s projects are executed safely, efficiently, and in alignment with national development priorities.',
      'Alagie’s leadership is defined by reliability, operational precision, and a commitment to strengthening systems that support sustainable growth. His ability to bridge public-sector experience with private-sector innovation makes him a valuable contributor to LS Global Holdings’ long-term stability, governance strength, and continental impact.',
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

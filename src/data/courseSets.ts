import { courses } from './courses';
import type { CourseDetail } from './courses';

export interface SetComponent {
  code: string;
  name: string;
  slug?: string;        // links to /courses/{slug} when a standalone page exists
  accredited: boolean;
  note?: string;        // e.g. "Non-accredited information session"
}

export type SetGroup = 'firstaid' | 'workplace' | 'advanced' | 'mental' | 'sports';

export interface CourseSet {
  slug: string;
  title: string;             // clean display title
  codes: string[];           // codes shown as badges on the card
  group: SetGroup;
  express: boolean;
  cardBlurb: string;         // short line on the home-page card
  overview: string;          // hero paragraph on the detail page
  audience: string;          // who it's for
  whyChoose: string[];       // bullet reasons to book as a set
  components: SetComponent[];
  renewalNote: string;
  bookingUrl: string;
}

const ROOT = 'https://lifefirstaidcourses.trainingdesk.com.au';

// Convenience references so component names/slugs stay in sync with courses.ts.
// Any `overrides` supplied by the caller win over the courses.ts values, so a set
// can add set-specific context (e.g. a delivery note) to an otherwise shared unit.
function comp(code: string, overrides?: Partial<SetComponent>): SetComponent {
  const c = courses.find(x => x.code.toLowerCase() === code.toLowerCase());
  const base: SetComponent = c
    ? { code: c.code, name: c.name, slug: c.slug, accredited: c.accredited }
    : { code, name: code, accredited: true };

  if (!overrides) return base;
  const defined = Object.fromEntries(
    Object.entries(overrides).filter(([, v]) => v !== undefined)
  );
  return { ...base, ...defined };
}

export const courseSets: CourseSet[] = [
  // ── FIRST AID & CPR COMBINATIONS ─────────────────────────────────────────
  {
    slug: 'asthma-anaphylaxis',
    title: 'Asthma & Anaphylaxis',
    codes: ['22702VIC', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'Two nationally recognised units covering the two most common life-threatening allergic and respiratory emergencies.',
    overview:
      'This set pairs the accredited Asthma and Anaphylaxis units into a single, efficient booking. Participants learn to recognise triggers, use relievers and puffers, and administer an adrenaline autoinjector — the two skills most often needed in schools, childcare and community settings.',
    audience: 'Workplace first aiders, school and childcare staff, hospitality workers, and anyone supporting people with asthma or severe allergies.',
    whyChoose: [
      'Covers both asthma and anaphylaxis emergency response in one visit',
      'Both units are nationally recognised and align with ASCIA and NACA guidelines',
      'Ideal top-up for staff who already hold a first aid or CPR certificate',
    ],
    components: [comp('22702VIC'), comp('22578VIC')],
    renewalNote: 'Both units recommended every 3 years.',
    bookingUrl: `${ROOT}/courses/management-anaphylaxis-asthma-training-course-set-101785`,
  },
  {
    slug: 'first-aid-asthma-anaphylaxis',
    title: 'First Aid + Asthma + Anaphylaxis',
    codes: ['HLTAID011', '22702VIC', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'The workplace first aid standard plus the two specialist allergy and respiratory units.',
    overview:
      'A complete package that combines the HLTAID011 Provide First Aid standard with the accredited Asthma and Anaphylaxis units. It delivers full workplace first aid competency plus the specialist skills required to manage asthma attacks and severe allergic reactions.',
    audience: 'Schools, childcare services, hospitality venues and any workplace that needs both general first aid and asthma/anaphylaxis-specific competency.',
    whyChoose: [
      'One booking covers general first aid and the two most common medical emergencies',
      'Highly popular with education and care providers',
      'Save time and money versus booking three separate courses',
    ],
    components: [comp('HLTAID011'), comp('22702VIC'), comp('22578VIC')],
    renewalNote: 'First aid and both units recommended every 3 years.',
    bookingUrl: `${ROOT}/courses/first-aid-asthma-anaphylaxis-training-course-set-101787`,
  },
  {
    slug: 'cpr-anaphylaxis',
    title: 'CPR + Anaphylaxis',
    codes: ['HLTAID009', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'Life-saving CPR skills paired with accredited anaphylaxis management.',
    overview:
      'This set combines HLTAID009 Provide CPR with the accredited Anaphylaxis unit — the essential pairing for staff who need to respond to both cardiac and severe allergic emergencies.',
    audience: 'Workplaces, schools and community groups needing current CPR plus anaphylaxis response.',
    whyChoose: [
      'Covers cardiac arrest and severe allergic reaction response together',
      'Quick to complete — ideal for annual refresh cycles',
      'Both components are nationally recognised',
    ],
    components: [comp('HLTAID009'), comp('22578VIC')],
    renewalNote: 'CPR recommended every 12 months; anaphylaxis every 3 years.',
    bookingUrl: `${ROOT}/courses/cpr-anaphylaxis-training-course-set-100786`,
  },
  {
    slug: 'cpr-asthma-anaphylaxis',
    title: 'CPR + Asthma + Anaphylaxis',
    codes: ['HLTAID009', '22702VIC', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'CPR plus both accredited asthma and anaphylaxis units in a single session.',
    overview:
      'A focused set combining HLTAID009 Provide CPR with the accredited Asthma and Anaphylaxis units. It gives staff current resuscitation skills alongside the ability to manage asthma attacks and severe allergic reactions — without completing a full first aid course.',
    audience: 'Schools, childcare and community staff who need CPR plus asthma and anaphylaxis competency.',
    whyChoose: [
      'Three high-demand skill sets in one convenient booking',
      'Great fit where full HLTAID011 first aid is not required',
      'All three components are nationally recognised',
    ],
    components: [comp('HLTAID009'), comp('22702VIC'), comp('22578VIC')],
    renewalNote: 'CPR recommended every 12 months; asthma and anaphylaxis every 3 years.',
    bookingUrl: `${ROOT}/courses/asthma-anaphylaxis-cpr-training-course-set-101786`,
  },
  {
    slug: 'first-aid-anaphylaxis',
    title: 'First Aid + Anaphylaxis',
    codes: ['HLTAID011', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'The workplace first aid standard plus accredited anaphylaxis management.',
    overview:
      'This set combines HLTAID011 Provide First Aid with the accredited Anaphylaxis unit, giving participants full workplace first aid competency plus the specialist skills to recognise and treat severe allergic reactions with an adrenaline autoinjector.',
    audience: 'Workplaces, schools and venues that need general first aid together with anaphylaxis-specific training.',
    whyChoose: [
      'Full first aid competency plus specialist anaphylaxis response',
      'Popular with education, care and hospitality employers',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID011'), comp('22578VIC')],
    renewalNote: 'First aid and anaphylaxis recommended every 3 years.',
    bookingUrl: `${ROOT}/courses/first-aid-anaphylaxis-course-set-101124`,
  },
  {
    slug: 'first-aid-advanced-resuscitation',
    title: 'First Aid + Advanced Resuscitation',
    codes: ['HLTAID011', 'HLTAID015'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'Workplace first aid plus advanced resuscitation and oxygen therapy.',
    overview:
      'This set combines HLTAID011 Provide First Aid with HLTAID015 Provide Advanced Resuscitation And Oxygen Therapy — the standard requirement for many high-risk and healthcare roles that need airway adjuncts and oxygen administration on top of general first aid.',
    audience: 'Healthcare, mining, remote work, aquatic and emergency roles requiring first aid plus advanced resuscitation.',
    whyChoose: [
      'Meets common requirements for oxygen therapy and advanced airway skills',
      'One booking satisfies both the first aid and resuscitation prerequisites',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID011'), comp('HLTAID015')],
    renewalNote: 'First aid every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/first-aid-advanced-resuscitation-training-course-set-100710`,
  },
  {
    slug: 'childcare-first-aid-asthma-anaphylaxis',
    title: 'Childcare First Aid + Asthma + Anaphylaxis',
    codes: ['HLTAID012', '22702VIC', '22578VIC'],
    group: 'firstaid',
    express: false,
    cardBlurb: 'Education & care first aid with the required asthma and anaphylaxis units.',
    overview:
      'The complete compliance package for the early childhood sector — HLTAID012 Provide First Aid In An Education & Care Setting combined with the accredited Asthma and Anaphylaxis units. Together these meet the first aid, asthma and anaphylaxis requirements for approved childcare and education services.',
    audience: 'Childcare educators, OOSH staff, family day care providers, and school staff working with children.',
    whyChoose: [
      'Covers the three qualifications most services require for compliance',
      'Paediatric-focused first aid alongside asthma and anaphylaxis management',
      'All three components nationally recognised',
    ],
    components: [comp('HLTAID012'), comp('22702VIC'), comp('22578VIC')],
    renewalNote: 'All three components recommended every 3 years.',
    bookingUrl: `${ROOT}/courses/childcare-first-aid-asthma-anaphylaxis-course-set-101788`,
  },
  {
    slug: 'express-first-aid-advanced-resuscitation',
    title: 'First Aid + Advanced Resuscitation (Express)',
    codes: ['HLTAID011', 'HLTAID015'],
    group: 'firstaid',
    express: true,
    cardBlurb: 'The fast-tracked pairing of first aid and advanced resuscitation.',
    overview:
      'An express delivery of HLTAID011 Provide First Aid and HLTAID015 Provide Advanced Resuscitation And Oxygen Therapy, designed for participants who need both certificates in the shortest practical time through online theory and a condensed face-to-face assessment.',
    audience: 'Time-poor professionals in healthcare, mining and emergency roles who need first aid plus advanced resuscitation quickly.',
    whyChoose: [
      'Fast-tracked format minimises time away from work',
      'Online theory with a streamlined practical assessment',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID011'), comp('HLTAID015')],
    renewalNote: 'First aid every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/advanced-resuscitation-first-aid-course-set-100762`,
  },

  // ── WORKPLACE & COMPLIANCE COMBINATIONS ──────────────────────────────────
  {
    slug: 'cpr-manual-handling-personal-care',
    title: 'CPR + Manual Handling (Personal Care Worker)',
    codes: ['HLTAID009', 'HLTWHS005'],
    group: 'workplace',
    express: false,
    cardBlurb: 'CPR paired with manual handling tailored for personal care workers.',
    overview:
      'This set combines HLTAID009 Provide CPR with HLTWHS005 Conduct Manual Tasks Safely, delivered in the personal-care-worker context. It covers both life-saving resuscitation and the safe lifting, transferring and repositioning skills essential in aged and disability care.',
    audience: 'Personal care workers, aged care and disability support staff, and community care providers.',
    whyChoose: [
      'Two core compliance requirements for care roles in one booking',
      'Manual handling tailored to personal care and client transfers',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID009'), comp('HLTWHS005', { note: 'Personal care worker context' })],
    renewalNote: 'CPR recommended every 12 months; manual handling has no formal renewal.',
    bookingUrl: `${ROOT}/courses/cpr-manual-handling-personal-care-worker-100754`,
  },
  {
    slug: 'first-aid-manual-handling-personal-care',
    title: 'First Aid + Manual Handling (Personal Care Worker)',
    codes: ['HLTAID011', 'HLTWHS005'],
    group: 'workplace',
    express: false,
    cardBlurb: 'Workplace first aid paired with personal-care manual handling.',
    overview:
      'This set combines HLTAID011 Provide First Aid with HLTWHS005 Conduct Manual Tasks Safely in the personal-care-worker context — delivering full first aid competency alongside the safe manual handling skills required in aged and disability care.',
    audience: 'Personal care workers, aged and disability care staff, and support workers needing first aid plus manual handling.',
    whyChoose: [
      'Full first aid plus care-specific manual handling in one visit',
      'Meets two common onboarding requirements for care roles',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID011'), comp('HLTWHS005', { note: 'Personal care worker context' })],
    renewalNote: 'First aid recommended every 3 years; manual handling has no formal renewal.',
    bookingUrl: `${ROOT}/courses/manual-handling-cpr-training-course-set-100757`,
  },
  {
    slug: 'cpr-low-voltage-rescue',
    title: 'CPR + Low Voltage Rescue',
    codes: ['HLTAID009', 'UETDRMP018'],
    group: 'workplace',
    express: false,
    cardBlurb: 'CPR paired with rescue from a live low-voltage panel for electrical workers.',
    overview:
      'This set combines HLTAID009 Provide CPR with UETDRMP018 Perform Rescue From A Live Low Voltage Panel (LVR) — the standard safety pairing for electrical workers who must be able to rescue and resuscitate a colleague after an electrical incident.',
    audience: 'Electricians, electrical apprentices, and workers operating around live low-voltage equipment.',
    whyChoose: [
      'Meets the common CPR + LVR requirement for electrical trades',
      'Practical rescue skills combined with current resuscitation',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID009'), comp('UETDRMP018')],
    renewalNote: 'CPR and LVR are both typically renewed every 12 months.',
    bookingUrl: `${ROOT}/courses/lvr-cpr-training-course-set-101682`,
  },
  {
    slug: 'first-aid-low-voltage-rescue',
    title: 'First Aid + Low Voltage Rescue',
    codes: ['HLTAID011', 'UETDRMP018'],
    group: 'workplace',
    express: false,
    cardBlurb: 'Workplace first aid paired with live low-voltage panel rescue.',
    overview:
      'This set combines HLTAID011 Provide First Aid with UETDRMP018 Perform Rescue From A Live Low Voltage Panel (LVR), giving electrical workers full first aid competency alongside the specialist rescue skills required around live low-voltage equipment.',
    audience: 'Electricians and electrical workers needing first aid plus low-voltage rescue certification.',
    whyChoose: [
      'Full first aid plus specialist electrical rescue in one booking',
      'Covers common trade compliance requirements',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID011'), comp('UETDRMP018')],
    renewalNote: 'First aid every 3 years; LVR typically every 12 months.',
    bookingUrl: `${ROOT}/courses/lv-rescue-training-course-set-cpr-first-aid-101683`,
  },

  // ── ADVANCED & REMOTE COMBINATIONS ───────────────────────────────────────
  {
    slug: 'remote-advanced-first-aid',
    title: 'Remote Advanced First Aid',
    codes: ['HLTAID013', 'HLTAID014', 'HLTAID015'],
    group: 'advanced',
    express: false,
    cardBlurb: 'Remote, advanced and resuscitation first aid combined for isolated worksites.',
    overview:
      'The most comprehensive first aid set available — HLTAID013 Remote Or Isolated Site, HLTAID014 Advanced First Aid, and HLTAID015 Advanced Resuscitation And Oxygen Therapy. It prepares designated first aid officers for complex, prolonged casualty management where emergency services are far away.',
    audience: 'First aid officers and safety personnel in mining, farming, forestry, field research and remote industry.',
    whyChoose: [
      'The highest level of first aid preparation for remote and isolated work',
      'Covers advanced assessment, resuscitation, oxygen therapy and evacuation',
      'All three components nationally recognised',
    ],
    components: [comp('HLTAID013'), comp('HLTAID014'), comp('HLTAID015')],
    renewalNote: 'Advanced units every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/advanced-remote-first-aid-training-set-100810`,
  },
  {
    slug: 'remote-first-aid-advanced-resuscitation',
    title: 'Remote First Aid + Advanced Resuscitation',
    codes: ['HLTAID013', 'HLTAID015'],
    group: 'advanced',
    express: false,
    cardBlurb: 'Remote or isolated site first aid with advanced resuscitation and oxygen.',
    overview:
      'This set combines HLTAID013 Provide First Aid In Remote Or Isolated Site with HLTAID015 Provide Advanced Resuscitation And Oxygen Therapy — ideal for workers in isolated settings who also need advanced airway and oxygen skills.',
    audience: 'Remote and isolated site workers in mining, agriculture, forestry and field operations.',
    whyChoose: [
      'Remote-ready first aid plus advanced resuscitation and oxygen therapy',
      'Prepares workers for delayed evacuation scenarios',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID013'), comp('HLTAID015')],
    renewalNote: 'Remote first aid every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/advanced-resuscitaton-oxygen-therapy-remote-first-aid-course-set-100796`,
  },
  {
    slug: 'advanced-first-aid-advanced-resuscitation',
    title: 'Advanced First Aid + Advanced Resuscitation',
    codes: ['HLTAID014', 'HLTAID015'],
    group: 'advanced',
    express: false,
    cardBlurb: 'Advanced first aid paired with advanced resuscitation and oxygen therapy.',
    overview:
      'This set combines HLTAID014 Provide Advanced First Aid with HLTAID015 Provide Advanced Resuscitation And Oxygen Therapy — the standard pairing for designated first aid officers who coordinate complex incident responses and manage oxygen equipment.',
    audience: 'Designated first aid officers, emergency responders and workplace safety personnel.',
    whyChoose: [
      'Advanced assessment and coordination plus oxygen therapy skills',
      'Suited to senior first aid and safety roles',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID014'), comp('HLTAID015')],
    renewalNote: 'Advanced first aid every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/advanced-first-aid-cpr-resuscitation-course-set-100709`,
  },
  {
    slug: 'express-advanced-first-aid-advanced-resuscitation',
    title: 'Advanced First Aid + Advanced Resuscitation (Express)',
    codes: ['HLTAID014', 'HLTAID015'],
    group: 'advanced',
    express: true,
    cardBlurb: 'The fast-tracked advanced first aid and advanced resuscitation pairing.',
    overview:
      'An express delivery of HLTAID014 Provide Advanced First Aid and HLTAID015 Provide Advanced Resuscitation And Oxygen Therapy, using online theory and a condensed practical assessment to get senior first aiders certified in the shortest practical time.',
    audience: 'Experienced first aid officers and safety personnel who need advanced certification fast.',
    whyChoose: [
      'Fast-tracked format for experienced responders',
      'Online theory with a streamlined practical assessment',
      'Both components nationally recognised',
    ],
    components: [comp('HLTAID014'), comp('HLTAID015')],
    renewalNote: 'Advanced first aid every 3 years; advanced resuscitation every 12 months.',
    bookingUrl: `${ROOT}/courses/advanced-resuscitation-advanced-first-aid-trainng-course-set-100763`,
  },

  // ── CPR WITH AWARENESS SESSIONS ──────────────────────────────────────────
  {
    slug: 'cpr-asthma-info-session',
    title: 'CPR + Asthma Information Session',
    codes: ['HLTAID009'],
    group: 'workplace',
    express: false,
    cardBlurb: 'Accredited CPR paired with a non-accredited asthma awareness session.',
    overview:
      'This set combines the accredited HLTAID009 Provide CPR with a non-accredited asthma information session. It gives staff current resuscitation skills plus a practical awareness of recognising and responding to asthma — a cost-effective option where formal asthma accreditation is not required.',
    audience: 'Workplaces and community groups wanting CPR plus general asthma awareness.',
    whyChoose: [
      'Accredited CPR plus practical asthma awareness',
      'A budget-friendly alternative to the full accredited asthma unit',
      'Delivered together in a single session',
    ],
    components: [
      comp('HLTAID009'),
      { code: 'Info Session', name: 'Asthma Information Session', accredited: false, note: 'Non-accredited awareness session' },
    ],
    renewalNote: 'CPR recommended every 12 months.',
    bookingUrl: `${ROOT}/courses/cpr-training-course-asthma-info-session-100799`,
  },
  {
    slug: 'cpr-asthma-anaphylaxis-info-session',
    title: 'CPR + Asthma & Anaphylaxis Information Session',
    codes: ['HLTAID009'],
    group: 'workplace',
    express: false,
    cardBlurb: 'Accredited CPR with non-accredited asthma and anaphylaxis awareness sessions.',
    overview:
      'This set combines the accredited HLTAID009 Provide CPR with non-accredited asthma and anaphylaxis information sessions. Staff gain current resuscitation skills alongside practical awareness of both conditions — a cost-effective choice where formal asthma and anaphylaxis accreditation is not required.',
    audience: 'Workplaces and community groups wanting CPR plus asthma and anaphylaxis awareness.',
    whyChoose: [
      'Accredited CPR plus awareness of two common medical emergencies',
      'A budget-friendly alternative to the full accredited units',
      'All delivered together in a single session',
    ],
    components: [
      comp('HLTAID009'),
      { code: 'Info Session', name: 'Asthma Information Session', accredited: false, note: 'Non-accredited awareness session' },
      { code: 'Info Session', name: 'Anaphylaxis Information Session', accredited: false, note: 'Non-accredited awareness session' },
    ],
    renewalNote: 'CPR recommended every 12 months.',
    bookingUrl: `${ROOT}/courses/cpr-course-asthma-anaphylaxis-info-session-100767`,
  },

  // ── MENTAL HEALTH ────────────────────────────────────────────────────────
  {
    slug: 'workplace-mental-health-support',
    title: 'Provide Workplace Mental Health Support',
    codes: ['Mental Health'],
    group: 'mental',
    express: false,
    cardBlurb: 'Recognise and support mental health and wellbeing in the workplace.',
    overview:
      'This course set builds the confidence and skills to recognise the signs of mental ill-health at work, hold a supportive conversation, and guide a colleague toward appropriate help. It focuses on early intervention, reducing stigma, and building a psychologically safe workplace.',
    audience: 'Managers, team leaders, HR and wellbeing officers, and any employee who wants to support colleagues.',
    whyChoose: [
      'Practical skills to recognise and respond to mental health concerns at work',
      'Builds a more supportive, psychologically safe culture',
      'Suitable for staff at every level of an organisation',
    ],
    components: [
      { code: 'Mental Health', name: 'Workplace Mental Health Support', accredited: true, note: 'Mental health first responder training' },
    ],
    renewalNote: 'Refresh periodically to keep skills current.',
    bookingUrl: `${ROOT}/courses/workplace-first-responders-mental-health-training-course-set-101465`,
  },
  {
    slug: 'youth-mental-health-support',
    title: 'Provide Youth Mental Health Support',
    codes: ['Mental Health'],
    group: 'mental',
    express: false,
    cardBlurb: 'Recognise and support mental health and wellbeing in young people.',
    overview:
      'This course set equips participants to recognise the signs of mental ill-health in adolescents and young people, respond with a supportive and age-appropriate conversation, and connect them with suitable professional help.',
    audience: 'Teachers, youth workers, coaches, parents and anyone supporting young people.',
    whyChoose: [
      'Focused specifically on adolescent and youth mental health',
      'Practical guidance for supportive, age-appropriate conversations',
      'Valuable for schools, sports clubs and youth services',
    ],
    components: [
      { code: 'Mental Health', name: 'Youth Mental Health Support', accredited: true, note: 'Mental health first responder training' },
    ],
    renewalNote: 'Refresh periodically to keep skills current.',
    bookingUrl: `${ROOT}/courses/youth-first-responder-mental-health-course-set-101458`,
  },

  // ── SPORTS TRAINER ───────────────────────────────────────────────────────
  {
    slug: 'sports-trainer-level-1',
    title: 'Sports Trainer Level 1',
    codes: ['SISSSCO015', 'SISSSPT001'],
    group: 'sports',
    express: false,
    cardBlurb: 'Foundational sports trainer skills — injury prevention, taping and match-day care.',
    overview:
      'The Level 1 Sports Trainer set combines SISSSCO015 and SISSSPT001 to develop the core skills of a sports trainer — injury prevention, strapping and taping, and providing immediate care and first aid at training and competition. HLTAID011 Provide First Aid is a prerequisite.',
    audience: 'Club volunteers, coaches, and anyone providing first response and injury support at sport.',
    whyChoose: [
      'Foundational sports trainer competency in one set',
      'Covers taping, injury management and match-day preparation',
      'Nationally recognised units for club and community sport',
    ],
    components: [
      {
        code: 'SISSSCO015',
        name: 'Provide First Aid & Injury Management In A Sport Setting',
        accredited: true,
        slug: 'sisss00118',
        note: 'Delivered as part of the SISSS00118 Sports Trainer Level 1 skill set',
      },
      {
        code: 'SISSSPT001',
        name: 'Provide Sports Trainer Support',
        accredited: true,
        slug: 'sisss00118',
        note: 'Delivered as part of the SISSS00118 Sports Trainer Level 1 skill set',
      },
    ],
    renewalNote: 'Prerequisite: HLTAID011 Provide First Aid (renew every 3 years).',
    bookingUrl: `${ROOT}/courses/level-1-sports-trainer-course-set-101211`,
  },
  {
    slug: 'sports-trainer-level-2',
    title: 'Sports Trainer Level 2',
    codes: ['HLTAID015', 'PUAEME007', 'PUAEME008'],
    group: 'sports',
    express: false,
    cardBlurb: 'Advanced resuscitation, spinal care and pain management for sports trainers.',
    overview:
      'The Level 2 Sports Trainer set combines HLTAID015 Advanced Resuscitation And Oxygen Therapy, PUAEME007 Emergency Care For Suspected Spinal Injury, and PUAEME008 Provide Pain Management — the advanced skills required to manage serious injuries on the sporting field.',
    audience: 'Experienced sports trainers and medical support staff at higher levels of competition.',
    whyChoose: [
      'Advanced injury and resuscitation skills for elite and contact sport',
      'Covers spinal care, pain management and oxygen therapy',
      'All three components nationally recognised',
    ],
    components: [comp('HLTAID015'), comp('PUAEME007'), comp('PUAEME008')],
    renewalNote: 'Advanced resuscitation every 12 months; PUA units have no formal renewal.',
    bookingUrl: `${ROOT}/courses/level-2-sports-trainer-course-set-101235`,
  },
];

export function getCourseSetBySlug(slug: string): CourseSet | undefined {
  return courseSets.find(s => s.slug === slug);
}

export function getCourseByCode(code: string): CourseDetail | undefined {
  return courses.find(c => c.code.toLowerCase() === code.toLowerCase());
}

/** Every set that contains the given unit code — used to cross-link course pages back to sets. */
export function getSetsForCourse(code: string): CourseSet[] {
  const target = code.toLowerCase();
  return courseSets.filter(set =>
    set.components.some(component => component.code.toLowerCase() === target)
  );
}

/**
 * Headline time commitment per component, taken from the first duration entry in
 * courses.ts (the face-to-face figure). Components with no matching course record —
 * information sessions and mental health units — are omitted rather than guessed at.
 */
export function getSetDurations(set: CourseSet): { label: string; value: string }[] {
  return set.components.flatMap(component => {
    const detail = getCourseByCode(component.code);
    const first = detail?.duration[0];
    return first ? [{ label: component.code, value: first.value }] : [];
  });
}

/**
 * Delivery modes shared by every component in the set. Returns nothing unless *all*
 * components resolve to a course record — a mode list derived from only part of a set
 * can't honestly be presented as available for the whole set.
 */
export function getSetDeliveryModes(set: CourseSet): string[] {
  const modeLists = set.components.map(c => getCourseByCode(c.code)?.deliveryModes);
  if (modeLists.some(modes => !Array.isArray(modes))) return [];

  return (modeLists as string[][]).reduce((shared, modes) =>
    shared.filter(m => modes.includes(m))
  );
}

export const setGroupLabel: Record<SetGroup, string> = {
  firstaid: 'First Aid & CPR Combinations',
  workplace: 'Workplace & Compliance Combinations',
  advanced: 'Advanced & Remote Combinations',
  mental: 'Mental Health',
  sports: 'Sports Trainer',
};

export const setGroupClass: Record<SetGroup, string> = {
  firstaid: 'cat-core',
  workplace: 'cat-safety',
  advanced: 'cat-emergency',
  mental: 'cat-mental',
  sports: 'cat-sports',
};

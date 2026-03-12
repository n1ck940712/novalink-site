export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id?: string;
  href?: string;
  title: string;
  summary: string;
  bullets: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProofMetric {
  label: string;
  value: string;
}

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Atome', href: '/atome' },
];

export const coreServices: ServiceItem[] = [
  {
    id: 'growth-systems-automation',
    href: '/services#growth-systems-automation',
    title: 'Growth Systems & Automation',
    summary:
      'Practical workflow and automation setup that reduces manual work and improves handoffs across sales, ops, and admin.',
    bullets: [
      'What it is: workflow design, automation setup, and integration handoffs',
      'Problems solved: repetitive manual tasks, missed follow-ups, disconnected process steps',
      'Starting scope: one high-friction workflow scoped and implemented in 30 to 90 days',
    ],
  },
  {
    id: 'websites-landing-pages',
    href: '/services#websites-landing-pages',
    title: 'Websites & Landing Pages',
    summary:
      'Business websites and landing pages built around clear messaging, conversion flow, and practical maintainability.',
    bullets: [
      'What it is: core website pages, campaign landing pages, and conversion flow setup',
      'Problems solved: unclear positioning, weak lead flow, pages that are hard to update',
      'Starting scope: one priority page set or one conversion-focused landing flow',
    ],
  },
  {
    id: 'commerce-payment-enablement',
    href: '/services#commerce-payment-enablement',
    title: 'Commerce / Payment Enablement',
    summary:
      'Merchant-side setup support for checkout, payment flow, and commerce operations so transactions are easier to complete.',
    bullets: [
      'What it is: checkout flow setup support, payment integration coordination, commerce handoff clarity',
      'Problems solved: checkout friction, setup delays, unclear ownership during implementation',
      'Starting scope: one checkout/payment flow review and implementation support phase',
    ],
  },
  {
    id: 'search-acquisition-support',
    href: '/services#search-acquisition-support',
    title: 'Search / Acquisition Support',
    summary:
      'Focused search and acquisition support connected to execution, so traffic efforts align with landing and conversion systems.',
    bullets: [
      'What it is: search baseline fixes, landing alignment, practical paid acquisition support',
      'Problems solved: low-quality traffic, weak handoff from ad/search to conversion, wasted spend from tracking gaps',
      'Starting scope: one channel plus one landing flow with clear tracking and next-step actions',
    ],
  },
];

export const homeProofMetrics: ProofMetric[] = [
  { label: 'Execution Model', value: 'Scoped first phase, clear ownership, practical follow-through' },
  { label: 'Technical Focus', value: 'Web, workflows, integrations, and commerce setup support' },
  { label: 'Operating Reality', value: 'Built for straightforward projects and messy handoff situations' },
];

export const homeFAQs: FAQItem[] = [
  {
    question: 'How do engagements usually start?',
    answer:
    'Most engagements start with one scoped problem. We define the priority, implement a practical first phase, and expand only when next steps are clear.',
  },
  {
    question: 'Do you only support straightforward projects?',
    answer:
    'No. We support both straightforward projects and slightly messy operating situations where ownership and workflows need to be clarified during implementation.',
  },
  {
    question: 'Is Novalink only for Atome-related work?',
    answer:
      'No. Atome support is one entry point. Novalink also supports websites, workflows, automation, integrations, and commerce setup for SMEs.',
  },
];

export const atomeBenefits = [
  {
    title: 'Clear Merchant Path',
    detail: 'Get a practical path from initial interest to onboarding readiness with clear next-step actions.',
  },
  {
    title: 'Onboarding Coordination Support',
    detail: 'Novalink supports merchant-side coordination, requirement collection, and implementation follow-through.',
  },
  {
    title: 'Implementation Readiness',
    detail: 'Keep setup and handoffs structured so activation is operationally manageable for your team.',
  },
];

export const atomeFAQs: FAQItem[] = [
  {
    question: 'Who is this page for?',
    answer:
      'This page is for merchants evaluating or starting Atome setup and needing practical support on the merchant side.',
  },
  {
    question: 'What does Novalink handle?',
    answer:
      'Novalink handles merchant-side onboarding coordination, requirement collection support, and implementation readiness follow-through.',
  },
  {
    question: 'What happens after contact?',
    answer:
      'After you share your current status, we respond with practical next steps for onboarding and setup support.',
  },
];

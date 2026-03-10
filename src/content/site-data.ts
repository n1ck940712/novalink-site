export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
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
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Atome', href: '/atome' },
];

export const coreServices: ServiceItem[] = [
  {
    title: 'Growth Strategy for SMEs',
    summary:
      'Prioritized digital roadmaps focused on revenue, conversion, and operational efficiency.',
    bullets: ['Go-to-market planning', 'Offer design and positioning', 'Conversion-focused customer journeys'],
  },
  {
    title: 'Digital Operations Enablement',
    summary:
      'Hands-on setup and optimization of tools, workflows, and internal processes that scale with your team.',
    bullets: ['Process mapping', 'Automation opportunities', 'Playbooks for staff onboarding'],
  },
  {
    title: 'Commerce & Payment Experiences',
    summary:
      'Practical checkout and payment-related improvements that reduce friction and improve customer confidence.',
    bullets: ['Checkout UX guidance', 'Offer communication', 'Performance and funnel reviews'],
  },
  {
    title: 'Atome Onboarding Support',
    summary:
      'Dedicated implementation and merchant support for businesses activating Atome as one part of their growth stack.',
    bullets: ['Merchant onboarding guidance', 'Activation support', 'Ongoing optimization recommendations'],
  },
];

export const homeProofMetrics: ProofMetric[] = [
  { label: 'SME-Friendly Delivery', value: 'Fast, practical, no bloat' },
  { label: 'Cross-Functional Support', value: 'Strategy + operations + execution' },
  { label: 'Partnership Approach', value: 'Operator mindset, not vendor-only' },
];

export const homeFAQs: FAQItem[] = [
  {
    question: 'Do you only support Atome-related work?',
    answer:
      'No. Atome support is one offering. NovaLink supports broader SME growth work across strategy, digital operations, and customer experience.',
  },
  {
    question: 'What size of business do you typically work with?',
    answer:
      'Most clients are small to mid-sized teams that need practical execution support without building a large in-house digital team.',
  },
  {
    question: 'Can we start with a single service and expand later?',
    answer:
      'Yes. Many engagements begin with one focused project, then expand once priorities and impact are clear.',
  },
];

export const atomeBenefits = [
  {
    title: 'Trusted Offer Familiarity',
    detail: 'Leverage Atome as a recognizable financing option that can reduce purchase hesitation.',
  },
  {
    title: 'Guided Merchant Onboarding',
    detail: 'NovaLink coordinates onboarding details so internal teams can move quickly with fewer blockers.',
  },
  {
    title: 'Operational Clarity',
    detail: 'Receive implementation checklists and support workflows that are simple to maintain over time.',
  },
];

export const atomeFAQs: FAQItem[] = [
  {
    question: 'Is this page the final Atome sales copy?',
    answer:
      'No. This is a structured placeholder for the future campaign page. Messaging, offer specifics, and proof assets should be updated before launch.',
  },
  {
    question: 'Who handles onboarding and merchant support?',
    answer:
      'Atome provides the product trust anchor, while NovaLink handles merchant-facing onboarding coordination and support workflows.',
  },
  {
    question: 'Can this page be localized later?',
    answer:
      'Yes. The structure is component-based so Bahasa Malaysia-first copy and alternate sections can be added quickly.',
  },
];

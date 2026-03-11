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
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Atome', href: '/atome' },
];

export const coreServices: ServiceItem[] = [
  {
    title: 'Websites & Landing Pages',
    summary:
      'Build or improve business websites and campaign landing pages focused on clear messaging and conversion.',
    bullets: ['Business websites', 'Campaign landing pages', 'Lead capture and conversion flow setup'],
  },
  {
    title: 'Website Support & Optimization',
    summary:
      'Ongoing updates, technical fixes, and practical improvements so your website remains reliable and useful.',
    bullets: ['Content and page updates', 'Performance and UX improvements', 'Technical maintenance support'],
  },
  {
    title: 'E-commerce & Payment Integration',
    summary:
      'Support checkout and payment-related implementation for online selling and smoother purchase completion.',
    bullets: ['Checkout journey support', 'Payment integration guidance', 'Commerce flow troubleshooting'],
  },
  {
    title: 'SEO & Search Visibility',
    summary:
      'Improve discoverability through foundational SEO work and practical search visibility improvements.',
    bullets: ['Technical SEO baseline', 'On-page optimization', 'Search performance monitoring'],
  },
  {
    title: 'Paid Acquisition / Performance Marketing',
    summary:
      'Planning and optimization support for paid channels where predictable lead quality and spend control matter.',
    bullets: ['SEM and PPC campaign support', 'Landing page alignment', 'Budget and conversion tracking basics'],
  },
  {
    title: 'Growth Systems / Business Automation',
    summary:
      'An expansion area beyond the legacy service base: practical workflow and automation support for SME operations.',
    bullets: ['Manual process reduction', 'Operational handoff improvements', 'Simple system and workflow setup'],
  },
];

export const homeProofMetrics: ProofMetric[] = [
  { label: 'Legacy Service Foundation', value: 'Web, support, SEO/SEM/PPC, and commerce integration' },
  { label: 'Working Style', value: 'Practical scope, clear priorities, measurable next steps' },
  { label: 'Collaboration Paths', value: 'Atome onboarding support plus broader digital project execution' },
];

export const homeFAQs: FAQItem[] = [
  {
    question: 'Is Novalink only for Atome-related work?',
    answer:
      'No. Atome onboarding support is one path. Novalink also supports websites, landing pages, commerce and payment-related work, and selected digital execution projects.',
  },
  {
    question: 'What type of businesses does Novalink usually support?',
    answer:
      'The current focus is SME teams that need practical implementation support without unnecessary process overhead.',
  },
  {
    question: 'Can we start with one scoped project first?',
    answer:
      'Yes. Most work starts with a focused scope, then expands only when priorities, ownership, and expected outcomes are clear.',
  },
];

export const atomeBenefits = [
  {
    title: 'Offer-Focused Landing Path',
    detail: 'Keep campaign messaging centered on the Atome offer while preserving clear next steps for merchants.',
  },
  {
    title: 'Onboarding Coordination Support',
    detail: 'Novalink supports merchant onboarding coordination, documentation flow, and response handling.',
  },
  {
    title: 'Launch-Ready Structure',
    detail: 'Use modular sections for benefits, FAQ, objections, and CTA so campaign updates can be made quickly.',
  },
];

export const atomeFAQs: FAQItem[] = [
  {
    question: 'Is Novalink presented as Atome internal staff on this page?',
    answer:
      'No. Novalink is positioned as the supporting operator for onboarding coordination and merchant support, not as Atome internal staff.',
  },
  {
    question: 'Is this the final campaign copy?',
    answer:
      'No. This route is intentionally a structured placeholder. Final offer terms, proof assets, and BM-first campaign copy should be inserted after approval.',
  },
  {
    question: 'Can this page be localized to BM-first later?',
    answer:
      'Yes. The page is built to keep copy blocks modular, with TODO markers where BM-first copy can be inserted during campaign refinement.',
  },
];

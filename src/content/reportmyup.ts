/**
 * ReportMyUP case study — ALL content
 *
 * Edit this file to add or update any text, data, or images.
 * No section component file needs to change for content updates.
 */

import imgMigrationHeader from '../assets/images/reportmyup-migration-header.png';
import imgRmupProductShot1 from '../assets/images/reportmyup-product-shot.png';
import imgUpExchangeProductShot1 from '../assets/images/reportmyup-exchange-product-shot.png';
import imgUpEnterpriseProductShot1 from '../assets/images/reportmyup-enterprise-product-shot.png';
import imgRmupPricingScreenshot1 from '../assets/images/reportmyup-pricing-screenshot.png';
import imgRmupCheckoutScreenshot1 from '../assets/images/reportmyup-checkout-screenshot.png';
import imgRmupTrialPaywallBlockerScreenshot1 from '../assets/images/reportmyup-trial-paywall-blocker.png';
import imgRmupUserSettingScreenshot1 from '../assets/images/reportmyup-user-settings-screenshot.png';
import imgMigrationFlow from '../assets/images/reportmyup-migration-flow.png';
import imgMigrationEmail from '../assets/images/reportmyup-migration-email.png';
import imgUpUserJourney from '../assets/images/reportmyup-user-journey.png';
import vidMigrationDemoModern from '../assets/images/reportmyup-migration-modern.mov';
import vidMigrationDemoReport from '../assets/images/reportmyup-migration-report.mp4';
import vidMigrationDemoBilling from '../assets/images/reportmyup-migration-billing.mp4';

// ─── Hero Section ────────────────────────────────────────────────────────────

export const heroSection = {
  titleId: 'rmup-hero-title',
  title: 'Pivot from struggling launch to $4.79M revenue opportunity',
  about:
    'Growth strategy and service design for compliance software that helps businesses report unclaimed property to states.',
  role: 'Design Lead',
  timeline: 'Feb 2025 - current',
  collaborators:
    'UX Designer, Product Manager, Developers, QA Engineers, Content Designer, Technical Writer, Marketing, Support, Legal',
  heroImage: {
    src: imgMigrationHeader,
    alt: 'ReportMyUP product interface showing the dashboard and key features of the compliance software',
  },
  imageBackground: 'var(--color-bg-cream)',
};

// ─── Challenges Section ───────────────────────────────────────────────────────

export interface ChallengesProduct {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const challengesProducts: ChallengesProduct[] = [
  {
    title: 'ReportMyUP (former UP Standard)',
    description: 'New self-service platform (nearly identical features to UPExchange).',
    image: imgRmupProductShot1,
    imageAlt: 'ReportMyUP platform interface showing modern self-service features',
  },
  {
    title: 'UPExchange',
    description: 'Legacy platform with 2,000+ customers, manual sales and billing, poor UX.',
    image: imgUpExchangeProductShot1,
    imageAlt: 'UPExchange legacy platform interface',
  },
  {
    title: 'UPEnterprise',
    description: 'For large enterprises and managed services with complex or multi-company needs.',
    image: imgUpEnterpriseProductShot1,
    imageAlt: 'UPEnterprise platform interface for enterprise clients',
  },
];

export interface ChallengesMetric {
  title: string;
  description: string;
}

export const challengesMetrics: ChallengesMetric[] = [
  {
    title: 'Revenue leakage',
    description:
      'Significant revenue leakage from 37% of customers paying for the wrong product subscriptions or tiers due to product feature overlap and missing tiers.',
  },
  {
    title: 'Costly Maintenance',
    description:
      'High maintenance cost from supporting 3 Unclaimed Property products serving the same market decrease the margin.',
  },
  {
    title: 'Unscalable process',
    description:
      "Sovos Unclaimed Property can't scale into a market leader with 12 steps of manual sales and support process to onboard 1 customer.",
  },
];

// ─── Root Cause Analysis Section ─────────────────────────────────────────────

export interface RootCauseCard {
  title: string;
  items: string[];
}

export const rootCauseData: RootCauseCard[] = [
  {
    title: 'New Customer Acquisition',
    items: [
      '99% of users (297 out of 300) abandoned at credit card requirement',
      '$699 minimum price created high entry barrier for low record needs',
      "Users couldn't evaluate product value before purchase commitment",
      'Niche industry with limited discovery channels (states no longer allow vendor listings)',
      'Corporate approval processes required more confidence-building',
    ],
  },
  {
    title: 'Migration',
    items: [
      'Existing UPExchange customers saw no compelling reason to switch',
      'Migration messaging was product-centric, not benefit-focused',
      'Customers feared disruption during migration',
      'Lack of trust in new platform capabilities',
    ],
  },
  {
    title: 'Revenue Optimization',
    items: [
      'No tier differentiation meant undercharging power users',
      'Missing upsell opportunities for add-on services',
      "Couldn't segment customers by actual usage and needs",
      'Missing revenue from late billing and billing errors',
    ],
  },
];

// ─── Design Highlights Section ───────────────────────────────────────────────

export interface DesignHighlight {
  number: number;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export const designHighlights: DesignHighlight[] = [
  {
    number: 1,
    title: 'Designed $299 entry-level tier (down from $699 minimum)',
    image: imgRmupPricingScreenshot1,
    imageAlt: 'ReportMyUP pricing tiers showing the new $299 entry-level option',
    imagePosition: 'right',
  },
  {
    number: 2,
    title: 'Removed credit card requirement from signup',
    image: imgRmupCheckoutScreenshot1,
    imageAlt: 'ReportMyUP signup flow without credit card requirement',
    imagePosition: 'left',
  },
  {
    number: 3,
    title: 'Created free trial workflow with strategic paywall experience',
    image: imgRmupTrialPaywallBlockerScreenshot1,
    imageAlt: 'ReportMyUP trial paywall interface showing upgrade prompts',
    imagePosition: 'right',
  },
  {
    number: 4,
    title: 'Designed add-on upsell system for incremental revenue growth',
    image: imgRmupUserSettingScreenshot1,
    imageAlt: 'ReportMyUP user settings showing add-on services available for purchase',
    imagePosition: 'left',
  },
];

export const designHighlightResults: string[] = [
  '5,233% Increase in new signups.',
  'Foundation for scalable self-service acquisition throughout Sovos.',
];

// ─── Impact Section ───────────────────────────────────────────────────────────

export interface ImpactStat {
  value: string;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: '5,233 %', label: 'Increase in new signups' },
  { value: '1,000 +', label: 'Customers migrated to ReportMyUP' },
  { value: '$ 4.79 M', label: 'Projected revenue from the migration' },
  { value: '2,000 +', label: 'Inactive/unpaid accounts cleaned up' },
];

export interface ImpactCallout {
  title: string;
  description: string;
}

export const impactCallouts: ImpactCallout[] = [
  {
    title: "Shaped Sovos Unclaimed Property's 3 year roadmap",
    description:
      "The end-to-end journey map I created and my propsed service design strategy shaped Sovos Unclaimed Property's 3 year roadmap.",
  },
  {
    title: 'Reduced maintenance costs From sunsetting UPExchange',
    description:
      'Migrating customers to ReportMyUP and sunsetting UPExchange reduced maintenance costs for UPExchange.',
  },
  {
    title: 'Streamlined sales and support processes',
    description:
      "ReportMyUP's self-serve flows allowed customers to speed up their process so Sovos staff could focus on high-value contracts.",
  },
];

// ─── Migration Section ────────────────────────────────────────────────────────

export interface MigrationStrategy {
  number: number;
  title: string;
  items: string[];
}

export const migrationStrategies: MigrationStrategy[] = [
  {
    number: 1,
    title: 'Phased Migration Approach',
    items: [
      'Started with 40-customer pilot cohort to test and learn',
      'Expanded to 5 total cohorts reaching over 2,000 customers',
      'Designed seamless migration flow that minimized disruption and maximized perceived value',
    ],
  },
  {
    number: 2,
    title: 'User-Centered Messaging',
    items: [
      'Identified most valued features through support tickets analysis and stakeholders interviews',
      'Extended notification to Pendo guides and banners to walk users through transition and inform product changes',
      'Rewrote product-centric marketing messages to focus on user benefits',
      'Positioned migration as "upgrade with benefits" rather than forced change',
    ],
  },
  {
    number: 3,
    title: 'Migration Monitoring & Iteration',
    items: [
      'Collaborated with Product and Marketing to add missing features blocking migration',
      'Refined messaging and services based on real user behavior',
      'Analyzed cohort-by-cohort data to identify drop-off points',
      'Strategized service experience for migration edge cases',
    ],
  },
];

export const migrationResults: string[] = [
  '1,000+ customers successfully migrated',
  'Projected revenue: $4.79M with 80% conversion',
  'Cleaned up 2,000+ inactive/unpaid accounts, preventing future revenue loss and database overhead',
  'Scheduled sunset for UPExchange to reduce costs',
];

// ─── Long-Term Strategy Section ───────────────────────────────────────────────

export interface LongTermCard {
  number: number;
  title: string;
  items: string[];
}

export const longTermCards: LongTermCard[] = [
  {
    number: 1,
    title: 'Competitive & Journey Analysis',
    items: [
      "Identified service gaps by analyzing competitor offerings and advantages",
      "Discovered 2 Sovos' internal capabilities and partnerships not being leveraged",
      'Connected software capabilities to consulting services for integrated upsell',
      'Proposed service touchpoint extensions for new revenue streams',
    ],
  },
  {
    number: 2,
    title: 'Strategic Recommendations',
    items: [
      'Proposed service touchpoint extensions across the compliance lifecycle',
      'Identified upsell opportunities for add-on services',
      'Connected product capabilities to consulting services for integrated offerings',
    ],
  },
];

export const longTermResults: string[] = [
  'Shaped 3-year product roadmap with research findings',
  'Unlocked revenue streams from extended service touch points',
  'Projected increased revenue from better tier segmentation and upsells',
];

// ─── Section header objects (for prop-driven components) ──────────────────────

export const challengesSectionHeader = {
  label: 'The Challenges',
  title: 'Disappointing launch turnout',
  description:
    'After investing 6 months building ReportMyUP, we launched in September 2024 during peak filing season and got only 3 signups. The investment couldn\'t be justified, and we needed to pivot immediately.',
};

export const rootCauseSectionHeader = {
  label: 'Root Cause Analysis',
  title: 'Critical barriers in 3 areas',
  description: 'Through user interviews, checkout analytics, and stakeholder research, I identified critical barriers:',
};

export const designHighlightsSectionHeader = {
  label: 'Design highlight 1',
  title: 'Remove Friction from New Customer Acquisition',
};

export const migrationSectionHeader = {
  label: 'Design highlight 2',
  title: 'Strategic Migration of 2,000+ Existing Customers',
  description:
    'Migrate UPExchange customers to suitable products and tiers (ReportMyUP Standard, Plus, or UPEnterprise) based on their usage and feature needs.',
};

export const migrationUserFlow = {
  title: 'Migration user flow',
  description: "My user flow design transformed customer's migration from 5 steps to 1 click.",
  image: imgMigrationFlow,
  imageAlt: 'Migration user flow diagram showing simplified 1-click process',
};

export const migrationEmailDeliverable = {
  title: 'Migration email',
  description: 'My email design promoted the most valuable features to customers.',
  image: imgMigrationEmail,
  imageAlt: 'Migration email promoting valuable features to customers',
};

export const migrationDemoDeliverable = {
  title: 'Feature demos',
  description: 'My demo video promoted the most valuable features to customers.',
  videos: [
    { src: vidMigrationDemoModern, label: 'Modern look feature demonstration' },
    { src: vidMigrationDemoReport, label: 'Multi-state report feature demonstration' },
    { src: vidMigrationDemoBilling, label: 'Billing feature demonstration' },
  ],
};

export const longTermSectionHeader = {
  label: 'Design highlight 3',
  title: 'Long-Term Revenue & Service Strategy',
};

export const longTermJourneyImage = {
  src: imgUpUserJourney,
  alt: 'User journey diagram showing compliance lifecycle touchpoints and service opportunities',
};

export const impactSectionHeader = {
  label: 'The Impact',
  title: 'Unprecedented growth & successful migration',
};

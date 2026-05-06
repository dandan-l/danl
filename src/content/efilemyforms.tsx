/**
 * eFileMyForms case study — ALL content
 *
 * Edit this file to add or update any text, data, or images.
 * No section component file needs to change for content updates.
 */

import React from 'react';

// ─── Images ───────────────────────────────────────────────────────────────────
import imgPrototypeReviewEfmf from '../assets/images/efilemyforms-prototype-review.png';
import imgJustinImage from '../assets/images/persona-justin.png';
import imgLeilaImage from '../assets/images/persona-leila.png';
import bellEmoji from '../assets/images/emoji-bell.png';
import moneyEmoji from '../assets/images/emoji-money.png';
import ladderEmoji from '../assets/images/emoji-ladder.png';
import frownEmoji from '../assets/images/emoji-frowning.png';
import tapeEmoji from '../assets/images/emoji-tape.png';
import imgDesignSystemShowcase from '../assets/images/efilemyforms-design-system-showcase.png';
import imgOldHomeBeforeLogin from '../assets/images/efilemyforms-old-home-before-login.png';
import imgOldHomeAfterLogin from '../assets/images/efilemyforms-old-home-after-login.png';
import imgOldCartPage from '../assets/images/efilemyforms-old-cart-page.png';
import imgOldOrderReview from '../assets/images/efilemyforms-old-order-review.png';
import imgOldSignUpSuccess from '../assets/images/efilemyforms-old-signup-success.png';
import imgOldIaNewCustomer from '../assets/images/efilemyforms-old-ia-new-customer.png';
import imgOldIaExistingCustomer from '../assets/images/efilemyforms-old-ia-existing-customer.png';
import imgNewIaNewCustomer from '../assets/images/efilemyforms-new-ia-new-customer.png';
import imgNewIaExistingCustomer from '../assets/images/efilemyforms-new-ia-existing-customer.png';
import vidModernizationStrategy from '../assets/images/GlobalModernizationStrategy.mp4';
import imgOldSignUpFlow from '../assets/images/efilemyforms-old-signup-flow.png';
import imgNewSignupDesign from '../assets/images/efilemyforms-new-signup-design.png';
import imgOldCartAddon from '../assets/images/efilemyforms-old-cart-addon.png';
import imgOldOrderReviewDelay from '../assets/images/efilemyforms-old-order-review-delay.png';
import imgCheckoutRedesign from '../assets/images/efilemyforms-checkout-redesign.png';
import imgRedditPost from '../assets/images/efilemyforms-reddit-post.png';
import imgPizzaParty from '../assets/images/efilemyforms-pizza-party.png';
import img1099Mkt from '../assets/images/marketing-1099.png';
import imgTinkMkt from '../assets/images/marketing-tink.png';
import imgUpMkt from '../assets/images/marketing-up.png';
import imgEfmfMkt from '../assets/images/marketing-efilemyforms.png';

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface CalloutItem {
  title: string;
  description: React.ReactNode;
}

export interface SolutionItem {
  number: number;
  subtitle: string;
  description: string;
}

export interface PersonaData {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  bulletPoints: string[];
  userType: string;
}

export interface MetricData {
  value: string;
  label: string;
}

export interface InsightData {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface ResearchMethodData {
  title: string;
  description: string;
}

export interface QuoteItem {
  text: string;
  author: string;
}

// ─── Hero Section ────────────────────────────────────────────────────────────

export const heroSection = {
  titleId: 'efmf-hero-title',
  title: 'Made tax filing easy and modern for stressed small business owners',
  about:
    'Product redesign and growth strategy for tax compliance software that helps small businesses and accountants file 1099 forms.',
  role: 'Solo Product Designer',
  timeline: 'Jul 2022 - Feb 2023',
  collaborators:
    'Product Manager, Product Owner, Developers, QA Engineers, Content Designer, Technical Writer, Marketing, Support, Legal',
  heroImage: {
    src: imgPrototypeReviewEfmf,
    alt: 'eFileMyForms prototype review showing the redesigned interface',
  },
};

// ─── Persona Section ─────────────────────────────────────────────────────────

export const personaSection = {
  label: 'Persona',
  title: 'Overwhelmed owners & high-volume accountants',
  description:
    "As the gig economy grows and tax filing gets more complex, it's important to simplify the tax filing experience for small business owners who may not be knowledgeable in taxes. Simplifying the experience for them also helps power users like accountants to get their job done faster, especially working during busy tax season and with a large quantity of clients.",
  personas: [
    {
      name: 'Justin',
      title: "Owner @ Justin's Barber Shop",
      image: imgJustinImage,
      imageAlt: 'Portrait of Justin, small business owner',
      bulletPoints: [
        'Manages all business aspects and daily duties of running a barber shop',
        'Unfamiliar with tax filing',
        "Can't afford to hire an accountant",
      ],
      userType: 'Small business owners',
    },
    {
      name: 'Leila',
      title: 'Accountant @ DLC Accounting Services',
      image: imgLeilaImage,
      imageAlt: 'Portrait of Leila, professional accountant',
      bulletPoints: [
        "Has been managing the same 15 companies' tax forms for 6 years",
        'Familiar with tax requirements',
        'Handles large volumes on tight deadlines',
      ],
      userType: 'Accountant (power user)',
    },
  ] as PersonaData[],
};

// ─── Impact Section ──────────────────────────────────────────────────────────

export const impactSection = {
  label: 'The Impact',
  title: 'Record-breaking growth & happy customers',
  metrics: [
    { value: '23 %', label: 'Increase in ARR' },
    { value: '44 %', label: 'Increase in new signups' },
    { value: '15 point', label: 'Increase in NPS' },
    { value: '50+', label: 'Pages modernized' },
  ] as MetricData[],
};

// ─── Analysis Section ────────────────────────────────────────────────────────

export const analysisSection = {
  label: 'The Analysis',
  title1: 'What are people saying about tax?',
  title2: 'What is Sovos saying about eFileMyForms (EFMF)?',
  insightsPeople: [
    {
      icon: moneyEmoji,
      iconAlt: '',
      title: 'Mistakes come with steep penalties',
      description:
        "Users like Justin may have to file their taxes right before deadlines because they need to prioritize daily duties and wait for financial records. The stress could make them more prone to errors and penalties.",
    },
    {
      icon: tapeEmoji,
      iconAlt: '',
      title: 'Tax filing is outdated and clunky',
      description:
        "The tax industry's commonly outdated and clunky solutions don't help users like Justin or Leila to finish their tax filing quickly and easily so they can get back to their daily responsibilities.",
    },
    {
      icon: frownEmoji,
      iconAlt: '',
      title: "It's tedious and difficult to file",
      description:
        "It takes a village to learn the latest tax rules and file taxes correctly. Hiring professional help isn't always affordable for mom-and-pop shops like Justin's, and outdated tax solutions only made it harder.",
    },
  ] as InsightData[],
  insightsSovos: [
    {
      icon: moneyEmoji,
      iconAlt: '',
      title: 'EFMF was popular, but the support cost was unsustainable',
      description:
        'Customers called support to guide them through the process. 20~30 min phone calls disrupt the economics of small orders of 2~3 forms (~$14).',
    },
    {
      icon: ladderEmoji,
      iconAlt: '',
      title: 'In a growing eFile market, EFMF lagged behind competitors',
      description:
        'Growing eFile needs created opportunities and competition. But EFMF had limited market visibility and a smaller customer base than competitors like Tax1099.',
    },
    {
      icon: bellEmoji,
      iconAlt: '',
      title: 'Lost revenue opportunities from low add-on conversion',
      description:
        "Low add-on conversion was significant because raising base prices could hurt retention in an e-commerce market with similarly-priced competitors like eFile4Biz.",
    },
  ] as InsightData[],
  researchTitle: 'How did I gather these insights?',
  researchMethods: [
    {
      title: '🎙 Internal stakeholder interviews & alignment meetings',
      description: 'Recognized user behaviors, identified user pain points, and aligned on business objectives.',
    },
    {
      title: '💹 Market research',
      description:
        "Analyzed competitive landscape, industry trends, and EFMF's market position through competitor analysis, online forums, and search behavior analysis.",
    },
    {
      title: '🕵🏻‍♀️ End-to-end UX evaluation',
      description:
        'Conducted comprehensive user journey analysis across all touch points, including pricing structure, user acquisition flows, and filing flow.',
    },
    {
      title: '🧑‍💻 Product usage analysis',
      description:
        'Partnered with developers to analyze product metrics, user behavior patterns, traffics, and feature adoption.',
    },
    {
      title: '⚖️ Compliance research',
      description:
        'Research current tax regulations, IRS filing requirements, and the compliance landscape through official documentation, regulatory updates, and internal subject matter experts.',
    },
  ] as ResearchMethodData[],
};

// ─── Branding Section ────────────────────────────────────────────────────────

export const brandingSection = {
  label: '🌟 Design highlights 1.',
  title: 'Modernized branding',
  showcaseImage: {
    src: imgDesignSystemShowcase,
    alt: 'eFileMyForms redesigned design system showcasing modern color palette, typography, and UI components',
  } as ImageAsset,
  beforeDesignTitle: 'Before my design',
  beforeImages: [
    { src: imgOldHomeBeforeLogin, alt: 'Old eFileMyForms home page before login showing outdated design' },
    { src: imgOldHomeAfterLogin, alt: 'Old eFileMyForms home page after login' },
    { src: imgOldCartPage, alt: 'Old eFileMyForms cart page' },
    { src: imgOldOrderReview, alt: 'Old eFileMyForms order review page' },
    { src: imgOldSignUpSuccess, alt: 'Old eFileMyForms signup success page' },
  ] as ImageAsset[],
  problemsTitle: 'Problems',
  problems: [
    {
      title: 'Outdated Visual Design',
      description: 'Left an unprofessional, untrustworthy first impression that deterred prospects from signing up.',
    },
    {
      title: 'Market Demands',
      description: "People have been asking for modern tax solutions, and EFMF's competitors are offering them.",
    },
    {
      title: 'Accessibility Concern',
      description: 'Issues like gradient and low contrast could make reading difficult.',
    },
  ] as CalloutItem[],
  solutionTitle: 'Solution',
  solutions: [
    {
      title: 'Designed New Branding',
      description: (
        <>
          Partnered with product and marketing team members to design new branding that will leave an impression that is{' '}
          <strong>modern</strong>, <strong>professional</strong>, and even a little <strong>playful</strong>, while
          preserving eFileMyForms' original identity (the lightning bolt logo symbolizing speed and reliability).
        </>
      ),
    },
  ] as CalloutItem[],
};

// ─── Information Architecture Section ───────────────────────────────────────

export const iaSection = {
  label: '🌟 Design highlights 2.',
  title: 'Seamless journey & more organized information architecture',
  problemsTitle: 'Problems',
  problems: [
    {
      title: 'Cluttered and dense content',
      description:
        'The cluttered and dense content created cognitive overload, preventing prospective and existing customers from easily locating information relevant to their needs.',
    },
    {
      title: 'High support demands on basic guidance',
      description:
        'Missing guidance caused customers calling support to show them how to start, one of the top support case drivers.',
    },
  ] as CalloutItem[],
  solutionsTitle: 'Solutions',
  solutions: [
    {
      title: 'Seamless end-to-end experience',
      description:
        'Seamless end-to-end experience that guides users from the purchase decision through tax filing with focused content and clear guidance at every step.',
    },
    {
      title: 'Restructured information architecture',
      description:
        'Restructured information architecture that highlights essential information while keeping secondary resources accessible.',
    },
  ] as CalloutItem[],
  beforeImages: [
    {
      src: imgOldIaNewCustomer,
      alt: 'Old information architecture for new customers showing complex navigation',
    },
    {
      src: imgOldIaExistingCustomer,
      alt: 'Old information architecture for existing customers',
    },
  ] as ImageAsset[],
  afterImages: [
    {
      src: imgNewIaNewCustomer,
      alt: 'New information architecture for new customers showing simplified navigation',
    },
    {
      src: imgNewIaExistingCustomer,
      alt: 'New information architecture for existing customers',
    },
  ] as ImageAsset[],
};

// ─── Prototype Section ───────────────────────────────────────────────────────

export const prototypeSection = {
  label: 'Design highlight 3',
  title: 'Global modernization strategy',
  video: vidModernizationStrategy,
  problemsTitle: 'Problems',
  problems: [
    {
      title: 'Resource constraints',
      description: 'Small team with only 1 front-end developer.',
    },
    {
      title: 'Tight deadline',
      description: 'Full-site redesign in 8 months.',
    },
    {
      title: 'Technical constraints',
      description:
        "Older codebase incompatible with Sovos' internal component library without major refactoring that risked site stability and timeline.",
    },
  ] as CalloutItem[],
  solutionTitle: 'Solution',
  solutions: [
    {
      title: 'Phased modernization strategy',
      description: (
        <>
          Partnered with products and developers to create phased modernization strategy that achieved visual
          transformation without extensive effort. By breaking work into focused phases —{' '}
          <strong>global nav/footer</strong> → <strong>distraction cleanup</strong> →{' '}
          <strong>fonts/tables</strong> — and leveraging CSS modifications to existing components, each release
          delivered instant user value while minimizing development scope and technical risk.
        </>
      ),
    },
  ] as CalloutItem[],
};

// ─── Signup Section ──────────────────────────────────────────────────────────

export const signupSection = {
  label: '🌟 Design highlights 4.',
  title: 'Single-step, guided signup to start with ease',
  problemTitle: 'Problems',
  problemDescription: '3-step signup with unnecessary data collection (18 data fields) hurt conversion.',
  problemCalloutTitle: 'Long signup process',
  beforeImage: {
    src: imgOldSignUpFlow,
    alt: 'Old signup flow showing lengthy 3-step process with unnecessary fields',
  } as ImageAsset,
  solutionsTitle: 'Solutions',
  solutions: [
    {
      number: 1,
      subtitle: 'Removed 14 unused data fields',
      description:
        'Partnered with product, devs, and support to identify unused data and remove them from signup requirements.',
    },
    {
      number: 2,
      subtitle: 'Streamline 3 steps into 1',
      description:
        'Customers can now create an account in a single screen, dramatically reducing abandonment and friction.',
    },
    {
      number: 3,
      subtitle: 'Mobile-responsive signup and login',
      description:
        'Recognizing high mobile signup volume, the redesigned flow is now responsive, allowing users to sign up from anywhere without friction.',
    },
    {
      number: 4,
      subtitle: 'Better product insights via new URL architecture',
      description:
        'Unique URLs for each step provided product and marketing teams with visibility into where users drop off, empowering data-driven improvements.',
    },
  ] as SolutionItem[],
  afterImage: {
    src: imgNewSignupDesign,
    alt: 'New signup design showing streamlined single-screen process',
  } as ImageAsset,
  bottomDescription:
    'This streamlined approach achieved a core business goal, increasing signup conversion, while establishing a better URL architecture for data collection. Removing unnecessary data collection also reduced compliance exposure and security risk. While full-site responsiveness wasn\'t feasible due to limited bandwidth, strategically investing in critical user entry points improved accessibility and mobile conversion.',
};

// ─── Checkout Section ────────────────────────────────────────────────────────

export const checkoutSection = {
  label: '🌟 Design highlights 5.',
  title: 'Guided secure checkout to pay with confidence',
  problemTitle: 'Problems',
  problemCalloutTitle: 'Buried add-ons',
  problemDescription: 'Critical add-ons and options were buried and poorly guided.',
  beforeImages: [
    { src: imgOldCartAddon, alt: 'Old cart page showing hidden add-ons' },
    { src: imgOldOrderReviewDelay, alt: 'Old order review page with unclear pricing' },
  ] as ImageAsset[],
  solutionsTitle: 'Solution',
  solutions: [
    {
      number: 1,
      subtitle: 'Surfaced add-ons in order review',
      description:
        'Moved add-ons from buried My Cart page to a dedicated Order Review section, added conditional logic to recommend add-ons based on chosen forms, and added real-time display on applicable forms and add-on pricing.',
    },
    {
      number: 2,
      subtitle: 'Redesigned delay processing options',
      description:
        'Replaced confusing technical descriptions with clear, friendly content, and added conditional prompts that explain when processing should start to allow time for TINCheck.',
    },
    {
      number: 3,
      subtitle: 'Celebrated purchase milestones',
      description:
        'Redesigned Order Received page to acknowledge the order and provide clear guidance on next steps. This reduces post-purchase anxiety and decreases support ticket volume.',
    },
    {
      number: 4,
      subtitle: 'Relocated terms of service',
      description:
        'Partnered with legal and marketing to consolidate terms of service and move the acceptance checkbox from checkout to signup.',
    },
  ] as SolutionItem[],
  afterImage: {
    src: imgCheckoutRedesign,
    alt: 'New checkout design showing clear add-on recommendations and transparent pricing',
  } as ImageAsset,
};

// ─── Result Section ──────────────────────────────────────────────────────────

export const resultSection = {
  label: 'The result',
  title: 'How did it turn out?',
  deliveryTitle: 'Unprecedented delivery',
  deliveryItems: [
    'In 4 months, we delivered the phase 1 redesign - a design MVP.',
    '5 months later, we delivered the phase 2 - the checkout experience upgrade.',
    'In total, we redesigned 50+ pages with many major experience improvements, all within tight timeline and resources. This is unprecedented at Sovos, especially for a newly formed team.',
  ],
  reviewsTitle: 'Glowing reviews',
  reviews: [
    {
      text: "I am fairly new to QuickBooks, and my Builder wanted me to file and mail the 1099s this year instead of the CPA. I was terrified I would do something wrong. However, I found your website and after reviewing it, the process looked fairly easy. Wow! It was so easy and I didn't have to do any of the work, other than entering the info for the Sub-Contractors. The price was fantastic!",
      author: 'Randy Wright Builders, LLC',
    },
    {
      text: 'I LOVE-LOVE-LOVE this service. The site is informative, easy to navigate and it makes the filing process incredibly simple and efficient.',
      author: 'B & B Machine and Grinding Service Corp',
    },
    {
      text: "An eFileMyForms client told me that they noticed the new site and were thrilled with the upgrades. It didn't confuse them at all... they truly believe in our product and show unwavering loyalty.",
      author: 'Sovos CMO',
    },
  ] as QuoteItem[],
  viralTitle: 'Did the new design go viral?',
  stats: [
    { value: '23%', label: 'Increase in ARR' },
    { value: '44%', label: 'Increase in new signups' },
    { value: '15 point', label: 'Increase in NPS' },
  ] as MetricData[],
  specialStat: {
    value: 'Overwhelmed server',
    label: 'Due to popularity (a good problem to have 😉)',
  } as MetricData,
  redditImage: {
    src: imgRedditPost,
    alt: 'Positive customer feedback on Reddit about eFileMyForms redesign',
  } as ImageAsset,
  challengesTitle: 'Of course, it came with challenges.',
  challengesParagraphs: [
    'To ensure timely delivery and a smooth experience across the entire user journey, I wore many hats, including: product owner, QA engineer, product manager, developer and managed projects like: email, back office management, and marketing messaging. Coding dark mode for product emails was a pain...',
    'Ancient and untouchable code infrastructure forced us to abandon progress and design last-minute alternatives. The complexity of tax filing required approvals from marketing, legal, product, content, and support for every design decision.',
    'By being open to exploration, learning from each other, and adapting to changing priorities, we, as a new team, grew close and accomplished a lot together.',
  ],
  challengesImage: {
    src: imgPizzaParty,
    alt: 'Team celebration with pizza party',
  } as ImageAsset,
  legacyTitle: 'My legacy continues on Sovos\u2019 global portfolio..',
  legacyImages: [
    { src: img1099Mkt, alt: '1099 Marketing page showcasing design system' },
    { src: imgTinkMkt, alt: 'TIN Check Marketing page showcasing design system' },
    { src: imgUpMkt, alt: 'UP Marketing page showcasing design system' },
    { src: imgEfmfMkt, alt: 'eFileMyForms Marketing page showcasing design system' },
  ] as ImageAsset[],
  legacyText:
    'The branding and experience I created for e-commerce products have been adopted across Sovos. Three years later, you can still see this design foundation across Sovos\u2019 product portfolio - a strategic move to create cohesive branding and experience across the entire company, making design easier to implement and scale.',
};

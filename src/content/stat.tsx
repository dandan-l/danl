/**
 * Statutory Reporting case study — ALL content
 *
 * Edit this file to add or update any text, data, or images.
 * No section component file needs to change for content updates.
 */

import React from 'react';

// ─── Images ───────────────────────────────────────────────────────────────────
import imgBackgroundDiagram from '../assets/images/statutoryreporting-background-diagram.png';
import imgGainStrategyDiagram from '../assets/images/statutoryreporting-gain-strategy-diagram.png';
import imgPersonaDiagram from '../assets/images/statutoryreporting-persona-diagram.png';
import imgDataEntryFlow from '../assets/images/statutoryreporting-data-entry-flow.png';
import imgFormatFlow from '../assets/images/statutoryreporting-format-flow.png';
import imgUserTimerDiagram from '../assets/images/statutoryreporting-user-timer-diagram.png';
import imgOgNotesPrototype from '../assets/images/statutoryreporting-og-notes-prototype-cropped.png';
import imgNewFormMode from '../assets/images/statutoryreporting-new-form-mode.png';
import imgSpreadsheetMode from '../assets/images/statutoryreporting-spreadsheet-mode.png';
import imgModeDialog from '../assets/images/statutoryreporting-mode-dialog.png';
import imgWireframe from '../assets/images/statutoryreporting-wireframe.png';
import imgProductRoadmap from '../assets/images/statutoryreporting-product-roadmap.png';
import imgInterviewBqr from '../assets/images/statutoryreporting-interview-bqr.png';
import imgInterviewClients from '../assets/images/statutoryreporting-interview-clients.png';
import imgBabyBloudBg from '../assets/images/babyblueCloudBG.png';
import vidFullUi from '../assets/images/statutoryreporting-full-ui.mp4';
import vidDataEntryProcess from '../assets/images/statutoryreporting-data-entry-process.mp4';
import vidPageBreakProcess from '../assets/images/statutoryreporting-page-break-process.mov';
import vidNoteNotApplicable from '../assets/images/statutoryreporting-note-not-applicable.mp4';
import vidNoteReuseData from '../assets/images/statutoryreporting-note-reuse-data.mp4';
import vidNoteNavShortcut from '../assets/images/statutoryreporting-note-navigation-shortcut.mp4';
import vidNoteAiFormat from '../assets/images/statutoryreporting-note-ai-format.mp4';

export { imgBabyBloudBg };

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const heroSection = {
  titleId: 'stat-hero-title',
  title: 'Redesigned Notes editor to help insurance preparers finish faster and reduce churn',
  about: "Research-driven redesign of the Notes editor in Sovos Statutory Reporting — the tool insurance preparers use to create financial statements.",
  role: 'Design Lead',
  timeline: 'Jul 2025 - Current',
  collaborators: 'Product Manager, SVPs, Developers, Regulatory Specialists, Content Designer, Technical Writer, Support',
  heroVideo: vidFullUi,
  heroImage: {
    src: imgOgNotesPrototype,
    alt: 'Sovos Statutory Reporting Notes editor interface showing financial statement data entry',
  },
  imageBackground: 'var(--stat-hero-img-bg)',
};

// ─── Background Section ───────────────────────────────────────────────────────

export const backgroundSectionHeader = {
  label: 'Background',
  title: 'Insurance preparers use Sovos Statutory Reporting to create financial statements. Notes are the most complex part.',
  description: "For 20+ years, Sovos Statutory Reporting has been the go-to software for insurance companies, from mid-sized firms to Fortune 500s, to create financial statements. The most complex piece of those statements, Notes to Financial Statements, became what damaged Sovos' market position.",
};

export const backgroundDiagram = {
  src: imgBackgroundDiagram,
  alt: 'Diagram showing how Sovos Statutory Reporting fits into the insurance financial statement workflow, from data entry to NAIC submission',
};

// ─── Challenges Section ───────────────────────────────────────────────────────

export const challengesSectionHeader = {
  label: 'The Challenges',
  title: "Notes redesign is urgent. A competitor with better design is winning 13% of Sovos' clients.",
  description: (
    <>
      Gain Compliance targeted Sovos clients directly, positioning their Notes editor as cheaper and more intuitive. In 1 year, Sovos dropped from{' '}
      <strong>70%</strong> to <strong>57%</strong> market share. Meanwhile, AI-assisted analysis of support tickets confirmed that Notes alone generated{' '}
      <strong>479</strong> cases in 1 year.
    </>
  ) as React.ReactNode,
};

export const challengesDiagram = {
  src: imgGainStrategyDiagram,
  alt: "Diagram showing Gain Compliance using Sovos' pain points as a sales pitch to win over Sovos clients",
  caption: "Gain using Sovos' pain point as a sales pitch",
};

export interface ChallengesCallout {
  title: string;
  description: string;
}

export const challengesCallouts: ChallengesCallout[] = [
  {
    title: '13% Market Share Loss',
    description: 'Acquiring a competing product helped Sovos become one of the market leaders. But with Gain, Statutory Report dropped from 70% to 57% in 1 year.',
  },
  {
    title: 'Costly Support',
    description: 'Using Claude to analyze support cases from 2024 to 2025, I found that 479 / 12,036 (~4%) cases were about Notes, making operations expensive.',
  },
  {
    title: 'Losing Clients With High ARR',
    description: "Gain started with smaller clients but began winning Sovos' highest-value clients.",
  },
];

// ─── Impact Section ───────────────────────────────────────────────────────────

export const impactSectionHeader = {
  label: 'The Impact',
  title: 'Enthusiastic client reaction & an unplanned performance win',
};

export interface ImpactCallout {
  title: string;
  description: string;
}

export const impactCallouts: ImpactCallout[] = [
  {
    title: '"Killing Us" > "Helping Big Time"',
    description: 'A client who once described the workflow as "killing us" now considers the new design as "helping big time."',
  },
  {
    title: '"The Automatic Is Definitely Looking Really Promising"',
    description: "Client's reaction to the auto-format design.",
  },
  {
    title: 'Asked For The Release Date 3 Times',
    description: 'Client asked repeatedly after seeing the not-applicable and auto-format features.',
  },
  {
    title: 'Interested In Coming Back',
    description: 'A churned client expressed interest in returning after hearing about the new design.',
  },
  {
    title: 'Reduced Loading Time',
    description: 'Cleaner data architecture cut Notes load time, which was a top complaint in support tickets.',
  },
];

// ─── Research Section ─────────────────────────────────────────────────────────

export const researchSectionHeader = {
  label: 'Research',
  title: 'My research surfaced 3 pain points in Notes.',
  descriptionLine1: 'I pulled evidence from every available channel, and used Claude AI to scan 12,036 support cases and 985 NPS responses. Every source pointed to the same 3 problems:',
  descriptionLine2: 'Data entry was repetitive and manual, formatting was unpredictable and time-consuming, and the editor gave preparers no way to work efficiently at scale across 40+ companies.',
};

export interface ResearchCard {
  emoji: string;
  title: string;
  description: string;
}

export const researchCards: ResearchCard[] = [
  {
    emoji: '👀',
    title: '6 quarterly business review meetings',
    description: 'Got invited to quarterly business review meetings to observe and speak with high-value clients who were at risk of churning or had already left.',
  },
  {
    emoji: '🩺',
    title: '5 user interviews',
    description: 'Led in-depth user interviews with smaller clients to hear their struggles in their own words with real emotion.',
  },
  {
    emoji: '💪',
    title: '1 years of support data & NPS responses',
    description: 'Found the pattern, frequency, and impact of Notes pain points across 12,036 support cases and 985 NPS responses using Claude AI.',
  },
  {
    emoji: '🤼',
    title: 'Competitor analysis',
    description: "Researched Gain's workflow and automation to find gaps, parity needs, and opportunities for Sovos to differentiate.",
  },
  {
    emoji: '📊',
    title: 'Frequency analysis',
    description: 'Ranked the most common pain points across all sources to focus on what mattered most.',
  },
  {
    emoji: '🗺️',
    title: 'Roadmap prioritization',
    description: 'Weighed pain point frequency against technical feasibility to phase the feature roadmap.',
  },
];

// ─── Persona Section ──────────────────────────────────────────────────────────

export const personaSectionHeader = {
  label: 'Persona',
  title: '11 hours to prepare Notes & experienced users are retiring.',
  descriptionLine1: 'Notes provide additional context for the numbers in financial statements, so Notes preparers like Hannah can only begin once upstream financial data is finalized, leaving just 11 hours before the submission deadline.',
  descriptionLine2: 'The industry is also in a retirement wave. Experienced preparers are leaving, and younger colleagues who are less tolerant of cumbersome, complex software are becoming the core users. The future for Notes needs to be a combination of speed and zero confusion.',
};

export const personaDiagram = {
  src: imgPersonaDiagram,
  alt: 'Diagram showing the Notes preparer persona Hannah and the 11-hour deadline constraint she faces',
};

// ─── Data Entry Pain Section ──────────────────────────────────────────────────

export const dataEntryPainSectionHeader = {
  label: 'The Data Entry Pain That I Observed',
  title: '5-step repetition just to enter data — the reason Notes took 8 hours.',
  description: 'During interviews, clients said it took 8 hours to enter Notes data. To understand where the time went, I mapped every micro-interaction for a single data entry and found it required 5 separate steps. At scale, that pattern consumed most of Hannah\'s available time.',
};

export const dataEntryPainComposite = {
  video: vidDataEntryProcess,
  videoLabel: 'Screen recording of the 5-step data entry process in the Notes spreadsheet editor',
  timerImage: { src: imgUserTimerDiagram, alt: 'Timer showing 11:00:00 countdown with Hannah persona' },
  flowImage: { src: imgDataEntryFlow, alt: 'Flow diagram showing the 5-step data entry process' },
  caption: (<><span>5 steps</span><span className="stat-pain-caption-sep">×</span><span>hundreds of data</span><span className="stat-pain-caption-sep">×</span><span>40+ companies</span></>) as React.ReactNode,
  footnote: 'This didn\'t yet include hiding empty rows and manually typing "Not applicable", another multi-step process repeated dozens of times.',
};

// ─── Formatting Pain Section ──────────────────────────────────────────────────

export const formattingPainSectionHeader = {
  label: 'The Formatting Pain That I Observed',
  title: '1 typo restarts a 7-step formatting process. So preparers used Excel instead, which compromised compliance.',
  description: 'Formatting Notes for publication required at least 7 steps. Common last-minute changes like missing commas or spelling errors meant restarting this process. Many preparers bypassed the editor entirely, printing from Excel and attaching PDFs manually. This created data mismatches between electronic filings and printed documents, exposing clients to compliance risk.',
};

export const formattingPainComposite = {
  video: vidPageBreakProcess,
  videoLabel: 'Screen recording of the 7-step process to addd a page break in the Notes spreadsheet editor',
  timerImage: { src: imgUserTimerDiagram, alt: 'Timer showing 11:00:00 countdown with Hannah persona' },
  flowImage: { src: imgFormatFlow, alt: 'Flow diagram showing the 7-step formatting process' },
  caption: (<><span>7 steps</span><span className="stat-pain-caption-sep">×</span><span>36 Notes</span><span className="stat-pain-caption-sep">×</span><span>40+ companies</span></>) as React.ReactNode,
  footnote: 'Due to these time-consuming flows, many preparers bypassed the Statutory Reporting software entirely by printing from Microsoft Excel and attaching PDFs manually. The result was unmatched data between electronic filings and printed PDFs, which exposed preparers to real compliance risks.',
};

// ─── HMW Section ─────────────────────────────────────────────────────────────

export const hmwSection = {
  label: 'Problem To Solve',
  title: 'How might we make the Notes editor less of a burden so preparers can work faster without compromising accuracy?',
  backgroundImage: { src: imgOgNotesPrototype, alt: 'Insurance preparer working at a desk with multiple monitors' },
};

// ─── Design Strategy 1 Section ────────────────────────────────────────────────

export const designStrategy1SectionHeader = {
  label: 'Design Strategy 1',
  title: 'New form mode to focus on data without formatting or repetition.',
};

export const designStrategy1Showcase = {
  video: vidFullUi,
  videoLabel: 'Demo of the new Notes form mode showing focused data entry without formatting distractions',
  bgImage: imgBabyBloudBg,
  sidebarTitle: 'Focused data entry view',
  sidebarItems: [
    'Enter data in a clean view without touching formatting.',
    'Simplifies 5 steps of data entry into 1 step.',
    'Layout mirrors the final PDF so what you enter is what you get.',
    'Download a professional PDF in one click, with no formatting work.',
  ],
};

export interface DesignStrategy1Feature {
  video: string;
  videoLabel: string;
  title: string;
  description: string;
}

export const designStrategy1Features: DesignStrategy1Feature[] = [
  {
    video: vidNoteNotApplicable,
    videoLabel: 'Demo of the Not Applicable checkbox shortcut',
    title: 'Not applicable shortcut',
    description: 'Why take 5 steps to hide rows and type "Not applicable" when a single checkbox gets the job done?',
  },
  {
    video: vidNoteReuseData,
    videoLabel: 'Demo of the reuse previous data feature',
    title: 'Reuse previous data',
    description: 'Finding and entering the same data for every company for every statement can be annoying, unless you can reuse it in one click.',
  },
  {
    video: vidNoteNavShortcut,
    videoLabel: 'Demo of the navigation shortcuts feature',
    title: 'Navigation shortcuts',
    description: 'Preparers used to return to the main statement page to switch Notes. Now every Note is one click away.',
  },
];

// ─── Design Strategy 2 Section ────────────────────────────────────────────────

export const designStrategy2SectionHeader = {
  label: 'Design Strategy 2',
  title: '2 modes for everyone: one for speed, and one for advanced formatting.',
  description: "The original plan was to replace the spreadsheet editor with something simpler, like Gain's approach. But research revealed that even Gain's users considered the missing advanced formatting a real compromise, and were already looking for other software. I proposed a parallel system: a new form mode and the existing spreadsheet editor, both available at any time with data synced between them. I used Devin AI and direct codebase reviews with engineers to confirm bidirectional sync was feasible before committing to the direction.",
};

export const designStrategy2Modes = {
  newFormMode: {
    image: { src: imgNewFormMode, alt: 'New form mode interface showing clean data entry without formatting controls' },
    title: 'New form mode',
    tags: ['Simple', 'Quick', 'Auto'],
    description: 'For smaller companies who need quick data entry and automatic formatting.',
  },
  spreadsheetMode: {
    image: { src: imgSpreadsheetMode, alt: 'Current spreadsheet mode interface showing advanced formatting controls and custom layout options' },
    title: 'Current spreadsheet mode',
    tags: ['Advanced', 'Details', 'Custom'],
    description: 'For larger companies who need custom layout, structure, and formatting.',
  },
};

export const designStrategy2Dialog = {
  bgImage: imgBabyBloudBg,
  modeDialogImage: { src: imgModeDialog, alt: 'Mode selection dialog letting preparers choose between form mode and spreadsheet mode' },
  sidebarTitle: 'Transition with empathy and respect',
  sidebarDescription: 'For preparers like Hannah who have used the spreadsheet editor for 15-20 years, a forced migration would introduce resistance. By remembering each user\'s preference and keeping both modes available, preparers can adopt the form mode at their own pace, with the familiar experience there when they need it.',
};

// ─── Future Vision Section ────────────────────────────────────────────────────

export const futureVisionSectionHeader = {
  label: 'Future Vision',
  title: 'AI-powered formatting, with ease and precision, for the future.',
};

export const futureVisionShowcase = {
  video: vidNoteAiFormat,
  videoLabel: 'Demo of the AI-powered formatting feature where preparers describe formatting in plain language',
  sidebarTitle: 'AI Powered Format For Customization',
  sidebarDescription: "In the long term, this software needs to scale to meet customers' different formatting needs without the time sink or added complexity. I designed an AI formatting feature where preparers type what they want in plain language, and the system decides whether to apply a standard formatting rule or generate a custom suggestion which optimizes AI usage costs and response latency. Because these are high-stakes financial statements, the design keeps humans in the loop for any vague or conflicting requests — the AI suggests, the preparer confirms.",
};

// ─── Behind the Scenes Section ────────────────────────────────────────────────

export const behindTheScenesSectionHeader = {
  label: 'Behind The Scenes',
  title: 'Explored all options, then scoped to what clients actually needed.',
  description: "After interviews, I wireframed a wide range of ideas covering navigation, data entry, PDF preview, collaboration, help content, upsell, and AI-powered templates. Then, I worked with the PM, developers, and AI tools like Devin to iterate on a phased roadmap to address the highest-impact problems, tailored to clients' feedback.",
};

export const behindTheScenesImages = {
  wireframe: { src: imgWireframe, alt: 'Wireframe exploration board showing a wide range of design ideas for the Notes editor redesign' },
  roadmap: { src: imgProductRoadmap, alt: 'Product roadmap document showing the phased approach to the Notes editor redesign' },
  interviewBqr: { src: imgInterviewBqr, alt: 'Screenshot from a quarterly business review meeting session with clients' },
  interviewClients: { src: imgInterviewClients, alt: 'Screenshot from a user interview session with Sovos Statutory Reporting clients' },
};

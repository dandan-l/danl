import {
  heroSection,
  dataEntryPainSectionHeader,
  dataEntryPainComposite,
  formattingPainSectionHeader,
  formattingPainComposite,
} from '../../content/stat';
import { CaseStudyPageTemplate } from '../components/case-study/CaseStudyPageTemplate';
import { CaseStudyHero } from '../components/case-study/CaseStudyHero';
import { Tag } from '../components/ui';
import { StatBackgroundSection } from '../components/case-study/stat/StatBackgroundSection';
import { StatChallengesSection } from '../components/case-study/stat/StatChallengesSection';
import { StatImpactSection } from '../components/case-study/stat/StatImpactSection';
import { StatResearchSection } from '../components/case-study/stat/StatResearchSection';
import { StatPersonaSection } from '../components/case-study/stat/StatPersonaSection';
import { StatPainSection } from '../components/case-study/stat/StatPainSection';
import { StatHMWSection } from '../components/case-study/stat/StatHMWSection';
import { StatDesignStrategy1Section } from '../components/case-study/stat/StatDesignStrategy1Section';
import { StatDesignStrategy2Section } from '../components/case-study/stat/StatDesignStrategy2Section';
import { StatFutureVisionSection } from '../components/case-study/stat/StatFutureVisionSection';
import { StatBehindTheScenesSection } from '../components/case-study/stat/StatBehindTheScenesSection';
import './StatutoryReportingPage.css';

const externalLinkIcon = (
  <svg
    className="cs-hero-tag-link-icon"
    fill="currentColor"
    viewBox="0 0 18 18"
    aria-hidden="true"
  >
    <path d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.85 11.0925L6.9075 12.15L14.25 4.8075V7.5H15.75V2.25H10.5Z" />
  </svg>
);

export function StatutoryReportingPage() {
  return (
    <CaseStudyPageTemplate>
      <CaseStudyHero
        {...heroSection}
        tags={
          <>
            <Tag role="listitem">Product design</Tag>
            <Tag role="listitem">B2B SaaS</Tag>
            <Tag
              href="https://sovos.com/trr/products/statutory-reporting/"
              target="_blank"
              rel="noopener noreferrer"
              icon={externalLinkIcon}
              role="listitem"
            >
              Sovos Statutory Reporting
            </Tag>
          </>
        }
      />

      <StatBackgroundSection />
      <StatChallengesSection />
      <StatImpactSection />
      <StatResearchSection />
      <StatPersonaSection />

      <StatPainSection
        titleId="stat-dep-title"
        sectionBg="cs-section--cream"
        header={dataEntryPainSectionHeader}
        composite={dataEntryPainComposite}
        flowMaxWidth={165}
      />

      <StatPainSection
        titleId="stat-fpp-title"
        sectionBg="cs-section--white"
        header={formattingPainSectionHeader}
        composite={formattingPainComposite}
        flowMaxWidth={240}
      />

      <StatHMWSection />
      <StatDesignStrategy1Section />
      <StatDesignStrategy2Section />
      <StatFutureVisionSection />
      <StatBehindTheScenesSection />
    </CaseStudyPageTemplate>
  );
}

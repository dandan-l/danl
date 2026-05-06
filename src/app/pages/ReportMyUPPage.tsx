import {
  heroSection,
  challengesProducts,
  challengesMetrics,
  challengesSectionHeader,
  rootCauseData,
  rootCauseSectionHeader,
  designHighlights,
  designHighlightResults,
  designHighlightsSectionHeader,
  migrationStrategies,
  migrationResults,
  migrationSectionHeader,
  migrationUserFlow,
  migrationEmailDeliverable,
  migrationDemoDeliverable,
  longTermCards,
  longTermResults,
  longTermSectionHeader,
  longTermJourneyImage,
  impactStats,
  impactCallouts,
  impactSectionHeader,
} from "../../content/reportmyup";
import { CaseStudyPageTemplate } from "../components/case-study/CaseStudyPageTemplate";
import { CaseStudyHero } from "../components/case-study/CaseStudyHero";
import { Tag } from "../components/ui";
import { ProductChallengesSection } from "../components/case-study/ProductChallengesSection";
import { ImpactMetricsSection } from "../components/case-study/ImpactMetricsSection";
import { RootCauseSection } from "../components/case-study/RootCauseSection";
import { DesignHighlightsSection } from "../components/case-study/DesignHighlightsSection";
import { MigrationSection } from "../components/case-study/MigrationSection";
import { LongTermStrategySection } from "../components/case-study/LongTermStrategySection";

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

export function ReportMyUPPage() {
  return (
    <CaseStudyPageTemplate>
      <CaseStudyHero
        {...heroSection}
        tags={
          <>
            <Tag role="listitem">B2B Compliance app</Tag>
            <Tag
              href="https://reportmyup.com/"
              target="_blank"
              rel="noopener noreferrer"
              icon={externalLinkIcon}
              role="listitem"
            >
              Sovos ReportMyUP
            </Tag>
          </>
        }
      />

      <ProductChallengesSection
        {...challengesSectionHeader}
        products={challengesProducts}
        metrics={challengesMetrics}
      />

      <ImpactMetricsSection
        {...impactSectionHeader}
        stats={impactStats}
        callouts={impactCallouts}
      />

      <RootCauseSection {...rootCauseSectionHeader} cards={rootCauseData} />

      <DesignHighlightsSection
        {...designHighlightsSectionHeader}
        highlights={designHighlights}
        results={designHighlightResults}
      />

      <MigrationSection
        {...migrationSectionHeader}
        strategies={migrationStrategies}
        userFlow={migrationUserFlow}
        emailDeliverable={migrationEmailDeliverable}
        demoDeliverable={migrationDemoDeliverable}
        results={migrationResults}
      />

      <LongTermStrategySection
        {...longTermSectionHeader}
        cards={longTermCards}
        journeyImage={longTermJourneyImage}
        results={longTermResults}
      />
    </CaseStudyPageTemplate>
  );
}

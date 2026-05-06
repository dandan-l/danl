import {
  heroSection,
  personaSection,
  impactSection,
  analysisSection,
  brandingSection,
  iaSection,
  prototypeSection,
  signupSection,
  checkoutSection,
  resultSection,
} from "../../content/efilemyforms";
import { CaseStudyPageTemplate } from "../components/case-study/CaseStudyPageTemplate";
import { CaseStudyHero } from "../components/case-study/CaseStudyHero";
import { CaseStudyPersonaSection } from "../components/case-study/CaseStudyPersonaSection";
import { CaseStudyMetricsSection } from "../components/case-study/CaseStudyMetricsSection";
import { ResearchInsightsSection } from "../components/case-study/ResearchInsightsSection";
import { BeforeAfterShowcaseSection } from "../components/case-study/BeforeAfterShowcaseSection";
import { ImageComparisonSection } from "../components/case-study/ImageComparisonSection";
import { PrototypeVideoSection } from "../components/case-study/PrototypeVideoSection";
import { SignupFlowSection } from "../components/case-study/SignupFlowSection";
import { CheckoutFlowSection } from "../components/case-study/CheckoutFlowSection";
import { ProjectOutcomeSection } from "../components/case-study/ProjectOutcomeSection";
import { Tag } from "../components/ui";
import "./EFileMyFormsCaseStudyPage.css";

const externalLinkIcon = (
  <svg fill="none" viewBox="0 0 18 18" aria-hidden="true">
    <path
      d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.9625 10.98L7.02 12.0375L14.25 4.8075V7.5H15.75V2.25H10.5Z"
      fill="currentColor"
    />
  </svg>
);

export function EFileMyFormsCaseStudyPage() {
  return (
    <CaseStudyPageTemplate className="efilemyforms-case-study-page">
      <CaseStudyHero
        {...heroSection}
        tags={
          <>
            <Tag role="listitem">Tax Filing App</Tag>
            <Tag
              href="https://efilemyforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              icon={externalLinkIcon}
              role="listitem"
            >
              Sovos eFileMyForms
            </Tag>
          </>
        }
      />
      <CaseStudyPersonaSection {...personaSection} />
      <CaseStudyMetricsSection {...impactSection} />
      <ResearchInsightsSection {...analysisSection} />
      <BeforeAfterShowcaseSection {...brandingSection} />
      <ImageComparisonSection {...iaSection} />
      <PrototypeVideoSection {...prototypeSection} />
      <SignupFlowSection {...signupSection} />
      <CheckoutFlowSection {...checkoutSection} />
      <ProjectOutcomeSection {...resultSection} />
    </CaseStudyPageTemplate>
  );
}

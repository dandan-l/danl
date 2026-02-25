import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { EFileMyFormsHeroSection } from "../components/efilemyforms/EFileMyFormsHeroSection";
import { EFileMyFormsPersonaSection } from "../components/efilemyforms/EFileMyFormsPersonaSection";
import { EFileMyFormsImpactSection } from "../components/efilemyforms/EFileMyFormsImpactSection";
import { EFileMyFormsAnalysisSection } from "../components/efilemyforms/EFileMyFormsAnalysisSection";
import { EFileMyFormsBrandingSection } from "../components/efilemyforms/EFileMyFormsBrandingSection";
import { EFileMyFormsInformationArchitectureSection } from "../components/efilemyforms/EFileMyFormsInformationArchitectureSection";
import { EFileMyFormsPrototypeSection } from "../components/efilemyforms/EFileMyFormsPrototypeSection";
import { EFileMyFormsSignupSection } from "../components/efilemyforms/EFileMyFormsSignupSection";
import { EFileMyFormsCheckoutSection } from "../components/efilemyforms/EFileMyFormsCheckoutSection";
import { EFileMyFormsResultSection } from "../components/efilemyforms/EFileMyFormsResultSection";
import "./EFileMyFormsCaseStudyPage.css";

export function EFileMyFormsCaseStudyPage() {
  return (
    <div className="portfolio-site efilemyforms-case-study-page">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content">
        <EFileMyFormsHeroSection />
        <EFileMyFormsPersonaSection />
        <EFileMyFormsImpactSection />
        <EFileMyFormsAnalysisSection />
        <EFileMyFormsBrandingSection />
        <EFileMyFormsInformationArchitectureSection />
        <EFileMyFormsPrototypeSection />
        <EFileMyFormsSignupSection />
        <EFileMyFormsCheckoutSection />
        <EFileMyFormsResultSection />
      </main>

      <Footer />
    </div>
  );
}
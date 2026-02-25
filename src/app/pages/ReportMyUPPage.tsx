import { Header } from "../components/Header";
import { ReportMyUPHeroSection } from "../components/reportmyup/ReportMyUPHeroSection";
import { ReportMyUPChallengesSection } from "../components/reportmyup/ReportMyUPChallengesSection";
import { ReportMyUPImpactSection } from "../components/reportmyup/ReportMyUPImpactSection";
import { ReportMyUPRootCauseAnalysisSection } from "../components/reportmyup/ReportMyUPRootCauseAnalysisSection";
import { ReportMyUPDesignHighlightsSection } from "../components/reportmyup/ReportMyUPDesignHighlightsSection";
import { ReportMyUPMigrationSection } from "../components/reportmyup/ReportMyUPMigrationSection";
import { ReportMyUPLongTermStrategySection } from "../components/reportmyup/ReportMyUPLongTermStrategySection";
import { Footer } from "../components/Footer";

export function ReportMyUPPage() {
  return (
    <div className="portfolio-site">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content">
        <ReportMyUPHeroSection />
        <ReportMyUPChallengesSection />
        <ReportMyUPImpactSection />
        <ReportMyUPRootCauseAnalysisSection />
        <ReportMyUPDesignHighlightsSection />
        <ReportMyUPMigrationSection />
        <ReportMyUPLongTermStrategySection />
      </main>

      <Footer />
    </div>
  );
}
import svgPaths from "../../../imports/svg-twnoz06mgd";
import imgUpUserJourney1 from "../../../assets/images/reportmyup-user-journey.png";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./ReportMyUPLongTermStrategySection.css";

export function ReportMyUPLongTermStrategySection() {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="longterm-strategy-section" aria-labelledby="longterm-heading">
      <div className="longterm-container container">
        {/* Section Header */}
        <header className="section-header">
          <p className="section-label">Design highlight 3</p>
          <h2 id="longterm-heading" className="section-title">
            Long-Term Revenue & Service Strategy
          </h2>
        </header>

        {/* Two Column Strategy Cards */}
        <div className="longterm-cards">
          <article className="longterm-card">
            <div className="longterm-number" aria-hidden="true">1.</div>
            <h3 className="longterm-title">Competitive & Journey Analysis</h3>
            <ul className="longterm-list">
              <li>Identified service gaps by analyzing competitor offerings and advantages</li>
              <li>Discovered 2 Sovos' internal capabilities and partnerships not being leveraged</li>
              <li>Connected software capabilities to consulting services for integrated upsell</li>
              <li>Proposed service touchpoint extensions for new revenue streams</li>
            </ul>
          </article>

          <article className="longterm-card">
            <div className="longterm-number" aria-hidden="true">2.</div>
            <h3 className="longterm-title">Strategic Recommendations</h3>
            <ul className="longterm-list">
              <li>Proposed service touchpoint extensions across the compliance lifecycle</li>
              <li>Identified upsell opportunities for add-on services</li>
              <li>Connected product capabilities to consulting services for integrated offerings</li>
            </ul>
          </article>
        </div>

        {/* User Journey Diagram */}
        <figure className="journey-diagram">
          <img 
            src={imgUpUserJourney1} 
            alt="User journey diagram showing compliance lifecycle touchpoints and service opportunities" 
            className="journey-image"
            onClick={() => setExpandedImage({ src: imgUpUserJourney1, alt: "User journey diagram showing compliance lifecycle touchpoints and service opportunities" })}
          />
        </figure>

        {/* Results */}
        <ResultsCard>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Shaped 3-year product roadmap with research findings
          </ResultItem>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Unlocked revenue streams from extended service touch points
          </ResultItem>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Projected increased revenue from better tier segmentation and upsells
          </ResultItem>
        </ResultsCard>
      </div>

      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </section>
  );
}
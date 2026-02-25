import svgPaths from "../../../imports/svg-w3x7o6p7gj";
import imgMigrationFlow3 from "../../../assets/images/reportmyup-migration-flow.png";
import imgMigrationEmail from "../../../assets/images/reportmyup-migration-email.png";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./ReportMyUPMigrationSection.css";

export function ReportMyUPMigrationSection() {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="migration-section" aria-labelledby="migration-heading">
      <div className="migration-container container">
        {/* Section Header */}
        <header className="section-header">
          <p className="section-label">Design highlight 2</p>
          <h2 id="migration-heading" className="section-title">
            Strategic Migration of 2,000+ Existing Customers
          </h2>
          <p className="section-description">
            Migrate UPExchange customers to suitable products and tiers (ReportMyUP Standard, Plus, or UPEnterprise) based on their usage and feature needs.
          </p>
        </header>

        {/* Three Column Strategy Cards */}
        <div className="strategy-cards">
          <article className="strategy-card">
            <div className="strategy-number" aria-hidden="true">1.</div>
            <h3 className="strategy-title">Phased Migration Approach</h3>
            <ul className="strategy-list">
              <li>Started with 40-customer pilot cohort to test and learn</li>
              <li>Expanded to 5 total cohorts reaching over 2,000 customers</li>
              <li>Designed seamless migration flow that minimized disruption and maximized perceived value</li>
            </ul>
          </article>

          <article className="strategy-card">
            <div className="strategy-number" aria-hidden="true">2.</div>
            <h3 className="strategy-title">User-Centered Messaging</h3>
            <ul className="strategy-list">
              <li>Identified most valued features through support tickets analysis and stakeholders interviews</li>
              <li>Extended notification to Pendo guides and banners to walk users through transition and inform product changes</li>
              <li>Rewrote product-centric marketing messages to focus on user benefits</li>
              <li>Positioned migration as "upgrade with benefits" rather than forced change</li>
            </ul>
          </article>

          <article className="strategy-card">
            <div className="strategy-number" aria-hidden="true">3.</div>
            <h3 className="strategy-title">Migration Monitoring & Iteration</h3>
            <ul className="strategy-list">
              <li>Collaborated with Product and Marketing to add missing features blocking migration</li>
              <li>Refined messaging and services based on real user behavior</li>
              <li>Analyzed cohort-by-cohort data to identify drop-off points</li>
              <li>Strategized service experience for migration edge cases</li>
            </ul>
          </article>
        </div>

        {/* User Flow Visual */}
        <div className="user-flow-section">
          <div className="user-flow-card">
            <header className="user-flow-header">
              <h3 className="user-flow-title">Migration user flow</h3>
              <p className="user-flow-description">
                My user flow design transformed customer's migration from 5 steps to 1 click.
              </p>
            </header>
            <img 
              src={imgMigrationFlow3} 
              alt="Migration user flow diagram showing simplified 1-click process" 
              className="user-flow-image"
              onClick={() => setExpandedImage({ src: imgMigrationFlow3, alt: "Migration user flow diagram showing simplified 1-click process" })}
            />
          </div>
        </div>

        {/* Email and Demo Cards */}
        <div className="design-deliverables">
          <article className="deliverable-card email-card">
            <div className="email-image-container">
              <img 
                src={imgMigrationEmail} 
                alt="Migration email promoting valuable features to customers" 
                className="email-image"
                onClick={() => setExpandedImage({ src: imgMigrationEmail, alt: "Migration email promoting valuable features to customers" })}
              />
            </div>
            <div className="deliverable-content email-content">
              <h3 className="deliverable-title">Migration email</h3>
              <p className="deliverable-description">
                My email design promoted the most valuable features to customers.
              </p>
            </div>
          </article>

          <article className="deliverable-card demo-card">
            <div className="deliverable-content demo-content">
              <h3 className="deliverable-title">Feature demos</h3>
              <p className="deliverable-description">
                My demo video promoted the most valuable features to customers.
              </p>
            </div>
            <div className="demo-videos-container">
              <div className="demo-videos" role="group" aria-label="Feature demonstration videos">
                <video 
                  autoPlay 
                  loop 
                  muted
                  playsInline 
                  className="demo-video"
                  aria-label="Modern look feature demonstration"
                >
                  <source src="/_videos/v1/adb622853e2318fbf64009a51dee6108e906e1e0" />
                </video>
                <video 
                  autoPlay 
                  loop 
                  muted
                  playsInline 
                  className="demo-video"
                  aria-label="Multi-state report feature demonstration"
                >
                  <source src="/_videos/v1/286b49b94b7688f866841626b7d8031ed9a491c2" />
                </video>
                <video 
                  autoPlay 
                  loop 
                  muted
                  playsInline 
                  className="demo-video"
                  aria-label="Billing feature demonstration"
                >
                  <source src="/_videos/v1/e92a6e31ec0ba3bc4f12d6dd2613d9ae3f81bbe7" />
                </video>
              </div>
            </div>
          </article>
        </div>

        {/* Results */}
        <ResultsCard>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            1,000+ customers successfully migrated
          </ResultItem>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Projected revenue: $4.79M with 80% conversion
          </ResultItem>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Cleaned up 2,000+ inactive/unpaid accounts, preventing future revenue loss and database overhead
          </ResultItem>
          <ResultItem checkmarkPath={svgPaths.p11b4680}>
            Scheduled sunset for UPExchange to reduce costs
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
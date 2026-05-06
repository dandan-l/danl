import { MigrationStrategy } from '../../../content/reportmyup';
import svgPaths from "../../../imports/svg-w3x7o6p7gj";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./MigrationSection.css";

interface VideoAsset {
  src: string;
  label: string;
}

interface UserFlowContent {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface DeliverableContent {
  title: string;
  description: string;
}

interface DemoDeliverableContent extends DeliverableContent {
  videos: VideoAsset[];
}

export interface MigrationSectionProps {
  label: string;
  title: string;
  description: string;
  strategies: MigrationStrategy[];
  userFlow: UserFlowContent;
  emailDeliverable: DeliverableContent & { image: string; imageAlt: string };
  demoDeliverable: DemoDeliverableContent;
  results: string[];
}

export function MigrationSection({
  label,
  title,
  description,
  strategies,
  userFlow,
  emailDeliverable,
  demoDeliverable,
  results,
}: MigrationSectionProps) {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="migration-section" aria-labelledby="migration-heading">
      <div className="migration-container container">
        <header className="section-header">
          <p className="section-label">{label}</p>
          <h2 id="migration-heading" className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </header>

        <div className="strategy-cards">
          {strategies.map((strategy) => (
            <article key={strategy.number} className="strategy-card">
              <div className="strategy-number" aria-hidden="true">{strategy.number}.</div>
              <h3 className="strategy-title">{strategy.title}</h3>
              <ul className="strategy-list">
                {strategy.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="user-flow-section">
          <div className="user-flow-card">
            <header className="user-flow-header">
              <h3 className="user-flow-title">{userFlow.title}</h3>
              <p className="user-flow-description">{userFlow.description}</p>
            </header>
            <img
              src={userFlow.image}
              alt={userFlow.imageAlt}
              className="user-flow-image"
              onClick={() => setExpandedImage({ src: userFlow.image, alt: userFlow.imageAlt })}
            />
          </div>
        </div>

        <div className="design-deliverables">
          <article className="deliverable-card email-card">
            <div className="email-image-container">
              <img
                src={emailDeliverable.image}
                alt={emailDeliverable.imageAlt}
                className="email-image"
                onClick={() => setExpandedImage({ src: emailDeliverable.image, alt: emailDeliverable.imageAlt })}
              />
            </div>
            <div className="deliverable-content email-content">
              <h3 className="deliverable-title">{emailDeliverable.title}</h3>
              <p className="deliverable-description">{emailDeliverable.description}</p>
            </div>
          </article>

          <article className="deliverable-card demo-card">
            <div className="deliverable-content demo-content">
              <h3 className="deliverable-title">{demoDeliverable.title}</h3>
              <p className="deliverable-description">{demoDeliverable.description}</p>
            </div>
            <div className="demo-videos-container">
              <div className="demo-videos" role="group" aria-label="Feature demonstration videos">
                {demoDeliverable.videos.map((video, index) => (
                  <video
                    key={index}
                    autoPlay
                    loop
                    muted
                    controls
                    controlsList="nodownload"
                    playsInline
                    className="demo-video"
                    aria-label={video.label}
                  >
                    <source src={video.src} />
                  </video>
                ))}
              </div>
            </div>
          </article>
        </div>

        <ResultsCard>
          {results.map((result, index) => (
            <ResultItem key={index} checkmarkPath={svgPaths.p11b4680}>
              {result}
            </ResultItem>
          ))}
        </ResultsCard>
      </div>

      {expandedImage && (
        <ImageModal src={expandedImage.src} alt={expandedImage.alt} onClose={() => setExpandedImage(null)} />
      )}
    </section>
  );
}

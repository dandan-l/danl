import { LongTermCard } from '../../../content/reportmyup';
import svgPaths from "../../../imports/svg-twnoz06mgd";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./LongTermStrategySection.css";

interface JourneyImage {
  src: string;
  alt: string;
}

export interface LongTermStrategySectionProps {
  label: string;
  title: string;
  cards: LongTermCard[];
  journeyImage: JourneyImage;
  results: string[];
}

export function LongTermStrategySection({
  label,
  title,
  cards,
  journeyImage,
  results,
}: LongTermStrategySectionProps) {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="longterm-strategy-section" aria-labelledby="longterm-heading">
      <div className="longterm-container container">
        <header className="cs-section-header">
          <p className="cs-label">{label}</p>
          <h2 id="longterm-heading" className="cs-title">{title}</h2>
        </header>

        <div className="longterm-cards">
          {cards.map((card) => (
            <article key={card.number} className="longterm-card">
              <div className="number-badge number-badge--md" aria-hidden="true">
                <span className="number-badge-text">{card.number}.</span>
              </div>
              <h3 className="cs-card-title cs-card-title--brand">{card.title}</h3>
              <ul className="cs-list">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="journey-diagram">
          <img
            src={journeyImage.src}
            alt={journeyImage.alt}
            className="journey-image"
            onClick={() => setExpandedImage({ src: journeyImage.src, alt: journeyImage.alt })}
          />
        </figure>

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

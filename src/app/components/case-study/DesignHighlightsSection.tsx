import { DesignHighlight } from '../../../content/reportmyup';
import svgPaths from "../../../imports/svg-w3x7o6p7gj";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./DesignHighlightsSection.css";

export interface DesignHighlightsSectionProps {
  label: string;
  title: string;
  highlights: DesignHighlight[];
  results: string[];
}

interface DesignHighlightCardProps extends DesignHighlight {
  onImageClick: () => void;
}

function DesignHighlightCard({ number, title, image, imageAlt, imagePosition = 'right', onImageClick }: DesignHighlightCardProps) {
  return (
    <article className={`design-highlight ${imagePosition === 'left' ? 'design-highlight-reverse' : ''}`}>
      <div className="design-highlight-text">
        <div className="design-highlight-badge" aria-hidden="true">
          <span>{number}.</span>
        </div>
        <h3 className="design-highlight-title">{title}</h3>
      </div>
      <figure className="design-highlight-image-wrapper">
        <img src={image} alt={imageAlt} className="design-highlight-image" onClick={onImageClick} />
      </figure>
    </article>
  );
}

export function DesignHighlightsSection({
  label,
  title,
  highlights,
  results,
}: DesignHighlightsSectionProps) {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="design-highlights-section" aria-labelledby="design-highlights-title">
      <div className="container">
        <div className="design-highlights-content">
          <header className="design-highlights-header">
            <p className="section-label">{label}</p>
            <h2 id="design-highlights-title" className="section-title">{title}</h2>
          </header>

          <div className="design-highlights-list">
            {highlights.map((highlight, index) => (
              <DesignHighlightCard
                key={index}
                {...highlight}
                onImageClick={() => setExpandedImage({ src: highlight.image, alt: highlight.imageAlt })}
              />
            ))}
          </div>

          <div className="design-highlights-result">
            <ResultsCard>
              {results.map((result, index) => (
                <ResultItem key={index} checkmarkPath={svgPaths.p11b4680}>
                  {result}
                </ResultItem>
              ))}
            </ResultsCard>
          </div>
        </div>
      </div>
      {expandedImage && (
        <ImageModal src={expandedImage.src} alt={expandedImage.alt} onClose={() => setExpandedImage(null)} />
      )}
    </section>
  );
}

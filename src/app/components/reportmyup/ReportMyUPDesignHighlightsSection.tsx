import imgRmupPricingScreenshot1 from "../../../assets/images/reportmyup-pricing-screenshot.png";
import imgRmupCheckoutScreenshot1 from "../../../assets/images/reportmyup-checkout-screenshot.png";
import imgRmupTrialPaywallBlockerScreenshot1 from "../../../assets/images/reportmyup-trial-paywall-blocker.png";
import imgRmupUserSettingScreenshot1 from "../../../assets/images/reportmyup-user-settings-screenshot.png";
import svgPaths from "../../../imports/svg-w3x7o6p7gj";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import { ResultsCard, ResultItem } from "./ResultsCard";
import "./ReportMyUPDesignHighlightsSection.css";

interface DesignHighlightProps {
  number: number;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  onImageClick: () => void;
}

function DesignHighlight({ number, title, image, imageAlt, imagePosition = "right", onImageClick }: DesignHighlightProps) {
  return (
    <article className={`design-highlight ${imagePosition === "left" ? "design-highlight-reverse" : ""}`}>
      <div className="design-highlight-text">
        <div className="design-highlight-badge" aria-hidden="true">
          <span>{number}.</span>
        </div>
        <h3 className="design-highlight-title">{title}</h3>
      </div>
      <figure className="design-highlight-image-wrapper">
        <img 
          src={image} 
          alt={imageAlt} 
          className="design-highlight-image" 
          onClick={onImageClick}
        />
      </figure>
    </article>
  );
}

export function ReportMyUPDesignHighlightsSection() {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  const highlights = [
    {
      number: 1,
      title: "Designed $299 entry-level tier (down from $699 minimum)",
      image: imgRmupPricingScreenshot1,
      imageAlt: "ReportMyUP pricing tiers showing the new $299 entry-level option",
      imagePosition: "right" as const
    },
    {
      number: 2,
      title: "Removed credit card requirement from signup",
      image: imgRmupCheckoutScreenshot1,
      imageAlt: "ReportMyUP signup flow without credit card requirement",
      imagePosition: "left" as const
    },
    {
      number: 3,
      title: "Created free trial workflow with strategic paywall experience",
      image: imgRmupTrialPaywallBlockerScreenshot1,
      imageAlt: "ReportMyUP trial paywall interface showing upgrade prompts",
      imagePosition: "right" as const
    },
    {
      number: 4,
      title: "Designed add-on upsell system for incremental revenue growth",
      image: imgRmupUserSettingScreenshot1,
      imageAlt: "ReportMyUP user settings showing add-on services available for purchase",
      imagePosition: "left" as const
    }
  ];

  return (
    <section className="design-highlights-section" aria-labelledby="design-highlights-title">
      <div className="container">
        <div className="design-highlights-content">
          {/* Section Header */}
          <header className="design-highlights-header">
            <p className="section-label">Design highlight 1</p>
            <h2 id="design-highlights-title" className="section-title">
              Remove Friction from New Customer Acquisition
            </h2>
          </header>

          {/* Design Highlights */}
          <div className="design-highlights-list">
            {highlights.map((highlight, index) => (
              <DesignHighlight
                key={index}
                number={highlight.number}
                title={highlight.title}
                image={highlight.image}
                imageAlt={highlight.imageAlt}
                imagePosition={highlight.imagePosition}
                onImageClick={() => setExpandedImage({ src: highlight.image, alt: highlight.imageAlt })}
              />
            ))}
          </div>

          {/* Result Card */}
          <div className="design-highlights-result">
            <ResultsCard>
              <ResultItem checkmarkPath={svgPaths.p11b4680}>
                5,233% Increase in new signups.
              </ResultItem>
              <ResultItem checkmarkPath={svgPaths.p11b4680}>
                Foundation for scalable self-service acquisition throughout Sovos.
              </ResultItem>
            </ResultsCard>
          </div>
        </div>
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
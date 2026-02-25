import imgRmupPricingScreenshot1 from "../../assets/images/reportmyup-pricing-screenshot.png";
import imgRmupCheckoutScreenshot1 from "../../assets/images/reportmyup-checkout-screenshot.png";
import imgRmupTrialPaywallBlockerScreenshot1 from "../../assets/images/reportmyup-trial-paywall-blocker.png";
import imgRmupUserSettingScreenshot1 from "../../assets/images/reportmyup-user-settings-screenshot.png";
import svgPaths from "../../imports/svg-w3x7o6p7gj";
import { useImageModal } from "../hooks/useImageModal";
import { NumberBadge } from "./ui/NumberBadge";
import { ClickableImage } from "./ui/ClickableImage";
import { ResultsCard, ResultItem } from "./reportmyup/ResultsCard";
import "./RemoveFrictionSection.css";

interface DesignHighlightCardProps {
  number: number;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  onImageClick: () => void;
}

function DesignHighlightCard({ number, title, image, imageAlt, imagePosition = 'right', onImageClick }: DesignHighlightCardProps) {
  return (
    <div className={`design-highlight-card ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
      <div className="card-text">
        <NumberBadge number={number} />
        <h3 className="card-title">{title}</h3>
      </div>
      <ClickableImage 
        src={image}
        alt={imageAlt}
        onClick={onImageClick}
        className="card-image-wrapper"
      />
    </div>
  );
}

export function RemoveFrictionSection() {
  const { selectedImage, openModal, closeModal, ImageModalComponent } = useImageModal();

  return (
    <section className="remove-friction-section" aria-labelledby="remove-friction-heading">
      <div className="container">
        <div className="remove-friction-content">
          {/* Section Header */}
          <header className="section-header">
            <p className="section-label">Design highlight 1</p>
            <h2 id="remove-friction-heading" className="section-title">
              Remove Friction from New Customer Acquisition
            </h2>
          </header>

          {/* Design Highlight Cards */}
          <DesignHighlightCard
            number={1}
            title="Designed $299 entry-level tier (down from $699 minimum)"
            image={imgRmupPricingScreenshot1}
            imageAlt="ReportMyUP pricing tiers showing new $299 entry-level option"
            imagePosition="right"
            onImageClick={() => openModal(imgRmupPricingScreenshot1, "ReportMyUP pricing tiers showing new $299 entry-level option")}
          />

          <DesignHighlightCard
            number={2}
            title="Removed credit card requirement from signup"
            image={imgRmupCheckoutScreenshot1}
            imageAlt="ReportMyUP checkout flow without credit card requirement"
            imagePosition="left"
            onImageClick={() => openModal(imgRmupCheckoutScreenshot1, "ReportMyUP checkout flow without credit card requirement")}
          />

          <DesignHighlightCard
            number={3}
            title="Created free trial workflow with strategic paywall experience"
            image={imgRmupTrialPaywallBlockerScreenshot1}
            imageAlt="ReportMyUP trial paywall interface showing strategic conversion design"
            imagePosition="right"
            onImageClick={() => openModal(imgRmupTrialPaywallBlockerScreenshot1, "ReportMyUP trial paywall interface showing strategic conversion design")}
          />

          <DesignHighlightCard
            number={4}
            title="Designed add-on upsell system for incremental revenue growth"
            image={imgRmupUserSettingScreenshot1}
            imageAlt="ReportMyUP user settings showing add-on upsell options"
            imagePosition="left"
            onImageClick={() => openModal(imgRmupUserSettingScreenshot1, "ReportMyUP user settings showing add-on upsell options")}
          />

          {/* Results */}
          <ResultsCard>
            <ResultItem checkmarkPath={svgPaths.p11b4680}>
              <strong>5,233%</strong> Increase in new signups.
            </ResultItem>
            <ResultItem checkmarkPath={svgPaths.p11b4680}>
              Foundation for scalable self-service acquisition throughout Sovos.
            </ResultItem>
          </ResultsCard>
        </div>
      </div>
      {ImageModalComponent}
    </section>
  );
}
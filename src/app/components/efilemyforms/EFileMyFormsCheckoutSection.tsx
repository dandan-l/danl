import imgOldEfmfCartPageAddOn from "../../../assets/images/efilemyforms-old-cart-addon.png";
import imgOldEfmfOrderReviewPageDelayProcessing from "../../../assets/images/efilemyforms-old-order-review-delay.png";
import imgCheckoutRedesign from "../../../assets/images/efilemyforms-checkout-redesign.png";
import { ImageModal } from "../ImageModal";
import { ClickableImage, NumberBadge } from "../ui";
import { useImageModal } from "../../hooks/useImageModal";
import "./EFileMyFormsCheckoutSection.css";

export function EFileMyFormsCheckoutSection() {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-checkout-section" aria-labelledby="efmf-checkout-heading">
      <div className="efmf-checkout-container">
        {/* Section Header */}
        <div className="efmf-checkout-header">
          <p className="efmf-checkout-label">🌟 Design highlights 5.</p>
          <h2 id="efmf-checkout-heading" className="efmf-checkout-title">
            Guided secure checkout to pay with confidence
          </h2>
        </div>

          {/* Problem / Solution Grid */}
       <div className="efmf-ia-card">
            <h3 className="efmf-ia-card-title">Problems</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Buried add-ons</h4>
                <p className="efmf-branding-callout-description">
                  Critical add-ons and options were buried and poorly guided.
                </p>
              </div>
            </div>
          </div>

        {/* Before Checkout Images */}
        <div className="efmf-checkout-comparison-section">
          
          <div className="efmf-checkout-images-grid">
            <ClickableImage
              src={imgOldEfmfCartPageAddOn}
              alt="Old cart page showing hidden add-ons"
              onClick={handleImageClick}
              className="efmf-checkout-image-wrapper"
              imageClassName="efmf-checkout-image"
            />
            <ClickableImage
              src={imgOldEfmfOrderReviewPageDelayProcessing}
              alt="Old order review page with unclear pricing"
              onClick={handleImageClick}
              className="efmf-checkout-image-wrapper"
              imageClassName="efmf-checkout-image"
            />
          </div>
        </div>

        {/* Solution Details */}
        <div className="efmf-checkout-solution">
          <h3 className="efmf-checkout-solution-title">Solution</h3>
          <div className="efmf-checkout-solution-grid">
            <div className="efmf-checkout-solution-card">
              <NumberBadge number={1} />
              <h4 className="efmf-checkout-solution-subtitle">Surfaced add-ons in order review</h4>
              <p className="efmf-checkout-solution-description">
                Moved add-ons from buried My Cart page to a dedicated Order Review section,  added conditional logic to recommend add-ons based on chosen forms, and added real-time display on applicable forms and add-on pricing.
              </p>
            </div>

            <div className="efmf-checkout-solution-card">
              <NumberBadge number={2} />
              <h4 className="efmf-checkout-solution-subtitle">Redesigned delay processing options</h4>
              <p className="efmf-checkout-solution-description">
                Replaced confusing technical descriptions with clear, friendly content, and added conditional prompts that explain when processing should start to allow time for TINCheck.
              </p>
            </div>

            <div className="efmf-checkout-solution-card">
              <NumberBadge number={3} />
              <h4 className="efmf-checkout-solution-subtitle">Celebrated purchase milestones</h4>
              <p className="efmf-checkout-solution-description">
                Redesigned Order Received page to acknowledge the order and provide clear guidance on next steps. This reduces post-purchase anxiety and decreases support ticket volume.
              </p>
            </div>

            <div className="efmf-checkout-solution-card">
              <NumberBadge number={4} />
              <h4 className="efmf-checkout-solution-subtitle">Relocated terms of service </h4>
              <p className="efmf-checkout-solution-description">
                Partnered with legal and marketing to consolidate terms of service and move the acceptance checkbox from checkout to signup.
              </p>
            </div>
            
          </div>
        </div>

        {/* After Checkout Design */}
        <div className="efmf-checkout-comparison-section">
       
          <img 
            src={imgCheckoutRedesign} 
            alt="New checkout design showing clear add-on recommendations and transparent pricing"
            className="efmf-checkout-full-image"
            onClick={() => handleImageClick(imgCheckoutRedesign, "New checkout design showing clear add-on recommendations and transparent pricing")}
          />
        </div>
      </div>
      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
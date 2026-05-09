import { SolutionItem, ImageAsset } from '../../../content/efilemyforms';
import { ImageModal } from "../ImageModal";
import { ClickableImage, NumberBadge } from "../ui";
import { useImageModal } from "../../hooks/useImageModal";
import "./CheckoutFlowSection.css";

export interface CheckoutFlowSectionProps {
  label: string;
  title: string;
  problemTitle: string;
  problemCalloutTitle: string;
  problemDescription: string;
  beforeImages: ImageAsset[];
  solutionsTitle: string;
  solutions: SolutionItem[];
  afterImage: ImageAsset;
}

export function CheckoutFlowSection({
  label,
  title,
  problemTitle,
  problemCalloutTitle,
  problemDescription,
  beforeImages,
  solutionsTitle,
  solutions,
  afterImage,
}: CheckoutFlowSectionProps) {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-checkout-section" aria-labelledby="efmf-checkout-heading">
      <div className="efmf-checkout-container">
        <header className="cs-section-header">
          <p className="cs-label">{label}</p>
          <h2 id="efmf-checkout-heading" className="cs-title">{title}</h2>
        </header>

        <div className="efmf-ia-card">
          <h3 className="cs-callout-title">{problemTitle}</h3>
          <div className="efmf-branding-callouts">
            <div className="efmf-branding-callout">
              <h4 className="cs-callout-title cs-callout-title--brand">{problemCalloutTitle}</h4>
              <p className="cs-card-body">{problemDescription}</p>
            </div>
          </div>
        </div>

        <div className="efmf-checkout-comparison-section">
          <div className="efmf-checkout-images-grid">
            {beforeImages.map((img, index) => (
              <ClickableImage
                key={index}
                src={img.src}
                alt={img.alt}
                onClick={handleImageClick}
                className="efmf-checkout-image-wrapper"
                imageClassName="efmf-checkout-image"
              />
            ))}
          </div>
        </div>

        <div className="efmf-checkout-solution">
          <h3 className="cs-callout-title cs-callout-title--brand">{solutionsTitle}</h3>
          <div className="efmf-checkout-solution-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="efmf-checkout-solution-card">
                <NumberBadge number={solution.number} />
                <h4 className="cs-card-title cs-card-title--brand">{solution.subtitle}</h4>
                <p className="cs-card-body">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="efmf-checkout-comparison-section">
          <img
            src={afterImage.src}
            alt={afterImage.alt}
            className="efmf-checkout-full-image"
            onClick={() => handleImageClick(afterImage.src, afterImage.alt)}
          />
        </div>
      </div>
      {expandedImage && (
        <ImageModal src={expandedImage.src} alt={expandedImage.alt} onClose={closeModal} />
      )}
    </section>
  );
}

import { SolutionItem, ImageAsset } from "../../../content/efilemyforms";
import { ImageModal } from "../ImageModal";
import { NumberBadge } from "../ui";
import { useImageModal } from "../../hooks/useImageModal";
import "./SignupFlowSection.css";

export interface SignupFlowSectionProps {
  label: string;
  title: string;
  problemTitle: string;
  problemCalloutTitle: string;
  problemDescription: string;
  beforeImage: ImageAsset;
  solutionsTitle: string;
  solutions: SolutionItem[];
  afterImage: ImageAsset;
  bottomDescription: string;
}

export function SignupFlowSection({
  label,
  title,
  problemTitle,
  problemCalloutTitle,
  problemDescription,
  beforeImage,
  solutionsTitle,
  solutions,
  afterImage,
  bottomDescription,
}: SignupFlowSectionProps) {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section
      className="efmf-signup-section"
      aria-labelledby="efmf-signup-heading"
    >
      <div className="efmf-signup-container">
        <div className="efmf-signup-header">
          <p className="efmf-signup-label">{label}</p>
          <h2 id="efmf-signup-heading" className="efmf-signup-title">
            {title}
          </h2>
        </div>

        <div className="efmf-ia-card">
          <h3 className="efmf-ia-card-title">{problemTitle}</h3>
          <div className="efmf-branding-callouts">
            <div className="efmf-branding-callout">
              <h4 className="efmf-branding-callout-title">
                {problemCalloutTitle}
              </h4>
              <p className="efmf-branding-callout-description">
                {problemDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="efmf-signup-comparison-section">
          <img
            src={beforeImage.src}
            alt={beforeImage.alt}
            className="efmf-signup-comparison-image"
            onClick={() => handleImageClick(beforeImage.src, beforeImage.alt)}
          />
        </div>

        <div className="efmf-signup-solution">
          <h3 className="efmf-signup-solution-title">{solutionsTitle}</h3>
          <div className="efmf-signup-solution-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="efmf-signup-solution-card">
                <NumberBadge number={solution.number} />
                <h4 className="efmf-signup-solution-subtitle">
                  {solution.subtitle}
                </h4>
                <p className="efmf-signup-description">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="efmf-signup-comparison-section">
          <img
            src={afterImage.src}
            alt={afterImage.alt}
            className="efmf-signup-comparison-image"
            onClick={() => handleImageClick(afterImage.src, afterImage.alt)}
          />
        </div>

        <p className="efmf-signup-description">{bottomDescription}</p>
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

import { CalloutItem, ImageAsset } from '../../../content/efilemyforms';
import { ImageModal } from "../ImageModal";
import { useImageModal } from "../../hooks/useImageModal";
import "./ImageComparisonSection.css";

export interface ImageComparisonSectionProps {
  label: string;
  title: string;
  problemsTitle: string;
  problems: CalloutItem[];
  solutionsTitle: string;
  solutions: CalloutItem[];
  beforeImages: ImageAsset[];
  afterImages: ImageAsset[];
}

export function ImageComparisonSection({
  label,
  title,
  problemsTitle,
  problems,
  solutionsTitle,
  solutions,
  beforeImages,
  afterImages,
}: ImageComparisonSectionProps) {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-ia-section" aria-labelledby="efmf-ia-heading">
      <div className="efmf-ia-container">
        <div className="efmf-ia-header">
          <p className="efmf-ia-label">{label}</p>
          <h2 id="efmf-ia-heading" className="efmf-ia-title">{title}</h2>
        </div>

        <div className="efmf-ia-grid">
          <div className="efmf-ia-card">
            <h3 className="efmf-ia-card-title">{problemsTitle}</h3>
            <div className="efmf-branding-callouts">
              {problems.map((item, index) => (
                <div key={index} className="efmf-branding-callout">
                  <h4 className="efmf-branding-callout-title">{item.title}</h4>
                  <p className="efmf-branding-callout-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="efmf-ia-comparison">
          <div className="efmf-ia-comparison-section">
            <div className="efmf-ia-images-grid">
              {beforeImages.map((img, index) => (
                <div key={index} className="efmf-ia-image-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="efmf-ia-image"
                    onClick={() => handleImageClick(img.src, img.alt)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="efmf-ia-grid">
            <div className="efmf-ia-card">
              <h3 className="efmf-ia-card-title">{solutionsTitle}</h3>
              <div className="efmf-branding-callouts">
                {solutions.map((item, index) => (
                  <div key={index} className="efmf-branding-callout">
                    <h4 className="efmf-branding-callout-title">{item.title}</h4>
                    <p className="efmf-branding-callout-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="efmf-ia-comparison-section">
            <div className="efmf-ia-images-grid">
              {afterImages.map((img, index) => (
                <div key={index} className="efmf-ia-image-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="efmf-ia-image"
                    onClick={() => handleImageClick(img.src, img.alt)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {expandedImage && (
        <ImageModal src={expandedImage.src} alt={expandedImage.alt} onClose={closeModal} />
      )}
    </section>
  );
}

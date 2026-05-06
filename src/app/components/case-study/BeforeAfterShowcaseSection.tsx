import { CalloutItem, ImageAsset } from '../../../content/efilemyforms';
import "./BeforeAfterShowcaseSection.css";

export interface BeforeAfterShowcaseSectionProps {
  label: string;
  title: string;
  showcaseImage: ImageAsset;
  beforeDesignTitle: string;
  beforeImages: ImageAsset[];
  problemsTitle: string;
  problems: CalloutItem[];
  solutionTitle: string;
  solutions: CalloutItem[];
}

export function BeforeAfterShowcaseSection({
  label,
  title,
  showcaseImage,
  beforeDesignTitle,
  beforeImages,
  problemsTitle,
  problems,
  solutionTitle,
  solutions,
}: BeforeAfterShowcaseSectionProps) {
  return (
    <section className="efmf-branding-section" aria-labelledby="efmf-branding-heading">
      <div className="efmf-branding-container">
        <div className="efmf-branding-header">
          <p className="efmf-branding-label">{label}</p>
          <h2 id="efmf-branding-heading" className="efmf-branding-title">{title}</h2>
        </div>

        <div className="efmf-design-showcase">
          <img
            src={showcaseImage.src}
            alt={showcaseImage.alt}
            className="efmf-design-showcase-image"
          />
          <div className="efmf-before-design-container">
            <h3 className="efmf-before-design-title">{beforeDesignTitle}</h3>
            <div className="efmf-before-design-scroll">
              {beforeImages.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} className="efmf-before-design-image" />
              ))}
            </div>
          </div>
        </div>

        <div className="efmf-branding-grid">
          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">{problemsTitle}</h3>
            <div className="efmf-branding-callouts">
              {problems.map((item, index) => (
                <div key={index} className="efmf-branding-callout">
                  <h4 className="efmf-branding-callout-title">{item.title}</h4>
                  <p className="efmf-branding-callout-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">{solutionTitle}</h3>
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
      </div>
    </section>
  );
}

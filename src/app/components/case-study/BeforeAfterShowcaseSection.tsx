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
        <header className="cs-section-header">
          <p className="cs-label">{label}</p>
          <h2 id="efmf-branding-heading" className="cs-title">{title}</h2>
        </header>

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
            <h3 className="cs-callout-title">{problemsTitle}</h3>
            <div className="efmf-branding-callouts">
              {problems.map((item, index) => (
                <div key={index} className="efmf-branding-callout">
                  <h4 className="cs-callout-title cs-callout-title--brand">{item.title}</h4>
                  <p className="cs-card-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="efmf-branding-card">
            <h3 className="cs-callout-title">{solutionTitle}</h3>
            <div className="efmf-branding-callouts">
              {solutions.map((item, index) => (
                <div key={index} className="efmf-branding-callout">
                  <h4 className="cs-callout-title cs-callout-title--brand">{item.title}</h4>
                  <p className="cs-card-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

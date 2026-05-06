import { CalloutItem } from '../../../content/efilemyforms';
import "./PrototypeVideoSection.css";

export interface PrototypeVideoSectionProps {
  label: string;
  title: string;
  video: string;
  problemsTitle: string;
  problems: CalloutItem[];
  solutionTitle: string;
  solutions: CalloutItem[];
}

export function PrototypeVideoSection({
  label,
  title,
  video,
  problemsTitle,
  problems,
  solutionTitle,
  solutions,
}: PrototypeVideoSectionProps) {
  return (
    <section className="efmf-prototype-section" aria-labelledby="efmf-prototype-heading">
      <div className="efmf-prototype-container">
        <div className="efmf-prototype-header">
          <p className="efmf-prototype-label">{label}</p>
          <h2 id="efmf-prototype-heading" className="efmf-prototype-title">{title}</h2>
        </div>

        <div className="efmf-prototype-image-wrapper">
          <video
            autoPlay
            muted
            controls
            className="h-auto md:h-full rounded-[8px]"
            controlsList="nodownload"
            loop
            playsInline
          >
            <source src={video} />
          </video>
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

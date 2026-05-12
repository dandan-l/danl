import { backgroundSectionHeader, backgroundDiagram } from '../../../../content/stat';
import './StatBackgroundSection.css';

export function StatBackgroundSection() {
  return (
    <section className="stat-background-section cs-section cs-section--white" aria-labelledby="stat-background-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{backgroundSectionHeader.label}</p>
          <h2 id="stat-background-title" className="cs-title">{backgroundSectionHeader.title}</h2>
          <p className="cs-description">{backgroundSectionHeader.description}</p>
        </header>

        <figure className="stat-background-diagram-wrapper">
          <img
            src={backgroundDiagram.src}
            alt={backgroundDiagram.alt}
            className="stat-background-diagram"
          />
        </figure>
      </div>
    </section>
  );
}

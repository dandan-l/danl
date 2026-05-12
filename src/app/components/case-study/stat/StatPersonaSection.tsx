import { personaSectionHeader, personaDiagram } from '../../../../content/stat';
import './StatPersonaSection.css';

export function StatPersonaSection() {
  return (
    <section className="stat-persona-section cs-section cs-section--white" aria-labelledby="stat-persona-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{personaSectionHeader.label}</p>
          <h2 id="stat-persona-title" className="cs-title">{personaSectionHeader.title}</h2>
          <p className="cs-description">{personaSectionHeader.descriptionLine1}</p>
          <p className="cs-description">{personaSectionHeader.descriptionLine2}</p>
        </header>

        <figure className="stat-persona-diagram-wrapper">
          <img
            src={personaDiagram.src}
            alt={personaDiagram.alt}
            className="stat-persona-diagram"
          />
        </figure>
      </div>
    </section>
  );
}

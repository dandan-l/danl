import { researchSectionHeader, researchCards, ResearchCard } from '../../../../content/stat';
import './StatResearchSection.css';

function ResearchMethodCard({ emoji, title, description }: ResearchCard) {
  return (
    <article className="stat-research-card">
      <div className="stat-research-card-icon" aria-hidden="true">{emoji}</div>
      <div className="stat-research-card-content">
        <h3 className="stat-research-card-title">{title}</h3>
        <p className="cs-card-body">{description}</p>
      </div>
    </article>
  );
}

export function StatResearchSection() {
  return (
    <section className="stat-research-section cs-section cs-section--cream" aria-labelledby="stat-research-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{researchSectionHeader.label}</p>
          <h2 id="stat-research-title" className="cs-title">{researchSectionHeader.title}</h2>
          <p className="cs-description">{researchSectionHeader.descriptionLine1}</p>
          <p className="cs-description">{researchSectionHeader.descriptionLine2}</p>
        </header>

        <div className="stat-research-grid" role="list">
          {researchCards.map((card, i) => (
            <ResearchMethodCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

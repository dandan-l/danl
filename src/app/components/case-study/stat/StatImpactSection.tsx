import { impactSectionHeader, impactCallouts, ImpactCallout } from '../../../../content/stat';
import './StatImpactSection.css';

function ImpactCalloutCard({ title, description }: ImpactCallout) {
  return (
    <article className="cs-callout">
      <h3 className="stat-impact-callout-title">{title}</h3>
      <p className="cs-card-body cs-card-body--light">{description}</p>
    </article>
  );
}

export function StatImpactSection() {
  return (
    <section className="stat-impact-section cs-section cs-section--dark" aria-labelledby="stat-impact-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{impactSectionHeader.label}</p>
          <h2 id="stat-impact-title" className="cs-title cs-title--light">{impactSectionHeader.title}</h2>
        </header>

        <div className="stat-impact-callouts" role="list">
          {impactCallouts.map((callout, i) => (
            <ImpactCalloutCard key={i} {...callout} />
          ))}
        </div>
      </div>
    </section>
  );
}

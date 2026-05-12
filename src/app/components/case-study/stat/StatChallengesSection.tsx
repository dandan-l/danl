import { challengesSectionHeader, challengesDiagram, challengesCallouts, ChallengesCallout } from '../../../../content/stat';
import './StatChallengesSection.css';

function ChallengesCalloutCard({ title, description }: ChallengesCallout) {
  return (
    <article className="stat-challenges-callout cs-callout">
      <h3 className="cs-callout-title cs-callout-title--brand">{title}</h3>
      <p className="cs-card-body">{description}</p>
    </article>
  );
}

export function StatChallengesSection() {
  return (
    <section className="stat-challenges-section cs-section cs-section--cream" aria-labelledby="stat-challenges-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{challengesSectionHeader.label}</p>
          <h2 id="stat-challenges-title" className="cs-title">{challengesSectionHeader.title}</h2>
          <p className="cs-description">{challengesSectionHeader.description}</p>
        </header>

        <figure className="stat-challenges-diagram-wrapper">
          <figcaption className="stat-challenges-diagram-caption">{challengesDiagram.caption}</figcaption>
          <img
            src={challengesDiagram.src}
            alt={challengesDiagram.alt}
            className="stat-challenges-diagram"
          />
        </figure>

        <div className="stat-challenges-callouts" role="list">
          {challengesCallouts.map((callout, i) => (
            <ChallengesCalloutCard key={i} {...callout} />
          ))}
        </div>
      </div>
    </section>
  );
}

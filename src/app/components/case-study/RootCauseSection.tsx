import { RootCauseCard } from '../../../content/reportmyup';
import "./RootCauseSection.css";

export interface RootCauseSectionProps {
  label: string;
  title: string;
  description: string;
  cards: RootCauseCard[];
}

function AnalysisCard({ title, items }: RootCauseCard) {
  return (
    <article className="analysis-card">
      <h3 className="analysis-card-title">{title}</h3>
      <ul className="analysis-list">
        {items.map((item, index) => (
          <li key={index} className="analysis-list-item">{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function RootCauseSection({
  label,
  title,
  description,
  cards,
}: RootCauseSectionProps) {
  return (
    <section className="root-cause-section" aria-labelledby="root-cause-title">
      <div className="container">
        <div className="root-cause-content">
          <header className="section-header">
            <p className="section-label">{label}</p>
            <h2 id="root-cause-title" className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
          </header>

          <div className="analysis-cards-grid" role="list">
            {cards.map((card, index) => (
              <AnalysisCard key={index} title={card.title} items={card.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ImpactStat, ImpactCallout as ImpactCalloutData } from '../../../content/reportmyup';
import "./ImpactMetricsSection.css";

export interface ImpactMetricsSectionProps {
  label: string;
  title: string;
  stats: ImpactStat[];
  callouts: ImpactCalloutData[];
}

function StatCard({ value, label }: ImpactStat) {
  return (
    <article className="cs-stat-card">
      <p className="cs-stat-value">{value}</p>
      <p className="cs-stat-label">{label}</p>
    </article>
  );
}

function ImpactCallout({ title, description }: ImpactCalloutData) {
  return (
    <article className="cs-callout">
      <h3 className="cs-callout-title cs-callout-title--light">{title}</h3>
      <p className="cs-card-body cs-card-body--light">{description}</p>
    </article>
  );
}

export function ImpactMetricsSection({ label, title, stats, callouts }: ImpactMetricsSectionProps) {
  return (
    <section className="impact-section" aria-labelledby="impact-title">
      <div className="container">
        <div className="impact-content">
          <header className="cs-section-header">
            <p className="cs-label">{label}</p>
            <h2 id="impact-title" className="cs-title cs-title--light">{title}</h2>
          </header>

          <div className="stats-grid" role="list">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div className="impact-callouts">
            {callouts.map((callout, index) => (
              <ImpactCallout key={index} {...callout} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

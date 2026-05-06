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
    <article className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </article>
  );
}

function ImpactCallout({ title, description }: ImpactCalloutData) {
  return (
    <article className="impact-callout">
      <h3 className="impact-callout-title">{title}</h3>
      <p className="impact-callout-description">{description}</p>
    </article>
  );
}

export function ImpactMetricsSection({ label, title, stats, callouts }: ImpactMetricsSectionProps) {
  return (
    <section className="impact-section" aria-labelledby="impact-title">
      <div className="container">
        <div className="impact-content">
          <header className="impact-header">
            <p className="impact-label">{label}</p>
            <h2 id="impact-title" className="impact-title">{title}</h2>
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

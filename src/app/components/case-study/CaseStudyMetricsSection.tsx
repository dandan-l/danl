import "./CaseStudyMetricsSection.css";

export interface MetricData {
  value: string;
  label: string;
}

export interface CaseStudyMetricsSectionProps {
  label: string;
  title: string;
  metrics: MetricData[];
}

function MetricCard({ value, label }: MetricData) {
  return (
    <article className="cs-stat-card">
      <p className="cs-stat-value">{value}</p>
      <p className="cs-stat-label">{label}</p>
    </article>
  );
}

export function CaseStudyMetricsSection({ label, title, metrics }: CaseStudyMetricsSectionProps) {
  return (
    <section className="cs-metrics-section" aria-labelledby="cs-metrics-heading">
      <div className="cs-metrics-container container">
        <header className="cs-section-header">
          <p className="cs-label">{label}</p>
          <h2 id="cs-metrics-heading" className="cs-title cs-title--light">{title}</h2>
        </header>

        <div className="cs-metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

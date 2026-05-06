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
    <article className="cs-metric-card">
      <p className="cs-metric-value">{value}</p>
      <p className="cs-metric-label">{label}</p>
    </article>
  );
}

export function CaseStudyMetricsSection({ label, title, metrics }: CaseStudyMetricsSectionProps) {
  return (
    <section className="cs-metrics-section" aria-labelledby="cs-metrics-heading">
      <div className="cs-metrics-container container">
        <header className="cs-metrics-header">
          <p className="cs-metrics-label">{label}</p>
          <h2 id="cs-metrics-heading" className="cs-metrics-title">{title}</h2>
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

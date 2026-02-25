import "./EFileMyFormsImpactSection.css";

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="efmf-metric-card">
      <p className="efmf-metric-value">{value}</p>
      <p className="efmf-metric-label">{label}</p>
    </article>
  );
}

export function EFileMyFormsImpactSection() {
  const metrics = [
    { value: "23 %", label: "Increase in ARR" },
    { value: "44 %", label: "Increase in new signups" },
    { value: "15 point", label: "Increase in NPS" },
    { value: "50+", label: "Pages modernized" }
  ];

  return (
    <section className="efmf-impact-section" aria-labelledby="efmf-impact-heading">
      <div className="efmf-impact-container container">
        <header className="efmf-impact-header">
          <p className="efmf-impact-label">The Impact</p>
          <h2 id="efmf-impact-heading" className="efmf-impact-title">
            Record-breaking growth & happy customers
          </h2>
        </header>

        <div className="efmf-metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

import "./ReportMyUPImpactSection.css";

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </article>
  );
}

interface ImpactCalloutProps {
  title: string;
  description: string;
}

function ImpactCallout({ title, description }: ImpactCalloutProps) {
  return (
    <article className="impact-callout">
      <h3 className="impact-callout-title">{title}</h3>
      <p className="impact-callout-description">{description}</p>
    </article>
  );
}

export function ReportMyUPImpactSection() {
  const stats = [
    { value: "5,233 %", label: "Increase in new signups" },
    { value: "1,000 +", label: "Customers migrated to ReportMyUP" },
    { value: "$ 4.79 M", label: "Projected revenue from the migration" },
    { value: "2,000 +", label: "Inactive/unpaid accounts cleaned up" }
  ];

  const impacts = [
    {
      title: "Shaped Sovos Unclaimed Property's 3 year roadmap",
      description: "The end-to-end journey map I created and my propsed service design strategy shaped Sovos Unclaimed Property's 3 year roadmap."
    },
    {
      title: "Reduced maintenance costs From sunsetting UPExchange",
      description: "Migrating customers to ReportMyUP and sunsetting UPExchange reduced maintenance costs for UPExchange."
    },
    {
      title: "Streamlined sales and support processes",
      description: "ReportMyUP's self-serve flows allowed customers to speed up their process so Sovos staff could focus on high-value contracts."
    }
  ];

  return (
    <section className="impact-section" aria-labelledby="impact-title">
      <div className="container">
        <div className="impact-content">
          {/* Section Header */}
          <header className="impact-header">
            <p className="impact-label">The Impact</p>
            <h2 id="impact-title" className="impact-title">
              Unprecedented growth & successful migration
            </h2>
          </header>

          {/* Statistics Grid */}
          <div className="stats-grid" role="list">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>

          {/* Impact Callouts */}
          <div className="impact-callouts">
            {impacts.map((impact, index) => (
              <ImpactCallout
                key={index}
                title={impact.title}
                description={impact.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

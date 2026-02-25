import "./ReportMyUPRootCauseAnalysisSection.css";

interface AnalysisCardProps {
  title: string;
  items: string[];
}

function AnalysisCard({ title, items }: AnalysisCardProps) {
  return (
    <article className="analysis-card">
      <h3 className="analysis-card-title">{title}</h3>
      <ul className="analysis-list">
        {items.map((item, index) => (
          <li key={index} className="analysis-list-item">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ReportMyUPRootCauseAnalysisSection() {
  const analysisData = [
    {
      title: "New Customer Acquisition",
      items: [
        "99% of users (297 out of 300) abandoned at credit card requirement",
        "$699 minimum price created high entry barrier for low record needs",
        "Users couldn't evaluate product value before purchase commitment",
        "Niche industry with limited discovery channels (states no longer allow vendor listings)",
        "Corporate approval processes required more confidence-building"
      ]
    },
    {
      title: "Migration",
      items: [
        "Existing UPExchange customers saw no compelling reason to switch",
        "Migration messaging was product-centric, not benefit-focused",
        "Customers feared disruption during migration",
        "Lack of trust in new platform capabilities"
      ]
    },
    {
      title: "Revenue Optimization",
      items: [
        "No tier differentiation meant undercharging power users",
        "Missing upsell opportunities for add-on services",
        "Couldn't segment customers by actual usage and needs",
        "Missing revenue from late billing and billing errors"
      ]
    }
  ];

  return (
    <section className="root-cause-section" aria-labelledby="root-cause-title">
      <div className="container">
        <div className="root-cause-content">
          {/* Section Header */}
          <header className="section-header">
            <p className="section-label">Root Cause Analysis</p>
            <h2 id="root-cause-title" className="section-title">
              Critical barriers in 3 areas
            </h2>
            <p className="section-description">
              Through user interviews, checkout analytics, and stakeholder research, I identified critical barriers:
            </p>
          </header>

          {/* Analysis Cards Grid */}
          <div className="analysis-cards-grid" role="list">
            {analysisData.map((data, index) => (
              <AnalysisCard
                key={index}
                title={data.title}
                items={data.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

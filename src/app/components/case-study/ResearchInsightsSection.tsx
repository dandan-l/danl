import { InsightData, ResearchMethodData } from '../../../content/efilemyforms';
import "./ResearchInsightsSection.css";

export interface ResearchInsightsSectionProps {
  label: string;
  title1: string;
  title2: string;
  insightsPeople: InsightData[];
  insightsSovos: InsightData[];
  researchTitle: string;
  researchMethods: ResearchMethodData[];
}

function InsightCard({ icon, iconAlt, title, description }: InsightData) {
  return (
    <div className="efmf-insight-card">
      <img src={icon} alt={iconAlt} className="efmf-insight-icon" aria-hidden="true" />
      <div className="efmf-insight-card-content">
        <h3 className="efmf-insight-title">{title}</h3>
        <p className="efmf-insight-description">{description}</p>
      </div>
    </div>
  );
}

function ResearchCard({ title, description }: ResearchMethodData) {
  return (
    <div className="efmf-research-card">
      <p className="efmf-research-card-title">{title}</p>
      <p className="efmf-research-card-description">{description}</p>
    </div>
  );
}

export function ResearchInsightsSection({
  label,
  title1,
  title2,
  insightsPeople,
  insightsSovos,
  researchTitle,
  researchMethods,
}: ResearchInsightsSectionProps) {
  return (
    <section className="efmf-analysis-section" aria-labelledby="efmf-analysis-heading">
      <div className="efmf-analysis-container">
        <div className="efmf-analysis-header">
          <p className="efmf-analysis-label">{label}</p>
          <h2 id="efmf-analysis-heading" className="efmf-analysis-title">{title1}</h2>
        </div>

        <div className="efmf-insights-grid">
          {insightsPeople.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>

        <h2 className="efmf-analysis-title">{title2}</h2>

        <div className="efmf-insights-grid">
          {insightsSovos.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>

        <div className="efmf-research-container">
          <h3 className="efmf-research-title">{researchTitle}</h3>
          <div className="efmf-research-grid">
            {researchMethods.map((method, index) => (
              <ResearchCard key={index} {...method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

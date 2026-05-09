import "./CaseStudyPersonaSection.css";

export interface PersonaData {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  bulletPoints: string[];
  userType: string;
}

export interface CaseStudyPersonaSectionProps {
  label: string;
  title: string;
  description: string;
  personas: PersonaData[];
}

function PersonaCard({ name, title, image, imageAlt, bulletPoints, userType }: PersonaData) {
  return (
    <article className="cs-persona-card">
      <div className="cs-persona-content">
        <img src={image} alt={imageAlt} className="cs-persona-avatar" />
        <h3 className="cs-persona-name">{name}</h3>
        <p className="cs-persona-title">{title}</p>
        <ul className="cs-persona-list">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <p className="cs-persona-type">{userType}</p>
    </article>
  );
}

export function CaseStudyPersonaSection({ label, title, description, personas }: CaseStudyPersonaSectionProps) {
  return (
    <section className="cs-persona-section" aria-labelledby="cs-persona-heading">
      <div className="cs-persona-container container">
        <header className="cs-section-header">
          <p className="cs-label">{label}</p>
          <h2 id="cs-persona-heading" className="cs-title">{title}</h2>
          <p className="cs-description">{description}</p>
        </header>

        <div className="cs-persona-grid">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { hmwSection } from '../../../../content/stat';
import './StatHMWSection.css';

export function StatHMWSection() {
  return (
    <section
      className="stat-hmw-section cs-section"
      aria-labelledby="stat-hmw-title"
      style={{ backgroundImage: `url(${hmwSection.backgroundImage.src})` }}
    >
      <div className="cs-container stat-hmw-container">
        <div className="stat-hmw-card">
          <p className="cs-label stat-hmw-label">{hmwSection.label}</p>
          <h2 id="stat-hmw-title" className="stat-hmw-title">{hmwSection.title}</h2>
        </div>
      </div>
    </section>
  );
}

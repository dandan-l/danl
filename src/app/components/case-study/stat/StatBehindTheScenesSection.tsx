import { behindTheScenesSectionHeader, behindTheScenesImages } from '../../../../content/stat';
import './StatBehindTheScenesSection.css';

export function StatBehindTheScenesSection() {
  const { wireframe, roadmap, interviewBqr, interviewClients } = behindTheScenesImages;

  return (
    <section className="stat-bts-section cs-section cs-section--white" aria-labelledby="stat-bts-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{behindTheScenesSectionHeader.label}</p>
          <h2 id="stat-bts-title" className="cs-title">{behindTheScenesSectionHeader.title}</h2>
          <p className="cs-description">{behindTheScenesSectionHeader.description}</p>
        </header>

        <div className="stat-bts-grid">
          {/* Full-width wireframe */}
          <div className="stat-bts-item stat-bts-item--full stat-bts-item--bordered">
            <img src={wireframe.src} alt={wireframe.alt} className="stat-bts-image" />
          </div>
          {/* Full-width roadmap */}
          <div className="stat-bts-item stat-bts-item--full stat-bts-item--bordered">
            <img src={roadmap.src} alt={roadmap.alt} className="stat-bts-image" />
          </div>
          {/* Two half-width interview images — must be same height, same row */}
          <div className="stat-bts-interview-row">
            <div className="stat-bts-item stat-bts-item--bordered stat-bts-interview-item">
              <img src={interviewBqr.src} alt={interviewBqr.alt} className="stat-bts-image stat-bts-interview-image" />
            </div>
            <div className="stat-bts-item stat-bts-interview-item">
              <img src={interviewClients.src} alt={interviewClients.alt} className="stat-bts-image stat-bts-interview-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

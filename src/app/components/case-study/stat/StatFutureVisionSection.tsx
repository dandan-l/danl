import { futureVisionSectionHeader, futureVisionShowcase } from '../../../../content/stat';
import './StatFutureVisionSection.css';

export function StatFutureVisionSection() {
  return (
    <section className="stat-fv-section cs-section cs-section--cream" aria-labelledby="stat-fv-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{futureVisionSectionHeader.label}</p>
          <h2 id="stat-fv-title" className="cs-title">{futureVisionSectionHeader.title}</h2>
        </header>

        <div className="stat-fv-showcase">
          <div className="stat-fv-video-wrapper">
            <video
              src={futureVisionShowcase.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={futureVisionShowcase.videoLabel}
              className="stat-fv-video"
            />
          </div>
          <aside className="stat-fv-sidebar">
            <h3 className="stat-fv-sidebar-title">{futureVisionShowcase.sidebarTitle}</h3>
            <p className="stat-fv-sidebar-description">{futureVisionShowcase.sidebarDescription}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

import {
  designStrategy1SectionHeader,
  designStrategy1Showcase,
  designStrategy1Features,
} from '../../../../content/stat';
import './StatDesignStrategy1Section.css';

export function StatDesignStrategy1Section() {
  return (
    <section className="stat-ds1-section cs-section cs-section--cream" aria-labelledby="stat-ds1-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{designStrategy1SectionHeader.label}</p>
          <h2 id="stat-ds1-title" className="cs-title">{designStrategy1SectionHeader.title}</h2>
        </header>

        {/* Main showcase card */}
        <div
          className="stat-ds1-showcase"
          style={{ backgroundImage: `url(${designStrategy1Showcase.bgImage})` }}
        >
          <div className="stat-ds1-showcase-video-wrapper">
            <video
              src={designStrategy1Showcase.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={designStrategy1Showcase.videoLabel}
              className="stat-ds1-showcase-video"
            />
          </div>
          <aside className="stat-ds1-showcase-sidebar">
            <h3 className="stat-ds1-showcase-sidebar-title">{designStrategy1Showcase.sidebarTitle}</h3>
            <ul className="stat-ds1-showcase-sidebar-list">
              {designStrategy1Showcase.sidebarItems.map((item, i) => (
                <li key={i} className="stat-ds1-showcase-sidebar-item">{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Feature cards row */}
        <div className="stat-ds1-features-scroll">
          <div className="stat-ds1-features-row">
            {designStrategy1Features.map((feature, i) => (
              <div key={i} className="stat-ds1-feature-card">
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={feature.videoLabel}
                  className="stat-ds1-feature-video"
                />
                <div className="stat-ds1-feature-body">
                  <h3 className="stat-ds1-feature-title">{feature.title}</h3>
                  <p className="stat-ds1-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

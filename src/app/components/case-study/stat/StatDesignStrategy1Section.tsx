import { useState, useEffect, useRef } from 'react';
import {
  designStrategy1SectionHeader,
  designStrategy1Showcase,
  designStrategy1Features,
} from '../../../../content/stat';
import './StatDesignStrategy1Section.css';

const TOTAL = 1 + designStrategy1Features.length; // showcase + feature cards

export function StatDesignStrategy1Section() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // index 0 = showcase video, indices 1–N = feature card videos
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeIndex) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.load();
      }
    });
  }, [activeIndex]);

  function handleEnded() {
    setActiveIndex(prev => (prev + 1) % TOTAL);
  }

  return (
    <section className="stat-ds1-section cs-section cs-section--cream" aria-labelledby="stat-ds1-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{designStrategy1SectionHeader.label}</p>
          <h2 id="stat-ds1-title" className="cs-title">{designStrategy1SectionHeader.title}</h2>
        </header>

        {/* Main showcase card — index 0 in the cycle */}
        <div
          className={`stat-ds1-showcase${activeIndex !== 0 ? ' stat-ds1-showcase--inactive' : ''}`}
          style={{ backgroundImage: `url(${designStrategy1Showcase.bgImage})` }}
          onClick={() => setActiveIndex(0)}
        >
          <div className="stat-ds1-showcase-video-wrapper">
            <video
              ref={el => { videoRefs.current[0] = el; }}
              src={designStrategy1Showcase.video}
              poster={designStrategy1Showcase.thumbnail}
              muted
              playsInline
              preload="metadata"
              controls={activeIndex === 0}
              onEnded={handleEnded}
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

        {/* Feature cards row — indices 1–N in the cycle */}
        <div className="stat-ds1-features-scroll">
          <div className="stat-ds1-features-row">
            {designStrategy1Features.map((feature, i) => {
              const idx = i + 1;
              return (
                <div
                  key={i}
                  className={`stat-ds1-feature-card${idx === activeIndex ? ' stat-ds1-feature-card--active' : ' stat-ds1-feature-card--inactive'}`}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <video
                    ref={el => { videoRefs.current[idx] = el; }}
                    src={feature.video}
                    poster={feature.thumbnail}
                    muted
                    playsInline
                    preload="metadata"
                    controls={idx === activeIndex || hoveredIndex === idx}
                    onEnded={handleEnded}
                    aria-label={feature.videoLabel}
                    className="stat-ds1-feature-video"
                  />
                  <div className="stat-ds1-feature-body">
                    <h3 className="stat-ds1-feature-title">{feature.title}</h3>
                    <p className="stat-ds1-feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

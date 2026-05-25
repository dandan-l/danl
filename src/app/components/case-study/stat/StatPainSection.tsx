import React from 'react';
import './StatPainSection.css';

export interface StatPainSectionHeader {
  label: string;
  title: string;
  description: React.ReactNode;
}

export interface StatPainSectionComposite {
  video: string;
  videoLabel: string;
  timerImage: { src: string; alt: string };
  flowImage: { src: string; alt: string };
  caption: React.ReactNode;
  footnote: string;
}

export interface StatPainSectionProps {
  titleId: string;
  sectionBg: 'cs-section--cream' | 'cs-section--white';
  header: StatPainSectionHeader;
  composite: StatPainSectionComposite;
  /** Max-width of the flow diagram column in px. Defaults to 200. */
  flowMaxWidth?: number;
}

export function StatPainSection({
  titleId,
  sectionBg,
  header,
  composite,
  flowMaxWidth = 200,
}: StatPainSectionProps) {
  const { video, videoLabel, timerImage, flowImage, caption, footnote } = composite;

  return (
    <section
      className={`stat-pain-section cs-section ${sectionBg}`}
      aria-labelledby={titleId}
      style={{ '--stat-pain-flow-max-width': `${flowMaxWidth}px` } as React.CSSProperties}
    >
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{header.label}</p>
          <h2 id={titleId} className="cs-title">{header.title}</h2>
          <p className="cs-description">{header.description}</p>
        </header>

        <figure className="stat-pain-composite-wrapper">
          <div className="stat-pain-composite-inner">
            <div className="stat-pain-main-media">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label={videoLabel}
                className="stat-pain-video"
              />
              <img
                src={timerImage.src}
                alt={timerImage.alt}
                className="stat-pain-timer"
                aria-hidden="true"
              />
            </div>
            <img
              src={flowImage.src}
              alt={flowImage.alt}
              className="stat-pain-flow"
            />
          </div>
          <figcaption className="stat-pain-caption">{caption}</figcaption>
        </figure>

        <p className="cs-description">{footnote}</p>
      </div>
    </section>
  );
}

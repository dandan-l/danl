/**
 * CaseStudyHero
 *
 * Shared hero section for all case study pages.
 * Renders the project title, tags, metadata grid (about / role /
 * timeline / collaborators), and hero image.
 *
 * Adding a new case study hero is a matter of passing props —
 * no new layout code required.
 *
 * @example
 * <CaseStudyHero
 *   titleId="my-project-title"
 *   title="My Project Title"
 *   tags={<><Tag>Web Design</Tag><Tag href="https://…">Live site</Tag></>}
 *   about="Short description of the project."
 *   role="Product Designer"
 *   timeline="Jan 2024 – Present"
 *   collaborators="PM, Engineers, QA"
 *   heroImage={{ src: imgHero, alt: "Project screenshot" }}
 * />
 */

import { ReactNode } from 'react';
import { Divider } from '../ui/Divider';
import './CaseStudyHero.css';

export interface CaseStudyHeroProps {
  /** Unique id for the h1 — must match aria-labelledby on the section */
  titleId: string;
  /** Main case study headline */
  title: string;
  /**
   * Tag elements rendered below the title.
   * Pass any mix of <Tag> components or plain <a> elements.
   * The parent keeps full control over tag styling and behaviour.
   */
  tags: ReactNode;
  /** "About this project" description */
  about: string;
  /** Designer's role on the project */
  role: string;
  /** Project timeline, e.g. "Jul 2022 – Feb 2023" */
  timeline: string;
  /** Comma-separated list of collaborators */
  collaborators: string;
  /** Hero image source and alt text */
  heroImage: { src: string; alt: string };
  /**
   * Optional video source (mp4). When provided, renders a looping
   * autoplay video instead of the static heroImage <img>.
   * heroImage.alt is still used as the accessible label.
   */
  heroVideo?: string;
  /**
   * Background colour of the image wrapper.
   * Defaults to var(--color-bg-white).
   * Pass var(--color-bg-cream) when the image blends better with
   * the section's cream background (e.g. product shots with
   * transparent or cream surrounds).
   */
  imageBackground?: string;
}

export function CaseStudyHero({
  titleId,
  title,
  tags,
  about,
  role,
  timeline,
  collaborators,
  heroImage,
  heroVideo,
  imageBackground = 'var(--color-bg-white)',
}: CaseStudyHeroProps) {
  return (
    <section className="cs-hero-section" aria-labelledby={titleId}>
      <div className="cs-hero-container container">

        <header className="cs-hero-header">
          <h1 id={titleId} className="cs-hero-title">{title}</h1>
          <div className="cs-hero-tags" role="list">
            {tags}
          </div>
        </header>

        <Divider />

        <div className="cs-hero-info">
          <div className="cs-hero-info-description">
            <h2 className="cs-hero-info-label">About this project</h2>
            <p className="cs-hero-info-text">{about}</p>
          </div>

          <div className="cs-hero-info-item">
            <h2 className="cs-hero-info-label">Role</h2>
            <p className="cs-hero-info-text">{role}</p>
          </div>

          <div className="cs-hero-info-item">
            <h2 className="cs-hero-info-label">Timeline</h2>
            <p className="cs-hero-info-text">{timeline}</p>
          </div>

          <div className="cs-hero-info-item cs-hero-info-item-wide">
            <h2 className="cs-hero-info-label">Collaborators</h2>
            <p className="cs-hero-info-text">{collaborators}</p>
          </div>
        </div>

        <figure
          className="cs-hero-image-wrapper"
          style={{ backgroundColor: imageBackground }}
        >
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="cs-hero-image"
              aria-label={heroImage.alt}
            />
          ) : (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="cs-hero-image"
            />
          )}
        </figure>

      </div>
    </section>
  );
}

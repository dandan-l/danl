import imgMigrationHeaderProductShot1 from "../../../assets/images/reportmyup-migration-header.png";
import "./ReportMyUPHeroSection.css";
import { Tag, Divider } from "../ui";

function ExternalLinkIcon() {
  return (
    <svg
      className="external-link-icon"
      fill="currentColor"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <path d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.85 11.0925L6.9075 12.15L14.25 4.8075V7.5H15.75V2.25H10.5Z" />
    </svg>
  );
}

export function ReportMyUPHeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          {/* Title and Tags */}
          <div className="hero-header">
            <h1 id="hero-title" className="hero-title">
              Pivot from struggling launch to $4.79M revenue opportunity
            </h1>
            <div className="rmup-project-tags" role="list">
              <Tag variant="default" role="listitem">
                B2B Compliance app
              </Tag>
              <a
                href="https://reportmyup.com/"
                className="project-tag project-tag-link"
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Sovos ReportMyUP</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          {/* Divider */}
          <Divider />

          {/* Project Metadata */}
          <div className="project-metadata">
            <div className="project-description">
              <h2 className="metadata-label">About this project</h2>
              <p className="metadata-value">
                Growth strategy and service design for compliance software that
                helps businesses report unclaimed property to states.
              </p>
            </div>

            <div className="metadata-item">
              <h2 className="metadata-label">Role</h2>
              <p className="metadata-value">Design Lead</p>
            </div>

            <div className="metadata-item">
              <h2 className="metadata-label">Timeline</h2>
              <p className="metadata-value">Feb 2025 - current</p>
            </div>

            <div className="metadata-item metadata-item-wide">
              <h2 className="metadata-label">Collaborators</h2>
              <p className="metadata-value">
                UX Designer, Product Manager, Developers, QA Engineers, Content
                Designer, Technical Writer, Marketing, Support, Legal
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="hero-image-container">
            <img
              src={imgMigrationHeaderProductShot1}
              alt="ReportMyUP product interface showing the dashboard and key features of the compliance software"
              className="hero-image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

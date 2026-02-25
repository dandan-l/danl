import vidModernizationStrategy from "../../../assets/images/GlobalModernizationStrategy.mp4";
import "./EFileMyFormsPrototypeSection.css";

export function EFileMyFormsPrototypeSection() {
  return (
    <section
      className="efmf-prototype-section"
      aria-labelledby="efmf-prototype-heading"
    >
      <div className="efmf-prototype-container">
        {/* Section Header */}
        <div className="efmf-prototype-header">
          <p className="efmf-prototype-label">Design highlight 3</p>
          <h2 id="efmf-prototype-heading" className="efmf-prototype-title">
            Global modernization strategy
          </h2>
        </div>

        {/* Prototype Image */}
        <div className="efmf-prototype-image-wrapper">
          <video
            autoPlay
            muted
            controls
            className="h-auto md:h-full rounded-[8px]"
            controlsList="nodownload"
            loop
            playsInline
          >
            <source src={vidModernizationStrategy} />
          </video>
        </div>

        {/* Problem / Solution Grid */}
        <div className="efmf-branding-grid">
          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">Problems</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">
                  Resource constraints
                </h4>
                <p className="efmf-branding-callout-description">
                  Small team with only 1 front-end developer.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Tight deadline</h4>
                <p className="efmf-branding-callout-description">
                  Full-site redesign in 8 months.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">
                  Technical constraints
                </h4>
                <p className="efmf-branding-callout-description">
                  Older codebase incompatible with Sovos’ internal component
                  library without major refactoring that risked site stability
                  and timeline.
                </p>
              </div>
            </div>
          </div>

          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">Solution</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">
                  Phased modernization strategy
                </h4>
                <p className="efmf-branding-callout-description">
                  Partnered with products and developers to create phased
                  modernization strategy that achieved visual transformation
                  without extensive effort. By breaking work into focused phases
                  - <strong>global nav/footer</strong> →{" "}
                  <strong>distraction cleanup</strong> →{" "}
                  <strong>fonts/tables</strong> - and leveraging CSS
                  modifications to existing components, each release delivered
                  instant user value while minimizing development scope and
                  technical risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

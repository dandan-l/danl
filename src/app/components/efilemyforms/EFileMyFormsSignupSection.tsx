import imgOldSignUpFlow from "../../../assets/images/efilemyforms-old-signup-flow.png";
import imgNewSignupDesign from "../../../assets/images/efilemyforms-new-signup-design.png";
import { ImageModal } from "../ImageModal";
import { NumberBadge } from "../ui";
import { useImageModal } from "../../hooks/useImageModal";
import "./EFileMyFormsSignupSection.css";

export function EFileMyFormsSignupSection() {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-signup-section" aria-labelledby="efmf-signup-heading">
      <div className="efmf-signup-container">
        {/* Section Header */}
        <div className="efmf-signup-header">
          <p className="efmf-signup-label">🌟 Design highlights 4.</p>
          <h2 id="efmf-signup-heading" className="efmf-signup-title">
Single-step, guided signup to start with ease          </h2>
        </div>

        {/* Problem / Solution Grid */}
       <div className="efmf-ia-card">
            <h3 className="efmf-ia-card-title">Problems</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Long signup process</h4>
                <p className="efmf-branding-callout-description">
                  3-step signup with unnecessary data collection (18 data fields) hurt conversion.
                </p>
              </div>
            </div>
          </div>

        {/* Before Signup Flow */}
        <div className="efmf-signup-comparison-section">
          <img 
            src={imgOldSignUpFlow} 
            alt="Old signup flow showing lengthy 3-step process with unnecessary fields"
            className="efmf-signup-comparison-image"
            onClick={() => handleImageClick(imgOldSignUpFlow, "Old signup flow showing lengthy 3-step process with unnecessary fields")}
          />
        </div>

        {/* Solution Details */}
        <div className="efmf-signup-solution">
          <h3 className="efmf-signup-solution-title">Solutions</h3>
          <div className="efmf-signup-solution-grid">
            <div className="efmf-signup-solution-card">
              <NumberBadge number={1} />
              <h4 className="efmf-signup-solution-subtitle">Removed 14 unused data fields</h4>
              <p className="efmf-signup-solution-description">
                Partnered with product, devs, and support to identify unused data and remove them from signup requirements.
              </p>
            </div>

            <div className="efmf-signup-solution-card">
              <NumberBadge number={2} />
              <h4 className="efmf-signup-solution-subtitle">Streamline 3 steps into 1</h4>
              <p className="efmf-signup-solution-description">
                Customers can now create an account in a single screen, dramatically reducing abandonment and friction.
              </p>
            </div>

            <div className="efmf-signup-solution-card">
              <NumberBadge number={3} />
              <h4 className="efmf-signup-solution-subtitle">Mobile-responsive signup and login</h4>
              <p className="efmf-signup-solution-description">
                Recognizing high mobile signup volume, the redesigned flow is now responsive, allowing users to sign up from anywhere without friction.
              </p>
            </div>
            
            <div className="efmf-signup-solution-card">
              <NumberBadge number={4} />
              <h4 className="efmf-signup-solution-subtitle">Better product insights via new URL architecture</h4>
              <p className="efmf-signup-solution-description">
                Unique URLs for each step provided product and marketing teams with visibility into where users drop off, empowering data-driven improvements.
              </p>
            </div>
            
          </div>
        </div>

        {/* After Signup Design */}
        <div className="efmf-signup-comparison-section">
          <img 
            src={imgNewSignupDesign} 
            alt="New signup design showing streamlined single-screen process"
            className="efmf-signup-comparison-image"
            onClick={() => handleImageClick(imgNewSignupDesign, "New signup design showing streamlined single-screen process")}
          />
        </div>

        <p className="efmf-section-description">
            This streamlined approach achieved a core business goal, increasing signup conversion, while establishing a better URL architecture for data collection. Removing unnecessary data collection also reduced compliance exposure and security risk. While full-site responsiveness wasn't feasible due to limited bandwidth, strategically investing in critical user entry points improved accessibility and mobile conversion.
          </p>
        
      </div>
      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
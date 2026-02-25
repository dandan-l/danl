import imgDesignSystemShowcaseImg from "../../../assets/images/efilemyforms-design-system-showcase.png";
import imgOldEfmfHomePageBeforeLogin from "../../../assets/images/efilemyforms-old-home-before-login.png";
import imgOldEfmfHomePageAfterLogin from "../../../assets/images/efilemyforms-old-home-after-login.png";
import imgOldEfmfCartPage from "../../../assets/images/efilemyforms-old-cart-page.png";
import imgOldEfmfOrderReviewPage from "../../../assets/images/efilemyforms-old-order-review.png";
import imgOldEfmfSignUpSuccessPage from "../../../assets/images/efilemyforms-old-signup-success.png";
import "./EFileMyFormsBrandingSection.css";

export function EFileMyFormsBrandingSection() {
  return (
    <section className="efmf-branding-section" aria-labelledby="efmf-branding-heading">
      <div className="efmf-branding-container">
        {/* Section Header */}
        <div className="efmf-branding-header">
          <p className="efmf-branding-label">🌟 Design highlights 1.</p>
          <h2 id="efmf-branding-heading" className="efmf-branding-title">
            Modernized branding
          </h2>
        </div>
      
        {/* Design System Showcase */}
        <div className="efmf-design-showcase">
          <img 
            src={imgDesignSystemShowcaseImg} 
            alt="eFileMyForms redesigned design system showcasing modern color palette, typography, and UI components"
            className="efmf-design-showcase-image"
          />
          
          <div className="efmf-before-design-container">
            <h3 className="efmf-before-design-title">Before my design</h3>
            <div className="efmf-before-design-scroll">
              <img 
                src={imgOldEfmfHomePageBeforeLogin} 
                alt="Old eFileMyForms home page before login showing outdated design"
                className="efmf-before-design-image"
              />
              <img 
                src={imgOldEfmfHomePageAfterLogin} 
                alt="Old eFileMyForms home page after login"
                className="efmf-before-design-image"
              />
              <img 
                src={imgOldEfmfCartPage} 
                alt="Old eFileMyForms cart page"
                className="efmf-before-design-image"
              />
              <img 
                src={imgOldEfmfOrderReviewPage} 
                alt="Old eFileMyForms order review page"
                className="efmf-before-design-image"
              />
              <img 
                src={imgOldEfmfSignUpSuccessPage} 
                alt="Old eFileMyForms signup success page"
                className="efmf-before-design-image"
              />
            </div>
          </div>
        </div>

          {/* Problem / Solution Grid */}
        <div className="efmf-branding-grid">
          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">Problems</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Outdated Visual Design</h4>
                <p className="efmf-branding-callout-description">
                  Left an unprofessional, untrustworthy first impression that deterred prospects from signing up.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Market Demands</h4>
                <p className="efmf-branding-callout-description">
                  People have been asking for modern tax solutions, and EFMF's competitors are offering them.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Accessibility Concern</h4>
                <p className="efmf-branding-callout-description">
                  Issues like gradient and low contrast could make reading difficult.
                </p>
              </div>
            </div>
          </div>

          <div className="efmf-branding-card">
            <h3 className="efmf-branding-card-title">Solution</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Designed New Branding</h4>
                <p className="efmf-branding-callout-description">
                  Partnered with product and marketing team members to design new branding that will leave an impression that is <strong>modern</strong>, <strong>professional</strong>, and even a little <strong>playful</strong>, while preserving eFileMyForms' original identity (the lightning bolt logo symbolizing speed and reliability).
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
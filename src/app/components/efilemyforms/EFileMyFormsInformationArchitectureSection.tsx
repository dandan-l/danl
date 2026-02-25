import imgOldIaNewCustomer from "../../../assets/images/efilemyforms-old-ia-new-customer.png";
import imgOldIaExistingCustomer from "../../../assets/images/efilemyforms-old-ia-existing-customer.png";
import imgNewIaNewCustomer from "../../../assets/images/efilemyforms-new-ia-new-customer.png";
import imgNewIaExistingCustomer from "../../../assets/images/efilemyforms-new-ia-existing-customer.png";
import { ImageModal } from "../ImageModal";
import { useImageModal } from "../../hooks/useImageModal";
import "./EFileMyFormsInformationArchitectureSection.css";

export function EFileMyFormsInformationArchitectureSection() {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-ia-section" aria-labelledby="efmf-ia-heading">
      <div className="efmf-ia-container">
        {/* Section Header */}
        <div className="efmf-ia-header">
          <p className="efmf-ia-label">🌟 Design highlights 2.</p>
          <h2 id="efmf-ia-heading" className="efmf-ia-title">
Seamless journey & more organized information architecture          </h2>
        </div>

              {/* Problem / Solution Grid */}
        <div className="efmf-ia-grid">
          <div className="efmf-ia-card">
            <h3 className="efmf-ia-card-title">Problems</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Cluttered and dense content</h4>
                <p className="efmf-branding-callout-description">
                  The cluttered and dense content created cognitive overload, preventing prospective and existing customers from easily locating information relevant to their needs.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">High support demands on basic guidance</h4>
                <p className="efmf-branding-callout-description">
                  Missing guidance caused customers calling support to show them how to start, one of the top support case drivers.
                </p>
              </div>

    
            </div>
          </div>

        </div>
        

        {/* Before and After IA */}
        <div className="efmf-ia-comparison">
          <div className="efmf-ia-comparison-section">
            <div className="efmf-ia-images-grid">
              <div className="efmf-ia-image-wrapper">
                <img 
                  src={imgOldIaNewCustomer} 
                  alt="Old information architecture for new customers showing complex navigation"
                  className="efmf-ia-image"
                  onClick={() => handleImageClick(imgOldIaNewCustomer, "Old information architecture for new customers showing complex navigation")}
                />
              </div>
              <div className="efmf-ia-image-wrapper">
                <img 
                  src={imgOldIaExistingCustomer} 
                  alt="Old information architecture for existing customers"
                  className="efmf-ia-image"
                  onClick={() => handleImageClick(imgOldIaExistingCustomer, "Old information architecture for existing customers")}
                />
              </div>
            </div>
          </div>

                       {/* Problem / Solution Grid */}
        <div className="efmf-ia-grid">
          <div className="efmf-ia-card">
            <h3 className="efmf-ia-card-title">Solutions</h3>
            <div className="efmf-branding-callouts">
              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Seamless end-to-end experience</h4>
                <p className="efmf-branding-callout-description">
                  Seamless end-to-end experience that guides users from the purchase decision through tax filing with focused content and clear guidance at every step.
                </p>
              </div>

              <div className="efmf-branding-callout">
                <h4 className="efmf-branding-callout-title">Restructured information architecture </h4>
                <p className="efmf-branding-callout-description">
                  Restructured information architecture that highlights essential information while keeping secondary resources accessible .
                </p>
              </div>

    
            </div>
          </div>

        </div>

          <div className="efmf-ia-comparison-section">
            <div className="efmf-ia-images-grid">
              <div className="efmf-ia-image-wrapper">
                <img 
                  src={imgNewIaNewCustomer} 
                  alt="New information architecture for new customers showing simplified navigation"
                  className="efmf-ia-image"
                  onClick={() => handleImageClick(imgNewIaNewCustomer, "New information architecture for new customers showing simplified navigation")}
                />
              </div>
              <div className="efmf-ia-image-wrapper">
                <img 
                  src={imgNewIaExistingCustomer} 
                  alt="New information architecture for existing customers"
                  className="efmf-ia-image"
                  onClick={() => handleImageClick(imgNewIaExistingCustomer, "New information architecture for existing customers")}
                />
              </div>
            </div>
          </div>
        </div>
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
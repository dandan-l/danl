import imgPrototypeReviewEfmf from "../../../assets/images/efilemyforms-prototype-review.png";
import { Tag, Divider } from "../ui";
import "./EFileMyFormsHeroSection.css";

export function EFileMyFormsHeroSection() {
  return (
    <section className="efmf-hero-section" aria-labelledby="efmf-hero-title">
      <div className="efmf-hero-container container">
        <header className="efmf-hero-header">
          <h1 id="efmf-hero-title" className="efmf-hero-title">
            Made tax filing easy and modern for stressed small business owners
          </h1>
          <div className="efmf-hero-tags">
            <Tag>Tax Filing App</Tag>
            <Tag 
              href="https://efilemyforms.com/"
              icon={
                <svg fill="none" viewBox="0 0 18 18" aria-hidden="true">
                  <path 
                    d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.9625 10.98L7.02 12.0375L14.25 4.8075V7.5H15.75V2.25H10.5Z" 
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Sovos eFileMyForms
            </Tag>
          </div>
        </header>

        <Divider />

        <div className="efmf-hero-info">
          <div className="efmf-info-section efmf-info-description">
            <h2 className="efmf-info-label">About this project</h2>
            <p className="efmf-info-text">
              Product redesign and growth strategy for tax compliance software that helps small 
              businesses and accountants file 1099 forms.
            </p>
          </div>

          <div className="efmf-info-section efmf-info-item">
            <h2 className="efmf-info-label">Role</h2>
            <p className="efmf-info-text">Solo Product Designer</p>
          </div>

          <div className="efmf-info-section efmf-info-item">
            <h2 className="efmf-info-label">Timeline</h2>
            <p className="efmf-info-text">Jul 2022 - Feb 2023</p>
          </div>

          <div className="efmf-info-section efmf-info-item-wide">
            <h2 className="efmf-info-label">Collaborators</h2>
            <p className="efmf-info-text">
              Product Manager, Product Owner, Developers, QA Engineers, Content Designer, 
              Technical Writer, Marketing, Support, Legal
            </p>
          </div>
        </div>

        <figure className="efmf-hero-image-wrapper">
          <img 
            src={imgPrototypeReviewEfmf} 
            alt="eFileMyForms prototype review showing the redesigned interface" 
            className="efmf-hero-image"
          />
        </figure>
      </div>
    </section>
  );
}
import imgRedditEfmFpost from "../../../assets/images/efilemyforms-reddit-post.png";
import imgEfmfPizzaParty from "../../../assets/images/efilemyforms-pizza-party.png";
import img1099Mkt from "../../../assets/images/marketing-1099.png";
import imgTinkmkt from "../../../assets/images/marketing-tink.png";
import imgUpmkt from "../../../assets/images/marketing-up.png";
import imgEfmfmkt from "../../../assets/images/marketing-efilemyforms.png";
import { ImageModal } from "../ImageModal";
import { useImageModal } from "../../hooks/useImageModal";
import "./EFileMyFormsResultSection.css";

export function EFileMyFormsResultSection() {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-result-section" aria-labelledby="efmf-result-heading">
      <div className="efmf-result-container">
        {/* Section Header */}
        <div className="efmf-result-header">
          <p className="efmf-result-label">The result</p>
          <h2 id="efmf-result-heading" className="efmf-result-title">
            How did it turn out?
          </h2>
        </div>

        {/* Unprecedented Delivery */}
        <div className="efmf-result-delivery">
          <h3 className="efmf-result-delivery-title">
            Unprecedented delivery
          </h3>
          <ul className="efmf-result-delivery-list">
            <li>
              In 4 months, we delivered the phase 1 redesign - a design MVP.
            </li>
            <li>
              5 months later, we delivered the phase 2 - the checkout experience upgrade.
            </li>
            <li>
              In total, we redesigned 50+ pages with many major experience improvements, all within tight timeline and resources. This is unprecedented at Sovos, especially for a newly formed team.
            </li>
          </ul>
        </div>

        {/* Glowing Reviews */}
        <div className="efmf-result-reviews">
          <h3 className="efmf-result-reviews-title">Glowing reviews</h3>
          <div className="efmf-result-reviews-grid">
            <div className="efmf-result-quote-card">
              <p className="efmf-result-quote-text">
                I am fairly new to QuickBooks, and my Builder wanted me to file and mail the 1099s this year instead of the CPA. I was terrified I would do something wrong. However, I found your website and after reviewing it, the process looked fairly easy. Wow! It was so easy and I didn't have to do any of the work, other than entering the info for the Sub-Contractors. The price was fantastic!
              </p>
              <p className="efmf-result-quote-author">
                Randy Wright Builders, LLC
              </p>
            </div>
            <div className="efmf-result-quote-card">
              <p className="efmf-result-quote-text">
                I LOVE-LOVE-LOVE this service. The site is informative, easy to navigate and it makes the filing process incredibly simple and efficient.
              </p>
              <p className="efmf-result-quote-author">
                B & B Machine and Grinding Service Corp
              </p>
            </div>
            <div className="efmf-result-quote-card">
              <p className="efmf-result-quote-text">
                An eFileMyForms client told me that they noticed the new site and were thrilled with the upgrades. It didn't confuse them at all... they truly believe in our product and show unwavering loyalty.
              </p>
              <p className="efmf-result-quote-author">
                Sovos CMO
              </p>
            </div>
          </div>
        </div>

        {/* Did the new design go viral? */}
        <div className="efmf-result-viral">
          <h3 className="efmf-result-viral-title">Did the new design go viral?</h3>
          <div className="efmf-result-viral-content">
            <div className="efmf-result-stats">
              <div className="efmf-result-stats-grid">
                <div className="efmf-result-stat-card">
                  <p className="efmf-result-stat-value">23%</p>
                  <p className="efmf-result-stat-label">Increase in ARR</p>
                </div>
                <div className="efmf-result-stat-card">
                  <p className="efmf-result-stat-value">44%</p>
                  <p className="efmf-result-stat-label">Increase in new signups</p>
                </div>
                <div className="efmf-result-stat-card">
                  <p className="efmf-result-stat-value">15 point</p>
                  <p className="efmf-result-stat-label">Increase in NPS</p>
                </div>
              </div>
              <div className="efmf-result-stat-card efmf-result-stat-card-special">
                <p className="efmf-result-stat-value">Overwhelmed server</p>
                <p className="efmf-result-stat-label">Due to popularity (a good problem to have 😉)</p>
              </div>
            </div>
            <div className="efmf-result-reddit-image">
              <img 
                src={imgRedditEfmFpost} 
                alt="Positive customer feedback on Reddit about eFileMyForms redesign"
                className="efmf-result-reddit-img"
                onClick={() => handleImageClick(imgRedditEfmFpost, "Positive customer feedback on Reddit about eFileMyForms redesign")}
              />
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="efmf-result-challenges">
          <h3 className="efmf-result-challenges-title">
            Of course, it came with challenges.
          </h3>
          <div className="efmf-result-challenges-content">
            <div className="efmf-result-challenges-text">
              
              
              <p>To ensure timely delivery and a smooth experience across the entire user journey, I wore many hats, including: product owner, QA engineer, product manager, developer and managed projects like: email, back office management, and marketing messaging. Coding dark mode for product emails was a pain...</p>
              <p>Ancient and untouchable code infrastructure forced us to abandon progress and design last-minute alternatives. The complexity of tax filing required approvals from marketing, legal, product, content, and support for every design decision.</p>
              <p>
                By being open to exploration, learning from each other, and adapting to changing priorities, we, as a new team, grew close and accomplished a lot together. 
              </p>
            </div>
            <div className="efmf-result-challenges-image">
              <img 
                src={imgEfmfPizzaParty} 
                alt="Team celebration with pizza party"
                className="efmf-result-challenges-img"
                onClick={() => handleImageClick(imgEfmfPizzaParty, "Team celebration with pizza party")}
              />
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="efmf-result-legacy">
          <h3 className="efmf-result-legacy-title">
            My legacy continues on Sovos' global portfolio..
          </h3>
          <div className="efmf-result-legacy-images">
            <img 
              src={img1099Mkt} 
              alt="1099 Marketing page showcasing design system"
              className="efmf-result-legacy-img"
              onClick={() => handleImageClick(img1099Mkt, "1099 Marketing page showcasing design system")}
            />
            <img 
              src={imgTinkmkt} 
              alt="TIN Check Marketing page showcasing design system"
              className="efmf-result-legacy-img"
              onClick={() => handleImageClick(imgTinkmkt, "TIN Check Marketing page showcasing design system")}
            />
            <img 
              src={imgUpmkt} 
              alt="UP Marketing page showcasing design system"
              className="efmf-result-legacy-img"
              onClick={() => handleImageClick(imgUpmkt, "UP Marketing page showcasing design system")}
            />
            <img 
              src={imgEfmfmkt} 
              alt="eFileMyForms Marketing page showcasing design system"
              className="efmf-result-legacy-img"
              onClick={() => handleImageClick(imgEfmfmkt, "eFileMyForms Marketing page showcasing design system")}
            />
          </div>
          <div className="efmf-result-legacy-text">
            <p>
              The branding and experience I created for e-commerce products have been adopted across Sovos. Three years later, you can still see this design foundation across Sovos' product portfolio - a strategic move to create cohesive branding and experience across the entire company, making design easier to implement and scale.
            </p>
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
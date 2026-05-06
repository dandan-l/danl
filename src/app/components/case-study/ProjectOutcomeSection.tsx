import { QuoteItem, MetricData, ImageAsset } from '../../../content/efilemyforms';
import { ImageModal } from "../ImageModal";
import { useImageModal } from "../../hooks/useImageModal";
import "./ProjectOutcomeSection.css";

export interface ProjectOutcomeSectionProps {
  label: string;
  title: string;
  deliveryTitle: string;
  deliveryItems: string[];
  reviewsTitle: string;
  reviews: QuoteItem[];
  viralTitle: string;
  stats: MetricData[];
  specialStat: MetricData;
  redditImage: ImageAsset;
  challengesTitle: string;
  challengesParagraphs: string[];
  challengesImage: ImageAsset;
  legacyTitle: string;
  legacyImages: ImageAsset[];
  legacyText: string;
}

export function ProjectOutcomeSection({
  label,
  title,
  deliveryTitle,
  deliveryItems,
  reviewsTitle,
  reviews,
  viralTitle,
  stats,
  specialStat,
  redditImage,
  challengesTitle,
  challengesParagraphs,
  challengesImage,
  legacyTitle,
  legacyImages,
  legacyText,
}: ProjectOutcomeSectionProps) {
  const { expandedImage, handleImageClick, closeModal } = useImageModal();

  return (
    <section className="efmf-result-section" aria-labelledby="efmf-result-heading">
      <div className="efmf-result-container">
        <div className="efmf-result-header">
          <p className="efmf-result-label">{label}</p>
          <h2 id="efmf-result-heading" className="efmf-result-title">{title}</h2>
        </div>

        <div className="efmf-result-delivery">
          <h3 className="efmf-result-delivery-title">{deliveryTitle}</h3>
          <ul className="efmf-result-delivery-list">
            {deliveryItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="efmf-result-reviews">
          <h3 className="efmf-result-reviews-title">{reviewsTitle}</h3>
          <div className="efmf-result-reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="efmf-result-quote-card">
                <p className="efmf-result-quote-text">{review.text}</p>
                <p className="efmf-result-quote-author">{review.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="efmf-result-viral">
          <h3 className="efmf-result-viral-title">{viralTitle}</h3>
          <div className="efmf-result-viral-content">
            <div className="efmf-result-stats">
              <div className="efmf-result-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="efmf-result-stat-card">
                    <p className="efmf-result-stat-value">{stat.value}</p>
                    <p className="efmf-result-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="efmf-result-stat-card efmf-result-stat-card-special">
                <p className="efmf-result-stat-value">{specialStat.value}</p>
                <p className="efmf-result-stat-label">{specialStat.label}</p>
              </div>
            </div>
            <div className="efmf-result-reddit-image">
              <img
                src={redditImage.src}
                alt={redditImage.alt}
                className="efmf-result-reddit-img"
                onClick={() => handleImageClick(redditImage.src, redditImage.alt)}
              />
            </div>
          </div>
        </div>

        <div className="efmf-result-challenges">
          <h3 className="efmf-result-challenges-title">{challengesTitle}</h3>
          <div className="efmf-result-challenges-content">
            <div className="efmf-result-challenges-text">
              {challengesParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div className="efmf-result-challenges-image">
              <img
                src={challengesImage.src}
                alt={challengesImage.alt}
                className="efmf-result-challenges-img"
                onClick={() => handleImageClick(challengesImage.src, challengesImage.alt)}
              />
            </div>
          </div>
        </div>

        <div className="efmf-result-legacy">
          <h3 className="efmf-result-legacy-title">{legacyTitle}</h3>
          <div className="efmf-result-legacy-images">
            {legacyImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="efmf-result-legacy-img"
                onClick={() => handleImageClick(img.src, img.alt)}
              />
            ))}
          </div>
          <div className="efmf-result-legacy-text">
            <p>{legacyText}</p>
          </div>
        </div>
      </div>
      {expandedImage && (
        <ImageModal src={expandedImage.src} alt={expandedImage.alt} onClose={closeModal} />
      )}
    </section>
  );
}

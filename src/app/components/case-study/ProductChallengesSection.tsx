import { ChallengesProduct, ChallengesMetric } from '../../../content/reportmyup';
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import "./ProductChallengesSection.css";

export interface ProductChallengesSectionProps {
  label: string;
  title: string;
  description: string;
  products: ChallengesProduct[];
  metrics: ChallengesMetric[];
}

interface ProductCardProps extends ChallengesProduct {
  onImageClick: () => void;
}

function ProductCard({ title, description, image, imageAlt, onImageClick }: ProductCardProps) {
  return (
    <article className="product-card">
      <figure className="product-image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className="product-image"
          onClick={onImageClick}
        />
      </figure>
      <div className="product-info">
        <h3 className="cs-card-title">{title}</h3>
        <p className="cs-card-body">{description}</p>
      </div>
    </article>
  );
}

function MetricCallout({ title, description }: ChallengesMetric) {
  return (
    <article className="cs-callout">
      <h3 className="cs-stat-value">{title}</h3>
      <p className="cs-card-body">{description}</p>
    </article>
  );
}

export function ProductChallengesSection({
  label,
  title,
  description,
  products,
  metrics,
}: ProductChallengesSectionProps) {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="challenges-section" aria-labelledby="challenges-title">
      <div className="container">
        <div className="challenges-content">
          <header className="cs-section-header">
            <p className="cs-label">{label}</p>
            <h2 id="challenges-title" className="cs-title">{title}</h2>
            <p className="cs-description">{description}</p>
          </header>

          <div className="product-comparison" role="region" aria-label="Product comparison">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onImageClick={() => setExpandedImage({ src: product.image, alt: product.imageAlt })}
              />
            ))}
          </div>

          <div className="metrics-grid" role="list">
            {metrics.map((metric, index) => (
              <MetricCallout key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>

      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </section>
  );
}

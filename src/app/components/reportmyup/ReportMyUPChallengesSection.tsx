import imgRmupProductShot1 from "../../../assets/images/reportmyup-product-shot.png";
import imgUpExchangeProductShot1 from "../../../assets/images/reportmyup-exchange-product-shot.png";
import imgUpEnterpriseProductShot1 from "../../../assets/images/reportmyup-enterprise-product-shot.png";
import { useState } from "react";
import { ImageModal } from "../ImageModal";
import "./ReportMyUPChallengesSection.css";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
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
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </article>
  );
}

interface MetricCalloutProps {
  title: string;
  description: string;
}

function MetricCallout({ title, description }: MetricCalloutProps) {
  return (
    <article className="metric-callout">
      <h3 className="metric-title">{title}</h3>
      <p className="metric-description">{description}</p>
    </article>
  );
}

export function ReportMyUPChallengesSection() {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  const products = [
    {
      title: "ReportMyUP (former UP Standard)",
      description: "New self-service platform (nearly identical features to UPExchange).",
      image: imgRmupProductShot1,
      imageAlt: "ReportMyUP platform interface showing modern self-service features"
    },
    {
      title: "UPExchange",
      description: "Legacy platform with 2,000+ customers, manual sales and billing, poor UX.",
      image: imgUpExchangeProductShot1,
      imageAlt: "UPExchange legacy platform interface"
    },
    {
      title: "UPEnterprise",
      description: "For large enterprises and managed services with complex or multi-company needs.",
      image: imgUpEnterpriseProductShot1,
      imageAlt: "UPEnterprise platform interface for enterprise clients"
    }
  ];

  const metrics = [
    {
      title: "Revenue leakage",
      description: "Significant revenue leakage from 37% of customers paying for the wrong product subscriptions or tiers due to product feature overlap and missing tiers."
    },
    {
      title: "Costly Maintenance",
      description: "High maintenance cost from supporting 3 Unclaimed Property products serving the same market decrease the margin."
    },
    {
      title: "Unscalable process",
      description: "Sovos Unclaimed Property can't scale into a market leader with 12 steps of manual sales and support process to onboard 1 customer."
    }
  ];

  return (
    <section className="challenges-section" aria-labelledby="challenges-title">
      <div className="container">
        <div className="challenges-content">
          {/* Section Header */}
          <header className="section-header">
            <p className="section-label">The Challenges</p>
            <h2 id="challenges-title" className="section-title">
              Disappointing launch turnout
            </h2>
            <p className="section-description">
              After investing 6 months building ReportMyUP, we launched in September 2024 during peak filing season and got only 3 signups. The investment couldn't be justified, and we needed to pivot immediately.
            </p>
          </header>

          {/* Product Comparison */}
          <div className="product-comparison" role="region" aria-label="Product comparison">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                imageAlt={product.imageAlt}
                onImageClick={() => setExpandedImage({ src: product.image, alt: product.imageAlt })}
              />
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid" role="list">
            {metrics.map((metric, index) => (
              <MetricCallout
                key={index}
                title={metric.title}
                description={metric.description}
              />
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
/**
 * ClickableImage Component
 * 
 * An image wrapper that handles click interactions for opening in a modal.
 * Includes proper accessibility attributes and keyboard support.
 * 
 * @example
 * <ClickableImage
 *   src="/image.jpg"
 *   alt="Product screenshot"
 *   onClick={(src, alt) => handleImageClick(src, alt)}
 * />
 */

import { KeyboardEvent } from 'react';
import './ClickableImage.css';

interface ClickableImageProps {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
  /** Click handler that receives src and alt */
  onClick: (src: string, alt: string) => void;
  /** Custom className for the wrapper */
  className?: string;
  /** Custom className for the image */
  imageClassName?: string;
  /** Optional caption/label for the image */
  caption?: string;
}

export function ClickableImage({
  src,
  alt,
  onClick,
  className = '',
  imageClassName = '',
  caption
}: ClickableImageProps) {
  const handleClick = () => {
    onClick(src, alt);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`clickable-image-wrapper ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View enlarged: ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className={`clickable-image ${imageClassName}`.trim()}
      />
      {caption && (
        <span className="clickable-image-caption visually-hidden">
          {caption}
        </span>
      )}
    </div>
  );
}

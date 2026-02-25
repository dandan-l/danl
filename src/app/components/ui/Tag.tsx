/**
 * Tag Component
 * 
 * A badge/tag component for displaying metadata, categories, or labels.
 * Commonly used in hero sections and card headers.
 * 
 * @example
 * <Tag icon={<CalendarIcon />}>2024</Tag>
 * <Tag>Web Design</Tag>
 * <Tag href="/case-studies">Case Study</Tag>
 */

import { ReactNode } from 'react';
import './Tag.css';

interface TagProps {
  /** Content of the tag */
  children: ReactNode;
  /** Optional icon to display before the text */
  icon?: ReactNode;
  /** If provided, renders as a link */
  href?: string;
  /** Custom className for additional styling */
  className?: string;
  /** Click handler (only used if href is not provided) */
  onClick?: () => void;
}

export function Tag({ children, icon, href, className = '', onClick }: TagProps) {
  const content = (
    <>
      {icon && <span className="tag-icon">{icon}</span>}
      <span className="tag-text">{children}</span>
    </>
  );

  const tagClasses = `tag ${className}`.trim();

  if (href) {
    return (
      <a 
        href={href} 
        className={`tag-link ${tagClasses}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = href;
        }}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button 
        className={`tag-button ${tagClasses}`}
        onClick={onClick}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <span className={tagClasses}>
      {content}
    </span>
  );
}

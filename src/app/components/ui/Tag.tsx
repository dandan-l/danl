/**
 * Tag Component
 *
 * A badge/tag component for displaying metadata, categories, or labels.
 * Commonly used in hero sections and card headers.
 *
 * @example
 * <Tag>Web Design</Tag>
 * <Tag href="https://example.com" target="_blank" rel="noopener noreferrer" icon={<ExternalIcon />}>
 *   Live site
 * </Tag>
 */

import { ReactNode } from "react";
import "./Tag.css";

interface TagProps {
  /** Content of the tag */
  children: ReactNode;
  /** Optional icon to display after the text */
  icon?: ReactNode;
  /** If provided, renders as a native anchor link */
  href?: string;
  /** Where to open the link — use "_blank" for a new tab */
  target?: string;
  /** Relationship attribute — always pass "noopener noreferrer" when target="_blank" */
  rel?: string;
  /** Custom className for additional styling */
  className?: string;
  /** ARIA role, e.g. "listitem" */
  role?: string;
  /** Click handler (only used when href is not provided) */
  onClick?: () => void;
}

export function Tag({
  children,
  icon,
  href,
  target,
  rel,
  className = "",
  role,
  onClick,
}: TagProps) {
  const content = (
    <>
      <span className="tag-text">{children}</span>
      {icon && <span className="tag-icon">{icon}</span>}
    </>
  );

  const tagClasses = `tag ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        role={role}
        className={`tag-link ${tagClasses}`}
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
        role={role}
      >
        {content}
      </button>
    );
  }

  return (
    <span className={tagClasses} role={role}>
      {content}
    </span>
  );
}

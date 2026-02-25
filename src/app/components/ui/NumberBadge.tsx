/**
 * NumberBadge Component
 * 
 * A circular badge with a number, commonly used for step indicators
 * in checkout flows, signup processes, etc.
 * 
 * Features the signature shadow effect with accent color.
 * 
 * @example
 * <NumberBadge number={1} />
 * <NumberBadge number={2} size="sm" />
 */

import './NumberBadge.css';

interface NumberBadgeProps {
  /** The number to display (1-99 recommended) */
  number: number;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Custom className for additional styling */
  className?: string;
}

export function NumberBadge({ number, size = 'md', className = '' }: NumberBadgeProps) {
  return (
    <div 
      className={`number-badge number-badge--${size} ${className}`.trim()}
      aria-label={`Step ${number}`}
    >
      <span className="number-badge-text">{number}</span>
    </div>
  );
}

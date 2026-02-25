/**
 * Card Component
 * 
 * A flexible card container with consistent styling.
 * Supports two variants: default (light border) and bordered (thick border with shadow).
 * 
 * @example
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * 
 * <Card variant="bordered">
 *   <h3>Featured Content</h3>
 * </Card>
 */

import { ReactNode } from 'react';

interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Visual variant */
  variant?: 'default' | 'bordered';
  /** Custom className for additional styling */
  className?: string;
  /** Optional padding override */
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

export function Card({ 
  children, 
  variant = 'default', 
  className = '',
  padding 
}: CardProps) {
  const baseClass = variant === 'bordered' ? 'card-bordered' : 'card';
  
  const paddingClass = padding ? `card--padding-${padding}` : '';
  
  return (
    <div className={`${baseClass} ${paddingClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

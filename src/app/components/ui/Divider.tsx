/**
 * Divider Component
 * 
 * A simple horizontal or vertical divider line.
 * Uses design system tokens for consistent styling.
 * 
 * @example
 * <Divider />
 * <Divider variant="accent" />
 * <Divider direction="vertical" />
 */

interface DividerProps {
  /** Direction of the divider */
  direction?: 'horizontal' | 'vertical';
  /** Visual variant */
  variant?: 'primary' | 'accent';
  /** Custom className for additional styling */
  className?: string;
}

export function Divider({ 
  direction = 'horizontal', 
  variant = 'primary',
  className = '' 
}: DividerProps) {
  const baseClass = direction === 'vertical' ? 'divider-vertical' : 'divider';
  const variantClass = variant === 'accent' && direction === 'horizontal' ? 'divider-accent' : '';
  
  return (
    <div 
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      role="separator"
      aria-orientation={direction}
    />
  );
}

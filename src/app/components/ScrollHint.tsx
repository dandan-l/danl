import { forwardRef, useState, useEffect, useRef } from 'react';
import './ScrollHint.css';

interface ScrollHintProps {
  text?: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  hideThreshold?: number;
}

export const ScrollHint = forwardRef<HTMLSpanElement, ScrollHintProps>(
  ({ text = 'Scroll to explore', scrollContainerRef, hideThreshold = 20 }, ref) => {
    const [isHidden, setIsHidden] = useState(false);
    const internalRef = useRef<HTMLSpanElement>(null);
    const hintRef = (ref as React.RefObject<HTMLSpanElement>) || internalRef;

    useEffect(() => {
      const scrollContainer = scrollContainerRef?.current;
      if (!scrollContainer) return;

      const handleScroll = () => {
        const hint = hintRef.current;
        if (!isHidden && scrollContainer.scrollLeft > hideThreshold && hint) {
          setIsHidden(true);
          hint.classList.add('hidden');
        }
      };

      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef, isHidden, hideThreshold, hintRef]);

    return (
      <span className="scroll-hint" ref={hintRef}>
        <span className="hint-arrow">
          <span></span>
          <span></span>
          <span></span>
        </span>
        {text}
      </span>
    );
  }
);

ScrollHint.displayName = 'ScrollHint';
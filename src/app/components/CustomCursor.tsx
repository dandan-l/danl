import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export function CustomCursor() {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const scaleRef = useRef(1);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    let currentBigX = 0;
    let currentBigY = 0;

    // Move the cursor
    const onMouseMove = (e: MouseEvent) => {
      const bigX = e.clientX - 15;
      const bigY = e.clientY - 15;
      const smallX = e.clientX - 5;
      const smallY = e.clientY - 5;

      currentBigX = bigX;
      currentBigY = bigY;

      bigBall.style.transform = `translate(${bigX}px, ${bigY}px) scale(${scaleRef.current})`;
      smallBall.style.transform = `translate(${smallX}px, ${smallY}px)`;
    };

    // Check if hovering over interactive elements
    const checkHoverable = (target: HTMLElement): boolean => {

        // Check if element has an onClick handler (even if not active)
  const hasClickHandler = (el: HTMLElement) => {
    return (
      el.onclick !== null ||
      el.hasAttribute('onclick') ||
      // Check React's internal event listeners (works for most cases)
      Object.keys(el).some(key => key.startsWith('__reactEvent'))
    );
  };

      
      return (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||

        // for the future when there are these elements
    //           target.tagName === 'INPUT' ||
    // target.tagName === 'TEXTAREA' ||
    // target.tagName === 'SELECT' ||
        
        target.closest('a') !== null ||
        target.closest('button') !== null ||
    target.closest('[role="button"]') !== null ||
          target.closest('[onclick]') !== null ||
         target.closest('.clickable') !== null ||  // ← This should catch the cat grid!
    target.classList.contains('clickable') ||    
        target.classList.contains('hoverable') ||
        target.getAttribute('role') === 'button' ||
            target.getAttribute('role') === 'link' ||
    target.hasAttribute('onclick') ||
            hasClickHandler(target) ||  // ← New check
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkHoverable(target)) {
        setIsHovering(true);
        scaleRef.current = 4;
        bigBall.style.transform = `translate(${currentBigX}px, ${currentBigY}px) scale(4)`;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkHoverable(target)) {
        setIsHovering(false);
        scaleRef.current = 1;
        bigBall.style.transform = `translate(${currentBigX}px, ${currentBigY}px) scale(1)`;
      }
    };

    // Add listeners
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseover', onMouseOver);
    document.body.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseover', onMouseOver);
      document.body.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div className="cursor">
      <div 
        ref={bigBallRef}
        className={`cursor__ball cursor__ball--big ${isHovering ? 'cursor__ball--hover' : ''}`}
        aria-hidden="true"
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      
      <div 
        ref={smallBallRef}
        className="cursor__ball cursor__ball--small"
        aria-hidden="true"
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}
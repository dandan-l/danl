import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export function CustomCursor() {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const scaleRef = useRef(1);

  // for Safari compatibility
  const rafRef = useRef<number>();
  const posRef = useRef({ bigX: 0, bigY: 0, smallX: 0, smallY: 0 });
  const targetPosRef = useRef({ bigX: 0, bigY: 0, smallX: 0, smallY: 0 });

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Use requestAnimationFrame for smooth animation
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      // Smooth follow for big ball (slower)
      posRef.current.bigX = lerp(
        posRef.current.bigX,
        targetPosRef.current.bigX,
        0.15,
      );
      posRef.current.bigY = lerp(
        posRef.current.bigY,
        targetPosRef.current.bigY,
        0.15,
      );

      // Instant follow for small ball
      posRef.current.smallX = targetPosRef.current.smallX;
      posRef.current.smallY = targetPosRef.current.smallY;

      // Use translate3d for better Safari performance
      bigBall.style.transform = `translate3d(${posRef.current.bigX}px, ${posRef.current.bigY}px, 0) scale(${scaleRef.current})`;
      smallBall.style.transform = `translate3d(${posRef.current.smallX}px, ${posRef.current.smallY}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    //old custom cursor code that isn't compatible with Safari
    // let currentBigX = 0;
    // let currentBigY = 0;

    // Move the cursor - old custom cursor code that isn't compatible with Safari
    // const onMouseMove = (e: MouseEvent) => {
    //   const bigX = e.clientX - 15;
    //   const bigY = e.clientY - 15;
    //   const smallX = e.clientX - 5;
    //   const smallY = e.clientY - 5;

    //   currentBigX = bigX;
    //   currentBigY = bigY;

    //   bigBall.style.transform = `translate(${bigX}px, ${bigY}px) scale(${scaleRef.current})`;
    //   smallBall.style.transform = `translate(${smallX}px, ${smallY}px)`;
    // };

    // Move the cursor
    const onMouseMove = (e: MouseEvent) => {
      targetPosRef.current.bigX = e.clientX - 15;
      targetPosRef.current.bigY = e.clientY - 15;
      targetPosRef.current.smallX = e.clientX - 5;
      targetPosRef.current.smallY = e.clientY - 5;
    };

    // Check if hovering over interactive elements
    const checkHoverable = (target: HTMLElement): boolean => {
      // Check if element has an onClick handler (even if not active)
      const hasClickHandler = (el: HTMLElement) => {
        return (
          el.onclick !== null ||
          el.hasAttribute("onclick") ||
          // Check React's internal event listeners (works for most cases)
          Object.keys(el).some((key) => key.startsWith("__reactEvent"))
        );
      };

      return (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        // for the future when there are these elements
        //           target.tagName === 'INPUT' ||
        // target.tagName === 'TEXTAREA' ||
        // target.tagName === 'SELECT' ||

        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest("[onclick]") !== null ||
        target.closest(".clickable") !== null || // ← This should catch the cat grid!
        target.classList.contains("clickable") ||
        target.classList.contains("hoverable") ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("role") === "link" ||
        target.hasAttribute("onclick") ||
        hasClickHandler(target) || // ← New check
        window.getComputedStyle(target).cursor === "pointer"
      );
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkHoverable(target)) {
        setIsHovering(true);
        scaleRef.current = 4;
        //old custom cursor code that isn't compatible with Safari
        // bigBall.style.transform = `translate(${currentBigX}px, ${currentBigY}px) scale(4)`;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkHoverable(target)) {
        setIsHovering(false);
        scaleRef.current = 1;
        //old custom cursor code that isn't compatible with Safari
        // bigBall.style.transform = `translate(${currentBigX}px, ${currentBigY}px) scale(1)`;
      }
    };

    // Add listeners with passive flag for better performance
    const options = isSafari ? { passive: true } : false;
    document.body.addEventListener("mousemove", onMouseMove, options);
    document.body.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseout", onMouseOut);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div className="cursor">
      {/* Plain div — CSS border-radius circles are resolution-independent
          and never blur when scaled, unlike SVG rasterized inside a 3D layer */}
      <div
        ref={bigBallRef}
        className={`cursor__ball cursor__ball--big ${isHovering ? "cursor__ball--hover" : ""}`}
        aria-hidden="true"
      />

      <div
        ref={smallBallRef}
        className="cursor__ball cursor__ball--small"
        aria-hidden="true"
      />
    </div>
  );
}

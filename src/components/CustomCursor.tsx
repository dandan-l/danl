import { useEffect, useState } from "react";

export default function CustomCursor({ isVisible = true }: { isVisible?: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("#FECA05");
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    // Function to calculate luminance from RGB
    const getLuminance = (r: number, g: number, b: number) => {
      const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };

    // Function to get background color of element
    const getBackgroundColor = (element: Element | null): string => {
      if (!element || element === document.body) {
        return "rgb(255, 253, 247)"; // Default cream background
      }

      const computedStyle = window.getComputedStyle(element as HTMLElement);
      const bgColor = computedStyle.backgroundColor;

      // If background is transparent, check parent
      if (
        bgColor === "transparent" ||
        bgColor === "rgba(0, 0, 0, 0)" ||
        bgColor === ""
      ) {
        return getBackgroundColor(element.parentElement);
      }

      return bgColor;
    };

    // Function to parse RGB color string
    const parseRGB = (colorString: string): { r: number; g: number; b: number } | null => {
      const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3]),
        };
      }
      return null;
    };

    // Function to check if element is or is inside an interactive element
    const isInteractiveElement = (element: Element | null): boolean => {
      if (!element) return false;
      
      const tagName = element.tagName.toLowerCase();
      
      // Check if it's a button, link, or has interactive role
      if (
        tagName === 'button' || 
        tagName === 'a' || 
        element.getAttribute('role') === 'button' ||
        element.classList.contains('cursor-pointer')
      ) {
        return true;
      }
      
      // Check parent elements recursively (up to 5 levels)
      let parent = element.parentElement;
      let depth = 0;
      while (parent && depth < 5) {
        const parentTag = parent.tagName.toLowerCase();
        if (
          parentTag === 'button' || 
          parentTag === 'a' ||
          parent.getAttribute('role') === 'button' ||
          parent.classList.contains('cursor-pointer')
        ) {
          return true;
        }
        parent = parent.parentElement;
        depth++;
      }
      
      return false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Get element under cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      
      if (elementUnderCursor) {
        // Check if hovering over interactive element
        setIsHoveringInteractive(isInteractiveElement(elementUnderCursor));

        const bgColor = getBackgroundColor(elementUnderCursor);
        const rgb = parseRGB(bgColor);

        if (rgb) {
          const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
          
          // If background is dark (low luminance), use light cursor
          // If background is light (high luminance), use dark cursor or default yellow
          if (luminance < 0.5) {
            // Dark background - use light cursor
            setCursorColor("#FFFFFF");
          } else {
            // Light background - use default yellow or dark cursor
            // Check if yellow has enough contrast
            const yellowRGB = { r: 254, g: 202, b: 5 };
            const yellowLuminance = getLuminance(yellowRGB.r, yellowRGB.g, yellowRGB.b);
            const contrast = (Math.max(luminance, yellowLuminance) + 0.05) / (Math.min(luminance, yellowLuminance) + 0.05);
            
            if (contrast >= 3) {
              // Yellow has enough contrast
              setCursorColor("#FECA05");
            } else {
              // Use dark cursor for better contrast
              setCursorColor("#09543D");
            }
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
            }
            14% {
              transform: translate(-50%, -50%) scale(3);
            }
            28% {
              transform: translate(-50%, -50%) scale(1);
            }
            42% {
              transform: translate(-50%, -50%) scale(3);
            }
            56% {
              transform: translate(-50%, -50%) scale(1);
            }
            70% {
              transform: translate(-50%, -50%) scale(3);
            }
            84% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-colors duration-200 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "26px",
          height: "26px",
          backgroundColor: cursorColor,
          transform: "translate(-50%, -50%)",
          animation: isHoveringInteractive ? "heartbeat 6s ease-in-out infinite" : "none",
        }}
      />
    </>
  );
}

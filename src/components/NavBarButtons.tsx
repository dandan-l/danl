import { Link } from "react-router-dom";
import { useState } from "react";
import svgPaths from "../imports/svg-relpazhn2a";
import svgPathsHover from "../imports/svg-0mo2bv48kr";
import svgPathsContact from "../imports/svg-jgjaeoqapy";

// Work/Project Button
export function WorkButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first if not already there
    window.location.hash = '#/';
    // Small delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById('featured-projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 transition-colors" 
      data-name="Nav-bar-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[20px] relative shrink-0 w-[18.859px]" data-name="design-doodle">
        <div className="absolute inset-[-0.14%_-1.89%_-2.5%_-2.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <g id="design-doodle">
              <path d={svgPaths.p1afb7c80} id="Vector 83" stroke={isHovered ? "#09543D" : "#09543D"} strokeLinecap="round" />
              <path d={svgPaths.p30417780} id="Vector 84" stroke={isHovered ? "#09543D" : "#09543D"} strokeLinecap="round" />
              <path d={svgPaths.p3d0d2050} id="Vector 85" stroke={isHovered ? "#09543D" : "#09543D"} strokeLinecap="round" />
              <path d={svgPaths.p254730c0} id="Vector 88" stroke={isHovered ? "#09543D" : "#09543D"} strokeLinecap="round" />
              <path d={svgPaths.p267f0980} id="Vector 89" stroke={isHovered ? "#FECA05" : "#09543D"} strokeLinecap="round" strokeWidth={isHovered ? "1.25003" : "1"} />
              <path d={svgPaths.p3cef1500} id="Vector 86" stroke={isHovered ? "#09543D" : "#09543D"} strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre transition-colors ${isHovered ? 'text-[#feca05]' : 'text-[#09543d]'}`}>
        project
      </p>
    </Link>
  );
}

// About Button
export function AboutButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to="/about" 
      className="content-stretch flex gap-[8px] items-center relative shrink-0 transition-colors" 
      data-name="Nav-bar-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[20px] relative shrink-0 w-[18.2px]" data-name="about-doodle">
        <div className="absolute inset-[-2.5%_-2.74%_-2.5%_-2.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <g id="about-doodle">
              <path d={svgPaths.p39c07300} id="Vector 140" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p37ab0c0} id="Vector 141" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p42a85e0} id="Vector 142" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p78b5c90} id="Vector 145" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p1999c180} id="Vector 153" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p39c0b800} id="Vector 154" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p30e6cf80} id="Vector 155" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p2a51c9e0} id="Vector 156" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p2560e200} id="Vector 157" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p28c3c5e0} id="Vector 158" stroke="#09543D" strokeLinecap="round" />
              {isHovered && (
                <>
                  {/* Group 7 - Left starry eye */}
                  <g transform="translate(6.65, 7.5)">
                    <path d={svgPathsHover.p3972c300} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.762489" />
                    <path d={svgPathsHover.p3bb6db80} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p2e35a180} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p3be1e00} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p3c451500} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p115b2a20} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                  </g>
                  {/* Group 8 - Right starry eye */}
                  <g transform="translate(11.5, 7.3)">
                    <path d={svgPathsHover.pb695000} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.762489" />
                    <path d={svgPathsHover.p37850400} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p3c8dde00} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p3fbd0100} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p3c451500} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                    <path d={svgPathsHover.p115b2a20} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
                  </g>
                </>
              )}
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre transition-colors ${isHovered ? 'text-[#feca05]' : 'text-[#09543d]'}`}>
        about
      </p>
    </Link>
  );
}

// Resume Button
export function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="https://drive.google.com/file/d/1JO-R64jB19TKg1hGg1WkPBn2s9xMcAM-/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer transition-colors" 
      data-name="Nav-bar-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[17.5px] relative shrink-0 w-[12.618px]" data-name="Resume-doodle">
        <div className="absolute inset-[-2.86%_-3.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
            <g id="Resume-doodle">
              <path d={svgPaths.p10b53900} id="Vector 175" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p24645000} id="Vector 176" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p229e7e0} id="Vector 177" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p16bddf80} id="Vector 178" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p2898a940} id="Vector 179" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p13b16d80} id="Vector 180" stroke="#09543D" strokeLinecap="round" />
              {isHovered && (
                <>
                  {/* Group 9 - Yellow rectangle */}
                  <g transform="translate(3.5, 10.5)">
                    <rect fill="#FECA05" height="9.0618" width="10.4211" x="0.43721" y="0.887033" />
                    <path d={svgPathsHover.p15942380} stroke="#09543D" strokeLinecap="round" />
                    <path d={svgPathsHover.p18b15c00} stroke="#09543D" strokeLinecap="round" />
                    <path d={svgPathsHover.p1932ad80} stroke="#09543D" strokeLinecap="round" />
                  </g>
                </>
              )}
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre transition-colors ${isHovered ? 'text-[#feca05]' : 'text-[#09543d]'}`}>
        resume
      </p>
    </a>
  );
}

// Contact Button
export function ContactButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="mailto:danliudesigner@gmail.com?subject=Beep-boop, contact from Dan's website!&body=Hello, this is {name}. %0D%0 I'd love to connect on {topics}."
      className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer transition-colors" 
      data-name="Nav-bar-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[16px] relative shrink-0 w-[24.543px]" data-name="contact-doodle">
        <div className="absolute inset-[-3.13%_-2.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 18">
            <g id="contact-doodle">
              <path d={svgPaths.p1f9bb280} id="Vector 159" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p31006090} id="Vector 160" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p2e16a480} id="Vector 161" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.pfc54e00} id="Vector 162" stroke="#09543D" strokeLinecap="round" />
              <path d={svgPaths.p1264f100} id="Vector 163" stroke="#09543D" strokeLinecap="round" />
              
              {isHovered && (
                <>
                  {/* Top left sparkle */}
                  <g transform="translate(2.45, 3.1)">
                    <path d={svgPathsContact.p30969500} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                  
                  {/* Top center sparkle */}
                  <g transform="translate(4.9, 0.45)">
                    <path d="M0.285718 0.285718V2.28366" stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                  
                  {/* Left sparkle */}
                  <g transform="translate(1.3, 1.15)">
                    <path d={svgPathsContact.p3d1f2090} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                  
                  {/* Bottom left sparkle */}
                  <g transform="translate(2.5, 0.45)">
                    <path d={svgPathsContact.p2c91c80} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                  
                  {/* Heart fill */}
                  <g transform="translate(21.98, 11.25)">
                    <path d={svgPathsContact.pd0ea100} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                  
                  {/* Heart outline */}
                  <g transform="translate(21.5, 11)">
                    <path d={svgPathsContact.pde15180} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                    <path d={svgPathsContact.p2d098e00} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
                  </g>
                </>
              )}
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre transition-colors ${isHovered ? 'text-[#feca05]' : 'text-[#09543d]'}`}>
        contact
      </p>
    </a>
  );
}

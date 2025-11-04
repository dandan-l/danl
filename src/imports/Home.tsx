import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import svgPaths from "./svg-relpazhn2a";
import svgNewTabPaths from "./svg-fmk4nn8rsv";
import { WorkButton, AboutButton, ResumeButton, ContactButton } from "../components/NavBarButtons";
import Button from "./Button";
import imgScreenshot20251002At91804Pm1 from "figma:asset/3d7027870b9712cfcdd37b904d38824f2ec370b3.png";
import imgScreenshot20231015At16001 from "figma:asset/2c987d16ec9a0bf679429b41c23a467849f92244.png";
import imgScreenshot20231015At16002 from "figma:asset/34a9cea467df21520f94d18cb73cf483899443fa.png";
import imgScreenshot20250921At64519Pm2 from "figma:asset/098446b7bc967c7150a8c14c632f519f38fce806.png";
import imgScreenshot20250921At64209Pm3 from "figma:asset/a04c1d0ffb4b63b77f0c26cfc32cb7917fa03f28.png";
import imgScreenshot20250921At64036Pm1 from "figma:asset/6db81beb58b2bbe8853bc76f972175b304c006b5.png";
import imgScreenshot20251003At41632Pm1 from "figma:asset/4303b7c1abb1d403a0caffe8f5da89cb2ce76652.png";
import imgScreenshot20250912At50429Pm1 from "figma:asset/6fef2ae0467a89875256c9cb62e1f621df33b1fe.png";
import imgScreenshot20251003At42532Pm1 from "figma:asset/9651688b700ab2a98d7f6f4000861459cf9553e4.png";
import imgScreenshot20251003At42546Pm1 from "figma:asset/04740842c7fd328ab2466bffdc0d4a3ab5b31a48.png";
import imgPrototypeReview from "figma:asset/44c89db9907048b327e18a457040d46b54e9a8c1.png";
import imgPrototypeReview1 from "figma:asset/81a0710bc65173f4531e35a1764ec4fe4e88d111.png";
import imgPrototypeReview2 from "figma:asset/c6d278d9a48683120233d2201418d63e6c410d6b.png";

function CatDoodle() {
  const [scrollY, setScrollY] = useState(0);
  const kittyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate kitty reveal based on scroll
  // The "Featured work" section is around 1000px from top
  // Nav bar is around 80px from top
  // Kitty height is ~76px, we want to show only ~10px of ears initially
  const featuredWorkY = 700; // Approximate position of "Featured work" section
  const navBarBottom = 80; // Nav bar height
  const kittyHeight = 76;
  const earsHeight = 10; // Only show this much initially
  const maxReveal = kittyHeight - earsHeight; // Maximum distance to move up (66px)
  
  // Calculate how much of the kitty should be revealed
  // Start revealing when scroll reaches around 100px, fully revealed by ~200px
  const scrollStart = 100;
  const scrollEnd = 300;
  const scrollProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
  
  // Calculate the translateY value (negative to move up and reveal)
  const translateY = -scrollProgress * maxReveal;

  return (
    <div 
      ref={kittyRef}
      className="absolute h-[75.581px] left-[119px] top-[787px] w-[112.735px] transition-transform duration-300 ease-out" 
      data-name="cat-doodle"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="absolute inset-[-1.32%_-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 78">
          <g id="cat-doodle">
            <path d={svgPaths.p2d13200} fill="var(--fill-0, black)" id="face background" />
            <path d={svgPaths.p34e7af00} id="Vector 83" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1b9da580} id="Vector 84" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p4abbb00} id="Vector 85" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1bf51280} id="Vector 86" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p21eefd00} id="Vector 87" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p148c7b80} id="Vector 88" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2be77640} id="Vector 89" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p26456000} id="Vector 90" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p337d6580} id="Vector 91" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pb27aa80} id="Vector 194" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p362d5040} id="Vector 195" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <g id="Right eye">
              <path d={svgPaths.p1f233100} fill="var(--fill-0, white)" id="Union" />
              <path d={svgPaths.p14e7740} id="Vector 203" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p39a45560} id="Vector 204" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.pdeb1380} id="Vector 201" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g id="left eye">
              <path d={svgPaths.p7000b00} fill="var(--fill-0, white)" id="Union_2" />
              <path d={svgPaths.pcd9c700} id="Vector 196" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p1c4d3800} id="Vector 197" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.pfc55500} id="Vector 202" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

interface AbstractCatDoodleProps {
  onClick?: () => void;
  isPoofing?: boolean;
  showQuote?: string;
}

function AbstractCatDoodle({ onClick, isPoofing, showQuote }: AbstractCatDoodleProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pupilTransforms, setPupilTransforms] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      const svgCenterX = svgRect.left + svgRect.width / 2;
      const svgCenterY = svgRect.top + svgRect.height / 2;

      // Eye positions in the SVG viewBox (0 0 282 286)
      // Left eye approximately at (94, 143)
      // Right eye approximately at (207, 143)
      const leftEyeX = svgRect.left + (94 / 282) * svgRect.width;
      const leftEyeY = svgRect.top + (143 / 286) * svgRect.height;
      const rightEyeX = svgRect.left + (207 / 282) * svgRect.width;
      const rightEyeY = svgRect.top + (143 / 286) * svgRect.height;

      // Calculate angle and distance for left eye
      const leftAngle = Math.atan2(e.clientY - leftEyeY, e.clientX - leftEyeX);
      const leftDistance = Math.min(Math.sqrt(Math.pow(e.clientX - leftEyeX, 2) + Math.pow(e.clientY - leftEyeY, 2)) / 10, 3);
      const leftPupilX = Math.cos(leftAngle) * leftDistance;
      const leftPupilY = Math.sin(leftAngle) * leftDistance;

      // Calculate angle and distance for right eye
      const rightAngle = Math.atan2(e.clientY - rightEyeY, e.clientX - rightEyeX);
      const rightDistance = Math.min(Math.sqrt(Math.pow(e.clientX - rightEyeX, 2) + Math.pow(e.clientY - rightEyeY, 2)) / 10, 3);
      const rightPupilX = Math.cos(rightAngle) * rightDistance;
      const rightPupilY = Math.sin(rightAngle) * rightDistance;

      setPupilTransforms({
        left: { x: leftPupilX, y: leftPupilY },
        right: { x: rightPupilX, y: rightPupilY }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="h-[19.83vw] max-h-[285.535px] relative shrink-0 w-[19.57vw] max-w-[281.802px] cursor-pointer transition-all duration-500 flex items-center justify-center" 
      data-name="abstract-cat-doodle"
      onClick={onClick}
      style={{
        opacity: isPoofing ? 0 : 1,
        transform: isPoofing ? 'scale(1.5)' : 'scale(1)',
        filter: isPoofing ? 'blur(8px)' : 'blur(0px)'
      }}
    >
      {showQuote ? (
        <p className="font-['Sora',_sans-serif] text-[16px] text-[#09543d] text-center px-4 leading-relaxed">
          {showQuote}
        </p>
      ) : (
        <svg ref={svgRef} className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 282 286">
          <g id="abstract-cat-doodle">
            <g id="Group 11">
              <path d={svgPaths.p2e5f1500} fill="var(--fill-0, #A9FFDD)" id="Vector 205" />
              <path d={svgPaths.p2b149300} fill="var(--fill-0, white)" id="Vector 206" />
              <path d={svgPaths.p3edbda80} fill="var(--fill-0, white)" id="Vector 207" />
            </g>
            <g transform={`translate(${pupilTransforms.left.x}, ${pupilTransforms.left.y})`}>
              <path d={svgPaths.pf5f6b00} id="Vector 210" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3.73248" />
            </g>
            <g transform={`translate(${pupilTransforms.right.x}, ${pupilTransforms.right.y})`}>
              <path d={svgPaths.p2441c600} id="Vector 211" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3.73248" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

const QUOTES = [
  "Work smarter, not harder. Sleep when you need to",
  "It's Monday, let's get some sushi 🍣",
  "The time to relax is when you don't have time for it ⏳",
  "Self-care is how you take your power back 🔌",
  "Time you enjoy wasting is not wasted time ⏰",
  "If your compassion does not include yourself, it is incomplete 👯",
  "Take the time today to love yourself. You deserve it 😍"
];

interface CatState {
  id: number;
  isPoofing: boolean;
  quote: string | null;
}

function Frame1770() {
  const [cats, setCats] = useState<CatState[]>(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      isPoofing: false,
      quote: null
    }))
  );
  const [usedQuotes, setUsedQuotes] = useState<string[]>([]);
  const nextIdRef = useRef(25);

  const handleCatClick = (index: number) => {
    // Start poofing animation
    setCats(prev => {
      const newCats = [...prev];
      newCats[index] = { ...newCats[index], isPoofing: true };
      return newCats;
    });

    // After 500ms, show quote
    setTimeout(() => {
      // Get a random quote that hasn't been used, or reset if all used
      let availableQuotes = QUOTES.filter(q => !usedQuotes.includes(q));
      if (availableQuotes.length === 0) {
        setUsedQuotes([]);
        availableQuotes = [...QUOTES];
      }
      
      const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
      setUsedQuotes(prev => [...prev, randomQuote]);

      setCats(prev => {
        const newCats = [...prev];
        newCats[index] = { ...newCats[index], isPoofing: false, quote: randomQuote };
        return newCats;
      });

      // After 3 seconds, replace with new cat and shift
      setTimeout(() => {
        setCats(prev => {
          const newCats = [...prev];
          // Remove the cat at this index
          newCats.splice(index, 1);
          // Add a new cat at the end
          newCats.push({
            id: nextIdRef.current++,
            isPoofing: false,
            quote: null
          });
          return newCats;
        });
      }, 3000);
    }, 500);
  };

  return (
    <div className="absolute content-start flex flex-wrap gap-[1.33vw] h-[55.56vw] items-start right-0 overflow-clip top-[125px] w-[64.72vw] max-w-[932px]">
      {cats.map((cat, i) => (
        <AbstractCatDoodle 
          key={cat.id} 
          onClick={() => handleCatClick(i)}
          isPoofing={cat.isPoofing}
          showQuote={cat.quote}
        />
      ))}
    </div>
  );
}

function Group1770() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffa9eb] h-[60px] ml-[47px] mt-0 w-[488px]" />
      <div className="[grid-area:1_/_1] bg-[#ffa9eb] h-[60px] ml-0 mt-[66px] w-[243px]" />
      <div className="[grid-area:1_/_1] bg-[#ffa9eb] h-[60px] ml-[292px] mt-[66px] w-[204px]" />
      <p className="[grid-area:1_/_1] css-l3z3w9 font-['Sora:SemiBold',_sans-serif] font-semibold leading-[normal] ml-0 mt-0 relative text-[#09543d] text-[0px] text-[52px] tracking-[-0.5px] w-[580px]">
        <span>{`A `}</span>
        <span className="text-[#451e0e]">full</span>
        <span className="text-[#451e0e]">-stack Product</span> <span className="text-[#451e0e]">Designer</span>
        <span>{` & `}</span>
        <span className="text-[#451e0e]">{`mentor `}</span>
      </p>
    </div>
  );
}

function Button() {
  const scrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      onClick={scrollToProjects}
      className="bg-[#09543d] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[8px] relative rounded-[50px] shrink-0 cursor-pointer" 
      data-name="Button"
    >
      <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.5px] whitespace-pre">View my project</p>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Radio button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Radio button">
          <path clipRule="evenodd" d={svgPaths.p2802a080} fill="var(--fill-0, #33FE00)" fillRule="evenodd" id="Mask" />
        </g>
      </svg>
    </div>
  );
}

function StatusTextLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Status text label">
      <RadioButton />
      <p className="css-bqxx5z font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09543d] text-[24px] text-nowrap tracking-[-0.5px] whitespace-pre">Available for work</p>
    </div>
  );
}

function Frame1771() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button />
      <StatusTextLabel />
    </div>
  );
}

function Frame1772() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[32px] top-[189px] w-[580px]">
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[28px] tracking-[-0.5px] w-[min-content]">👋🏼 Hellooooo, my name is Dan Liu.</p>
      <Group1770 />
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[28px] tracking-[-0.5px] w-[min-content]">I transform complex concepts into simple experiences that users and businesses appreciate. Creativity powered by passion to design, vivid imagination and (more than) occasional silliness.</p>
      <Frame1771 />
    </div>
  );
}

function Timestamp() {
  return (
    <div className="content-stretch flex font-['Source_Sans_Pro:Regular',_sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Timestamp">
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">2022</p>
      <p className="css-26y08y relative shrink-0 text-[#999ea3]">-</p>
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">2023</p>
      <p className="css-26y08y relative shrink-0 text-[#999ea3]">•</p>
            <p className="css-hyguxj relative shrink-0 text-[#5c6166]">eFileMyForms Redesign</p>
    </div>
  );
}

function ArrowUpward() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_upward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_3053)" id="arrow_upward">
          <g id="Vector"></g>
          <path d={svgPaths.pf7cbf00} fill="var(--fill-0, #09543D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3053">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">NPS 15</p>
      <ArrowUpward />
    </div>
  );
}

function ArrowUpward1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_upward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_3053)" id="arrow_upward">
          <g id="Vector"></g>
          <path d={svgPaths.pf7cbf00} fill="var(--fill-0, #09543D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3053">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">ARR 23%</p>
      <ArrowUpward1 />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">E-commerce</p>
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Tax filing</p>
    </div>
  );
}

function PillGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Pill group">
      <Pill />
      <Pill1 />
      <Pill2 />
      <Pill3 />
    </div>
  );
}

function Button1() {
  return (
    <Link to="/work/efilemyforms">
      <div className="bg-[#09543d] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0a6349] transition-colors" data-name="Button">
        <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.5px] whitespace-pre">View project</p>
      </div>
    </Link>
  );
}

function DescriptionGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[437px]" data-name="Description group">
      <Timestamp />
      <p className="css-l3z3w9 font-['Sora:SemiBold',_sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#09543d] text-[32px] tracking-[-0.5px] w-[min-content]">Made tax filing easy and modern for stressed small business owners</p>
      <PillGroup />
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[18px] tracking-[-0.5px] w-[min-content]">{`My design for Sovos' 1st ecommerce product sparked market expansion and became the design blueprint for their global ecommerce portfolio.`}</p>
      <Button1 />
    </div>
  );
}

function PutScreenInHere() {
  return (
    <div className="absolute bg-black inset-[-55%_76.61%_82.91%_-0.61%] overflow-clip rounded-[5.41px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute h-[300.932px] left-0 top-0 w-[138.96px]" data-name="Screenshot 2025-10-02 at 9.18.04 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.35%] left-[-1.59%] max-w-none top-[-0.44%] w-[104.78%]" src={imgScreenshot20251002At91804Pm1} />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="Background">
      <div className="absolute h-[251.267px] left-[-10.62px] top-[60.47px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.71%] left-0 max-w-none top-[-9.71%] w-[100.49%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
      <div className="absolute h-[251.222px] left-[-10.62px] top-[248.05px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.49%]" src={imgScreenshot20231015At16002} />
        </div>
      </div>
      <div className="absolute h-[116.443px] left-[279.53px] top-[215.19px] w-[118.695px]" data-name="Screenshot 2023-10-15 at 16.00 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.74%] left-[-244.44%] max-w-none top-[-130.62%] w-[390.24%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
    </div>
  );
}

function PaymentNameCorrection() {
  return (
    <div className="absolute contents left-[294.97px] top-[239px]" data-name="Payment name correction">
      <div className="absolute bg-[#fafbfb] h-[5.79px] left-[294.97px] top-[239px] w-[12.545px]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[295.29px] not-italic text-[#565e73] text-[3.86px] text-nowrap top-[239.96px] tracking-[-0.0965px] whitespace-pre">Liu</p>
    </div>
  );
}

function Forms() {
  return (
    <div className="absolute contents left-[35.19px] top-[121.59px]" data-name="Forms">
      <div className="absolute bg-white h-[41.173px] left-[38.92px] top-[311.69px] w-[252.83px]" />
      <div className="absolute h-[24.431px] left-[35.19px] top-[300.44px] w-[246.557px]" data-name="Screenshot 2025-09-21 at 6.45.19 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[976.32%] left-[-23.66%] max-w-none top-[-11.84%] w-[197.13%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <div className="absolute h-[189.783px] left-[46.96px] top-[121.59px] w-[231.6px]" data-name="Screenshot 2025-09-21 at 6.42.09 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.12%] left-[-30.28%] max-w-none top-[-52.24%] w-[210%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function QualifiedFormTooltip() {
  return (
    <div className="absolute contents left-[60.15px] top-[259.58px]" data-name="qualified form tooltip">
      <div className="absolute bg-white h-[30.237px] left-[60.15px] opacity-30 rounded-[2.573px] shadow-[-0.482px_0.482px_0.643px_0px_rgba(0,0,0,0.5)] top-[262.48px] w-[112.583px]" />
      <div className="absolute h-[33.132px] left-[60.15px] rounded-bl-[2.573px] top-[259.58px] w-[113.87px]" data-name="Screenshot 2025-09-21 at 6.40.36 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.573px]">
          <img alt="" className="absolute h-[133.01%] left-[-3.67%] max-w-none top-[-16.5%] w-[106.78%]" src={imgScreenshot20250921At64036Pm1} />
        </div>
      </div>
    </div>
  );
}

function OrderReviewPage() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="order review page">
      <Background />
      <PaymentNameCorrection />
      <Forms />
      <div className="absolute bg-[#fafbfb] h-[29.593px] left-[281.78px] top-[187.53px] w-[114.192px]" />
      <div className="absolute h-[27.663px] left-[285.96px] top-[188.5px] w-[106.15px]" data-name="Processing delayed message screenshot">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1050.47%] left-[-295.76%] max-w-none top-[-610.7%] w-[458.18%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
      <div className="absolute h-[35.383px] left-[284.35px] top-[252.83px] w-[109.045px]" data-name="Price correction">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[674.55%] left-[-286.58%] max-w-none top-[-14.55%] w-[446.02%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <QualifiedFormTooltip />
      <div className="absolute h-[48.572px] left-[285.96px] top-[138.96px] w-[102.933px]" data-name="rescheduled input group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[609.79%] left-[-312.01%] max-w-none top-[-244.48%] w-[482.87%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere1() {
  return (
    <div className="absolute bg-black inset-[-40.92%_-5.06%_55.58%_29.17%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <OrderReviewPage />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1795d600} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.pd20f980} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p9606e80} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3075)" id="Ellipse 1">
                <path d={svgPaths.p55f100} fill="url(#paint0_linear_1_3075)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3075" width="7.66894" x="3.04099" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3075" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3075" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3075" x1="6.80074" x2="6.75886" y1="3.40487" y2="8.89909">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group10 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow />
    </div>
  );
}

function Group885() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-NEC</p>
    </div>
  );
}

function Group886() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow />
      <Group885 />
    </div>
  );
}

function Group887() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group886 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p35374c00} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2eeb0d40} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p26a0cb00} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2955)" id="Ellipse 1">
                <path d={svgPaths.p2526eb00} fill="url(#paint0_linear_1_2955)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2955" width="7.66894" x="3.04227" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2955" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2955" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2955" x1="6.80202" x2="6.76013" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6DAE3" />
              <stop offset="1" stopColor="#D56CEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow1() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group37 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow1() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow1 />
    </div>
  );
}

function Group892() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-C</p>
    </div>
  );
}

function Group893() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow1 />
      <Group892 />
    </div>
  );
}

function Group890() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group893 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.pd481910} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p781b740} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00818" x2="3.22225" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25678" x2="7.27731" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01563" x2="7.51988" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51824" x2="7.68463" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08995" x2="8.25634" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4195" x2="2.75133" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48924" x2="3.0306" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p2efeb200} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3032)" id="Ellipse 1">
                <path d={svgPaths.p3b11a400} fill="url(#paint0_linear_1_3032)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3032" width="7.66894" x="3.04208" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3032" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3032" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3032" x1="6.80183" x2="6.75994" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6F0FF" />
              <stop offset="1" stopColor="#63A5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow2() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group39 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow2() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow2 />
    </div>
  );
}

function Group894() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-B</p>
    </div>
  );
}

function Group895() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow2 />
      <Group894 />
    </div>
  );
}

function Group891() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group895 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1c3f6700} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p20a7b200} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p3ed9d500} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2936)" id="Ellipse 1">
                <path d={svgPaths.p997e670} fill="url(#paint0_linear_1_2936)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2936" width="7.66894" x="3.04099" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2936" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2936" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2936" x1="6.80074" x2="6.75886" y1="3.40455" y2="8.89877">
              <stop stopColor="#B0FAA8" />
              <stop offset="1" stopColor="#6EB57F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow3() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group41 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow3() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow3 />
    </div>
  );
}

function Group896() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-MISC</p>
    </div>
  );
}

function Group897() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow3 />
      <Group896 />
    </div>
  );
}

function Group889() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group897 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p3cd95940} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2cbb7500} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p165b3100} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3009)" id="Ellipse 1">
                <path d={svgPaths.p286a8480} fill="url(#paint0_linear_1_3009)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3009" width="7.66894" x="3.04227" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3009" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3009" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3009" x1="6.80202" x2="6.76013" y1="3.40455" y2="8.89877">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow4() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group43 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow4() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow4 />
    </div>
  );
}

function Group898() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">W-2</p>
    </div>
  );
}

function Group899() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow4 />
      <Group898 />
    </div>
  );
}

function Group888() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group899 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[4.905px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_1_2932)" id="icon">
          <g id="Vector"></g>
          <path d={svgPaths.p13225930} fill="var(--fill-0, #545E75)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2932">
            <rect fill="white" height="4.90483" width="4.90483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[1.226px] items-center relative shrink-0" data-name="content">
      <p className="css-x8g4vj font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-center tracking-[0.0613px] w-[29.122px]">All forms in more years</p>
      <Icon />
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19.006px] items-center justify-center px-[4.905px] py-[1.839px] relative rounded-[2.452px] shrink-0 w-[57.632px]" data-name="button" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(241, 241, 241) 100%)" }}>
      <Content />
      <div className="bg-[#232f33] h-0 shrink-0 w-[12.262px]" data-name="min-width" />
    </div>
  );
}

function Frame892() {
  return (
    <div className="content-center flex flex-wrap gap-[9.81px] items-center relative shrink-0 w-[193.128px]">
      <Group887 />
      <Group890 />
      <Group891 />
      <Group889 />
      <Group888 />
      <Button2 />
    </div>
  );
}

function Frame883() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame892 />
      <p className="css-welfzm font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
        <span>{`Have a lot of forms? `}</span>
        <span className="text-[#1199a3]">Select a sample file to import your forms</span>
      </p>
    </div>
  );
}

function Frame893() {
  return (
    <div className="absolute content-stretch flex gap-[14.714px] items-center left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]">
      <Frame883 />
    </div>
  );
}

function EfmfHomePageEmptyState() {
  return (
    <div className="absolute contents left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]" data-name="EFMF home page empty state">
      <Frame893 />
    </div>
  );
}

function EfmfHomeEmptyState() {
  return (
    <div className="absolute h-[276.816px] left-[-25.09px] top-[-13.83px] w-[463.2px]" data-name="EFMF home - empty state">
      <div className="absolute h-[276.816px] left-0 top-0 w-[463.2px]" data-name="Screenshot 2025-10-03 at 4.16.32 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251003At41632Pm1} />
      </div>
      <div className="absolute bg-white h-[76.331px] left-[138.1px] top-[107.56px] w-[209.068px]" />
      <EfmfHomePageEmptyState />
    </div>
  );
}

function PutScreenInHere2() {
  return (
    <div className="absolute bg-black inset-[53.33%_-37.67%_-28.33%_57.67%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <EfmfHomeEmptyState />
    </div>
  );
}

function PutScreenInHere3() {
  return (
    <div className="absolute bg-black inset-[53.33%_47.17%_-30.5%_29.06%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute bg-white h-[40.852px] left-0 top-0 w-[137.673px]" />
      <div className="absolute h-[297.542px] left-0 top-[7.4px] w-[137.673px]" data-name="Screenshot 2025-09-12 at 5.04.29 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.21%] left-[-1.02%] max-w-none top-[-0.95%] w-[102.73%]" src={imgScreenshot20250912At50429Pm1} />
        </div>
      </div>
    </div>
  );
}

function Group1766() {
  return (
    <div className="absolute contents left-[-0.81%] right-0 top-[149.25px]">
      <div className="absolute aspect-[240.295/180.133] flex items-center justify-center left-[45.31%] right-0 top-[149.25px]">
        <div className="flex-none h-[240.295px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.9%] left-[-1.37%] max-w-none top-[-1.02%] w-[102.73%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[428.46px] top-[318.13px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12.21875", "--transform-inner-height": "8.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white h-[8.363px] w-[12.223px]" />
        </div>
      </div>
      <div className="absolute aspect-[217.778/180.133] flex items-center justify-center left-[-0.81%] right-[51.24%] top-[149.25px]">
        <div className="flex-none h-[217.778px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.46 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.17%] left-[-1.37%] max-w-none top-[-5.17%] w-[104.69%]" src={imgScreenshot20251003At42546Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[10.9367/18.6567] flex items-center justify-center left-[97.22%] right-[0.29%] top-[304.62px]">
        <div className="flex-none h-[10.937px] rotate-[90deg] w-[18.657px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[2238.97%] left-[-878.72%] max-w-none top-[-22.52%] w-[991.92%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere4() {
  return (
    <div className="bg-black overflow-clip relative rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)] size-full" data-name="Put Screen In Here">
      <Group1766 />
    </div>
  );
}

function PrototypeReview() {
  return (
    <div className="bg-[#f0f5f9] h-[386px] overflow-clip relative rounded-[16px] shrink-0 w-[579px]" data-name="Prototype review">
      <img 
        src={imgPrototypeReview} 
        alt="Prototype review showing eFileMyForms interface" 
        className="absolute inset-0 size-full object-cover rounded-[16px]"
      />
    </div>
  );
}

function HomeCardEfmf() {
  return (
    <div className="bg-[#fffdf7] relative rounded-[8px] shrink-0 w-full" data-name="Home - card - EFMF">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[80px] items-center px-[62px] py-[56px] relative w-full">
          <DescriptionGroup />
          <PrototypeReview />
        </div>
      </div>
    </div>
  );
}

function Timestamp1() {
  return (
    <div className="content-stretch flex font-['Source_Sans_Pro:Regular',_sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Timestamp">
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">2024</p>
      <p className="css-26y08y relative shrink-0 text-[#999ea3]">-</p>
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">Current</p>
            <p className="css-26y08y relative shrink-0 text-[#999ea3]">•</p>
            <p className="css-hyguxj relative shrink-0 text-[#5c6166]">ReportMyUP Redesign</p>
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">B2B</p>
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Unclaimed Property</p>
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Design strategy</p>
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Growth</p>
    </div>
  );
}

function PillGroup1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Pill group">
      <Pill4 />
      <Pill5 />
      <Pill6 />
      <Pill7 />
    </div>
  );
}

function OpenTabDoodle() {
  return (
    <div className="h-[15.224px] relative shrink-0 w-[17.399px]" data-name="Open-tab-doodle">
      <div className="absolute inset-[-3.28%_-2.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
          <g id="Open-tab-doodle">
            <path d={svgNewTabPaths.p36bdb800} id="Vector 181" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            <path d={svgNewTabPaths.p3b378340} id="Vector 182" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            <path d={svgNewTabPaths.p5b008c0} id="Vector 184" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <a 
      href="https://reportmyup.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#09543d] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#09543d]/90 transition-colors" 
      data-name="Button"
    >
      <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.5px] whitespace-pre">View website</p>
      <OpenTabDoodle />
    </a>
  );
}

function DescriptionGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[437px]" data-name="Description group">
      <Timestamp1 />
      <p className="css-l3z3w9 font-['Sora:SemiBold',_sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#09543d] text-[32px] tracking-[-0.5px] w-[min-content]">Migrate enterprise users to a new self-serve product (and how we have pivoted)</p>
      <PillGroup1 />
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[18px] tracking-[-0.5px] w-[min-content]">Iterated cross-department pivot strategies within tight constraints and complex platform architecture to grow Unclaimed Property’s conversion.</p>
      <Button3 />
    </div>
  );
}

function PutScreenInHere5() {
  return (
    <div className="absolute bg-black inset-[-55%_76.61%_82.91%_-0.61%] overflow-clip rounded-[5.41px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute h-[300.932px] left-0 top-0 w-[138.96px]" data-name="Screenshot 2025-10-02 at 9.18.04 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.35%] left-[-1.59%] max-w-none top-[-0.44%] w-[104.78%]" src={imgScreenshot20251002At91804Pm1} />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="Background">
      <div className="absolute h-[251.267px] left-[-10.62px] top-[60.47px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.71%] left-0 max-w-none top-[-9.71%] w-[100.49%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
      <div className="absolute h-[251.222px] left-[-10.62px] top-[248.05px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.49%]" src={imgScreenshot20231015At16002} />
        </div>
      </div>
      <div className="absolute h-[116.443px] left-[279.53px] top-[215.19px] w-[118.695px]" data-name="Screenshot 2023-10-15 at 16.00 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.74%] left-[-244.44%] max-w-none top-[-130.62%] w-[390.24%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
    </div>
  );
}

function PaymentNameCorrection1() {
  return (
    <div className="absolute contents left-[294.97px] top-[239px]" data-name="Payment name correction">
      <div className="absolute bg-[#fafbfb] h-[5.79px] left-[294.97px] top-[239px] w-[12.545px]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[295.29px] not-italic text-[#565e73] text-[3.86px] text-nowrap top-[239.96px] tracking-[-0.0965px] whitespace-pre">Liu</p>
    </div>
  );
}

function Forms1() {
  return (
    <div className="absolute contents left-[35.19px] top-[121.59px]" data-name="Forms">
      <div className="absolute bg-white h-[41.173px] left-[38.92px] top-[311.69px] w-[252.83px]" />
      <div className="absolute h-[24.431px] left-[35.19px] top-[300.44px] w-[246.557px]" data-name="Screenshot 2025-09-21 at 6.45.19 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[976.32%] left-[-23.66%] max-w-none top-[-11.84%] w-[197.13%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <div className="absolute h-[189.783px] left-[46.96px] top-[121.59px] w-[231.6px]" data-name="Screenshot 2025-09-21 at 6.42.09 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.12%] left-[-30.28%] max-w-none top-[-52.24%] w-[210%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function QualifiedFormTooltip1() {
  return (
    <div className="absolute contents left-[60.15px] top-[259.58px]" data-name="qualified form tooltip">
      <div className="absolute bg-white h-[30.237px] left-[60.15px] opacity-30 rounded-[2.573px] shadow-[-0.482px_0.482px_0.643px_0px_rgba(0,0,0,0.5)] top-[262.48px] w-[112.583px]" />
      <div className="absolute h-[33.132px] left-[60.15px] rounded-bl-[2.573px] top-[259.58px] w-[113.87px]" data-name="Screenshot 2025-09-21 at 6.40.36 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.573px]">
          <img alt="" className="absolute h-[133.01%] left-[-3.67%] max-w-none top-[-16.5%] w-[106.78%]" src={imgScreenshot20250921At64036Pm1} />
        </div>
      </div>
    </div>
  );
}

function OrderReviewPage1() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="order review page">
      <Background1 />
      <PaymentNameCorrection1 />
      <Forms1 />
      <div className="absolute bg-[#fafbfb] h-[29.593px] left-[281.78px] top-[187.53px] w-[114.192px]" />
      <div className="absolute h-[27.663px] left-[285.96px] top-[188.5px] w-[106.15px]" data-name="Processing delayed message screenshot">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1050.47%] left-[-295.76%] max-w-none top-[-610.7%] w-[458.18%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
      <div className="absolute h-[35.383px] left-[284.35px] top-[252.83px] w-[109.045px]" data-name="Price correction">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[674.55%] left-[-286.58%] max-w-none top-[-14.55%] w-[446.02%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <QualifiedFormTooltip1 />
      <div className="absolute h-[48.572px] left-[285.96px] top-[138.96px] w-[102.933px]" data-name="rescheduled input group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[609.79%] left-[-312.01%] max-w-none top-[-244.48%] w-[482.87%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere6() {
  return (
    <div className="absolute bg-black inset-[-40.92%_-5.06%_55.58%_29.17%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <OrderReviewPage1 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1795d600} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.pd20f980} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p9606e80} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3075)" id="Ellipse 1">
                <path d={svgPaths.p55f100} fill="url(#paint0_linear_1_3075)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3075" width="7.66894" x="3.04099" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3075" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3075" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3075" x1="6.80074" x2="6.75886" y1="3.40487" y2="8.89909">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow5() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group45 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow5() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow5 />
    </div>
  );
}

function Group900() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-NEC</p>
    </div>
  );
}

function Group901() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow5 />
      <Group900 />
    </div>
  );
}

function Group902() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group901 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p35374c00} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2eeb0d40} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p26a0cb00} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2955)" id="Ellipse 1">
                <path d={svgPaths.p2526eb00} fill="url(#paint0_linear_1_2955)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2955" width="7.66894" x="3.04227" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2955" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2955" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2955" x1="6.80202" x2="6.76013" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6DAE3" />
              <stop offset="1" stopColor="#D56CEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow6() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group47 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow6() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow6 />
    </div>
  );
}

function Group903() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-C</p>
    </div>
  );
}

function Group904() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow6 />
      <Group903 />
    </div>
  );
}

function Group905() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group904 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.pd481910} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p781b740} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00818" x2="3.22225" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25678" x2="7.27731" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01563" x2="7.51988" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51824" x2="7.68463" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08995" x2="8.25634" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4195" x2="2.75133" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48924" x2="3.0306" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p2efeb200} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3032)" id="Ellipse 1">
                <path d={svgPaths.p3b11a400} fill="url(#paint0_linear_1_3032)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3032" width="7.66894" x="3.04208" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3032" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3032" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3032" x1="6.80183" x2="6.75994" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6F0FF" />
              <stop offset="1" stopColor="#63A5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow7() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group50 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow7() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow7 />
    </div>
  );
}

function Group906() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-B</p>
    </div>
  );
}

function Group907() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow7 />
      <Group906 />
    </div>
  );
}

function Group908() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group907 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1c3f6700} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p20a7b200} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p3ed9d500} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2936)" id="Ellipse 1">
                <path d={svgPaths.p997e670} fill="url(#paint0_linear_1_2936)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2936" width="7.66894" x="3.04099" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2936" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2936" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2936" x1="6.80074" x2="6.75886" y1="3.40455" y2="8.89877">
              <stop stopColor="#B0FAA8" />
              <stop offset="1" stopColor="#6EB57F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow8() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group53 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow8() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow8 />
    </div>
  );
}

function Group909() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-MISC</p>
    </div>
  );
}

function Group910() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow8 />
      <Group909 />
    </div>
  );
}

function Group911() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group910 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p3cd95940} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2cbb7500} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p165b3100} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3009)" id="Ellipse 1">
                <path d={svgPaths.p286a8480} fill="url(#paint0_linear_1_3009)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3009" width="7.66894" x="3.04227" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3009" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3009" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3009" x1="6.80202" x2="6.76013" y1="3.40455" y2="8.89877">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow9() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group56 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow9() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow9 />
    </div>
  );
}

function Group912() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">W-2</p>
    </div>
  );
}

function Group913() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow9 />
      <Group912 />
    </div>
  );
}

function Group914() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group913 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[4.905px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_1_2932)" id="icon">
          <g id="Vector"></g>
          <path d={svgPaths.p13225930} fill="var(--fill-0, #545E75)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2932">
            <rect fill="white" height="4.90483" width="4.90483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[1.226px] items-center relative shrink-0" data-name="content">
      <p className="css-x8g4vj font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-center tracking-[0.0613px] w-[29.122px]">All forms in more years</p>
      <Icon1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19.006px] items-center justify-center px-[4.905px] py-[1.839px] relative rounded-[2.452px] shrink-0 w-[57.632px]" data-name="button" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(241, 241, 241) 100%)" }}>
      <Content1 />
      <div className="bg-[#232f33] h-0 shrink-0 w-[12.262px]" data-name="min-width" />
    </div>
  );
}

function Frame894() {
  return (
    <div className="content-center flex flex-wrap gap-[9.81px] items-center relative shrink-0 w-[193.128px]">
      <Group902 />
      <Group905 />
      <Group908 />
      <Group911 />
      <Group914 />
      <Button4 />
    </div>
  );
}

function Frame884() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame894 />
      <p className="css-welfzm font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
        <span>{`Have a lot of forms? `}</span>
        <span className="text-[#1199a3]">Select a sample file to import your forms</span>
      </p>
    </div>
  );
}

function Frame895() {
  return (
    <div className="absolute content-stretch flex gap-[14.714px] items-center left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]">
      <Frame884 />
    </div>
  );
}

function EfmfHomePageEmptyState1() {
  return (
    <div className="absolute contents left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]" data-name="EFMF home page empty state">
      <Frame895 />
    </div>
  );
}

function EfmfHomeEmptyState1() {
  return (
    <div className="absolute h-[276.816px] left-[-25.09px] top-[-13.83px] w-[463.2px]" data-name="EFMF home - empty state">
      <div className="absolute h-[276.816px] left-0 top-0 w-[463.2px]" data-name="Screenshot 2025-10-03 at 4.16.32 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251003At41632Pm1} />
      </div>
      <div className="absolute bg-white h-[76.331px] left-[138.1px] top-[107.56px] w-[209.068px]" />
      <EfmfHomePageEmptyState1 />
    </div>
  );
}

function PutScreenInHere7() {
  return (
    <div className="absolute bg-black inset-[53.33%_-37.67%_-28.33%_57.67%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <EfmfHomeEmptyState1 />
    </div>
  );
}

function PutScreenInHere8() {
  return (
    <div className="absolute bg-black inset-[53.33%_47.17%_-30.5%_29.06%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute bg-white h-[40.852px] left-0 top-0 w-[137.673px]" />
      <div className="absolute h-[297.542px] left-0 top-[7.4px] w-[137.673px]" data-name="Screenshot 2025-09-12 at 5.04.29 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.21%] left-[-1.02%] max-w-none top-[-0.95%] w-[102.73%]" src={imgScreenshot20250912At50429Pm1} />
        </div>
      </div>
    </div>
  );
}

function Group1767() {
  return (
    <div className="absolute contents left-[-0.81%] right-0 top-[149.25px]">
      <div className="absolute aspect-[240.295/180.133] flex items-center justify-center left-[45.31%] right-0 top-[149.25px]">
        <div className="flex-none h-[240.295px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.9%] left-[-1.37%] max-w-none top-[-1.02%] w-[102.73%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[428.46px] top-[318.13px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12.21875", "--transform-inner-height": "8.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white h-[8.363px] w-[12.223px]" />
        </div>
      </div>
      <div className="absolute aspect-[217.778/180.133] flex items-center justify-center left-[-0.81%] right-[51.24%] top-[149.25px]">
        <div className="flex-none h-[217.778px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.46 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.17%] left-[-1.37%] max-w-none top-[-5.17%] w-[104.69%]" src={imgScreenshot20251003At42546Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[10.9367/18.6567] flex items-center justify-center left-[97.22%] right-[0.29%] top-[304.62px]">
        <div className="flex-none h-[10.937px] rotate-[90deg] w-[18.657px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[2238.97%] left-[-878.72%] max-w-none top-[-22.52%] w-[991.92%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere9() {
  return (
    <div className="bg-black overflow-clip relative rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)] size-full" data-name="Put Screen In Here">
      <Group1767 />
    </div>
  );
}

function PrototypeReview1() {
  return (
    <div className="bg-[#f0f5f9] h-[386px] overflow-clip relative rounded-[16px] shrink-0 w-[579px]" data-name="Prototype review">
      <img 
        src={imgPrototypeReview1} 
        alt="Unclaimed Property prototype review showing interface screens" 
        className="absolute inset-0 size-full object-cover rounded-[16px]"
      />
    </div>
  );
}

function HomeCardUp() {
  return (
    <div className="bg-[#fffdf7] box-border content-stretch flex gap-[80px] items-center px-[62px] py-[56px] relative rounded-[8px] shrink-0" data-name="Home - card - UP">
      <DescriptionGroup1 />
      <PrototypeReview1 />
    </div>
  );
}

function Timestamp2() {
  return (
    <div className="content-stretch flex font-['Source_Sans_Pro:Regular',_sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Timestamp">
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">2025</p>
      <p className="css-26y08y relative shrink-0 text-[#999ea3]">-</p>
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">Current</p>
                  <p className="css-26y08y relative shrink-0 text-[#999ea3]">•</p>
            <p className="css-hyguxj relative shrink-0 text-[#5c6166]">Sovos Intelligence Vision</p>
    </div>
  );
}

function Pill8() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">B2B</p>
    </div>
  );
}

function Pill9() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">AI</p>
    </div>
  );
}

function Pill10() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Vision strategy</p>
    </div>
  );
}

function Pill11() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Large data</p>
    </div>
  );
}

function PillGroup2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Pill group">
      <Pill8 />
      <Pill9 />
      <Pill10 />
      <Pill11 />
    </div>
  );
}

function Button5() {
  return (
    <a href="mailto:danliudesigner@gmail.com?subject=Beep-boop, request from Dan’s website!&body=Hello, this is {name}. %0D%0 I’d love to learn about the Sovos Intelligence project when it’s ready."
      className="bg-[#FFA9EB] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[50px] shrink-0" data-name="Button">
      <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-[#451E0E] tracking-[-0.5px] whitespace-pre">Email me when available</p>
    </a>
  );
}

function DescriptionGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[437px]" data-name="Description group">
      <Timestamp2 />
      <p className="css-l3z3w9 font-['Sora:SemiBold',_sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#09543d] text-[32px] tracking-[-0.5px] w-[min-content]">Transform a taxing compliance obligation to an advantage for businesses to uncover personalized insights</p>
      <PillGroup2 />
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[18px] tracking-[-0.5px] w-[min-content]">{`Design Sovos’ 1st AI product, Sovos Intelligence, to expand service offerings to help businesses grow in unprecedented speeds and privacy in mind. `}</p>
      <Button5 />
    </div>
  );
}

function PutScreenInHere10() {
  return (
    <div className="absolute bg-black inset-[-55%_76.61%_82.91%_-0.61%] overflow-clip rounded-[5.41px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute h-[300.932px] left-0 top-0 w-[138.96px]" data-name="Screenshot 2025-10-02 at 9.18.04 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.35%] left-[-1.59%] max-w-none top-[-0.44%] w-[104.78%]" src={imgScreenshot20251002At91804Pm1} />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="Background">
      <div className="absolute h-[251.267px] left-[-10.62px] top-[60.47px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.71%] left-0 max-w-none top-[-9.71%] w-[100.49%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
      <div className="absolute h-[251.222px] left-[-10.62px] top-[248.05px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.49%]" src={imgScreenshot20231015At16002} />
        </div>
      </div>
      <div className="absolute h-[116.443px] left-[279.53px] top-[215.19px] w-[118.695px]" data-name="Screenshot 2023-10-15 at 16.00 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.74%] left-[-244.44%] max-w-none top-[-130.62%] w-[390.24%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
    </div>
  );
}

function PaymentNameCorrection2() {
  return (
    <div className="absolute contents left-[294.97px] top-[239px]" data-name="Payment name correction">
      <div className="absolute bg-[#fafbfb] h-[5.79px] left-[294.97px] top-[239px] w-[12.545px]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[295.29px] not-italic text-[#565e73] text-[3.86px] text-nowrap top-[239.96px] tracking-[-0.0965px] whitespace-pre">Liu</p>
    </div>
  );
}

function Forms2() {
  return (
    <div className="absolute contents left-[35.19px] top-[121.59px]" data-name="Forms">
      <div className="absolute bg-white h-[41.173px] left-[38.92px] top-[311.69px] w-[252.83px]" />
      <div className="absolute h-[24.431px] left-[35.19px] top-[300.44px] w-[246.557px]" data-name="Screenshot 2025-09-21 at 6.45.19 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[976.32%] left-[-23.66%] max-w-none top-[-11.84%] w-[197.13%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <div className="absolute h-[189.783px] left-[46.96px] top-[121.59px] w-[231.6px]" data-name="Screenshot 2025-09-21 at 6.42.09 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.12%] left-[-30.28%] max-w-none top-[-52.24%] w-[210%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function QualifiedFormTooltip2() {
  return (
    <div className="absolute contents left-[60.15px] top-[259.58px]" data-name="qualified form tooltip">
      <div className="absolute bg-white h-[30.237px] left-[60.15px] opacity-30 rounded-[2.573px] shadow-[-0.482px_0.482px_0.643px_0px_rgba(0,0,0,0.5)] top-[262.48px] w-[112.583px]" />
      <div className="absolute h-[33.132px] left-[60.15px] rounded-bl-[2.573px] top-[259.58px] w-[113.87px]" data-name="Screenshot 2025-09-21 at 6.40.36 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.573px]">
          <img alt="" className="absolute h-[133.01%] left-[-3.67%] max-w-none top-[-16.5%] w-[106.78%]" src={imgScreenshot20250921At64036Pm1} />
        </div>
      </div>
    </div>
  );
}

function OrderReviewPage2() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="order review page">
      <Background2 />
      <PaymentNameCorrection2 />
      <Forms2 />
      <div className="absolute bg-[#fafbfb] h-[29.593px] left-[281.78px] top-[187.53px] w-[114.192px]" />
      <div className="absolute h-[27.663px] left-[285.96px] top-[188.5px] w-[106.15px]" data-name="Processing delayed message screenshot">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1050.47%] left-[-295.76%] max-w-none top-[-610.7%] w-[458.18%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
      <div className="absolute h-[35.383px] left-[284.35px] top-[252.83px] w-[109.045px]" data-name="Price correction">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[674.55%] left-[-286.58%] max-w-none top-[-14.55%] w-[446.02%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <QualifiedFormTooltip2 />
      <div className="absolute h-[48.572px] left-[285.96px] top-[138.96px] w-[102.933px]" data-name="rescheduled input group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[609.79%] left-[-312.01%] max-w-none top-[-244.48%] w-[482.87%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere11() {
  return (
    <div className="absolute bg-black inset-[-40.92%_-5.06%_55.58%_29.17%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <OrderReviewPage2 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1795d600} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.pd20f980} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p9606e80} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3075)" id="Ellipse 1">
                <path d={svgPaths.p55f100} fill="url(#paint0_linear_1_3075)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3075" width="7.66894" x="3.04099" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3075" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3075" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3075" x1="6.80074" x2="6.75886" y1="3.40487" y2="8.89909">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow10() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group59 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow10() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow10 />
    </div>
  );
}

function Group915() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-NEC</p>
    </div>
  );
}

function Group916() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow10 />
      <Group915 />
    </div>
  );
}

function Group917() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group916 />
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p35374c00} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2eeb0d40} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p26a0cb00} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2955)" id="Ellipse 1">
                <path d={svgPaths.p2526eb00} fill="url(#paint0_linear_1_2955)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2955" width="7.66894" x="3.04227" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2955" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2955" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2955" x1="6.80202" x2="6.76013" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6DAE3" />
              <stop offset="1" stopColor="#D56CEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow11() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group62 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow11() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow11 />
    </div>
  );
}

function Group918() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-C</p>
    </div>
  );
}

function Group919() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow11 />
      <Group918 />
    </div>
  );
}

function Group920() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group919 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.pd481910} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p781b740} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00818" x2="3.22225" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25678" x2="7.27731" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01563" x2="7.51988" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51824" x2="7.68463" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08995" x2="8.25634" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4195" x2="2.75133" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48924" x2="3.0306" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p2efeb200} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3032)" id="Ellipse 1">
                <path d={svgPaths.p3b11a400} fill="url(#paint0_linear_1_3032)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3032" width="7.66894" x="3.04208" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3032" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3032" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3032" x1="6.80183" x2="6.75994" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6F0FF" />
              <stop offset="1" stopColor="#63A5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow12() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group65 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow12() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow12 />
    </div>
  );
}

function Group921() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-B</p>
    </div>
  );
}

function Group922() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow12 />
      <Group921 />
    </div>
  );
}

function Group923() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group922 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1c3f6700} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p20a7b200} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p3ed9d500} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2936)" id="Ellipse 1">
                <path d={svgPaths.p997e670} fill="url(#paint0_linear_1_2936)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2936" width="7.66894" x="3.04099" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2936" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2936" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2936" x1="6.80074" x2="6.75886" y1="3.40455" y2="8.89877">
              <stop stopColor="#B0FAA8" />
              <stop offset="1" stopColor="#6EB57F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow13() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group68 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow13() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow13 />
    </div>
  );
}

function Group924() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-MISC</p>
    </div>
  );
}

function Group925() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow13 />
      <Group924 />
    </div>
  );
}

function Group926() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group925 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p3cd95940} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2cbb7500} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p165b3100} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3009)" id="Ellipse 1">
                <path d={svgPaths.p286a8480} fill="url(#paint0_linear_1_3009)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3009" width="7.66894" x="3.04227" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3009" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3009" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3009" x1="6.80202" x2="6.76013" y1="3.40455" y2="8.89877">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow14() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group71 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow14() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow14 />
    </div>
  );
}

function Group927() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">W-2</p>
    </div>
  );
}

function Group928() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow14 />
      <Group927 />
    </div>
  );
}

function Group929() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group928 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[4.905px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_1_2932)" id="icon">
          <g id="Vector"></g>
          <path d={svgPaths.p13225930} fill="var(--fill-0, #545E75)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2932">
            <rect fill="white" height="4.90483" width="4.90483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[1.226px] items-center relative shrink-0" data-name="content">
      <p className="css-x8g4vj font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-center tracking-[0.0613px] w-[29.122px]">All forms in more years</p>
      <Icon2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19.006px] items-center justify-center px-[4.905px] py-[1.839px] relative rounded-[2.452px] shrink-0 w-[57.632px]" data-name="button" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(241, 241, 241) 100%)" }}>
      <Content2 />
      <div className="bg-[#232f33] h-0 shrink-0 w-[12.262px]" data-name="min-width" />
    </div>
  );
}

function Frame896() {
  return (
    <div className="content-center flex flex-wrap gap-[9.81px] items-center relative shrink-0 w-[193.128px]">
      <Group917 />
      <Group920 />
      <Group923 />
      <Group926 />
      <Group929 />
      <Button6 />
    </div>
  );
}

function Frame885() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame896 />
      <p className="css-welfzm font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
        <span>{`Have a lot of forms? `}</span>
        <span className="text-[#1199a3]">Select a sample file to import your forms</span>
      </p>
    </div>
  );
}

function Frame897() {
  return (
    <div className="absolute content-stretch flex gap-[14.714px] items-center left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]">
      <Frame885 />
    </div>
  );
}

function EfmfHomePageEmptyState2() {
  return (
    <div className="absolute contents left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]" data-name="EFMF home page empty state">
      <Frame897 />
    </div>
  );
}

function EfmfHomeEmptyState2() {
  return (
    <div className="absolute h-[276.816px] left-[-25.09px] top-[-13.83px] w-[463.2px]" data-name="EFMF home - empty state">
      <div className="absolute h-[276.816px] left-0 top-0 w-[463.2px]" data-name="Screenshot 2025-10-03 at 4.16.32 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251003At41632Pm1} />
      </div>
      <div className="absolute bg-white h-[76.331px] left-[138.1px] top-[107.56px] w-[209.068px]" />
      <EfmfHomePageEmptyState2 />
    </div>
  );
}

function PutScreenInHere12() {
  return (
    <div className="absolute bg-black inset-[53.33%_-37.67%_-28.33%_57.67%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <EfmfHomeEmptyState2 />
    </div>
  );
}

function PutScreenInHere13() {
  return (
    <div className="absolute bg-black inset-[53.33%_47.17%_-30.5%_29.06%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute bg-white h-[40.852px] left-0 top-0 w-[137.673px]" />
      <div className="absolute h-[297.542px] left-0 top-[7.4px] w-[137.673px]" data-name="Screenshot 2025-09-12 at 5.04.29 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.21%] left-[-1.02%] max-w-none top-[-0.95%] w-[102.73%]" src={imgScreenshot20250912At50429Pm1} />
        </div>
      </div>
    </div>
  );
}

function Group1768() {
  return (
    <div className="absolute contents left-[-0.81%] right-0 top-[149.25px]">
      <div className="absolute aspect-[240.295/180.133] flex items-center justify-center left-[45.31%] right-0 top-[149.25px]">
        <div className="flex-none h-[240.295px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.9%] left-[-1.37%] max-w-none top-[-1.02%] w-[102.73%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[428.46px] top-[318.13px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12.21875", "--transform-inner-height": "8.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white h-[8.363px] w-[12.223px]" />
        </div>
      </div>
      <div className="absolute aspect-[217.778/180.133] flex items-center justify-center left-[-0.81%] right-[51.24%] top-[149.25px]">
        <div className="flex-none h-[217.778px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.46 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.17%] left-[-1.37%] max-w-none top-[-5.17%] w-[104.69%]" src={imgScreenshot20251003At42546Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[10.9367/18.6567] flex items-center justify-center left-[97.22%] right-[0.29%] top-[304.62px]">
        <div className="flex-none h-[10.937px] rotate-[90deg] w-[18.657px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[2238.97%] left-[-878.72%] max-w-none top-[-22.52%] w-[991.92%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere14() {
  return (
    <div className="bg-black overflow-clip relative rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)] size-full" data-name="Put Screen In Here">
      <Group1768 />
    </div>
  );
}

function PrototypeReview2() {
  return (
    <div className="bg-[#f0f5f9] h-[386px] overflow-clip relative rounded-[16px] shrink-0 w-[579px]" data-name="Prototype review">
      <img 
        src={imgPrototypeReview2} 
        alt="Woman working on MacBook Pro showing Sovos Intelligence interface" 
        className="absolute inset-0 size-full object-cover rounded-[16px]"
      />
    </div>
  );
}

function HomeCardUp1() {
  return (
    <div className="bg-[#fffdf7] relative rounded-[8px] shrink-0 w-full" data-name="Home - card - UP">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[80px] items-center px-[62px] py-[56px] relative w-full">
          <DescriptionGroup2 />
          <PrototypeReview2 />
        </div>
      </div>
    </div>
  );
}

function Timestamp3() {
  return (
    <div className="content-stretch flex font-['Source_Sans_Pro:Regular',_sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Timestamp">
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">2025</p>
      <p className="css-26y08y relative shrink-0 text-[#999ea3]">-</p>
      <p className="css-hyguxj relative shrink-0 text-[#5c6166]">Current</p>
    </div>
  );
}

function Pill12() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">B2B</p>
    </div>
  );
}

function Pill13() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Statutory Report</p>
    </div>
  );
}

function Pill14() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Design strategy</p>
    </div>
  );
}

function Pill15() {
  return (
    <div className="bg-[#ffa9eb] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <p className="css-l4h1oz font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#451e0e] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">Retention</p>
    </div>
  );
}

function PillGroup3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Pill group">
      <Pill12 />
      <Pill13 />
      <Pill14 />
      <Pill15 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#09543d] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[50px] shrink-0" data-name="Button">
      <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.5px] whitespace-pre">Email me when available</p>
    </div>
  );
}

function DescriptionGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[437px]" data-name="Description group">
      <Timestamp3 />
      <p className="css-l3z3w9 font-['Sora:SemiBold',_sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#09543d] text-[32px] tracking-[-0.5px] w-[min-content]">Save statements prepares money and time....</p>
      <PillGroup3 />
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#09543d] text-[18px] tracking-[-0.5px] w-[min-content]">A pivotal research and design project to support Sovos’ FY26 top initiative by automating their desired outputs and saving individual preparers 10+ hours while working against overwhelming deadlines. An pivotal project to solve Sovos’ most urgent retention project.</p>
      <Button7 />
    </div>
  );
}

function PutScreenInHere15() {
  return (
    <div className="absolute bg-black inset-[-55%_76.61%_82.91%_-0.61%] overflow-clip rounded-[5.41px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute h-[300.932px] left-0 top-0 w-[138.96px]" data-name="Screenshot 2025-10-02 at 9.18.04 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.35%] left-[-1.59%] max-w-none top-[-0.44%] w-[104.78%]" src={imgScreenshot20251002At91804Pm1} />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="Background">
      <div className="absolute h-[251.267px] left-[-10.62px] top-[60.47px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.71%] left-0 max-w-none top-[-9.71%] w-[100.49%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
      <div className="absolute h-[251.222px] left-[-10.62px] top-[248.05px] w-[460.948px]" data-name="Screenshot 2023-10-15 at 16.00 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.49%]" src={imgScreenshot20231015At16002} />
        </div>
      </div>
      <div className="absolute h-[116.443px] left-[279.53px] top-[215.19px] w-[118.695px]" data-name="Screenshot 2023-10-15 at 16.00 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.74%] left-[-244.44%] max-w-none top-[-130.62%] w-[390.24%]" src={imgScreenshot20231015At16001} />
        </div>
      </div>
    </div>
  );
}

function PaymentNameCorrection3() {
  return (
    <div className="absolute contents left-[294.97px] top-[239px]" data-name="Payment name correction">
      <div className="absolute bg-[#fafbfb] h-[5.79px] left-[294.97px] top-[239px] w-[12.545px]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[295.29px] not-italic text-[#565e73] text-[3.86px] text-nowrap top-[239.96px] tracking-[-0.0965px] whitespace-pre">Liu</p>
    </div>
  );
}

function Forms3() {
  return (
    <div className="absolute contents left-[35.19px] top-[121.59px]" data-name="Forms">
      <div className="absolute bg-white h-[41.173px] left-[38.92px] top-[311.69px] w-[252.83px]" />
      <div className="absolute h-[24.431px] left-[35.19px] top-[300.44px] w-[246.557px]" data-name="Screenshot 2025-09-21 at 6.45.19 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[976.32%] left-[-23.66%] max-w-none top-[-11.84%] w-[197.13%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <div className="absolute h-[189.783px] left-[46.96px] top-[121.59px] w-[231.6px]" data-name="Screenshot 2025-09-21 at 6.42.09 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.12%] left-[-30.28%] max-w-none top-[-52.24%] w-[210%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function QualifiedFormTooltip3() {
  return (
    <div className="absolute contents left-[60.15px] top-[259.58px]" data-name="qualified form tooltip">
      <div className="absolute bg-white h-[30.237px] left-[60.15px] opacity-30 rounded-[2.573px] shadow-[-0.482px_0.482px_0.643px_0px_rgba(0,0,0,0.5)] top-[262.48px] w-[112.583px]" />
      <div className="absolute h-[33.132px] left-[60.15px] rounded-bl-[2.573px] top-[259.58px] w-[113.87px]" data-name="Screenshot 2025-09-21 at 6.40.36 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.573px]">
          <img alt="" className="absolute h-[133.01%] left-[-3.67%] max-w-none top-[-16.5%] w-[106.78%]" src={imgScreenshot20250921At64036Pm1} />
        </div>
      </div>
    </div>
  );
}

function OrderReviewPage3() {
  return (
    <div className="absolute contents left-[-10.62px] top-[60.47px]" data-name="order review page">
      <Background3 />
      <PaymentNameCorrection3 />
      <Forms3 />
      <div className="absolute bg-[#fafbfb] h-[29.593px] left-[281.78px] top-[187.53px] w-[114.192px]" />
      <div className="absolute h-[27.663px] left-[285.96px] top-[188.5px] w-[106.15px]" data-name="Processing delayed message screenshot">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1050.47%] left-[-295.76%] max-w-none top-[-610.7%] w-[458.18%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
      <div className="absolute h-[35.383px] left-[284.35px] top-[252.83px] w-[109.045px]" data-name="Price correction">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[674.55%] left-[-286.58%] max-w-none top-[-14.55%] w-[446.02%]" src={imgScreenshot20250921At64519Pm2} />
        </div>
      </div>
      <QualifiedFormTooltip3 />
      <div className="absolute h-[48.572px] left-[285.96px] top-[138.96px] w-[102.933px]" data-name="rescheduled input group">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[609.79%] left-[-312.01%] max-w-none top-[-244.48%] w-[482.87%]" src={imgScreenshot20250921At64209Pm3} />
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere16() {
  return (
    <div className="absolute bg-black inset-[-40.92%_-5.06%_55.58%_29.17%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <OrderReviewPage3 />
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1795d600} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.pd20f980} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p9606e80} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3075)" id="Ellipse 1">
                <path d={svgPaths.p55f100} fill="url(#paint0_linear_1_3075)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3075" width="7.66894" x="3.04099" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3075" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3075" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3075" x1="6.80074" x2="6.75886" y1="3.40487" y2="8.89909">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow15() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group74 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow15() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow15 />
    </div>
  );
}

function Group930() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-NEC</p>
    </div>
  );
}

function Group931() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow15 />
      <Group930 />
    </div>
  );
}

function Group932() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group931 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p35374c00} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2eeb0d40} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p26a0cb00} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2955)" id="Ellipse 1">
                <path d={svgPaths.p2526eb00} fill="url(#paint0_linear_1_2955)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2955" width="7.66894" x="3.04227" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2955" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2955" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2955" x1="6.80202" x2="6.76013" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6DAE3" />
              <stop offset="1" stopColor="#D56CEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow16() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group77 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow16() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow16 />
    </div>
  );
}

function Group933() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-C</p>
    </div>
  );
}

function Group934() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow16 />
      <Group933 />
    </div>
  );
}

function Group935() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group934 />
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.pd481910} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p781b740} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00818" x2="3.22225" y1="1.46943" y2="1.46944" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25678" x2="7.27731" y1="8.71384" y2="8.71384" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01563" x2="7.51988" y1="7.96748" y2="7.96748" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51824" x2="7.68463" y1="7.22111" y2="7.22111" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08995" x2="8.25634" y1="1.46943" y2="1.46943" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4195" x2="2.75133" y1="7.03954" y2="7.03954" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48924" x2="3.0306" y1="6.29255" y2="6.29255" />
                <path clipRule="evenodd" d={svgPaths.p2efeb200} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3032)" id="Ellipse 1">
                <path d={svgPaths.p3b11a400} fill="url(#paint0_linear_1_3032)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3032" width="7.66894" x="3.04208" y="3.21494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3032" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3032" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3032" x1="6.80183" x2="6.75994" y1="3.40487" y2="8.89909">
              <stop stopColor="#E6F0FF" />
              <stop offset="1" stopColor="#63A5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow17() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group80 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow17() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow17 />
    </div>
  );
}

function Group936() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1095-B</p>
    </div>
  );
}

function Group937() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow17 />
      <Group936 />
    </div>
  );
}

function Group938() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group937 />
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute h-[10.193px] left-[1.39px] top-[1.03px] w-[10.095px]">
      <div className="absolute bottom-[-6.77%] left-[-0.01%] right-[-6.09%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p1c3f6700} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p20a7b200} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00728" x2="3.22135" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25589" x2="7.27641" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01474" x2="7.51898" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51734" x2="7.68373" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.08905" x2="8.25544" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.4186" x2="2.75043" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48834" x2="3.0297" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p3ed9d500} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_2936)" id="Ellipse 1">
                <path d={svgPaths.p997e670} fill="url(#paint0_linear_1_2936)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_2936" width="7.66894" x="3.04099" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2936" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2936" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2936" x1="6.80074" x2="6.75886" y1="3.40455" y2="8.89877">
              <stop stopColor="#B0FAA8" />
              <stop offset="1" stopColor="#6EB57F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow18() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group83 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow18() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow18 />
    </div>
  );
}

function Group939() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.715px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">1099-MISC</p>
    </div>
  );
}

function Group940() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow18 />
      <Group939 />
    </div>
  );
}

function Group941() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group940 />
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute h-[10.193px] left-[1.38px] top-[1.03px] w-[10.099px]">
      <div className="absolute bottom-[-6.77%] left-0 right-[-6.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Group 10">
            <path d={svgPaths.p3cd95940} fill="var(--fill-0, white)" id="Rectangle 8" />
            <g id="Group 9">
              <g id="Group 2">
                <path d={svgPaths.p2cbb7500} id="Line 60" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" />
                <line id="Line 61" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="2.00846" x2="3.22253" y1="1.4696" y2="1.4696" />
                <line id="Line 62" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.25707" x2="7.2776" y1="8.71401" y2="8.71401" />
                <line id="Line 63" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.01592" x2="7.52016" y1="7.96764" y2="7.96764" />
                <line id="Line 64" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="5.51852" x2="7.68491" y1="7.22064" y2="7.22064" />
                <line id="Line 67" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="6.09023" x2="8.25662" y1="1.4696" y2="1.4696" />
                <line id="Line 65" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.41978" x2="2.75162" y1="7.03908" y2="7.03908" />
                <line id="Line 66" stroke="var(--stroke-0, #023C40)" strokeLinecap="round" strokeWidth="0.286425" x1="1.48952" x2="3.03088" y1="6.29271" y2="6.29271" />
                <path clipRule="evenodd" d={svgPaths.p165b3100} fill="var(--fill-0, #023C40)" fillRule="evenodd" id="Document BG" />
              </g>
              <g filter="url(#filter0_d_1_3009)" id="Ellipse 1">
                <path d={svgPaths.p286a8480} fill="url(#paint0_linear_1_3009)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.66894" id="filter0_d_1_3009" width="7.66894" x="3.04227" y="3.21463">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.306552" dy="0.613104" />
              <feGaussianBlur stdDeviation="0.459828" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3009" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3009" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3009" x1="6.80202" x2="6.76013" y1="3.40455" y2="8.89877">
              <stop stopColor="#F5FD9E" />
              <stop offset="1" stopColor="#FCC330" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilingIconYellow19() {
  return (
    <div className="absolute left-0 size-[12.262px] top-[0.13px]" data-name="filingIcon-yellow">
      <Group86 />
      <div className="absolute bg-[#023235] h-[3.882px] left-[8.2px] rounded-[7.326px] top-[5.53px] w-[0.739px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6.63px] top-[7.1px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0.734375", "--transform-inner-height": "3.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#023235] h-[3.882px] rounded-[7.326px] w-[0.735px]" />
        </div>
      </div>
    </div>
  );
}

function FormIconYellow19() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 overflow-clip relative size-[12.262px]" data-name="formIcon-yellow">
      <FilingIconYellow19 />
    </div>
  );
}

function Group942() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[6.131px] ml-[14.714px] mt-0 not-italic place-items-start relative text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
      <p className="[grid-area:1_/_1] css-welfzm font-['Inter:Regular',_sans-serif] font-normal ml-0 mt-[6.744px] relative text-[#545e75]">2023</p>
      <p className="[grid-area:1_/_1] css-a5r8ul font-['Inter:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#023c40]">W-2</p>
    </div>
  );
}

function Group943() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.066px] mt-[3.065px] place-items-start relative">
      <FormIconYellow19 />
      <Group942 />
    </div>
  );
}

function Group944() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[19.006px] ml-0 mt-0 rounded-[0.92px] shadow-[0.613px_0.613px_2.452px_0.307px_rgba(204,204,204,0.6),0.613px_0.613px_2.452px_0.307px_rgba(221,221,221,0.6)] w-[57.632px]" />
      <Group943 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[4.905px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_1_2932)" id="icon">
          <g id="Vector"></g>
          <path d={svgPaths.p13225930} fill="var(--fill-0, #545E75)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2932">
            <rect fill="white" height="4.90483" width="4.90483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[1.226px] items-center relative shrink-0" data-name="content">
      <p className="css-x8g4vj font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-center tracking-[0.0613px] w-[29.122px]">All forms in more years</p>
      <Icon3 />
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19.006px] items-center justify-center px-[4.905px] py-[1.839px] relative rounded-[2.452px] shrink-0 w-[57.632px]" data-name="button" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(241, 241, 241) 100%)" }}>
      <Content3 />
      <div className="bg-[#232f33] h-0 shrink-0 w-[12.262px]" data-name="min-width" />
    </div>
  );
}

function Frame898() {
  return (
    <div className="content-center flex flex-wrap gap-[9.81px] items-center relative shrink-0 w-[193.128px]">
      <Group932 />
      <Group935 />
      <Group938 />
      <Group941 />
      <Group944 />
      <Button8 />
    </div>
  );
}

function Frame886() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame898 />
      <p className="css-welfzm font-['Inter:Regular',_sans-serif] font-normal leading-[6.131px] not-italic relative shrink-0 text-[#545e75] text-[4.292px] text-nowrap tracking-[-0.0307px] whitespace-pre">
        <span>{`Have a lot of forms? `}</span>
        <span className="text-[#1199a3]">Select a sample file to import your forms</span>
      </p>
    </div>
  );
}

function Frame899() {
  return (
    <div className="absolute content-stretch flex gap-[14.714px] items-center left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]">
      <Frame886 />
    </div>
  );
}

function EfmfHomePageEmptyState3() {
  return (
    <div className="absolute contents left-[calc(50%+10.575px)] top-[111.89px] translate-x-[-50%]" data-name="EFMF home page empty state">
      <Frame899 />
    </div>
  );
}

function EfmfHomeEmptyState3() {
  return (
    <div className="absolute h-[276.816px] left-[-25.09px] top-[-13.83px] w-[463.2px]" data-name="EFMF home - empty state">
      <div className="absolute h-[276.816px] left-0 top-0 w-[463.2px]" data-name="Screenshot 2025-10-03 at 4.16.32 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251003At41632Pm1} />
      </div>
      <div className="absolute bg-white h-[76.331px] left-[138.1px] top-[107.56px] w-[209.068px]" />
      <EfmfHomePageEmptyState3 />
    </div>
  );
}

function PutScreenInHere17() {
  return (
    <div className="absolute bg-black inset-[53.33%_-37.67%_-28.33%_57.67%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <EfmfHomeEmptyState3 />
    </div>
  );
}

function PutScreenInHere18() {
  return (
    <div className="absolute bg-black inset-[53.33%_47.17%_-30.5%_29.06%] overflow-clip rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)]" data-name="Put Screen In Here">
      <div className="absolute bg-white h-[40.852px] left-0 top-0 w-[137.673px]" />
      <div className="absolute h-[297.542px] left-0 top-[7.4px] w-[137.673px]" data-name="Screenshot 2025-09-12 at 5.04.29 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.21%] left-[-1.02%] max-w-none top-[-0.95%] w-[102.73%]" src={imgScreenshot20250912At50429Pm1} />
        </div>
      </div>
    </div>
  );
}

function Group1769() {
  return (
    <div className="absolute contents left-[-0.81%] right-0 top-[149.25px]">
      <div className="absolute aspect-[240.295/180.133] flex items-center justify-center left-[45.31%] right-0 top-[149.25px]">
        <div className="flex-none h-[240.295px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.9%] left-[-1.37%] max-w-none top-[-1.02%] w-[102.73%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[428.46px] top-[318.13px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12.21875", "--transform-inner-height": "8.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white h-[8.363px] w-[12.223px]" />
        </div>
      </div>
      <div className="absolute aspect-[217.778/180.133] flex items-center justify-center left-[-0.81%] right-[51.24%] top-[149.25px]">
        <div className="flex-none h-[217.778px] rotate-[90deg] w-[180.133px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.46 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.17%] left-[-1.37%] max-w-none top-[-5.17%] w-[104.69%]" src={imgScreenshot20251003At42546Pm1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[10.9367/18.6567] flex items-center justify-center left-[97.22%] right-[0.29%] top-[304.62px]">
        <div className="flex-none h-[10.937px] rotate-[90deg] w-[18.657px]">
          <div className="relative size-full" data-name="Screenshot 2025-10-03 at 4.25.32 PM 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[2238.97%] left-[-878.72%] max-w-none top-[-22.52%] w-[991.92%]" src={imgScreenshot20251003At42532Pm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PutScreenInHere19() {
  return (
    <div className="bg-black overflow-clip relative rounded-[5.147px] shadow-[-0.643px_-0.965px_6.433px_0.965px_rgba(0,0,0,0.1),1.93px_1.93px_2.573px_0px_rgba(0,0,0,0.24)] size-full" data-name="Put Screen In Here">
      <Group1769 />
    </div>
  );
}

function PrototypeReview3() {
  return (
    <div className="bg-[#f0f5f9] h-[386px] overflow-clip relative rounded-[16px] shrink-0 w-[579px]" data-name="Prototype review">
      <PutScreenInHere15 />
      <PutScreenInHere16 />
      <PutScreenInHere17 />
      <PutScreenInHere18 />
      <div className="absolute flex inset-[25.42%_76.61%_-39.25%_-33.5%] items-center justify-center">
        <div className="flex-none h-[329.387px] rotate-[270deg] w-[439.397px]">
          <PutScreenInHere19 />
        </div>
      </div>
    </div>
  );
}

function HomeCardUp2() {
  return (
    <div className="bg-[#fffdf7] relative rounded-[8px] shrink-0 w-full" data-name="Home - card - UP">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[80px] items-center px-[62px] py-[56px] relative w-full">
          <DescriptionGroup3 />
          <PrototypeReview3 />
        </div>
      </div>
    </div>
  );
}

function CardsGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Cards group">
      <HomeCardEfmf />
      <HomeCardUp />
      <HomeCardUp1 />
  
    </div>
  );
}

function Frame1773() {
  return (
    <div id="featured-projects" className="absolute bg-[#09543d] box-border content-stretch flex flex-col gap-[32px] items-center justify-center left-1/2 px-0 py-[56px] rounded-[8px] top-[800px] translate-x-[-50%] w-[100%]">
      <p className="css-4tff24 font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[36px] text-white tracking-[-0.5px] w-[1220px]">Featured projects 👀</p>
      <CardsGroup />
      <p className="flex css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] left-[calc(50%-328px)] not-italic text-white text-[18px] text-nowrap top-[32px] tracking-[-0.5px] whitespace-pre mt-[32px] mr-[0px] mb-[56px] ml-[0px]">{`❤️ Designed and built by Dan to share the joy of creativity & projects that she’s proud of`}</p>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="content-stretch flex font-['Sora:Bold',_sans-serif] font-bold gap-[2px] items-center leading-[normal] relative shrink-0 text-[#09543d] text-[20px] text-nowrap tracking-[-0.2px] uppercase whitespace-pre cursor-pointer" data-name="Logo">
      <p className="css-l5mhoc relative shrink-0">Dan</p>
      <p className="css-l5mhoc relative shrink-0">Liu.</p>
    </Link>
  );
}

function DesignDoodle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.859px]" data-name="design-doodle">
      <div className="absolute inset-[-0.14%_-1.89%_-2.5%_-2.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
          <g id="design-doodle">
            <path d={svgPaths.p1afb7c80} id="Vector 83" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p30417780} id="Vector 84" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p3d0d2050} id="Vector 85" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p254730c0} id="Vector 88" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p267f0980} id="Vector 89" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p3cef1500} id="Vector 86" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBarButton() {
  return (
    <Link to="/" className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Nav-bar-button">
      <DesignDoodle />
      <p className="css-l5mhoc font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">work</p>
    </Link>
  );
}

function AboutDoodle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.2px]" data-name="about-doodle">
      <div className="absolute inset-[-2.5%_-2.74%_-2.5%_-2.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="about-doodle">
            <path d={svgPaths.p39c07300} id="Vector 140" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p37ab0c0} id="Vector 141" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p42a85e0} id="Vector 142" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p3e8dbe80} id="Vector 143" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p6ba8df0} id="Vector 144" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p78b5c90} id="Vector 145" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p16ab8900} id="Vector 146" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p35e59500} id="Vector 148" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1f87cbc0} id="Vector 149" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1af3f00} id="Vector 150" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1999c180} id="Vector 153" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p39c0b800} id="Vector 154" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p30e6cf80} id="Vector 155" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2a51c9e0} id="Vector 156" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2560e200} id="Vector 157" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p28c3c5e0} id="Vector 158" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBarButton1() {
  return (
    <Link to="/about" className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Nav-bar-button">
      <AboutDoodle />
      <p className="css-l5mhoc font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">about</p>
    </Link>
  );
}

function ResumeDoodle() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.618px]" data-name="Resume-doodle">
      <div className="absolute inset-[-2.86%_-3.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
          <g id="Resume-doodle">
            <path d={svgPaths.p10b53900} id="Vector 175" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p24645000} id="Vector 176" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p229e7e0} id="Vector 177" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p16bddf80} id="Vector 178" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2898a940} id="Vector 179" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p13b16d80} id="Vector 180" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBarButton2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Nav-bar-button">
      <ResumeDoodle />
      <p className="css-l5mhoc font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">resume</p>
    </div>
  );
}

function ContactDoodle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.543px]" data-name="contact-doodle">
      <div className="absolute inset-[-3.13%_-2.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 18">
          <g id="contact-doodle">
            <path d={svgPaths.p1f9bb280} id="Vector 159" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p31006090} id="Vector 160" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2e16a480} id="Vector 161" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pfc54e00} id="Vector 162" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1264f100} id="Vector 163" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBarButton3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Nav-bar-button">
      <ContactDoodle />
      <p className="css-l5mhoc font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">contact</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <WorkButton />
      <AboutButton />
      <ResumeButton />
      <ContactButton />
    </div>
  );
}

function NavBar() {
  return (
    <div className="sticky box-border content-stretch flex items-center justify-between left-0 px-[32px] py-[24px] top-0 w-[100%] z-50" data-name="Nav bar">
      <div className="absolute h-[72.858px] left-[-0.12px] top-0 w-[100%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1441 73">
          <path d={svgPaths.p6fc9b80} fill="var(--fill-0, #FFFDF7)" id="Vector 192" />
        </svg>
      </div>
      <Logo />
      <Frame7 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fffdf7] relative size-full" data-name="Home">
      <div className="absolute bg-[#fffdf7] h-[1024px] left-0 top-0 w-screen" data-name="pure color" />
      <CatDoodle />
      <Frame1770 />
      <Frame1772 />
      <p className="absolute css-l3z3w9 font-['Sora:Light',_sans-serif] font-light leading-[normal] left-[313px] text-[#09543d] text-[16px] text-nowrap top-[695px] tracking-[-0.5px] whitespace-pre">I make things easier, even your tax</p>
      <div className="absolute flex h-[43px] items-center justify-center left-[197px] top-[664px] w-[104px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[43px] relative w-[104px]">
            <div className="absolute inset-[-0.3%_-0.46%_-7.86%_-0.48%]" style={{ "--stroke-0": "rgba(9, 84, 61, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 48">
                <path d={svgPaths.p18824200} fill="var(--stroke-0, #09543D)" id="Vector 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1773 />
      
      <NavBar />
    </div>
  );
}
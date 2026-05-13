import "./HomePage.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import svgPaths from "../../imports/svg-q8lj8xj9ju";
import imgPrototypeReviewEfmf from "../../assets/images/efilemyforms-prototype-review.png";
import imgPrototypeReviewUp1 from "../../assets/images/reportmyup-prototype-review.png";
import imgWomanWorkingOnAMacBookPro14 from "../../assets/images/woman-working-macbook.png";
import vidStatFullUi from "../../assets/images/statutoryreporting-full-ui.mp4";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { OtherProjectsSection } from "../components/home/OtherProjectsSection";

const MOTIVATIONAL_QUOTES = [
  "Work smarter, not harder. Sleep when you need to",
  "It's Monday, let's get some sushi 🍣",
  "The time to relax is when you don't have time for it ⏳",
  "Self-care is how you take your power back 🔌",
  "Time you enjoy wasting is not wasted time ⏰",
  "If your compassion does not include yourself, it is incomplete 👯",
  "Take the time today to love yourself. You deserve it 😍",
];

// Cat Doodle Component
function CatDoodle({ pupilOffset }: { pupilOffset: { x: number; y: number } }) {
  return (
    <svg className="cat-doodle-svg" viewBox="0 0 216.907 219.78" fill="none">
      <path d={svgPaths.p2f77200} fill="#A9FFDD" />
      <path d={svgPaths.p155b4ee0} fill="white" />
      <path d={svgPaths.pde0c880} fill="white" />
      {/* Pupils - animated to follow mouse */}
      <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
        <circle cx="82" cy="116" r="4" fill="#1a1a1a" />
        <circle cx="150" cy="116" r="4" fill="#1a1a1a" />
      </g>
    </svg>
  );
}

// Individual Hero Cat Component
function HeroCat({
  mouseX,
  mouseY,
  index,
  quote,
  phase,
  entering,
  onClick,
}: {
  mouseX: number;
  mouseY: number;
  index: number;
  quote: string | null;
  phase: "idle" | "poofing" | "showing-quote" | "quote-fading";
  entering: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(!entering);

  // Entrance animation trigger via double rAF
  useEffect(() => {
    if (entering) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEntered(true));
      });
    }
  }, [entering]);

  // Mouse follow — calculates pupil offset
  useEffect(() => {
    if (!ref.current || (mouseX === 0 && mouseY === 0)) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) {
      setOffset({ x: 0, y: 0 });
      return;
    }
    const maxOffset = 5;
    const scale = Math.min(maxOffset, dist / 100);
    setOffset({ x: (dx / dist) * scale, y: (dy / dist) * scale });
  }, [mouseX, mouseY]);

  const isPoofing = phase === "poofing";
  const showQuote = phase === "showing-quote" || phase === "quote-fading";
  const quoteFading = phase === "quote-fading";

  return (
    <div
      ref={ref}
      className="abstract-cat clickable"
      onClick={phase === "idle" && entered ? onClick : undefined}
      style={{
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
        transform: entering && !entered ? "translateX(100%)" : "translateX(0)",
        opacity: entering && !entered ? 0 : 1,
      }}
    >
      <div
        style={{
          transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
          transform: isPoofing ? "scale(1.5)" : "scale(1)",
          opacity: isPoofing || showQuote ? 0 : 1,
        }}
      >
        <CatDoodle pupilOffset={offset} />
      </div>
      {showQuote && quote && (
        <p
          className="cat-quote"
          style={{
            transition: "opacity 0.5s ease-out",
            opacity: quoteFading ? 0 : 1,
          }}
        >
          {quote}
        </p>
      )}
    </div>
  );
}

// Hero Cat Grid Component
function HeroCatGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const nextIdRef = useRef(9);
  const timersRef = useRef<number[]>([]);
  const shuffledQuotes = useRef({
    order: [...MOTIVATIONAL_QUOTES].sort(() => Math.random() - 0.5),
    idx: 0,
  });

  const [catIds, setCatIds] = useState<number[]>(
    Array.from({ length: 9 }, (_, i) => i),
  );
  const [enteringId, setEnteringId] = useState<number | null>(null);

  const [animStates, setAnimStates] = useState<
    Map<
      number,
      {
        quote: string;
        phase: "poofing" | "showing-quote" | "quote-fading";
      }
    >
  >(new Map());

  const getNextQuote = useCallback(() => {
    const q = shuffledQuotes.current;
    const quote = q.order[q.idx % q.order.length];
    q.idx++;
    return quote;
  }, []);

  const addTimer = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const handleCatClick = useCallback(
    (catId: number) => {
      const quote = getNextQuote();

      setAnimStates((prev) =>
        new Map(prev).set(catId, { quote, phase: "poofing" }),
      );

      addTimer(() => {
        setAnimStates((prev) => {
          const next = new Map(prev);
          const state = next.get(catId);
          if (state) next.set(catId, { ...state, phase: "showing-quote" });
          return next;
        });

        addTimer(() => {
          setAnimStates((prev) => {
            const next = new Map(prev);
            const state = next.get(catId);
            if (state) next.set(catId, { ...state, phase: "quote-fading" });
            return next;
          });

          addTimer(() => {
            const newId = nextIdRef.current++;
            setCatIds((prev) => {
              const idx = prev.indexOf(catId);
              if (idx === -1) return prev;
              const next = [...prev];
              next.splice(idx, 1);
              next.push(newId);
              return next;
            });
            setEnteringId(newId);

            // Remove this cat from animating map
            setAnimStates((prev) => {
              const next = new Map(prev);
              next.delete(catId);
              return next;
            });

            addTimer(() => {
              setEnteringId(null);
            }, 400);
          }, 500);
        }, 1500);
      }, 600);
    },
    [animStates, getNextQuote, addTimer],
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      timersRef.current.forEach((id) => clearTimeout(id));
      timersRef.current = [];
    };
  }, [handleMouseMove]);

  return (
    <div className="cat-doodle-grid" aria-hidden="true">
      {catIds.map((catId) => (
        <HeroCat
          key={catId}
          index={catId}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
          quote={animStates.get(catId)?.quote ?? null}
          phase={animStates.get(catId)?.phase ?? "idle"}
          entering={enteringId === catId}
          onClick={() => handleCatClick(catId)}
        />
      ))}
    </div>
  );
}

// Black Cat Doodle Component (for parallax effect)
function BlackCatDoodle({
  pupilOffset,
}: {
  pupilOffset?: { x: number; y: number };
}) {
  const px = pupilOffset?.x ?? 0;
  const py = pupilOffset?.y ?? 0;

  return (
    <svg width="109" height="115" viewBox="0 0 109 115" fill="none">
      <path d={svgPaths.p22900dc0} fill="black" />
      <path
        d={svgPaths.p167a000}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p1db1b880}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p3cbf3b80}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p3adfc100}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p1cf73c80}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p181b5680}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p21432e80}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p122e9260}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p3ab6b9c0}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p3bfd9d40}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p1b37cd80}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d={svgPaths.p23f1ca80} fill="white" />
      <path
        d={svgPaths.p1787c300}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p6a1d080}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.pe62fa68}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d={svgPaths.peb5dd70} fill="white" />
      <path
        d={svgPaths.p1f84bd00}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p2d3e41c0}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={svgPaths.p3e282a00}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Black Cat Peek Component (for parallax scrolling)
function BlackCatPeek({
  catRef,
  translateY,
}: {
  catRef: React.RefObject<HTMLDivElement>;
  translateY: number;
}) {
  return (
    <div
      className="relative w-full blk-cat-peek-doodle"
      style={{ height: 0, overflow: "visible" }}
    >
      <div className="max-w-[1440px] mx-auto relative" style={{ height: 0 }}>
        <div
          ref={catRef}
          className="absolute will-change-transform"
          style={{
            left: "80px",
            top: 0,
            transform: `translateY(${translateY}px)`,
            width: "109px",
            height: "115px",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <BlackCatDoodle />
        </div>
      </div>
    </div>
  );
}

// Cat Parallax Hook
function useCatParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !catRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const catHeight = catRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const earsPeek = catHeight * 0.18;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - sectionRect.top) / (windowHeight * 0.5)),
      );
      setTranslateY(-(earsPeek + progress * (catHeight - earsPeek)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { sectionRef, catRef, translateY };
}

export function HomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const email = "danliudesigner@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      return;
    } catch (err) {
      // Fallback to older method
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleBookMeeting = () => {
    window.open(
      "https://adplist.org/mentors/dan-liu",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:danliudesigner@gmail.com";
  };

  // Contact section bounce animation
  const contactSectionRef = useRef<HTMLElement>(null);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !bouncing) {
          setBouncing(true);
        } else if (!entry.isIntersecting && bouncing) {
          setBouncing(false);
        }
      },
      { threshold: 0.3 },
    );
    if (contactSectionRef.current) observer.observe(contactSectionRef.current);
    return () => observer.disconnect();
  }, [bouncing]);

  // Cat Parallax
  const { sectionRef, catRef, translateY } = useCatParallax();

  return (
    <div className="home-page">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        {/* Introduction Section */}
        <section
          className="introduction-section"
          aria-labelledby="intro-heading"
        >
          <div className="introduction-content">
            <div className="role-description-group">
              <h1 id="intro-heading" className="role-heading">
                <span>Hi, I'm Dan! </span>
                <br />
                <span className="strategic-text">Strategic Senior</span>
                <br />
                <span className="strategic-text">Product Designer.</span>
              </h1>
            </div>

            <p className="introduction-description">
              I transform complex compliance problems into intuitive designs
              that people enjoy and businesses appreciate.
            </p>

            {/* Too much interaction on home page, remove this design temporarily */}
            {/* <p className="introduction-description">
              I design.
            </p> */}

            <div className="contact-info">
              <div className="contact-group">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="25" height="18" viewBox="0 0 26 18" fill="none">
                    <path
                      d={svgPaths.p164fdf80}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p3e9b80c0}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p1a853100}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p20226980}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p2fd9100}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:danliudesigner@gmail.com"
                  className="contact-link"
                  onClick={handleCopyEmail}
                >
                  {copiedEmail ? "Copied!" : "danliudesigner@gmail.com"}
                </a>
              </div>

              <div className="contact-group">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="17" height="24" viewBox="0 0 17 24" fill="none">
                    <path
                      d={svgPaths.p9f3e1c0}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p25ac8700}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={svgPaths.p2f65b200}
                      stroke="#09543D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <a
                  href="https://hoodmaps.com/boulder-neighborhood-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Boulder, CO
                </a>
              </div>
            </div>
          </div>

          {/* Cat Doodle Grid - Interactive 3x3 */}
          <HeroCatGrid />
        </section>

        {/* Black Cat Parallax Peeking */}
        <BlackCatPeek catRef={catRef} translateY={translateY} />

        {/* Featured Projects Section */}
        <section
          className="featured-projects-section"
          id="featured-projects-section"
          aria-labelledby="featured-projects-heading"
          ref={sectionRef}
        >
          <div className="featured-projects-container">
            <header className="featured-projects-header">
              <h2
                id="featured-projects-heading"
                className="featured-projects-title"
              >
                Featured projects
              </h2>
            </header>

            <div className="projects-list">
              {/* Project 1: Statutory Reporting */}
              <article className="project-card bg-surface-cream rounded-lg items-stretch overflow-hidden max-w-[1220px] mx-auto w-full">
                <div className="project-info gap-4 p-6 md:p-10 lg:pl-[62px] lg:pr-8 lg:py-10 w-full lg:w-[499px] shrink-0">
                  <div className="project-metadata flex items-center gap-4 flex-wrap">
                    <div className="project-timestamp flex items-center gap-1 font-body text-[18px] tracking-[-0.5px]">
                      <span className="text-[#5c6166]">Jul 2025</span>
                      <span className="text-[#999ea3]"> - </span>
                      <span className="text-[#5c6166]">Current</span>
                    </div>
                    <span className="text-[#999ea3] font-body text-[18px] tracking-[-0.5px]">
                      {"•"}
                    </span>
                    <span className="project-name text-[#5c6166] font-body text-[18px] tracking-[-0.5px]">
                      Statutory Reporting
                    </span>
                  </div>

                  <h3 className="project-title">
                    Redesigned Notes editor to help insurance preparers finish faster and reduce churn
                  </h3>

                  <div className="project-tags">
                    <span className="project-tag">Product Design</span>
                    <span className="project-tag">B2B SaaS</span>
                    <span className="project-tag">Design Lead</span>
                  </div>

                  <p className="project-description">
                    Research-driven redesign of the Notes editor in Sovos Statutory Reporting — the tool insurance preparers use to create financial statements.
                  </p>

                  <Link to="/statutory-reporting" className="btn-primary">
                    View project
                  </Link>
                </div>

                <div className="project-image-container w-full lg:w-[721px] lg:shrink-0">
                  <video
                    src={vidStatFullUi}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Demo of the new Notes form mode showing focused data entry without formatting distractions"
                    className="project-image w-full h-full object-cover block"
                  />
                </div>
              </article>

              {/* Project 2: ReportMyUP */}
              <article className="project-card reverse bg-surface-cream rounded-lg items-stretch overflow-hidden max-w-[1220px] mx-auto w-full">
                <div className="project-info gap-4 p-6 md:p-10 lg:pl-[62px] lg:pr-8 lg:py-10 w-full lg:w-[499px] shrink-0">
                  <div className="project-metadata flex items-center gap-4 flex-wrap">
                    <div className="project-timestamp flex items-center gap-1 font-body text-[18px] tracking-[-0.5px]">
                      <span className="text-[#5c6166]">2024</span>
                      <span className="text-[#999ea3]"> - </span>
                      <span className="text-[#5c6166]">Current</span>
                    </div>
                    <span className="text-[#999ea3] font-body text-[18px] tracking-[-0.5px]">
                      {"•"}
                    </span>
                    <span className="project-name text-[#5c6166] font-body text-[18px] tracking-[-0.5px]">
                      ReportMyUP
                    </span>
                  </div>

                  <h3 className="project-title">
                    Pivot from struggling launch to $4.79M revenue opportunity
                  </h3>

                  <div className="project-tags">
                    <span className="project-tag">B2B</span>
                    <span className="project-tag">Unclaimed Property</span>
                    <span className="project-tag">Design Strategy</span>
                    <span className="project-tag">Growth</span>
                  </div>

                  <p className="project-description">
                    Iterated cross-department pivot strategist within tight
                    constraints and complex platform architecture to grow
                    Unclaimed Property's conversion.{" "}
                  </p>

                  <Link to="/reportmyup" className="btn-primary">
                    View project
                  </Link>
                </div>

                <div className="project-image-container w-full lg:w-[721px] lg:shrink-0">
                  <img
                    src={imgPrototypeReviewUp1}
                    alt="ReportMyUP platform interface screenshots"
                    className="project-image w-full h-full object-cover block"
                  />
                </div>
              </article>

              {/* Project 3: eFileMyForms */}
              <article className="project-card bg-surface-cream rounded-lg items-stretch overflow-hidden max-w-[1220px] mx-auto w-full">
                <div className="project-info gap-4 p-6 md:p-10 lg:pl-[62px] lg:pr-8 lg:py-10 w-full lg:w-[499px] shrink-0">
                  <div className="project-metadata flex items-center gap-4 flex-wrap">
                    <div className="project-timestamp flex items-center gap-1 font-body text-[18px] tracking-[-0.5px]">
                      <span className="text-[#5c6166]">2022</span>
                      <span className="text-[#999ea3]"> - </span>
                      <span className="text-[#5c6166]">2023</span>
                    </div>
                    <span className="text-[#999ea3] font-body text-[18px] tracking-[-0.5px]">
                      {"•"}
                    </span>
                    <span className="project-name text-[#5c6166] font-body text-[18px] tracking-[-0.5px]">
                      eFileMyForms Redesign
                    </span>
                  </div>

                  <h3 className="project-title">
                    Made tax filing easy and modern for stressed small business
                    owners
                  </h3>

                  <div className="project-tags">
                    <span className="project-tag">
                      NPS 15
                      <svg
                        className="arrow-icon"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path d={svgPaths.pf7cbf00} fill="#09543D" />
                      </svg>
                    </span>
                    <span className="project-tag">
                      ARR 23%
                      <svg
                        className="arrow-icon"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path d={svgPaths.pf7cbf00} fill="#09543D" />
                      </svg>
                    </span>
                    <span className="project-tag">E-commerce</span>
                    <span className="project-tag">Tax Filing</span>
                  </div>

                  <p className="project-description">
                    My design for Sovos' first ecommerce product sparked market
                    expansion and became the design blueprint for their global
                    ecommerce portfolio.{" "}
                  </p>

                  <Link to="/efilemyforms" className="btn-primary">
                    View project
                  </Link>
                </div>

                <div className="project-image-container w-full lg:w-[721px] lg:shrink-0">
                  <img
                    src={imgPrototypeReviewEfmf}
                    alt="eFileMyForms platform interface screenshots"
                    className="project-image w-full h-full object-cover block"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <OtherProjectsSection />

        {/* Contact Section */}
        <section
          className="contact-section"
          aria-labelledby="contact-heading"
          ref={contactSectionRef}
        >
          <div className="contact-container">
            <div
              className={`contact-avatar${bouncing ? " animate-cat-bounce" : ""}`}
              aria-hidden="true"
            >
              <svg width="109" height="115" viewBox="0 0 109 115" fill="none">
                <path d={svgPaths.p22900dc0} fill="black" />
                <path
                  d={svgPaths.p167a000}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p1db1b880}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p3cbf3b80}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p3adfc100}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p1cf73c80}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p181b5680}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p21432e80}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p122e9260}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p3ab6b9c0}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p3bfd9d40}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p1b37cd80}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d={svgPaths.p23f1ca80} fill="white" />
                <path
                  d={svgPaths.p1787c300}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p6a1d080}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.pe62fa68}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d={svgPaths.peb5dd70} fill="white" />
                <path
                  d={svgPaths.p1f84bd00}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p2d3e41c0}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={svgPaths.p3e282a00}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 id="contact-heading" className="contact-heading">
              Let's c<span className="opacity-20">h</span>at
            </h2>

            <p className="contact-description">
              I'm available for work and collaboration.
            </p>

            <div className="contact-buttons">
              <a
                href="https://adplist.org/mentors/dan-liu"
                className="btn-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book my mentorship on ADPList
              </a>

              <a
                className="btn-accent"
                href="mailto:danliudesigner@gmail.com?subject=Beep-boop, contact from Dan's website!&body=Hello, this is {name}. %0D%0 I'd love to connect on {topics}."
              >
                Email me to say hi
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Copy Success Snackbar */}
      {copiedEmail && <div className="copy-snackbar">Email copied!</div>}
    </div>
  );
}

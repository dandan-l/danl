import { useEffect, useRef, useState } from "react";
import "./OtherProjectsSection.css";
import { ScrollHint } from "../ScrollHint";
import peerbotsPrototype from "../../../assets/images/peerbots-controllerprototype.png";
import poofySnippet from "../../../assets/images/poofy-snippet.gif";
import csmlSnippet from "../../../assets/images/csml-website-snippet.gif";
import christmasCardSnippet from "../../../assets/images/christmas-card-snippet.gif";
import emojiClockSnippet from "../../../assets/images/emoji-clock-snippet.gif";

// Card data structure
interface CardData {
  tag: string;
  title: string;
  desc: string;
  meta: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoType?: string;
  link?: string;
  openInNewTab?: boolean;
}

const CARD_DATA: CardData[] = [
  {
    tag: "Product Design",
    title: "Peerbots",
    desc: "As a board member, I advice and design for a non-profit building socially assistive robotics.",
    meta: "2020 - Current",
    image: peerbotsPrototype,
    imageAlt: "Peerbots Prototype of the controller",
    link: "https://www.peerbots.org/",
    openInNewTab: true,
  },
  {
    tag: "Design & Development",
    title: ":poofy",
    desc: "You might find the poofing familiar... Linh and I built the website to help you wind down and embrace JOMO (Joy of Missing Out).",
    meta: "2021 CU T9Hacks",
    image: poofySnippet,
    imageAlt: ":Poofy website snippet",
    link: "https://devpost.com/software/linda-dprsu9",
    openInNewTab: true,
  },
  {
    tag: "Design & Development",
    title: "Celestial and Spaceflight Mechanics Lab",
    desc: "Once upon a time, I built a website for a NASA-affiliated aerospace lab and accidentally studied aerospace.",
    meta: "2021 CU Boulder",
    image: csmlSnippet,
    imageAlt: "Celestial and Spaceflight Mechanics Lab website snippet",
    link: "https://ccar.colorado.edu/scheeres/scheeres/index.html",
    openInNewTab: true,
  },
  {
    tag: "Design & Development",
    title: "My love delivery",
    desc: "Sometimes, I build interactive Christmas card using P5.JS to share joy. Who would've thought to program gravity?",
    meta: "2020 at home",
    image: christmasCardSnippet,
    imageAlt: "A snipet of an interactive Christmas card I built in p5.JS",
    link: "https://editor.p5js.org/dali0818/full/jaIzcPYrj",
    openInNewTab: true,
  },
  {
    tag: "Data Visualization",
    title: "Emoji Clock",
    desc: "I visualized my pandemic weekend schedule with a gaming scheme and fun interactions. A fun yet bleak time back then.",
    meta: "2020 at home",
    image: emojiClockSnippet,
    imageAlt:
      "A snipet of an interactive data visualization of my weekend schedule I built in p5.JS",
    link: "https://editor.p5js.org/dali0818/full/R6GLAzg5Q",
    openInNewTab: true,
  },
];

export function OtherProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressCountRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    scrollStart: 0,
    velX: 0,
    lastX: 0,
    lastTime: 0,
    rafId: 0,
  });

  // Progress bar + card counter
  const updateProgress = () => {
    const track = trackRef.current;
    const progressFill = progressFillRef.current;
    const progressCount = progressCountRef.current;

    if (!track || !progressFill || !progressCount) return;

    const max = track.scrollWidth - track.clientWidth;
    if (max <= 0) return;

    progressFill.style.transform = `scaleX(${track.scrollLeft / max})`;

    // Counter: find card whose offsetLeft is nearest to scrollLeft
    const cards = track.querySelectorAll(".other-projects-card");
    let closestIdx = 0,
      closestDist = Infinity;
    cards.forEach((c, i) => {
      const card = c as HTMLElement;
      const dist = Math.abs(card.offsetLeft - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });

    progressCount.textContent = `${closestIdx + 1} / ${CARD_DATA.length}`;
  };

  // Card entrance animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const savedScrollLeft = track.scrollLeft;
            entry.target.classList.add("is-visible");
            requestAnimationFrame(() => {
              track.scrollLeft = savedScrollLeft;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.1 },
    );

    track
      .querySelectorAll(".other-projects-card")
      .forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Drag to scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      setIsDragging(true);
      dragState.current.startX = e.clientX;
      dragState.current.scrollStart = track.scrollLeft;
      dragState.current.velX = 0;
      dragState.current.lastX = e.clientX;
      dragState.current.lastTime = Date.now();
      track.classList.add("is-dragging");
      track.setPointerCapture(e.pointerId);
      cancelAnimationFrame(dragState.current.rafId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      track.scrollLeft =
        dragState.current.scrollStart - (e.clientX - dragState.current.startX);
      const now = Date.now();
      const dt = now - dragState.current.lastTime;
      if (dt > 0)
        dragState.current.velX = (e.clientX - dragState.current.lastX) / dt;
      dragState.current.lastX = e.clientX;
      dragState.current.lastTime = now;
    };

    const endDrag = () => {
      if (!isDragging) return;
      setIsDragging(false);
      track.classList.remove("is-dragging");
      let momentum = dragState.current.velX * 18;
      const step = () => {
        if (Math.abs(momentum) < 0.5) return;
        track.scrollLeft -= momentum;
        momentum *= 0.92;
        dragState.current.rafId = requestAnimationFrame(step);
      };
      step();
    };

    const handleContextMenu = (e: Event) => e.preventDefault();

    track.addEventListener("pointerdown", handlePointerDown);
    track.addEventListener("pointermove", handlePointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("contextmenu", handleContextMenu);

    return () => {
      track.removeEventListener("pointerdown", handlePointerDown);
      track.removeEventListener("pointermove", handlePointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isDragging]);

  // Scroll event
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateProgress, { passive: true });
    return () => track.removeEventListener("scroll", updateProgress);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const card = track.querySelector(".other-projects-card") as HTMLElement;
      const cardW =
        (card?.offsetWidth || 300) + parseInt(getComputedStyle(track).gap);
      track.scrollBy({
        left: e.key === "ArrowRight" ? cardW : -cardW,
        behavior: "smooth",
      });
    };

    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", handleKeyDown);
    return () => track.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Resize handler
  useEffect(() => {
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateProgress, 150);
    };

    window.addEventListener("resize", handleResize);
    setTimeout(updateProgress, 200);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <section
      className="other-projects-section"
      id="other-projects-section"
      aria-label="Other projects"
    >
      <header className="other-projects-header">
        <h2 className="other-projects-title">Other projects</h2>
        <ScrollHint scrollContainerRef={trackRef} />
      </header>

      <div className="cards-track-outer">
        <div
          className="cards-track"
          ref={trackRef}
          role="list"
          aria-label="Project cards"
        >
          {CARD_DATA.map((card, i) => (
            <article
              key={i}
              className="other-projects-card"
              role="listitem"
              style={{ transitionDelay: `${i * 0.07}s` }}
              aria-labelledby={`card-title-${i}`}
            >
              <figure className="card-img">
                {card.video ? (
                  <video
                    controls
                    preload="metadata"
                    aria-label={card.imageAlt || `${card.title} video`}
                  >
                    <source
                      src={card.video}
                      type={card.videoType || "video/mp4"}
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : card.image ? (
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    draggable="false"
                  />
                ) : null}
              </figure>
              <div className="card-body">
                <span className="card-tag" aria-label="Project category">
                  {card.tag}
                </span>
                <h3 className="card-title" id={`card-title-${i}`}>
                  {card.title}
                </h3>
                <p className="card-desc">{card.desc}</p>
                <footer className="card-footer">
                  <span className="card-meta">{card.meta}</span>
                  {card.link ? (
                    <a
                      href={card.link}
                      className="card-arrow"
                      aria-label={`View ${card.title}`}
                      target={card.openInNewTab ? "_blank" : undefined}
                      rel={
                        card.openInNewTab ? "noopener noreferrer" : undefined
                      }
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        aria-hidden="true"
                      >
                        <path
                          d="M0.50001 5.16341C0.581777 5.08164 1.59283 4.90733 4.05926 4.7385C5.55676 4.70186 7.55346 4.76478 8.73446 4.81831C9.91547 4.87185 10.2203 4.91409 10.7208 5.05742"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10.1493 1.64917C10.3905 1.89038 11.7342 3.2341 13.4315 5.11175C13.9769 5.71512 13.6086 5.82989 13.1771 5.9882C12.1922 6.40135 11.1284 6.81337 10.2091 7.10965C9.78358 7.25648 9.44129 7.39617 8.47883 7.73418"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <div className="card-arrow" aria-hidden="true">
                      <svg
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        aria-hidden="true"
                      >
                        <path
                          d="M0.50001 5.16341C0.581777 5.08164 1.59283 4.90733 4.05926 4.7385C5.55676 4.70186 7.55346 4.76478 8.73446 4.81831C9.91547 4.87185 10.2203 4.91409 10.7208 5.05742"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10.1493 1.64917C10.3905 1.89038 11.7342 3.2341 13.4315 5.11175C13.9769 5.71512 13.6086 5.82989 13.1771 5.9882C12.1922 6.40135 11.1284 6.81337 10.2091 7.10965C9.78358 7.25648 9.44129 7.39617 8.47883 7.73418"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="scroll-progress-wrap"
        role="region"
        aria-label="Scroll progress indicator"
      >
        <div
          className="scroll-progress-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          aria-label="Scroll position"
        >
          <div className="scroll-progress-fill" ref={progressFillRef}></div>
        </div>
        <div
          className="scroll-progress-count"
          ref={progressCountRef}
          aria-live="polite"
          aria-atomic="true"
        >
          1 / {CARD_DATA.length}
        </div>
      </div>
    </section>
  );
}

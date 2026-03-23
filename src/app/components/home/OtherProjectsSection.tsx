import { useEffect, useRef, useState, useCallback } from "react";
import "./OtherProjectsSection.css";
import { ScrollHint } from "../ScrollHint";
import peerbotsPrototype from "../../../assets/images/peerbots-controllerprototype.png";
import poofySnippet from "../../../assets/images/poofy-snippet.gif";
import csmlSnippet from "../../../assets/images/csml-website-snippet.gif";
import christmasCardSnippet from "../../../assets/images/christmas-card-snippet.gif";
import emojiClockSnippet from "../../../assets/images/emoji-clock-snippet.gif";

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
  const rafIdRef = useRef<number>(0);

  // Simplified progress update - fixed counter bug
  const updateProgress = useCallback(() => {
    if (rafIdRef.current) return;

    rafIdRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      const progressFill = progressFillRef.current;
      const progressCount = progressCountRef.current;

      if (!track || !progressFill || !progressCount) {
        rafIdRef.current = 0;
        return;
      }

      const scrollLeft = track.scrollLeft;
      const scrollWidth = track.scrollWidth;
      const clientWidth = track.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) {
        rafIdRef.current = 0;
        return;
      }

      // Progress bar
      const progress = Math.min(1, scrollLeft / maxScroll);
      progressFill.style.transform = `scaleX(${progress})`;

      // Fixed counter calculation
      const cards = Array.from(
        track.querySelectorAll(".other-projects-card"),
      ) as HTMLElement[];

      // Find card whose center is closest to viewport center
      const viewportCenter = scrollLeft + clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      progressCount.textContent = `${closestIdx + 1} / ${CARD_DATA.length}`;
      rafIdRef.current = 0;
    });
  }, []);

  // Simple entrance animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.1 },
    );

    const cards = track.querySelectorAll(".other-projects-card");
    cards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Scroll event - passive listener
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateProgress, { passive: true });

    // Initial update
    setTimeout(updateProgress, 100);

    return () => {
      track.removeEventListener("scroll", updateProgress);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updateProgress]);

  // Keyboard navigation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();

      const card = track.querySelector(".other-projects-card") as HTMLElement;
      if (!card) return;

      const gap = parseInt(getComputedStyle(track).gap) || 0;
      const cardW = card.offsetWidth + gap;

      track.scrollBy({
        left: e.key === "ArrowRight" ? cardW : -cardW,
        behavior: "smooth",
      });
    };

    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", handleKeyDown);

    return () => {
      track.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Resize handler
  useEffect(() => {
    let resizeTimer: number;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateProgress, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [updateProgress]);

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
              style={{ transitionDelay: `${i * 0.05}s` }}
              aria-labelledby={`card-title-${i}`}
            >
              <figure className="card-img">
                {card.video ? (
                  <video
                    controls
                    preload="none"
                    poster={card.image}
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
                    decoding="async"
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
                          strokeLinecap="round"
                        />
                        <path
                          d="M10.1493 1.64917C10.3905 1.89038 11.7342 3.2341 13.4315 5.11175C13.9769 5.71512 13.6086 5.82989 13.1771 5.9882C12.1922 6.40135 11.1284 6.81337 10.2091 7.10965C9.78358 7.25648 9.44129 7.39617 8.47883 7.73418"
                          strokeLinecap="round"
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
                          strokeLinecap="round"
                        />
                        <path
                          d="M10.1493 1.64917C10.3905 1.89038 11.7342 3.2341 13.4315 5.11175C13.9769 5.71512 13.6086 5.82989 13.1771 5.9882C12.1922 6.40135 11.1284 6.81337 10.2091 7.10965C9.78358 7.25648 9.44129 7.39617 8.47883 7.73418"
                          strokeLinecap="round"
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

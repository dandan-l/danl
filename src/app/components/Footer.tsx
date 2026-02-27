import svgPaths from "../../imports/svg-94l2uojbpu";
import { useState } from "react";
import "./Footer.css";

export function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const email = "danliudesigner@gmail.com";

    // Try modern Clipboard API first
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      return;
    } catch (err) {
      // Fallback to older method
    }

    // Fallback: Create temporary textarea
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

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        {/* Creative Statement */}
        <p className="footer-statement">
          Designed with 💭 imagination, ❤️ love, 🪿 silliness, 🧋 boba, 🎧
          music, and way too many ♻️ iterations.
        </p>

        <div className="footer-content">
          {/* Copyright and Credits */}
          <div className="footer-credits">
            <p>Copyright © Dan Liu 2026</p>
            <p>Designer: Dan Liu</p>
            <p>Developer: Dan Liu & Figma Make & Claude</p>
          </div>

          {/* Contact Information */}
          <address className="footer-contact">
            <div className="contact-item">
              <svg
                className="contact-icon"
                viewBox="0 0 26.0429 17.5002"
                aria-hidden="true"
              >
                <path
                  d={svgPaths.p164fdf80}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d={svgPaths.p3e9b80c0}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d={svgPaths.p1a853100}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d={svgPaths.p20226980}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d={svgPaths.p2fd9100}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>

              <button className="contact-link" onClick={handleCopyEmail}>
                danliudesigner@gmail.com
              </button>
            </div>

            <div className="contact-item">
              <svg
                className="contact-icon linkedin-icon"
                viewBox="0 0 23.7096 20.7277"
                aria-hidden="true"
              >
                <path
                  d={svgPaths.p35ed6b40}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.p2214d500}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.p36ea4680}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.p17d82dc0}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M6.03214 9.45544V15.9734"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M9.46225 9.30633V15.6348"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.pdd3c340}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <a
                href="https://www.linkedin.com/in/dan-liu-b44b1610a"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                in/dan-liu-b44b1610a
              </a>
            </div>

            <div className="contact-item">
              <svg
                className="contact-icon location-icon"
                viewBox="0 0 18.9701 26.1503"
                aria-hidden="true"
              >
                <path
                  d={svgPaths.p290de100}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.pee1b240}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={svgPaths.p730a650}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <a
                href="https://hoodmaps.com/boulder-neighborhood-map"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boulder, CO
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Copy Success Snackbar */}
      {copiedEmail && <div className="copy-snackbar">Email copied!</div>}
    </footer>
  );
}

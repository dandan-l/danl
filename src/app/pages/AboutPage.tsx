import svgPaths from "../../imports/svg-vt8qk10u5t";
import svgDoodlePaths from "../../imports/svg-1p4nsx9i7l";
import imgImage44 from "../../assets/images/about-page-image.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import "./AboutPage.css";

function VineDecoration({ position }: { position: 'top' | 'bottom' }) {
  return (
    <svg className={`vine-decoration ${position}`} viewBox="0 0 180 100" fill="none">
      <path d="M10 50 Q 30 30, 50 50 T 90 50 T 130 50 T 170 50" stroke="#C8A2C8" strokeWidth="3" fill="none"/>
      {/* Flower 1 */}
      <circle cx="30" cy="30" r="8" fill="#FFB6E1"/>
      <circle cx="30" cy="30" r="5" fill="#FFA9EB"/>
      {/* Flower 2 */}
      <circle cx="70" cy="45" r="8" fill="#FFB6E1"/>
      <circle cx="70" cy="45" r="5" fill="#FFA9EB"/>
      {/* Flower 3 */}
      <circle cx="110" cy="35" r="8" fill="#FFB6E1"/>
      <circle cx="110" cy="35" r="5" fill="#FFA9EB"/>
      {/* Flower 4 */}
      <circle cx="150" cy="48" r="8" fill="#FFB6E1"/>
      <circle cx="150" cy="48" r="5" fill="#FFA9EB"/>
    </svg>
  );
}

export function AboutPage() {
  const [isFlowerRotating, setIsFlowerRotating] = useState(true);

  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1JO-R64jB19TKg1hGg1WkPBn2s9xMcAM-/view?usp=sharing", "_blank", "noopener,noreferrer");
  };

  const toggleFlowerRotation = () => {
    setIsFlowerRotating(!isFlowerRotating);
  };

  return (
    <div className="about-page">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <div className="about-content">
          {/* Polaroid Picture Section */}
          <section className="polaroid-section" aria-label="Photo of Dan">
            {/* Cat Doodle - Left */}
            <div className="doodle-cat">
              <svg viewBox="0 0 114.736 77.5811" fill="none">
                <path d={svgDoodlePaths.p22900dc0} fill="#FECA05"/>
                <path d={svgDoodlePaths.p167a000} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p1db1b880} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p3cbf3b80} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p3adfc100} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p1cf73c80} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p181b5680} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p21432e80} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p122e9260} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p3ab6b9c0} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p3bfd9d40} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p1b37cd80} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p23f1ca80} fill="white"/>
                <path d={svgDoodlePaths.p1787c300} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p6a1d080} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.pe62fa68} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.peb5dd70} fill="white"/>
                <path d={svgDoodlePaths.p1f84bd00} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p2d3e41c0} stroke="black" strokeLinecap="round" strokeWidth="2"/>
                <path d={svgDoodlePaths.p3e282a00} stroke="black" strokeLinecap="round" strokeWidth="2"/>
              </svg>
            </div>

            {/* Profile Picture Container */}
            <div className="profile-picture-container">
              <img 
                src={imgImage44} 
                alt="Dan Liu smiling and making a peace sign" 
                className="profile-photo"
              />
            </div>

            {/* Star Doodle - Top Left */}
            <div className="doodle-star">
              <svg viewBox="0 0 70.5975 99.962" fill="none">
                <path 
                  d={svgDoodlePaths.p24773300} 
                  fill="#FECA05" 
                  stroke="black" 
                  strokeLinejoin="round" 
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Blue Smiley Doodle - Top Right */}
            <div className="doodle-smiley">
              <svg viewBox="0 0 77.2189 58.3775" fill="none">
                <path 
                  clipRule="evenodd" 
                  d={svgDoodlePaths.p1f0b6d80} 
                  fill="#86DAFE" 
                  fillRule="evenodd" 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeWidth="1.604"
                />
                <ellipse 
                  cx="27.381" 
                  cy="25.4646" 
                  fill="#2B2B2B" 
                  rx="2.48734" 
                  ry="4.20935" 
                  transform="rotate(-6.58284 27.381 25.4646)"
                />
                <ellipse 
                  cx="48.4144" 
                  cy="24.4265" 
                  fill="#2B2B2B" 
                  rx="2.42673" 
                  ry="4.10678" 
                  transform="rotate(4.97302 48.4144 24.4265)"
                />
                <path 
                  d={svgDoodlePaths.p17179c80} 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.604"
                />
              </svg>
            </div>

            {/* Pink Flower Doodle - Bottom Right */}
            <div 
              className={`doodle-flower ${isFlowerRotating ? 'rotating' : 'paused'}`}
              onClick={toggleFlowerRotation}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlowerRotation();
                }
              }}
              aria-label={isFlowerRotating ? 'Click to pause flower rotation' : 'Click to resume flower rotation'}
            >
              <svg viewBox="0 0 100.847 108.551" fill="none">
                <path 
                  d={svgDoodlePaths.p2b3fdc80} 
                  fill="#FA8AB7" 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3"
                />
                <path 
                  d={svgDoodlePaths.pa0e3f80} 
                  fill="#FAD756" 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeWidth="3"
                />
              </svg>
            </div>
          </section>

          {/* About Text Section */}
          <section className="about-text-section" aria-labelledby="about-heading">
            <header className="about-header">
              <h1 id="about-heading" className="about-heading">About Dan</h1>
              <button onClick={handleViewResume} className="resume-button" aria-label="View my resume in a new tab">
                <span>View my resume</span>
                <svg className="resume-icon" viewBox="0 0 18.3989 16.2241" fill="none" aria-hidden="true">
                  <path d={svgPaths.p28abf100} stroke="white" strokeLinecap="round"/>
                  <path d={svgPaths.p33fa27e0} stroke="white" strokeLinecap="round"/>
                  <path d={svgPaths.pe14f7c0} stroke="white" strokeLinecap="round"/>
                </svg>
              </button>

              
              
            </header>

            <div className="about-bio">
              <p>
                👋🏼 Hi, I'm an innovative designer and an experienced mentor who strives to advocate for users, solve complex problems, and empower other people to uncover their strengths. I'm a full-stack product designer known for simplifying complexity and delivering polished, scalable products with unprecedented results.
              </p>
              <p>
                Currently, I am shaping the future for compliance softwares at <a href="https://www.sovos.com" target="_blank" rel="noopener noreferrer">Sovos</a> to make conventionally boring tax pleasant and easy.
              </p>
            </div>
          </section>
        </div>

      
      </main>

      <Footer />
    </div>
  );
}
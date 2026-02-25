import { Link, useNavigate } from "react-router";
import svgPaths from "../../imports/svg-j7b6scyjdd";
import svgPathsHover from "../../imports/svg-0cl3yssuxt";
import svgPathsContactHover from "../../imports/svg-yihjtml4z0";
import "./Header.css";

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Dan Liu Portfolio - Home">
      <span>Dan</span>
      <span>Liu.</span>
    </Link>
  );
}

function DesignDoodle() {
  return (
    <svg className="nav-icon" fill="none" viewBox="0 0 19.8385 20.6531" aria-hidden="true">
      <path d={svgPaths.p1e561b00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p2e918f00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.pd141300} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p107e2a00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p26d06a00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p28a97080} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPathsHover.p221ce200} stroke="#FECA05" strokeLinecap="round" className="hover-stroke" />
      <path d={svgPathsHover.p14012580} stroke="#FECA05" strokeLinecap="round" strokeWidth="1.25003" className="hover-stroke" />
    </svg>
  );
}

function AboutDoodle() {
  return (
    <svg className="nav-icon" fill="none" viewBox="0 0 19.2004 20.9998" aria-hidden="true">
      <path d={svgPaths.p1caa5660} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p25e0f620} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p2d262d80} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p22bf1f80} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p2d6da580} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p3923400} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p2d5cb80} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p312b9480} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p4d63cc0} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p64f2cc0} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.pc2ae900} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p2a407e80} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p146d1580} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p289b4900} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p64febc0} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p48f1d80} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      {/* Yellow starry eyes on hover */}
      <g className="hover-stroke">
        <path d={svgPathsHover.p1d6ab100} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.762489" />
        <path d={svgPathsHover.p389db040} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p5435880} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p1734b000} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p2de8bc80} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.pee4c480} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
      </g>
      <g className="hover-stroke">
        <path d={svgPathsHover.p18cfe580} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.762489" />
        <path d={svgPathsHover.p2d0c3980} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p2843c920} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p2a21b300} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p29371620} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
        <path d={svgPathsHover.p37202000} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.62499" />
      </g>
    </svg>
  );
}

function ResumeDoodle() {
  return (
    <svg className="nav-icon" fill="none" viewBox="0 0 16.4369 20.0147" aria-hidden="true">
      <path d={svgPaths.p349d100} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p1f8a4700} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p33e87c40} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p290a8580} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p332c0600} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p7a64180} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      {/* Yellow highlight on hover */}
      <rect fill="#FECA05" height="9.0618" width="10.4211" x="4.99992" y="10.3869" className="hover-fill" />
    </svg>
  );
}

function ContactDoodle() {
  return (
    <svg className="nav-icon" fill="none" viewBox="0 0 30.8576 20.5717" aria-hidden="true">
      <path d={svgPaths.p26656800} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p331f442c} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p30151460} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p3b2b1d00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      <path d={svgPaths.p187d2a00} stroke="currentColor" strokeLinecap="round" className="default-stroke" />
      {/* White and yellow elements on hover */}
      <g className="hover-stroke">
        <path d={svgPathsContactHover.p3e3bce80} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
        <path d="M25.2356 0.579807V2.57775" stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
        <path d={svgPathsContactHover.p1cd96e00} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
        <path d={svgPathsContactHover.pd4fbb60} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
        <path d={svgPathsContactHover.p2d783d50} stroke="#FECA05" strokeLinecap="round" strokeWidth="0.571437" />
        <path d={svgPathsContactHover.pe983780} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
        <path d={svgPathsContactHover.p2d8a1a00} stroke="white" strokeLinecap="round" strokeWidth="0.571437" />
      </g>
    </svg>
  );
}

export function Header() {
  const navigate = useNavigate();

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("featured-projects-section");
      const header = document.querySelector(".site-header") as HTMLElement;
      if (projectsSection && header) {
        const headerHeight = header.offsetHeight;
        const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="main-nav" aria-label="Main navigation">
          <Logo />
          <ul className="nav-links">
            <li>
              <Link to="/#projects" className="nav-link" onClick={handleProjectClick}>
                <DesignDoodle />
                <span>project</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <AboutDoodle />
                <span>about</span>
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1JO-R64jB19TKg1hGg1WkPBn2s9xMcAM-/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer" className="nav-link">
                <ResumeDoodle />
                <span>resume</span>
              </a>
            </li>
            <li>
              <a href="mailto:danliudesigner@gmail.com?subject=Beep-boop, contact from Dan's website!&body=Hello, this is {name}. %0D%0A I'd love to connect on {topics}." className="nav-link">
                <ContactDoodle />
                <span>contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
import { Link } from "react-router-dom";
import svgPaths from "./svg-fmk4nn8rsv";
import SEO from '../components/SEO';
import imgPaperTextureImage1 from "figma:asset/a165f702eb8536a182db393404e4bd3a0cd38dca.png";
import imgImage44 from "figma:asset/e8341189375e5810aa27634f35766489f08c8b52.png";
import { imgPaperTextureImage, imgImage43 } from "./svg-74rnk";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WorkButton, AboutButton, ResumeButton, ContactButton } from "../components/NavBarButtons";
import imgDanPolaroid from "figma:asset/e592d9c1f6bc6c93c11a4778974a530e8f0fc70a.png";

function OpenTabDoodle() {
  return (
    <div className="h-[15.224px] relative shrink-0 w-[17.399px]" data-name="Open-tab-doodle">
      <div className="absolute inset-[-3.28%_-2.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
          <g id="Open-tab-doodle">
            <path d={svgPaths.p36bdb800} id="Vector 181" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            <path d={svgPaths.p3b378340} id="Vector 182" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            <path d={svgPaths.p5b008c0} id="Vector 184" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <a 
      href="https://drive.google.com/file/d/1JO-R64jB19TKg1hGg1WkPBn2s9xMcAM-/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#09543d] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#09543d]/90 transition-colors" 
      data-name="Button"
    >
      <p className="css-na0cd8 font-['Source_Sans_Pro:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.5px] whitespace-pre">View my resume</p>
      <OpenTabDoodle />
    </a>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-l3z3w9 font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[36px] text-nowrap tracking-[-0.5px] whitespace-pre">About Dan</p>
      <Button />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
      <Frame14 />
      <div className="css-l3z3w9 font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#09543d] text-[0px] tracking-[-0.5px] w-full">
        <p className="font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] mb-0 text-[24px]">
          👋🏼 H<span>{`i, I'm `}</span>an innovative designer<span>{` and `}</span>
          <span>{`a likeable `}</span>mentor<span>{` who strives to advocate for users, solve complex problems, and empower other people to uncover their strengths`}</span>.<span>{` I'm a full-stack product designer known for simplifying complexity and delivering polished, scalable products with unprecedented results.`}</span>
        </p>
        <p className="leading-[normal] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[normal] text-[24px]">
          <span className="font-['Source_Sans_Pro:Regular',_sans-serif] not-italic">{`Currently, I am shaping the future for compliance softwares at `}</span>
          <a href="https://sovos.com/" target="_blank" rel="noopener noreferrer" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Source_Sans_Pro:Regular',_sans-serif] not-italic underline hover:text-[#09543d]/80">Sovos</a>
          <span className="font-['Source_Sans_Pro:Regular',_sans-serif] not-italic"> to make conventionally boring tax pleasant and easy.</span>
        </p>
      </div>
    </div>
  );
}

function Picture() {
  return (
    <div className="absolute contents inset-0" data-name="Picture">
      <div className="absolute aspect-[1400/980] left-[-109.52%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[447.912px_15.652px] mask-size-[438.578px_522.489px] right-[-20.51%] top-0" data-name="Paper texture image" style={{ maskImage: `url('${imgPaperTextureImage}')` }}>
        <ImageWithFallback alt="Dan Liu portrait" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&h=980&fit=crop" />
      </div>
    </div>
  );
}

function PhotoGroup() {
  return (
    <div className="absolute contents left-[27.12px] top-[30.04px]" data-name="Photo group">
      <div className="absolute h-[492.017px] left-[21.13px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8.244px_64.41px] mask-size-[369.472px_375.259px] rounded-[12px] shadow-[4.5px_9px_12px_0px_rgba(158,122,14,0.16)] top-[-34.2px] w-[369.013px]" data-name="Image (4) 3" style={{ maskImage: `url('${imgImage43}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImage44} />
      </div>
    </div>
  );
}

function PolaroidPicture() {
  return (
    <div className="h-[496.5px] relative w-[409.5px]" data-name="polaroidPicture">
      <Picture />
      <PhotoGroup />
      <div className="absolute css-q7hbtw flex flex-col font-['Figma_Hand:Bold',_sans-serif] h-[22.5px] justify-center leading-[0] left-[204.75px] not-italic text-[36px] text-black text-center top-[449.25px] tracking-[-1.061px] translate-x-[-50%] translate-y-[-50%] w-[409.5px]">
        <p className="leading-[normal]">
          <span className="capitalize css-eoz90d text-[23.22px]">$</span>Dan
        </p>
      </div>
    </div>
  );
}

function PolaroidPictureGroup() {
  return (
    <div className="w-full max-w-[479.82px] shrink-0" data-name="polaroidPictureGroup">
      <img alt="Dan Liu" className="max-w-none pointer-events-none w-full" src={imgDanPolaroid} />
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
      <div className="absolute inset-[-0.14%_-1.88%_-2.5%_-2.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
          <g id="design-doodle">
            <path d={svgPaths.p383ce100} id="Vector 83" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1e401fc0} id="Vector 84" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1052c980} id="Vector 85" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pf6e2360} id="Vector 88" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p6402100} id="Vector 89" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p13ec1100} id="Vector 86" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
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
      <p className="css-l5mhoc font-['Sora:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#09543d] text-[16px] text-nowrap tracking-[-0.2px] whitespace-pre">projects</p>
    </Link>
  );
}

function AboutDoodle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.2px]" data-name="about-doodle">
      <div className="absolute inset-[-2.5%_-2.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="about-doodle">
            <path d={svgPaths.p34b14d00} id="Vector 140" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p27932d00} id="Vector 141" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p20f40a80} id="Vector 142" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p39191b80} id="Vector 143" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p7d37e10} id="Vector 144" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2aea3c00} id="Vector 145" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p69a1b80} id="Vector 146" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pc37b40} id="Vector 148" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2df37800} id="Vector 149" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p38120b80} id="Vector 150" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p1999c180} id="Vector 153" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p187a45c8} id="Vector 154" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p3b38f100} id="Vector 155" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pf3ca540} id="Vector 156" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p4224c00} id="Vector 157" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pc194d80} id="Vector 158" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
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
            <path d={svgPaths.p14c75880} id="Vector 175" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p24645000} id="Vector 176" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p17c9c480} id="Vector 177" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p3f34af00} id="Vector 178" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p37216380} id="Vector 179" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p8357f40} id="Vector 180" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
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
      <div className="absolute inset-[-3.13%_-2.04%_-3.12%_-2.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 18">
          <g id="contact-doodle">
            <path d={svgPaths.p30130930} id="Vector 159" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pf4ca840} id="Vector 160" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.pa89c600} id="Vector 161" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p2bee3b80} id="Vector 162" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
            <path d={svgPaths.p10fb7780} id="Vector 163" stroke="var(--stroke-0, #09543D)" strokeLinecap="round" />
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
    <div className="sticky box-border content-stretch flex items-center justify-between left-0 px-[32px] py-[24px] top-0 w-full max-w-[1440px] mx-auto z-50" data-name="Nav bar">
      <div className="absolute h-[72.858px] left-0 top-0 w-full max-w-[1440px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1441 73">
          <path d={svgPaths.p6fc9b80} fill="var(--fill-0, #FFFDF7)" id="Vector 192" />
        </svg>
      </div>
      <Logo />
      <Frame7 />
    </div>
  );
}

export default function AboutMe() {
  return (
      <>
      <SEO 
        title="About"
        description="Dan Liu - Senior Product Designer. Learn more about me and my projects."
        url="https://danliu.one/about"

      />

    <div className="bg-[#fffdf7] relative min-h-screen flex flex-col" data-name="About me">
      <NavBar />
      <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start px-8 lg:px-16 py-12 lg:py-20 max-w-[1440px] mx-auto w-full">
        <PolaroidPictureGroup />
        <Frame70 />
      </div>
      <p className="css-bqxx5z font-['Source_Sans_Pro:Regular',_sans-serif] leading-[normal] not-italic text-[#09543d] text-[18px] text-center tracking-[-0.5px] px-8 py-8">{`❤️ Designed and built by Dan to share the joy of creativity & show off works that she's proud of`}</p>
    </div>
        </>
  );
}

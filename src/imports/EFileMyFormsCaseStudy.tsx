import svgPaths from "./svg-l2lnvkoxyr";
import { WorkButton, AboutButton, ResumeButton, ContactButton } from "../components/NavBarButtons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollCursor from "./ScrollCursor";
import { useCustomCursor } from "../App";
import SEO from '../components/SEO';

import imgHeaderBgImg from "figma:asset/79a513c7c3d8cec8728c3b81edbb45ad0753eafc.png";
import imgJustinImage from "figma:asset/c059298f299b79c70e002cc398771b22a429b587.png";
import imgLeilaImage from "figma:asset/b197013400b37ac04a959f947440f73c4645c796.png";
import imgMoneyFlyingAwayDecorativeImg from "figma:asset/3d9e73df18803bc16f05124c54a434c8ef697c3c.png";
import imgOldTapeDecorativeImg from "figma:asset/f7d50618d83663382cd6fa873df234e27fe7374f.png";
import imgAnnoyedFaceDecorativeImg from "figma:asset/879ebf787960345594013a22da0892531d369ea6.png";
import imgLadderDecorativeImg from "figma:asset/c7b6160e8267c5476120f3adf88358420cbe65d6.png";
import imgGrowthDecorativeImg from "figma:asset/2c72c5c26299509490801cbe65c524e0c5d45645.png";
import imgOldEfmfHomePageBeforeLogin from "figma:asset/73e3173236b468c3eb096e203cb15331108fdc4a.png";
import imgOldEfmfHomePageAfterLogin from "figma:asset/071d0e577fa418acd358b5de54fc434aa3501245.png";
import imgOldEfmfCartPage from "figma:asset/d1c1e464e996db6574f5f201f46c63e85998cacb.png";
import imgOldEfmfOrderReviewPage from "figma:asset/0afa29c5858e4ee9a35c7e332966e4a0cb823bde.png";
import imgOldEfmfSignUpSuccessPage from "figma:asset/39cf82331f03a8c4b023a18a3ba6e82db0d39f84.png";
import imgDesignSystemShowcaseImg from "figma:asset/f518db6d25e7df170a6773d6216604eae2ecc187.png";
import imgOldIaNewCustomer from "figma:asset/4253a702aad526344357674f4a4e6c0f5ad77314.png";
import imgOldIaExistingCustomer from "figma:asset/dbb53c65ae9aa6c228a97ebf1b2e47027059e869.png";
import imgNewIaNewCustomer from "figma:asset/6d6f134ee145ce3c3cf1e1b5250a1573dd009516.png";
import imgNewIaExistingCustomer from "figma:asset/c58f76879dec439d092fb0bbab3c542d03ccaca8.png";
import imgOldSignUpFlow from "figma:asset/9e3808e6e484ca884965e623b391afa1820e50a0.png";
import imgNewSignupDesign from "figma:asset/4233a7cd2e8411a860c13e89a12c181d2d6a3ee8.png";
import imgOldEfmfCartPageAddOn from "figma:asset/cd000edf43fca049ee75f7d3bff82b50807d84e7.png";
import imgOldEfmfOrderReviewPageDelayProcessing from "figma:asset/465d87af4f04461a2cdd541d272699324525cf94.png";
import imgCheckoutRedesign from "figma:asset/3ccc1d20db2bf79e483adebb6c58345d8af4417d.png";
import imgRedditEfmFpost from "figma:asset/158c2de71a55d5ebeaddb2e21aef62c7ea7afe72.png";
import imgEfmfPizzaParty from "figma:asset/e00eab477c2334ef7f02dd57c8b00bfdbd705145.png";
import imgOnlineForumScreenshot from "figma:asset/62eb07ea530c817b07b47304e13f7ded30197d78.png";
import img1099ProSearchResult from "figma:asset/9be60b40bd35a7930623446980625f2ca1b4aa1d.png";
import imgEFMFPricing from "figma:asset/89d1bea40c1db613a8a45e373711c65dd96853cb.png";
import imgIRSPenalty from "figma:asset/2adcc63aebf2beca2d405417ac43e46d6fdeab24.png";
import img1099Mkt from "figma:asset/ea61a84de65b96d850e0d9d3b871d7ca50702db3.png";
import imgTinkmkt from "figma:asset/45bdb24783dee504dd3ccf950829a78788240368.png";
import imgUpmkt from "figma:asset/ab1338593d4f1e51b5baa22b219b7509d196f65f.png";
import imgEfmfmkt from "figma:asset/5af4195e554f502f2976c8ffb5c1cb48d3f6b995.png";
import ModernizationStrategy from "../assets/GlobalModernizationStrategy.mp4";

function Container() {
  return (
    <div className="content-stretch flex flex-col md:flex-row font-['Source_Sans_Pro:Regular',sans-serif] gap-[16px] md:gap-[40px] items-start justify-center not-italic relative shrink-0 text-[#51596d] text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Container">
      <p className="relative shrink-0">eFileMyForms redesign</p>
      <p className="relative shrink-0">2022 - 2023</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Container">
      <Container />
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#2c2c2c] text-[32px] md:text-[40px] w-[min-content]">Made tax filing easy and modern for stressed small business owners</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[20px] md:text-[24px] text-nowrap tracking-[-0.5px] whitespace-pre">{`23% `}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector"></g>
          </svg>
        </div>
        <div className="absolute inset-[16.667%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3d49d880} fill="var(--fill-0, #189E42)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container2 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">ARR Growth</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[20px] md:text-[24px] text-nowrap tracking-[-0.5px] whitespace-pre">44%</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector"></g>
          </svg>
        </div>
        <div className="absolute inset-[16.667%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3d49d880} fill="var(--fill-0, #189E42)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container4 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">New signups</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[20px] md:text-[24px] text-nowrap tracking-[-0.5px] whitespace-pre">15</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector"></g>
          </svg>
        </div>
        <div className="absolute inset-[16.667%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3d49d880} fill="var(--fill-0, #189E42)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container6 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">NPS points</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[20px] md:text-[24px] text-nowrap tracking-[-0.5px] whitespace-pre">50+</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container8 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">Pages redesigned</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-wrap md:flex-nowrap items-start justify-between gap-[16px] md:gap-[24px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="relative content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center px-4 md:px-8 lg:px-16 py-8 md:py-16 w-full max-w-[507px] mx-auto" data-name="Header Text Container">
      <Container1 />
      <Container10 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f0fbfb] min-h-[600px] md:h-[960px] overflow-clip relative shrink-0 w-full" data-name="header">
      <div className="absolute bottom-0 h-full left-0 w-full" data-name="HeaderBGImg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeaderBgImg} />
      </div>
    </div>
  );
}

function RolesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] w-full md:w-[157px] whitespace-pre" data-name="Roles container">
      <p className="font-['Sora:Light',sans-serif] font-light relative shrink-0 text-[#51596d]">👩🏻‍💻 Roles</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic relative shrink-0 text-[#2c2c2c]">Solo Product Designer</p>
    </div>
  );
}

function TimelineDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre" data-name="Timeline details container">
      <p className="relative shrink-0">{`Design MVP: July - October 2022 `}</p>
      <p className="relative shrink-0">{`Checkout experience upgrade: October  2022 - February 2023 `}</p>
    </div>
  );
}

function TimelineContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full md:w-auto" data-name="Timeline container">
      <p className="font-['Sora:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">⏳ Timeline</p>
      <TimelineDetailsContainer />
    </div>
  );
}

function CollaboratorsDetailsContainer() {
  return (
    <div className="content-start flex flex-wrap font-['Source_Sans_Pro:Regular',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] w-full whitespace-pre" data-name="Collaborators details container">
      <p className="relative shrink-0">Product Manager</p>
      <p className="relative shrink-0">Product Owner</p>
      <p className="relative shrink-0">Developers</p>
      <p className="relative shrink-0">QA Engineers</p>
      <p className="relative shrink-0">Content Designer</p>
      <p className="relative shrink-0">Technical Writer</p>
      <p className="relative shrink-0">Marketing</p>
      <p className="relative shrink-0">Support</p>
      <p className="relative shrink-0">Legal</p>
    </div>
  );
}

function CollaboratorsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full md:w-[477px]" data-name="Collaborators container">
      <p className="font-['Sora:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">🤘🏻 Collaborators</p>
      <CollaboratorsDetailsContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start justify-between w-full max-w-[1200px] relative rounded-[8px] shrink-0" data-name="Header container">
      <RolesContainer />
      <TimelineContainer />
      <CollaboratorsContainer />
    </div>
  );
}

function ContextDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Context details container">
      <p className="basis-0 font-['Source_Sans_Pro:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">
        <a href="https://sovos.com/" target="_blank" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline" >Sovos</a>
        <span>{` acquired a popular provider, `}</span>
        <a href="https://1099pro.com/" target="_blank" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">1099 Pro</a>
        <span>{`, to expand services from its traditionally high-touch enterprise solutions to self-service e-commerce solutions. `}</span>
        <a href="https://efilemyforms.com/" target="_blank" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">{`eFileMyForms `}</a>
        <span>{`was 1099 Pro's signature web-based software that helped small business owners and accountants to manage their 1099 tax forms for employees, vendors, and customers. eFileMyForms urgently needed new brand strategies to promote Sovos in the e-commerce market and upgrade of its experience for its seasonal customer base. `}</span>
      </p>
    </div>
  );
}

function InsightGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Insight group">
      <ContextDetailsContainer />
    </div>
  );
}

function ContextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start w-full max-w-[1200px] relative shrink-0" data-name="Context container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">Context</p>
      <InsightGroup />
    </div>
  );
}

function SummaryDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Summary details container">
      <p className="basis-0 font-['Source_Sans_Pro:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px]">
        <span>{`I worked with a newly formed team and led a comprehensive redesign for Sovos' 1st e-commerce product, eFileMyForms. The project started as a rebranding effort to boost brand credibility in the competitive landscape, but I was able to squeeze in many critical usability improvements. Shortly before the 2023 tax season, we delivered `}</span>
        <span className="text-[#017780]">{`2 major releases `}</span>
        <span>{`that upgraded `}</span>
        <span className="text-[#017780]">50+ pages</span>
        <span>{` and resulted in unprecedented impact: a `}</span>
        <span className="text-[#017780]">23% increase in ARR</span>
        <span>{`, a `}</span>
        <span className="text-[#017780]">44% increase in signup</span>
        <span>{`, and a `}</span>
        <span className="text-[#017780]">15-point increase</span>
        <span>{` in NPR. Such transformative success led to investment in e-commerce products in Sovos, and my timeless design from this project later became the design blueprint for Sovos' global e-commerce portfolio.`}</span>
      </p>
    </div>
  );
}

function InsightGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Insight group">
      <SummaryDetailsContainer />
    </div>
  );
}

function SummaryContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start w-full max-w-[1200px] relative shrink-0" data-name="Summary container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">Summary</p>
      <InsightGroup1 />
    </div>
  );
}

function JustinDetailsContainer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pl-[32px] pr-[24px] pt-[48px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Justin details container">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.2px] whitespace-pre">Justin</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] text-nowrap tracking-[-0.1px] whitespace-pre">{`Owner @ Justin's Barber Shop `}</p>
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap">
        <ul className="list-disc ml-[-1.5em]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[normal]">Manages all business aspects and daily duties of running a barber shop</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[normal]">Unfamiliar with tax filing</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[normal]">Can't afford to hire an accountant</span>
          </li>
        </ul>
      </div>
      <div className="absolute h-[81px] left-[29.5px] top-[-40px] w-[68px]" data-name="JustinImage">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[148.61%] left-[-26.47%] max-w-none top-[-48.61%] w-[137.5%]" src={imgJustinImage} />
        </div>
      </div>
    </div>
  );
}

function JustinContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:w-auto" data-name="Justin container">
      <JustinDetailsContainer />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-center text-nowrap whitespace-pre">Small business owners</p>
    </div>
  );
}

function LeilaDetailsContainer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pl-[32px] pr-[24px] pt-[48px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Leila details container">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.2px] whitespace-pre">Leila</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] text-nowrap tracking-[-0.1px] whitespace-pre">Accountant @ DLC Accounting Services</p>
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap">
        <ul className="list-disc ml-[-1.5em]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[normal]">Has been managing the same 15 companies' tax forms for 6 years</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[normal]">Familiar with tax requirements</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[normal]">Handles large volumes on tight deadlines</span>
          </li>
        </ul>
      </div>
      <div className="absolute h-[76px] left-[31.5px] top-[-35px] w-[68px]" data-name="LeilaImage">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.34%] left-0 max-w-none top-[-50.34%] w-[113.06%]" src={imgLeilaImage} />
        </div>
      </div>
    </div>
  );
}

function LeilaContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:w-auto" data-name="Leila container">
      <LeilaDetailsContainer />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-center text-nowrap whitespace-pre">Accountant (power user)</p>
    </div>
  );
}

function PersonaDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[40px] items-start justify-between relative shrink-0 w-full" data-name="Persona details container">
      <JustinContainer />
      <LeilaContainer />
    </div>
  );
}

function PersonaContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[64px] items-start w-full max-w-[1200px] relative shrink-0" data-name="Persona container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">Persona</p>
      <PersonaDetailsContainer />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-full">{`As the gig economy grows and tax filing gets more complex, it's important to simplify the tax filing experience for small business owners who may not be knowledgeable in taxes. Simplifying the experience for them also helps power users like accountants to get their job done faster, especially working during busy tax season and with a large quantity of clients. `}</p>
    </div>
  );
}

function TaxFeedback1Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Tax feedback 1 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] w-[min-content]">Mistakes come with steep penalties</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">
            <p className="leading-[normal]">Users like Justin may have to file their taxes right before deadlines because they need to prioritize daily duties and wait for financial records. The stress could make them more prone to errors and penalties.</p>
          </div>
          <div className="absolute left-[30.5px] size-[66.67px] top-[-26px]" data-name="MoneyFlyingAwayDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoneyFlyingAwayDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxFeedback2Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Tax feedback 2 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] text-nowrap whitespace-pre">Tax filing is outdated and clunky</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">
            <p className="leading-[normal]">{`The tax industry's commonly outdated and clunky solutions don't help users like Justin or Leila to finish their tax filing quickly and easily so they can get back to their daily responsibilities. `}</p>
          </div>
          <div className="absolute left-[30.17px] size-[66.67px] top-[-26px]" data-name="OldTapeDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOldTapeDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxFeedback3Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Tax feedback 3 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] text-nowrap whitespace-pre">It's tedious and difficult to file</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">
            <p className="leading-[normal]">It takes a village to learn the latest tax rules and file taxes correctly. Hiring professional help isn't always affordable for mom-and-pop shops like Justin's, and outdated tax solutions only made it harder.</p>
          </div>
          <div className="absolute left-[30.83px] size-[66.67px] top-[-26px]" data-name="AnnoyedFaceDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnnoyedFaceDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxFeedbackDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-center relative shrink-0 w-full" data-name="Tax feedback details container">
      <TaxFeedback1Container />
      <TaxFeedback2Container />
      <TaxFeedback3Container />
    </div>
  );
}

function TaxFeedbackContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-start w-full max-w-[1200px] relative shrink-0" data-name="Tax feedback container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">What are people saying about tax?</p>
      <TaxFeedbackDetailsContainer />
    </div>
  );
}

function EfmfFeedback1Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="EFMF feedback 1 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] w-[min-content]">EFMF was popular, but the support cost was unsustainable</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">
            <p className="leading-[normal]">Customers called support to guide them through the process. 20~30 min phone calls disrupt the economics of small orders of 2~3 forms (~$14).</p>
          </div>
          <div className="absolute left-[30.5px] size-[66.67px] top-[-26px]" data-name="MoneyFlyingAwayDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoneyFlyingAwayDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EfmfFeedback2Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="EFMF feedback 2 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] w-[min-content]">In a growing eFile market, EFMF lagged behind competitors</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[0px] w-[min-content]">
            <p className="leading-[normal] text-[16px] md:text-[18px]">
              <span>{`Growing eFile needs created opportunities and competition. But EFMF had limited market visibility and a smaller customer base than competitors like `}</span>
              <a href="https://www.tax1099.com/"  target="_blank" className="[text-underline-position:from-font] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] not-italic underline">Tax1099</a>.
            </p>
          </div>
          <div className="absolute left-[30.17px] size-[66.67px] top-[-26px]" data-name="LadderDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLadderDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EfmfFeedback3Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="EFMF feedback 3 container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[48px] px-[24px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#017780] text-[16px] md:text-[18px] w-[min-content]">Lost revenue opportunities from low add-on conversion</p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#51596d] text-[0px] w-[min-content]">
            <p className="leading-[normal] text-[16px] md:text-[18px]">
              <span>{`Low add-on conversion was significant because raising base prices could hurt retention in an e-commerce market with similarly-priced competitors like `}</span>
              <a href="https://www.efile4biz.com/"  target="_blank" className="[text-underline-position:from-font] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] not-italic underline">eFile4Biz</a>.
            </p>
          </div>
          <div className="absolute left-[30.83px] size-[66.67px] top-[-26px]" data-name="GrowthDecorativeImg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGrowthDecorativeImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EfmfFeedbackDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-center relative shrink-0 w-full" data-name="EFMF feedback details container">
      <EfmfFeedback1Container />
      <EfmfFeedback2Container />
      <EfmfFeedback3Container />
    </div>
  );
}

function EfmfFeedbackContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-start w-full max-w-[1200px] relative shrink-0" data-name="EFMF feedback container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">What is Sovos saying about eFileMyForms (EFMF)?</p>
      <EfmfFeedbackDetailsContainer />
    </div>
  );
}

function InternalStakeholderInterviewsContainer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Internal stakeholder interviews container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] tracking-[-0.5px]">{`🎙 Internal stakeholder interviews & alignment meetings`}</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">Recognized user behaviors, identified user pain points, and aligned on business objectives.</p>
    </div>
  );
}

function MarketResearchContainer() {
  const [showForumImage, setShowForumImage] = useState(false);
  const [showSearchImage, setShowSearchImage] = useState(false);

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full md:w-[618px]" data-name="Market research container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">💹 Market research</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px] w-[min-content]">
        <span>{`Analyzed competitive landscape, industry trends, and EFMF's market position through competitor analysis, `}</span>
        <span 
          className="[text-underline-position:from-font] decoration-solid underline cursor-pointer"
          onMouseEnter={() => setShowForumImage(true)}
          onMouseLeave={() => setShowForumImage(false)}
        >
          online forums
        </span>
        <span>{`, and `}</span>
        <span 
          className="[text-underline-position:from-font] decoration-solid underline cursor-pointer"
          onMouseEnter={() => setShowSearchImage(true)}
          onMouseLeave={() => setShowSearchImage(false)}
        >
          search behavior analysis
        </span>.
      </p>
      {showForumImage && (
        <div className="absolute top-0 right-0 mt-[calc(80px+1.5em)] pointer-events-none z-10">
          <img 
            src={imgOnlineForumScreenshot} 
            alt="Online forum screenshot" 
            className="w-[45vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
      {showSearchImage && (
        <div className="absolute top-0 right-0 mt-[calc(80px+1.5em)] pointer-events-none z-10">
          <img 
            src={img1099ProSearchResult} 
            alt="1099 search behavior analysis" 
            className="w-[30vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

function UxEvaluationContainer() {
  const [showPricingImage, setShowPricingImage] = useState(false);

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full md:w-[578px]" data-name="UX evaluation container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">🕵🏻‍♀️ End-to-end UX evaluation</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px] w-[min-content]">
        <span>{`Conducted comprehensive user journey analysis across all touch points, including `}</span>
        <span 
          className="[text-underline-position:from-font] decoration-solid underline cursor-pointer"
          onMouseEnter={() => setShowPricingImage(true)}
          onMouseLeave={() => setShowPricingImage(false)}
        >
          pricing structure
        </span>, user acquisition flows, and filing flow.
      </p>
      {showPricingImage && (
        <div className="absolute top-0 left-0 mt-[calc(80px+1.5em)] pointer-events-none z-10">
          <img 
            src={imgEFMFPricing} 
            alt="EFMF pricing structure" 
            className="w-[50vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

function ProductUsageAnalysisContainer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full md:w-[547px]" data-name="Product usage analysis container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">🧑‍💻 Product usage analysis</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] w-[min-content]">Partnered with developers to analyze product metrics, user behavior patterns, traffics, and feature adoption.</p>
    </div>
  );
}

function ComplianceResearchContainer() {
  const [showIRSPenaltyImage, setShowIRSPenaltyImage] = useState(false);

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full md:w-[693px]" data-name="Compliance research container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">⚖️ Compliance research</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px] w-[min-content]">
        <span>{`Research `}</span>
        <span className="[text-underline-position:from-font] decoration-solid">current tax regulations</span>
        <span>{`, `}</span>
        <span 
          className="[text-underline-position:from-font] decoration-solid underline cursor-pointer"
          onMouseEnter={() => setShowIRSPenaltyImage(true)}
          onMouseLeave={() => setShowIRSPenaltyImage(false)}
        >
          IRS filing requirements
        </span>, and the compliance landscape through official documentation, regulatory updates, and internal subject matter experts.
      </p>
      {showIRSPenaltyImage && (
        <div className="absolute top-0 left-0 mt-[calc(80px+1.5em)] pointer-events-none z-10">
          <img 
            src={imgIRSPenalty} 
            alt="IRS filing penalty calculation" 
            className="w-[30vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

function InsightsDetailsContainer() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Insights details container">
      <InternalStakeholderInterviewsContainer />
      <MarketResearchContainer />
      <UxEvaluationContainer />
      <ProductUsageAnalysisContainer />
      <ComplianceResearchContainer />
    </div>
  );
}

function InsightsContainer() {
  return (
    <div className="bg-[#f9f8f7] box-border content-stretch flex flex-col gap-[16px] items-start w-full max-w-[1200px] px-[16px] md:px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Insights container">
      <div aria-hidden="true" className="absolute border border-[#e6e3df] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Sora:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">How did I gather these insights?</p>
      <InsightsDetailsContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] md:gap-[56px] items-center justify-center px-4 md:px-8 py-[48px] md:py-[64px] relative shrink-0 w-full" data-name="Main container">
      <HeaderContainer />
      <ContextContainer />
      <SummaryContainer />
      <PersonaContainer />
      <TaxFeedbackContainer />
      <EfmfFeedbackContainer />
      <InsightsContainer />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre w-full max-w-[1200px]" data-name="Header">
      <p className="relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">🌟 Design highlights 1.</p>
      <p className="relative shrink-0 text-[#017780] text-[24px] md:text-[32px] tracking-[-0.5px]">Modernized branding</p>
    </div>
  );
}

function BeforeDesignItems() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start overflow-x-auto px-px py-0 relative shrink-0" data-name="Before Design Items">
      <div className="h-[687px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.466px_0px_rgba(0,0,0,0.35)] shrink-0 w-[600px] md:w-[800px]" data-name="OldEFMFHomePageBeforeLogin">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgOldEfmfHomePageBeforeLogin} />
      </div>
      <div className="h-[687px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.466px_0px_rgba(0,0,0,0.35)] shrink-0 w-[600px] md:w-[800px]" data-name="OldEFMFHomePageAfterLogin">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgOldEfmfHomePageAfterLogin} />
      </div>
      <div className="h-[709px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.466px_0px_rgba(0,0,0,0.35)] shrink-0 w-[600px] md:w-[800px]" data-name="OldEFMFCartPage">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgOldEfmfCartPage} />
      </div>
      <div className="h-[575px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.466px_0px_rgba(0,0,0,0.35)] shrink-0 w-[600px] md:w-[800px]" data-name="OldEFMFOrderReviewPage">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgOldEfmfOrderReviewPage} />
      </div>
      <div className="h-[491px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.466px_0px_rgba(0,0,0,0.35)] shrink-0 w-[600px] md:w-[800px]" data-name="OldEFMFSignUpSuccessPage">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgOldEfmfSignUpSuccessPage} />
      </div>
    </div>
  );
}

function BeforeDesignSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Before Design Section">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18.333px] text-nowrap tracking-[-0.2859px] whitespace-pre">Before my design</p>
      <BeforeDesignItems />
    </div>
  );
}

function DesignSystemShowcase() {
  return (
    <div className="bg-[#f9f8f7] box-border content-stretch flex gap-[16px] md:gap-[24px] min-h-[400px] md:h-[772px] items-start p-[16px] md:p-[24px] relative rounded-[8px] shrink-0" data-name="Design system showcase">
      <div aria-hidden="true" className="absolute border-[#e6e3df] border-[0.561px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BeforeDesignSection />
    </div>
  );
}

function ContentContainer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { setCustomCursorVisible } = useCustomCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCustomCursorVisible(false);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCustomCursorVisible(true);
  };

  return (
    <div 
      className="content-stretch flex gap-[24px] md:gap-[40px] items-start overflow-x-auto relative shrink-0 w-full max-w-[1200px] cursor-none" 
      data-name="Content Container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-auto lg:h-[772px] relative rounded-[8px] shrink-0 w-[1200px]" data-name="DesignSystemShowcaseImg">
        <img alt="" className="relative inset-0 w-full h-full object-contain pointer-events-none rounded-[8px]" src={imgDesignSystemShowcaseImg} />
      </div>
      <DesignSystemShowcase />
      
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ScrollCursor />
        </div>
      )}
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 tracking-[-0.5px]" data-name="Problems Section">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap whitespace-pre">{`Problems: `}</p>
      <ul className="block font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[0px] w-full list-disc">
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#017780]">Outdated visual design</span>
          <span>{` - left an unprofessional, untrustworthy first impression that deterred prospects from signing up.`}</span>
        </li>
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#017780]">Market demands</span>
          <span>{` - people have been asking for modern tax solutions, and EFMF's competitors are offering them.`}</span>
        </li>
        <li className="leading-[normal] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic text-[#017780]">Accessibility concern</span>
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{` - issues like gradient`}</span>
          <span>{` and`}</span>
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{` low contrast could make reading difficult.`}</span>
        </li>
      </ul>
    </div>
  );
}

function SolutionsItems() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-between min-h-px min-w-px relative shrink-0" data-name="Solutions Items">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px] tracking-[-0.5px] w-full">
        Partnered with product and marketing team members<span>{` to`}</span>
        <span className="text-[#017780]">{` design new branding `}</span>
        <span>{`that `}</span>will leave<span>{` a`}</span>n impression that is <span className="text-[#017780]">modern</span>
        <span>{`, `}</span>
        <span className="text-[#017780]">professional</span>
        <span>{`, and even a little `}</span>
        <span className="text-[#017780]">playful</span>
        <span>{`, while preserving eFileMyForms' original identity (`}</span>
        <span>{`the `}</span>
        <span>{`lightning bolt `}</span>
        <span>{`logo `}</span>symbolizing speed and reliability).
      </p>
      <p className="font-['Source_Sans_Pro:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">Tax is already tedious. Why not make it more exciting? 😉</p>
      <div className="absolute h-[31px] left-[80px] top-[98.57px] w-[78px]">
        <div className="absolute inset-[-1.61%_-0.7%_-1.61%_-4.1%]" style={{ "--stroke-0": "rgba(117, 117, 117, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 32">
            <path d={svgPaths.p1c7d2980} fill="var(--stroke-0, #757575)" id="Vector 17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolutionsSection() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Solutions Section">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">{`Solution: `}</p>
      <SolutionsItems />
    </div>
  );
}

function ProblemsAndSolutionsSection() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[56px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Problems and Solutions Section">
      <ProblemsSection />
      <SolutionsSection />
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="bg-[#f5fffe] relative shrink-0 w-full h-full overflow-hidden" data-name="Main Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center px-4 md:px-8 lg:px-16 py-[48px] md:py-[64px] relative w-full">
          <Header1 />
          <ContentContainer />
          <ProblemsAndSolutionsSection />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre" data-name="Text Container">
      <p className="relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">🌟 Design highlights 2.</p>
      <p className="relative shrink-0 text-[#017780] text-[24px] md:text-[32px] tracking-[-0.5px]">{`Seamless journey & more organized information architecture`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <TextContainer />
    </div>
  );
}

function ProblemContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 tracking-[-0.5px]" data-name="Problem Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap whitespace-pre">{`Problem: `}</p>
      <ul className="block font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[0px] w-full list-disc">
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#ff3030]">The cluttered and dense content</span>
          <span>{` created cognitive overload, preventing prospective and existing customers from easily locating information relevant to their needs.`}</span>
        </li>
        <li className="leading-[normal] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span>{`Customers `}</span>
          <span className="text-[#ff3030]">called support</span>
          <span>{` to show them `}</span>
          <span className="text-[#ff3030]">how to start</span>.
        </li>
      </ul>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center relative shrink-0 w-full max-w-[1200px]" data-name="Main Container">
      <div className="w-full h-auto relative rounded-[8px] shrink-0" data-name="oldIANewCustomer">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgOldIaNewCustomer} />
      </div>
      <div className="w-full h-auto relative rounded-[8px] shrink-0" data-name="oldIAExistingCustomer">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgOldIaExistingCustomer} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <ProblemContainer />
      <MainContainer2 />
    </div>
  );
}

function SolutionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-nowrap tracking-[-0.5px]" data-name="Solution Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] whitespace-pre">{`Solution: `}</p>
      <ul className="[white-space-collapse:collapse] block font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[0px] list-disc">
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic text-[#017780]">{`Seamless end-to-end experience `}</span>
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{`that guides users from `}</span>
          <span>{`the `}</span>
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{`purchase decision through tax filing with focused content and `}</span>clear<span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{` guidance at every step.`}</span>
        </li>
        <li className="leading-[normal] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#017780]">Restructured information architecture</span>
          <span>{` that highlights essential information while keeping secondary resources accessible .`}</span>
        </li>
      </ul>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <div className="w-full h-auto relative rounded-[8px] shrink-0" data-name="NewIANewCustomer">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgNewIaNewCustomer} />
      </div>
      <div className="w-full h-auto relative rounded-[8px] shrink-0" data-name="NewIAExistingCustomer">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgNewIaExistingCustomer} />
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Solution">
      <SolutionContainer />
      <Container13 />
    </div>
  );
}

function SecondaryFrame() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Secondary Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center px-4 md:px-8 lg:px-16 py-[48px] md:py-[64px] relative w-full">
          <Container11 />
          <Container12 />
          <Solution />
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre w-full max-w-[1200px]" data-name="Header">
      <p className="relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">🌟 Design highlights 3.</p>
      <p className="relative shrink-0 text-[#017780] text-[24px] md:text-[32px] tracking-[-0.5px]">Global modernization strategy</p>
    </div>
  );
}

function ProblemsContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 tracking-[-0.5px]" data-name="Problems Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap whitespace-pre">{`Problems: `}</p>
      <ul className="block font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[0px] w-full list-disc">
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#ff3030]">Resource constraints</span>
          <span>{` - small team with only 1 front-end developer.`}</span>
        </li>
        <li className="leading-[normal] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#ff3030]">Tight deadline</span>
          <span>{` - full-site redesign in 8 months.`}</span>
        </li>
        <li className="leading-[normal] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px] md:text-[18px]">
          <span className="text-[#ff3030]">Technical constraints</span>
          <span>{` - older codebase incompatible with Sovos' internal component library without major refactoring that risked site stability and timeline.`}</span>
        </li>
      </ul>
    </div>
  );
}

function SolutionsContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 tracking-[-0.5px]" data-name="Solutions Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap whitespace-pre">{`Solution: `}</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[0px] text-[16px] md:text-[18px] w-full">
        <span>{`Partnered with products and developers to create `}</span>
        <span className="text-[#017780]">phased modernization strategy</span>
        <span>{` that achieved visual transformation without extensive effort. By breaking work into focused phases - `}</span>
        <span className="text-[#017780]">global nav/footer → distraction cleanup → fonts/tables</span>
        <span>{` - and leveraging CSS modifications to existing components, each release delivered instant user value while minimizing development scope and technical risk.`}</span>
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[56px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <ProblemsContainer />
      <SolutionsContainer />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f5fffe] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center px-4 md:px-8 lg:px-16 py-[48px] md:py-[64px] relative w-full">
          <Header2 />
          <div className="w-full h-auto md:h-[938px] relative rounded-[8px] shrink-0 items-center justify-center max-w-[1200px]" data-name="global mdoernization strategy demo video">
            <video autoPlay controls className="relative max-w-full h-auto md:h-full object-contain rounded-[8px]" controlsList="nodownload" loop playsInline>
              <source src={ModernizationStrategy} />
            </video>
          </div>
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre" data-name="Container">
      <p className="relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">🌟 Design highlights 4.</p>
      <p className="relative shrink-0 text-[#017780] text-[24px] md:text-[32px] tracking-[-0.5px]">Single-step, guided signup to start with ease</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[16px] md:text-[18px] tracking-[-0.5px]" data-name="Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-nowrap whitespace-pre">{`Problem: `}</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] w-full">
        <span className="text-[#ff3030]">3-step signup with unnecessary data collection (18 data fields)</span>
        <span>{` hurt conversion.`}</span>
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <Container18 />
      <div className="w-full h-auto relative rounded-[8px] shrink-0" data-name="OldSignUpFlow">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgOldSignUpFlow} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0 h-full" data-name="Container">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full h-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Removed 14 unused data fields</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Partnered with product, devs, and support to identify unused data and remove them from signup requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Container">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Streamline 3 steps into 1</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Customers can now create an account in a single screen, dramatically reducing abandonment and friction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Container">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Mobile-responsive signup and login</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Recognizing high mobile signup volume, the redesigned flow is now responsive, allowing users to sign up from anywhere without friction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Container">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Better product insights via new URL architecture</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Unique URLs for each step provided product and marketing teams with visibility into where users drop off, empowering data-driven improvements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">{`Solution: `}</p>
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <Container25 />
      <div className="w-full h-auto relative shrink-0" data-name="NewSignupDesign">
        <div className="relative inset-0 w-full h-auto overflow-hidden pointer-events-none">
          <img alt="" className="relative w-full h-auto" src={imgNewSignupDesign} />
        </div>
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] tracking-[-0.5px] w-full">{`This streamlined approach achieved a core business goal, increasing signup conversion, while establishing a better URL architecture for data collection. Removing unnecessary data collection also reduced compliance exposure and security risk. While full-site responsiveness wasn't feasible due to limited bandwidth, strategically investing in critical user entry points improved accessibility and mobile conversion.`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center px-4 md:px-8 lg:px-16 py-[48px] md:py-[64px] relative w-full">
          <Container17 />
          <Container19 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre w-full max-w-[1200px]" data-name="Header">
      <p className="relative shrink-0 text-[#51596d] text-[16px] md:text-[18px]">🌟 Design highlights 5.</p>
      <p className="relative shrink-0 text-[#017780] text-[24px] md:text-[32px] tracking-[-0.5px]">Guided secure checkout to pay with confidence</p>
    </div>
  );
}

function ProblemTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[16px] md:text-[18px] tracking-[-0.5px]" data-name="Problem Title">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-nowrap whitespace-pre">{`Problem: `}</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#51596d] w-full">
        <span>{`Critical add-ons and options were `}</span>
        <span className="text-[#ff3030]">buried and poorly guided</span>.
      </p>
    </div>
  );
}

function ProblemContent() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-start relative shrink-0 w-full" data-name="Problem Content">
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="OldEFMFCartPageAddOn">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgOldEfmfCartPageAddOn} />
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="OldEFMFOrderReviewPageDelayProcessing">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgOldEfmfOrderReviewPageDelayProcessing} />
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Problem Section">
      <ProblemTitle />
      <ProblemContent />
    </div>
  );
}

function SolutionColumn() {
  return (
    <div className="basis-0 bg-white grow min-h-[128px] min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Solution Column">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Surfaced add-ons in order review</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{`Moved add-ons from buried My Cart page to a dedicated Order Review section,  added conditional logic to recommend add-ons based on chosen forms, and added real-time display on applicable forms and add-on pricing.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionColumn1() {
  return (
    <div className="basis-0 bg-white grow min-h-[128px] min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Solution Column">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Redesigned delay processing options</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Replaced confusing technical descriptions with clear, friendly content, and added conditional prompts that explain when processing should start to allow time for TINCheck.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionColumn2() {
  return (
    <div className="basis-0 bg-white grow min-h-[128px] min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Solution Column">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">Celebrated purchase milestones</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Redesigned Order Received page to acknowledge the order and provide clear guidance on next steps. This reduces post-purchase anxiety and decreases support ticket volume.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionColumn3() {
  return (
    <div className="basis-0 bg-white grow min-h-[128px] min-w-[250px] relative rounded-[8px] shadow-[-1px_-1px_8px_1.9px_rgba(173,195,248,0.12),2px_3.467px_8px_1.9px_rgba(173,195,248,0.12)] shrink-0" data-name="Solution Column">
      <div className="min-h-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] gap-[4px] items-start min-h-inherit min-w-inherit not-italic px-[24px] py-[16px] relative text-[16px] md:text-[18px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#017780] w-full">{`Relocated terms of service `}</p>
          <div className="leading-[0] relative shrink-0 text-[#51596d] tracking-[-0.5px] w-full">
            <p className="leading-[normal]">Partnered with legal and marketing to consolidate terms of service and move the acceptance checkbox from checkout to signup.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionContent() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Solution Content">
      <SolutionColumn />
      <SolutionColumn1 />
      <SolutionColumn2 />
      <SolutionColumn3 />
    </div>
  );
}

function SolutionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Solution Title">
      <p className="capitalize font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16px] md:text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">{`Solution: `}</p>
      <SolutionContent />
    </div>
  );
}

function SolutionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Solution Section">
      <SolutionTitle />
      <div className="w-full h-auto relative shrink-0" data-name="checkoutRedesign">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none" src={imgCheckoutRedesign} />
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] tracking-[-0.5px] w-[min-content]">{`As Sovos' first checkout experience design, this became the foundation for e-commerce checkout patterns across Sovos' global product portfolio.`}</p>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="bg-[#f5fffe] relative shrink-0 w-full" data-name="Main Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center px-4 md:px-8 lg:px-16 py-[48px] md:py-[64px] relative w-full">
          <Header3 />
          <ProblemSection />
          <SolutionSection />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] md:gap-[40px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#51596d] text-[0px] tracking-[-0.5px] w-full">
        <p className="leading-[normal] mb-0 text-[16px] md:text-[18px] whitespace-pre-wrap">
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{`In 4 months, we delivered the phase 1 redesign - a design MVP.  5 months later, we delivered the phase 2 - the checkout experience upgrade. In total, we redesigned 50+ pages with many major experience improvements, all within tight timeline and resources. This is unprecedented at Sovos, especially for a newly formed team`}</span>.<span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic"> </span>
        </p>
        <p className="leading-[normal] mb-0 text-[16px] md:text-[18px]">&nbsp;</p>
        <p className="leading-[normal] mb-0 text-[16px] md:text-[18px]">Customers reacted positively to this release, and the business metrics reflected it:</p>
        <ul className="list-disc ml-[-1.5em] mb-0">
          <li className="leading-[normal] ms-[27px] text-[16px] md:text-[18px]">
            <span className="leading-[normal] text-[16px] md:text-[18px]">glowing reviews</span>
          </li>
          <li className="leading-[normal] ms-[27px] text-[16px] md:text-[18px]">
            <span className="leading-[normal] text-[16px] md:text-[18px]">NPS: 15-point increase</span>
          </li>
          <li className="leading-[normal] ms-[27px] text-[16px] md:text-[18px]">
            <span className="leading-[normal] text-[16px] md:text-[18px]">ARR: 23% increase</span>
          </li>
          <li className="leading-[normal] ms-[27px] text-[16px] md:text-[18px]">
            <span className="leading-[normal] text-[16px] md:text-[18px]">Signup: 44% increase</span>
          </li>
          <li className="leading-[normal] ms-[27px] text-[16px] md:text-[18px]">
            <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{`and... `}</span>overwhelmed server due to popularity<span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{` (a good problem to have 😉)`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[16px] md:text-[18px]">&nbsp;</p>
        <p className="leading-[normal] text-[16px] md:text-[18px]">
          <span className="font-['Source_Sans_Pro:Regular',sans-serif] not-italic">{`A client told our CMO that they noticed the new site and were thrilled with the upgrades. It didn't confuse them at all... they truly believe in our product and show unwavering loyalty`}</span>.
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <div className="w-full md:w-auto h-auto md:h-[328px] relative rounded-[4px] shadow-[0px_4.938px_14.815px_0px_rgba(0,0,0,0.35)] shrink-0 md:shrink" data-name="redditEFMFpost">
        <img alt="" className="relative inset-0 w-full h-auto md:w-[359px] md:h-[328px] object-contain pointer-events-none rounded-[4px]" src={imgRedditEfmFpost} />
      </div>
    </div>
  );
}

function InsightGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Insight group">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#017780] text-[20px] md:text-[24px] w-full">Did the new design go viral?</p>
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 font-['Source_Sans_Pro:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] tracking-[-0.5px]">
        <p className="mb-0">In the beginning, we felt unsure if we could accomplish so much with limited resources and a fully remote team. In addition, some of the code and infrastructure were ancient and untouchable. We had to abandon progress and design last-minute alternatives due to unexpected technical issues.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Because of the complexity of tax filing, every design decision required approval from marketing, legal, product, content, and support.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">To ensure timely delivery and a smooth experience across the entire user journey, I wore many hats, including: product owner, QA engineer, product manager, developer and manage projects like: emails, back office management, and marketing messaging. Coding dark mode for product emails was a pain...</p>
        <p className="mb-0">&nbsp;</p>
        <p>By actively listening, learning from each other, and working to find solutions, we grew close and accomplished a lot together. When release dates approached, we were hands-on-deck supporting the launch together. When pizza day and Halloween came around, we celebrated and pranked each other.</p>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shadow-[-1px_-1px_8px_1.9px_rgba(134,120,72,0.12),2px_3.467px_8px_1.9px_rgba(134,120,72,0.12)] shrink-0 w-full md:w-auto" data-name="EFMF Pizza party">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none" src={imgEfmfPizzaParty} />
      </div>
    </div>
  );
}

function InsightGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Insight group">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#017780] text-[20px] md:text-[24px] w-full">{`Of course, it came with challenges. `}</p>
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-x-auto gap-[16px] md:gap-0 pl-0 pr-0 md:pr-[115px] py-0 relative rounded-[8px] shrink-0 w-full" data-name="Container">



      <div className="h-auto md:h-[285.104px] mr-0 md:mr-[-115px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.465px_0px_rgba(0,0,0,0.35)] shrink-0 w-[250px] md:w-[389.55px]" data-name="EFMFMKT">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgEfmfmkt} />
      </div>
            <div className="h-auto md:h-[285.104px] mr-0 md:mr-[-115px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.465px_0px_rgba(0,0,0,0.35)] shrink-0 w-[250px] md:w-[389.55px]" data-name="TINKMKT">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgTinkmkt} />
      </div>
            <div className="h-auto md:h-[285.104px] mr-0 md:mr-[-115px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.465px_0px_rgba(0,0,0,0.35)] shrink-0 w-[250px] md:w-[389.55px]" data-name="UPMKT">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={imgUpmkt} />
      </div>
            <div className="h-auto md:h-[285.104px] mr-0 md:mr-[-115px] relative rounded-[8px] shadow-[0px_0px_0px_0.26px_rgba(0,0,0,0.23),0px_4.155px_12.465px_0px_rgba(0,0,0,0.35)] shrink-0 w-[250px] md:w-[389.55px]" data-name="1099MKT">
        <img alt="" className="relative inset-0 w-full h-auto object-contain pointer-events-none rounded-[8px]" src={img1099Mkt} />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] w-full not-italic relative shrink-0 text-[#51596d] text-[16px] md:text-[18px] tracking-[-0.5px]">{`The branding and experience I created for e-commerce products have been adopted across Sovos. Three years later, you can still see this design foundation across Sovos' product portfolio - a strategic move to create cohesive branding and experience across the entire company, making design easier to implement and scale.`}</p>
    </div>
  );
}

function InsightGroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Insight group">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#017780] text-[20px] md:text-[24px] w-full">My legacy continues on Sovos' global portfolio...</p>
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full max-w-[1200px]" data-name="Container">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2c2c2c] text-[24px] md:text-[32px] tracking-[-0.5px] w-full">How did it turn out?</p>
      <InsightGroup2 />
      <InsightGroup3 />
      <InsightGroup4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] md:gap-[56px] items-center justify-center px-4 md:px-8 py-[48px] md:py-[64px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-4 relative shrink-0 w-full" data-name="Footer">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09543d] text-[16px] md:text-[18px] text-center tracking-[-0.5px] w-full">{`❤️ Designed and built by Dan to share the joy of creativity & works that she's proud of`}</p>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="relative bg-white box-border content-stretch flex flex-col items-center justify-center pb-[56px] pt-0 px-0 w-full overflow-visible" data-name="Main Frame">
      <Header />
      <MainContainer />
      <MainContainer1 />
      <SecondaryFrame />
      <Container15 />
      <Container27 />
      <MainContainer3 />
      <Container34 />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="content-stretch flex font-['Sora:Bold',sans-serif] font-bold gap-[2px] items-center leading-[normal] relative shrink-0 text-[#09543d] text-[18px] md:text-[20px] text-nowrap tracking-[-0.2px] uppercase whitespace-pre cursor-pointer" data-name="Logo">
      <p className="relative shrink-0">Dan</p>
      <p className="relative shrink-0">Liu.</p>
    </Link>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] md:gap-[24px] items-center relative shrink-0">
      <WorkButton />
      <AboutButton />
      <ResumeButton />
      <ContactButton />
    </div>
  );
}

function NavBar() {
  return (
    <div className="sticky box-border content-stretch flex items-center justify-between left-0 px-4 md:px-[32px] py-[24px] top-0 w-full z-50" data-name="NavBar">
      <div className="absolute h-[72.858px] left-0 top-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1441 73">
          <path d={svgPaths.p6fc9b80} fill="var(--fill-0, #FFFDF7)" id="Vector 192" />
        </svg>
      </div>
      <Logo />
      <Frame7 />
    </div>
  );
}

export default function EFileMyFormsCaseStudy() {
  return (
    <>
          <SEO 
            title="eFileMyForms Case Study"
            description="How Dan Liu redesigned eFileMyForms to improve user experience and made business impact"
            url="https://danliu.one/projects/efileMyForms"
            type="article"
    
          />
    
    <div className="relative size-full" data-name="eFileMyForms case study">
      <NavBar />
      <MainFrame />
    </div>
        </>
  );
}

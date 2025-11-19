import svgPaths from "./svg-l2lnvkoxyr";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollCursor from "./ScrollCursor";
import { useCustomCursor } from "../App";
import SEO from "../components/SEO";
import { ResponsiveNavigation } from "../components/ResponsiveNavBar";
import { MetricCard } from "../components/MetricCard";
import { InsightCard } from "../components/InsightCard";
import { PersonaCard } from "../components/PersonaCard";
import { SectionHeader } from "../components/SectionHeader";
import { InfoCard } from "../components/InfoCard";
import { SolutionCard } from "../components/SolutionCard";
import { BeforeAfterDesignScroll } from "../components/BeforeAfterDesignScroll";
import imgHeaderBgImg from "figma:asset/56ec707bfd556cae79ca5dbb8fdcbac781bda359.png";
import imgJustinImage from "figma:asset/c059298f299b79c70e002cc398771b22a429b587.png";
import imgLeilaImage from "figma:asset/b197013400b37ac04a959f947440f73c4645c796.png";
import imgMoneyFlyingAwayDecorativeImg from "figma:asset/3d9e73df18803bc16f05124c54a434c8ef697c3c.png";
import imgOldTapeDecorativeImg from "figma:asset/f7d50618d83663382cd6fa873df234e27fe7374f.png";
import imgAnnoyedFaceDecorativeImg from "figma:asset/879ebf787960345594013a22da0892531d369ea6.png";
import imgLadderDecorativeImg from "figma:asset/c7b6160e8267c5476120f3adf88358420cbe65d6.png";
import imgGrowthDecorativeImg from "figma:asset/2c72c5c26299509490801cbe65c524e0c5d45645.png";
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
import img1099Mkt from "figma:asset/ea61a84de65b96d850e0d9d3b871d7ca50702db3.png";
import imgTinkmkt from "figma:asset/45bdb24783dee504dd3ccf950829a78788240368.png";
import imgUpmkt from "figma:asset/ab1338593d4f1e51b5baa22b219b7509d196f65f.png";
import imgEfmfmkt from "figma:asset/5af4195e554f502f2976c8ffb5c1cb48d3f6b995.png";
import imgOnlineForumScreenshot from "figma:asset/62eb07ea530c817b07b47304e13f7ded30197d78.png";
import img1099ProSearchResult from "figma:asset/9be60b40bd35a7930623446980625f2ca1b4aa1d.png";
import imgEFMFPricing from "figma:asset/89d1bea40c1db613a8a45e373711c65dd96853cb.png";
import imgIRSPenalty from "figma:asset/2adcc63aebf2beca2d405417ac43e46d6fdeab24.png";
import ModernizationStrategy from "../assets/GlobalModernizationStrategy.mp4";

export default function EFileMyFormsProject() {
  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[960px] bg-[var(--color-bg-header)] overflow-hidden flex items-center"
        style={{ marginTop: "72px" }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${imgHeaderBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-responsive relative z-10 py-12 md:py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6 md:mb-8 text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] tracking-[-0.5px]">
              <p>eFileMyForms redesign</p>
              <p>2022 - 2023</p>
            </div>

            <h1 className="font-['Sora:SemiBold',_sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] md:text-[clamp(2rem,5vw,2.5rem)] leading-tight mb-8 md:mb-12 text-[var(--color-text-primary)]">
              Made tax filing easy and modern for stressed small business owners
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <MetricCard value="23%" label="ARR Growth" />
              <MetricCard value="44%" label="New Signups" />
              <MetricCard value="15" label="NPS Points" />
              <MetricCard
                value="50+"
                label="Pages Redesigned"
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24">
            {/* Project Info */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 pb-4"> */}
            <div className="flex sm:flex-col md:flex-row lg:flex-row gap-8 md:gap-12">
              <div className="flex flex-grow-1 flex-col gap-2 min-w-[182px]">
                <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)]">
                  👩🏻‍💻 Roles
                </p>
                <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-primary)]">
                  Solo Product Designer
                </p>
              </div>

              <div className="flex flex-grow-1 flex-col gap-2 min-w-[323px]">
                <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)]">
                  ⏳ Timeline
                </p>
                <div className="flex flex-col gap-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-primary)]">
                  <p>Design MVP: Jul - Oct 2022</p>
                  <p>Checkout upgrade: Oct 2022 - Feb 2023</p>
                </div>
              </div>

              <div className="flex flex-grow-1 flex-col gap-2">
                <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)]">
                  🤘🏻 Collaborators
                </p>
                <div className="flex flex-wrap gap-4 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-primary)]">
                  <span>Product Manager</span>
                  <span>Product Owner</span>
                  <span>Developers</span>
                  <span>QA Engineers</span>
                  <span>Content Designer</span>
                  <span>Technical Writer</span>
                  <span>Marketing</span>
                  <span>Support</span>
                  <span>Legal</span>
                </div>
              </div>
            </div>

            {/* Context Section */}
            <div className="flex flex-col gap-6 md:gap-8">
              <SectionHeader title="Context" />
              <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-[var(--color-text-secondary)]">
                To expand services from its traditionally high-touch enterprise
                solutions to self-service e-commerce solutions,{" "}
                <a
                  href="https://sovos.com/"
                  target="_blank"
                  className="underline"
                >
                  Sovos
                </a>{" "}
                acquired{" "}
                <a
                  href="https://efilemyforms.com/"
                  target="_blank"
                  className="underline"
                >
                  {" "}
                  eFileMyForms
                </a>
                , a web-based software that helped small business owners and
                accountants to manage their 1099 tax forms for employees,
                vendors, and customers. eFileMyForms urgently needed new brand
                strategies to promote Sovos in the e-commerce market and upgrade
                of its experience for its seasonal customer base.
              </p>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-[var(--color-text-secondary)]">
                Working with a newly formed team, I led a comprehensive redesign
                for Sovos' 1st e-commerce product. The project started as a
                rebranding effort to boost brand credibility in the competitive
                landscape, but we were able to squeeze in many critical
                usability improvements. Shortly before the 2023 tax season, we
                delivered{" "}
                <span className="text-[var(--color-accent-teal)]">
                  2 major releases
                </span>{" "}
                that upgraded{" "}
                <span className="text-[var(--color-accent-teal)]">
                  50+ pages
                </span>{" "}
                and resulted in unprecedented impact: a{" "}
                <span className="text-[var(--color-accent-teal)]">
                  23% increase in ARR
                </span>
                , a{" "}
                <span className="text-[var(--color-accent-teal)]">
                  44% increase in signup
                </span>
                , and a{" "}
                <span className="text-[var(--color-accent-teal)]">
                  15-point increase
                </span>{" "}
                in NPS. Such transformative success led to investment in
                e-commerce products in Sovos, and my timeless design from this
                project later became the design blueprint for Sovos' global
                e-commerce portfolio.
              </p>
            </div>

            {/* Persona Section */}
            <div className="flex flex-col gap-12 md:gap-16">
              <SectionHeader title="Persona" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <PersonaCard
                  name="Justin"
                  role="Owner @ Justin's Barber Shop"
                  imageUrl={imgJustinImage}
                  traits={[
                    "Manages all business aspects and daily duties of running a barber shop",
                    "Unfamiliar with tax filing",
                    "Can't afford to hire an accountant",
                  ]}
                  label="Small business owners"
                />
                <PersonaCard
                  name="Leila"
                  role="Accountant @ DLC Accounting Services"
                  imageUrl={imgLeilaImage}
                  traits={[
                    "Has been managing the same 15 companies' tax forms for 6 years",
                    "Familiar with tax requirements",
                    "Handles large volumes on tight deadlines",
                  ]}
                  label="Accountant (power user)"
                />
              </div>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-[var(--color-text-secondary)]">
                As the gig economy grows and tax filing gets more complex, it's
                important to simplify the tax filing experience for small
                business owners who may not be knowledgeable in taxes.
                Simplifying the experience for them also helps power users like
                accountants to get their job done faster, especially working
                during busy tax season and with a large quantity of clients.
              </p>
            </div>

            {/* Tax Feedback Section */}
            <div className="flex flex-col gap-12 md:gap-20">
              <SectionHeader title="What are people saying about tax?" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                <InsightCard
                  icon=""
                  title="Mistakes come with steep penalties"
                  description="Users like Justin may have to file their taxes right before deadlines because they need to prioritize daily duties and wait for financial records. The stress could make them more prone to errors and penalties."
                  decorativeImg={imgMoneyFlyingAwayDecorativeImg}
                />
                <InsightCard
                  icon=""
                  title="Tax filing is outdated and clunky"
                  description="The tax industry's commonly outdated and clunky solutions don't help users like Justin or Leila to finish their tax filing quickly and easily so they can get back to their daily responsibilities."
                  decorativeImg={imgOldTapeDecorativeImg}
                />
                <InsightCard
                  icon=""
                  title="It's tedious and difficult to file"
                  description="It takes a village to learn the latest tax rules and file taxes correctly. Hiring professional help isn't always affordable for mom-and-pop shops like Justin's, and outdated tax solutions only made it harder."
                  decorativeImg={imgAnnoyedFaceDecorativeImg}
                />
              </div>
            </div>

            {/* EFMF Feedback Section */}
            <div className="flex flex-col gap-12 md:gap-20">
              <SectionHeader title="What is Sovos saying about eFileMyForms (EFMF)?" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                <InsightCard
                  icon=""
                  title="EFMF was popular, but the support cost was unsustainable"
                  description="Customers called support to guide them through the process. 20~30 min phone calls disrupt the economics of small orders of 2~3 forms (~$14)."
                  decorativeImg={imgMoneyFlyingAwayDecorativeImg}
                />
                <InsightCard
                  icon=""
                  title="In a growing eFile market, EFMF lagged behind competitors"
                  description="Growing eFile needs created opportunities and competition. But EFMF had limited market visibility and a smaller customer base than competitors like Tax1099."
                  decorativeImg={imgLadderDecorativeImg}
                />
                <InsightCard
                  icon=""
                  title="Lost revenue opportunities from low add-on conversion"
                  description="Low add-on conversion was significant because raising base prices could hurt retention in an e-commerce market with similarly-priced competitors like eFile4Biz."
                  decorativeImg={imgGrowthDecorativeImg}
                />
              </div>
            </div>

            {/* Insights Methodology */}
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-card)] rounded-lg p-6 md:p-8">
              <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] mb-4">
                How did I gather these insights?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard
                  icon="🎙"
                  title="Internal stakeholder interviews & alignment meetings"
                  content="Recognized user behaviors, identified user pain points, and aligned on business objectives."
                />
                <InfoCard
                  icon="💹"
                  title="Market research"
                  content={
                    <>
                      Analyzed competitive landscape, industry trends, and
                      EFMF's market position through competitor analysis,{" "}
                      <span className="underline">online forums</span>, and{" "}
                      <span className="underline">
                        search behavior analysis
                      </span>
                      .
                    </>
                  }
                />
                <InfoCard
                  icon="🕵🏻‍♀️"
                  title="End-to-end UX evaluation"
                  content={
                    <>
                      Conducted comprehensive user journey analysis across all
                      touch points, including{" "}
                      <span className="underline">pricing structure</span>, user
                      acquisition flows, and filing flow.
                    </>
                  }
                />
                <InfoCard
                  icon="🧑‍💻"
                  title="Product usage analysis"
                  content="Partnered with developers to analyze product metrics, user behavior patterns, traffics, and feature adoption."
                />
                <InfoCard
                  icon="⚖️"
                  title="Compliance research"
                  content={
                    <>
                      Research{" "}
                      <span className="underline">current tax regulations</span>
                      ,{" "}
                      <span className="underline">IRS filing requirements</span>
                      , and the compliance landscape through official
                      documentation, regulatory updates, and internal subject
                      matter experts.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Design Highlights Section 1 - Modernized Branding */}
      <section className="bg-[var(--color-bg-section)] py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <SectionHeader
              emoji="🌟"
              subtitle="Design highlights 1."
              title="Modernized branding"
              variant="accent"
            />
          </div>
        </div>

        {/* Before/After Design Horizontal Scroll - Full Width */}
        <BeforeAfterDesignScroll />

        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Problems and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
              <div className="flex flex-col gap-2">
                <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                  Problems:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                  <li>
                    <span className="text-[var(--color-accent-teal)]">
                      Outdated visual design
                    </span>{" "}
                    - left an unprofessional, untrustworthy first impression
                    that deterred prospects from signing up.
                  </li>
                  <li>
                    <span className="text-[var(--color-accent-teal)]">
                      Market demands
                    </span>{" "}
                    - people have been asking for modern tax solutions, and
                    EFMF's competitors are offering them.
                  </li>
                  <li>
                    <span className="text-[var(--color-accent-teal)]">
                      Accessibility concern
                    </span>{" "}
                    - issues like gradient and low contrast could make reading
                    difficult.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                  Solution:
                </p>
                <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                  Partnered with product and marketing team members to{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    design new branding
                  </span>{" "}
                  that will leave an impression that is{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    modern
                  </span>
                  ,{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    professional
                  </span>
                  , and even a little{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    playful
                  </span>
                  , while preserving eFileMyForms' original identity (the
                  lightning bolt logo symbolizing speed and reliability).
                </p>
                <p className="italic text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)]">
                  Tax is already tedious. Why not make it more exciting? 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights Section 2 - Information Architecture */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <SectionHeader
              emoji="🌟"
              subtitle="Design highlights 2."
              title="Seamless journey & more organized information architecture"
              variant="accent"
            />

            {/* Problem */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Problem:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                <li>
                  <span className="text-[#ff3030]">
                    The cluttered and dense content
                  </span>{" "}
                  created cognitive overload, preventing prospective and
                  existing customers from easily locating information relevant
                  to their needs.
                </li>
                <li>
                  Customers{" "}
                  <span className="text-[#ff3030]">called support</span> to show
                  them <span className="text-[#ff3030]">how to start</span>.
                </li>
              </ul>
            </div>

            {/* Old IA Images */}
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgOldIaNewCustomer}
                  alt="Old information architecture - new customer"
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgOldIaExistingCustomer}
                  alt="Old information architecture - existing customer"
                  className="w-full"
                />
              </div>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Solution:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                <li>
                  <span className="text-[var(--color-accent-teal)]">
                    Seamless end-to-end experience
                  </span>{" "}
                  that guides users from the purchase decision through tax
                  filing with focused content and clear guidance at every step.
                </li>
                <li>
                  <span className="text-[var(--color-accent-teal)]">
                    Restructured information architecture
                  </span>{" "}
                  that highlights essential information while keeping secondary
                  resources accessible.
                </li>
              </ul>
            </div>

            {/* New IA Images */}
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgNewIaNewCustomer}
                  alt="Old information architecture - new customer"
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgNewIaExistingCustomer}
                  alt="Old information architecture - existing customer"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights Section 3 - Checkout Experience */}
      <section className="bg-[var(--color-bg-section)] py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <SectionHeader
              emoji="🌟"
              subtitle="Design highlights 3."
              title="Global modernization strategy"
              variant="accent"
            />

            <div
              className="w-full rounded-[8px] "
              data-name="global mdoernization strategy demo video"
            >
              <video
                autoPlay
                controls
                className="h-auto md:h-full rounded-[8px]"
                controlsList="nodownload"
                loop
                playsInline
              >
                <source src={ModernizationStrategy} />
              </video>
            </div>

            {/* Problems and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
              <div className="flex flex-col gap-2">
                <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                  Problems:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                  <li>
                    <span className="text-[#ff3030]">Resource constraints</span>{" "}
                    - small team with only 1 front-end developer.
                  </li>
                  <li>
                    <span className="text-[#ff3030]">Tight deadline</span> -
                    full-site redesign in 8 months.
                  </li>
                  <li>
                    <span className="text-[#ff3030]">
                      Technical constraints
                    </span>{" "}
                    - older codebase incompatible with Sovos' internal component
                    library without major refactoring that risked site stability
                    and timeline.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                  Solution:
                </p>
                <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                  Partnered with products and developers to create{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    phased modernization strategy
                  </span>{" "}
                  that achieved visual transformation without extensive effort.
                  By breaking work into focused phases -{" "}
                  <span className="text-[var(--color-accent-teal)]">
                    global nav/footer → distraction cleanup → fonts/tables
                  </span>{" "}
                  - and leveraging CSS modifications to existing components,
                  each release delivered instant user value while minimizing
                  development scope and technical risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights Section 4 - Single-step guided signup */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <SectionHeader
              emoji="🌟"
              subtitle="Design highlights 4."
              title="Single-step, guided signup to start with ease"
              variant="accent"
            />

            {/* Problem */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Problem:
              </p>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                <span className="text-[#ff3030]">
                  3-step signup with unnecessary data collection (18 data
                  fields)
                </span>{" "}
                hurt conversion.
              </p>
            </div>

            {/* Old Signup Flow */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={imgOldSignUpFlow}
                alt="Old signup flow"
                className="w-full"
              />
            </div>

            {/* Solution Cards */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Solution:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SolutionCard
                  title="Removed 14 unused data fields"
                  description="Partnered with product, devs, and support to identify unused data and remove them from signup requirements."
                />
                <SolutionCard
                  title="Streamline 3 steps into 1"
                  description="Customers can now create an account in a single screen, dramatically reducing abandonment and friction."
                />
                <SolutionCard
                  title="Mobile-responsive signup and login"
                  description="Recognizing high mobile signup volume, the redesigned flow is now responsive, allowing users to sign up from anywhere without friction."
                />
                <SolutionCard
                  title="Better product insights via new URL architecture"
                  description="Unique URLs for each step provided product and marketing teams with visibility into where users drop off, empowering data-driven improvements."
                />
              </div>
            </div>

            {/* New Signup Design */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgNewSignupDesign}
                  alt="New signup design"
                  className="w-full"
                />
              </div>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed tracking-[-0.5px]">
                This streamlined approach achieved a core business goal,
                increasing signup conversion, while establishing a better URL
                architecture for data collection. Removing unnecessary data
                collection also reduced compliance exposure and security risk.
                While full-site responsiveness wasn't feasible due to limited
                bandwidth, strategically investing in critical user entry points
                improved accessibility and mobile conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights Section 5 - Guided secure checkout */}
      <section className="bg-[var(--color-bg-section)] py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <SectionHeader
              emoji="🌟"
              subtitle="Design highlights 5."
              title="Guided secure checkout to pay with confidence"
              variant="accent"
            />

            {/* Problem */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Problem:
              </p>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                Critical add-ons and options were{" "}
                <span className="text-[#ff3030]">buried and poorly guided</span>
                .
              </p>
            </div>

            {/* Old Checkout Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgOldEfmfCartPageAddOn}
                  alt="Old cart page with add-ons"
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgOldEfmfOrderReviewPageDelayProcessing}
                  alt="Old order review page"
                  className="w-full"
                />
              </div>
            </div>

            {/* Solution Cards */}
            <div className="flex flex-col gap-4">
              <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] tracking-[-0.5px] text-[var(--color-text-primary)]">
                Solution:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SolutionCard
                  title="Surfaced add-ons in order review"
                  description="Moved add-ons from buried My Cart page to a dedicated Order Review section, added conditional logic to recommend add-ons based on chosen forms, and added real-time display on applicable forms and add-on pricing."
                />
                <SolutionCard
                  title="Redesigned delay processing options"
                  description="Replaced confusing technical descriptions with clear, friendly content, and added conditional prompts that explain when processing should start to allow time for TINCheck."
                />
                <SolutionCard
                  title="Celebrated purchase milestones"
                  description="Redesigned Order Received page to acknowledge the order and provide clear guidance on next steps. This reduces post-purchase anxiety and decreases support ticket volume."
                />
                <SolutionCard
                  title="Relocated terms of service"
                  description="Partnered with legal and marketing to consolidate terms of service and move the acceptance checkbox from checkout to signup."
                />
              </div>
            </div>

            {/* New Checkout Redesign */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={imgCheckoutRedesign}
                  alt="Checkout redesign"
                  className="w-full"
                />
              </div>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed">
                As Sovos' first checkout experience design, this became the
                foundation for e-commerce checkout patterns across Sovos' global
                product portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">
            <SectionHeader title="How did it turn out?" />

            {/* Success Story */}
            <div className="flex flex-col gap-6">
              <h3 className="font-['Sora',_sans-serif] text-[clamp(1.25rem,2vw,1.5rem)] text-[var(--color-accent-teal)]">
                Did the new design go viral?
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed tracking-[-0.5px] space-y-4">
                  <p>
                    In 4 months, we delivered the phase 1 redesign - a design
                    MVP. 5 months later, we delivered the phase 2 - the checkout
                    experience upgrade. In total, we redesigned 50+ pages with
                    many major experience improvements, all within tight
                    timeline and resources. This is unprecedented at Sovos,
                    especially for a newly formed team.
                  </p>
                  <p>
                    Customers reacted positively to this release, and the
                    business metrics reflected it:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Glowing reviews</li>
                    <li>NPS: 15-point increase</li>
                    <li>ARR: 23% increase</li>
                    <li>Signup: 44% increase</li>
                    <li>
                      And... overwhelmed server due to popularity (a good
                      problem to have 😉)
                    </li>
                  </ul>
                  <p>
                    A client told our CMO that they noticed the new site and
                    were thrilled with the upgrades. It didn't confuse them at
                    all... they truly believe in our product and show unwavering
                    loyalty.
                  </p>
                </div>
                <div className="overflow-hidden rounded shadow-lg max-w-[500px]">
                  <img
                    src={imgRedditEfmFpost}
                    alt="Reddit post about the redesign"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h3 className="font-['Sora',_sans-serif] text-[clamp(1.25rem,2vw,1.5rem)] text-[var(--color-accent-teal)]">
                Of course, it came with challenges.
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  items-start">
                <div className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed tracking-[-0.5px] space-y-4">
                  <p>
                    In the beginning, we felt unsure if we could accomplish so
                    much with limited resources and a fully remote team. In
                    addition, some of the code and infrastructure were ancient
                    and untouchable. There were many unexpected technical issues
                    and last-minute design alternatives...
                  </p>
                  <p>
                    Because of the complexity of tax filing, every design
                    decision required thorough discussion with marketing, legal,
                    product, content, and support.
                  </p>
                  <p>
                    To ensure timely delivery and a smooth experience across the
                    entire user journey, I wore many hats, including: product
                    owner, QA engineer, product manager, developer and manage
                    projects like: emails, back office management, and marketing
                    messaging. Coding dark mode for product emails was a pain...
                  </p>
                  <p>
                    By actively listening and learning from each other, we grew
                    close and accomplished a lot together. When release dates
                    approached, we were hands-on-deck supporting the launch
                    together. When pizza day and Halloween came around, we
                    celebrated and pranked each other.
                  </p>
                </div>
                <div className="overflow-hidden shadow-lg">
                  <img
                    src={imgEfmfPizzaParty}
                    alt="Team pizza party celebration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div className="flex flex-col gap-6">
              <h3 className="font-['Sora',_sans-serif] text-[clamp(1.25rem,2vw,1.5rem)] text-[var(--color-accent-teal)]">
                My legacy continues on Sovos' global portfolio.
              </h3>
              <div className="flex flex-col gap-6">
                <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                  <div className="flex gap-4 min-w-[800px] md:min-w-0 md:grid md:grid-cols-4">
                    <div className="flex-shrink-0 max-w-screen max-h-screen md:flex-shrink overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={img1099Mkt}
                        alt="1099 Marketing"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex-shrink-0 max-w-screen max-h-screen md:flex-shrink overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={imgTinkmkt}
                        alt="Tink Marketing"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex-shrink-0 max-w-screen max-h-screen md:flex-shrink overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={imgUpmkt}
                        alt="Up Marketing"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex-shrink-0 max-w-screen max-h-screen md:flex-shrink overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={imgEfmfmkt}
                        alt="EFMF Marketing"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)] leading-relaxed tracking-[-0.5px]">
                  The branding and experience I created for e-commerce products
                  have been adopted across Sovos. Three years later, you can
                  still see this design foundation across Sovos' product
                  portfolio - a strategic move to create cohesive branding and
                  experience across the entire company, making design easier to
                  implement and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09543d] text-white py-8 md:py-12">
        <div className="container-responsive">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-[clamp(0.875rem,1.5vw,1.125rem)]">
              ❤️ Designed and built by Dan to share the joy of creativity &
              works that she's proud of
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

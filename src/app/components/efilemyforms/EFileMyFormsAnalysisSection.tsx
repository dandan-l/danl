import "./EFileMyFormsAnalysisSection.css";
import bellEmoji from "../../../assets/images/emoji-bell.png";
import moneyEmoji from "../../../assets/images/emoji-money.png";
import ladderEmoji from "../../../assets/images/emoji-ladder.png";
import frownEmoji from "../../../assets/images/emoji-frowning.png";
import growthEmoji from "../../../assets/images/emoji-growth.png";
import tapeEmoji from "../../../assets/images/emoji-tape.png";

export function EFileMyFormsAnalysisSection() {
  return (
    <section
      className="efmf-analysis-section"
      aria-labelledby="efmf-analysis-heading"
    >
      <div className="efmf-analysis-container">
        {/* Analysis Header */}
        <div className="efmf-analysis-header">
          <p className="efmf-analysis-label">The Analysis</p>
          <h2 id="efmf-analysis-heading" className="efmf-analysis-title">
            What are people saying about tax?{" "}
          </h2>
        </div>

        {/* Insights Grid - people */}
        <div className="efmf-insights-grid">
          <div className="efmf-insight-card">
            <img
              src={moneyEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                Mistakes come with steep penalties
              </h3>
              <p className="efmf-insight-description">
                Users like Justin may have to file their taxes right before
                deadlines because they need to prioritize daily duties and wait
                for financial records. The stress could make them more prone to
                errors and penalties.
              </p>
            </div>
          </div>

          <div className="efmf-insight-card">
            <img
              src={tapeEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                Tax filing is outdated and clunky
              </h3>
              <p className="efmf-insight-description">
                The tax industry’s commonly outdated and clunky solutions don’t
                help users like Justin or Leila to finish their tax filing
                quickly and easily so they can get back to their daily
                responsibilities.
              </p>
            </div>
          </div>

          <div className="efmf-insight-card">
            <img
              src={frownEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                It’s tedious and difficult to file
              </h3>
              <p className="efmf-insight-description">
                It takes a village to learn the latest tax rules and file taxes
                correctly. Hiring professional help isn’t always affordable for
                mom-and-pop shops like Justin’s, and outdated tax solutions only
                made it harder.
              </p>
            </div>
          </div>
        </div>

        <h2 id="efmf-analysis-heading" className="efmf-analysis-title">
          What is Sovos saying about eFileMyForms (EFMF)?
        </h2>
        {/* Insights Grid - sovos */}
        <div className="efmf-insights-grid">
          <div className="efmf-insight-card">
            <img
              src={moneyEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                EFMF was popular, but the support cost was unsustainable
              </h3>
              <p className="efmf-insight-description">
                Customers called support to guide them through the process.
                20~30 min phone calls disrupt the economics of small orders of
                2~3 forms (~$14).
              </p>
            </div>
          </div>

          <div className="efmf-insight-card">
            <img
              src={ladderEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                In a growing eFile market, EFMF lagged behind competitors
              </h3>
              <p className="efmf-insight-description">
                Growing eFile needs created opportunities and competition. But
                EFMF had limited market visibility and a smaller customer base
                than competitors like Tax1099.
              </p>
            </div>
          </div>

          <div className="efmf-insight-card">
            <img
              src={bellEmoji}
              alt=""
              className="efmf-insight-icon"
              aria-hidden="true"
            />
            <div className="efmf-insight-card-content">
              <h3 className="efmf-insight-title">
                Lost revenue opportunities from low add-on conversion
              </h3>
              <p className="efmf-insight-description">
                Low add-on conversion was significant because raising base
                prices could hurt retention in an e-commerce market with
                similarly-priced competitors like eFile4Biz.
              </p>
            </div>
          </div>
        </div>

        {/* How did I gather these insights */}
        <div className="efmf-research-container">
          <h3 className="efmf-research-title">
            How did I gather these insights?
          </h3>
          <div className="efmf-research-grid">
            <div className="efmf-research-card">
              <p className="efmf-research-card-title">
                🎙 Internal stakeholder interviews & alignment meetings
              </p>
              <p className="efmf-research-card-description">
                Recognized user behaviors, identified user pain points, and
                aligned on business objectives.
              </p>
            </div>

            <div className="efmf-research-card">
              <p className="efmf-research-card-title">💹 Market research</p>
              <p className="efmf-research-card-description">
                Analyzed competitive landscape, industry trends, and EFMF's
                market position through competitor analysis, online forums, and
                search behavior analysis.
              </p>
            </div>

            <div className="efmf-research-card">
              <p className="efmf-research-card-title">
                🕵🏻‍♀️ End-to-end UX evaluation
              </p>
              <p className="efmf-research-card-description">
                Conducted comprehensive user journey analysis across all touch
                points, including pricing structure, user acquisition flows, and
                filing flow.
              </p>
            </div>

            <div className="efmf-research-card">
              <p className="efmf-research-card-title">
                🧑‍💻 Product usage analysis
              </p>
              <p className="efmf-research-card-description">
                Partnered with developers to analyze product metrics, user
                behavior patterns, traffics, and feature adoption.
              </p>
            </div>

            <div className="efmf-research-card">
              <p className="efmf-research-card-title">⚖️ Compliance research</p>
              <p className="efmf-research-card-description">
                Research current tax regulations, IRS filing requirements, and
                the compliance landscape through official documentation,
                regulatory updates, and internal subject matter experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

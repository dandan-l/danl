import {
  designStrategy2SectionHeader,
  designStrategy2Modes,
  designStrategy2Dialog,
} from '../../../../content/stat';
import './StatDesignStrategy2Section.css';

export function StatDesignStrategy2Section() {
  const { newFormMode, spreadsheetMode } = designStrategy2Modes;

  return (
    <section className="stat-ds2-section cs-section cs-section--white" aria-labelledby="stat-ds2-title">
      <div className="cs-container">
        <header className="cs-section-header">
          <p className="cs-label">{designStrategy2SectionHeader.label}</p>
          <h2 id="stat-ds2-title" className="cs-title">{designStrategy2SectionHeader.title}</h2>
          <p className="cs-description">{designStrategy2SectionHeader.description}</p>
        </header>

        {/* Mode comparison panel — images + arrow share a grid row so arrow centers on images */}
        <div className="stat-ds2-modes">
          {/* Left image */}
          <img
            src={newFormMode.image.src}
            alt={newFormMode.image.alt}
            className="stat-ds2-mode-image"
          />
          {/* Left body */}
          <div className="stat-ds2-mode-body">
            <div className="stat-ds2-mode-info-row">
              <h3 className="stat-ds2-mode-title">{newFormMode.title}</h3>
              <div className="stat-ds2-mode-tags">
                {newFormMode.tags.map((tag) => (
                  <span key={tag} className="stat-ds2-mode-tag">{tag}</span>
                ))}
              </div>
            </div>
            <p className="stat-ds2-mode-description">{newFormMode.description}</p>
          </div>

          {/* Arrow — rotated 90° on mobile (up/down), 0° on desktop (left/right) */}
          <div className="stat-ds2-modes-arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="30" viewBox="0 0 56 30" fill="none">
              <path d="M0.585786 13.3123C-0.195262 14.0934 -0.195262 15.3597 0.585786 16.1408L13.3137 28.8687C14.0948 29.6497 15.3611 29.6497 16.1421 28.8687C16.9232 28.0876 16.9232 26.8213 16.1421 26.0403L4.82843 14.7266L16.1421 3.41285C16.9232 2.63181 16.9232 1.36548 16.1421 0.584427C15.3611 -0.196622 14.0948 -0.196622 13.3137 0.584427L0.585786 13.3123ZM55.4142 16.1408C56.1953 15.3597 56.1953 14.0934 55.4142 13.3123L42.6863 0.584427C41.9052 -0.196622 40.6389 -0.196622 39.8579 0.584427C39.0768 1.36548 39.0768 2.63181 39.8579 3.41285L51.1716 14.7266L39.8579 26.0403C39.0768 26.8213 39.0768 28.0876 39.8579 28.8687C40.6389 29.6497 41.9052 29.6497 42.6863 28.8687L55.4142 16.1408ZM2 14.7266V16.7266H54V14.7266V12.7266H2V14.7266Z" fill="#EBF7FF"/>
            </svg>
          </div>

          {/* Right image */}
          <img
            src={spreadsheetMode.image.src}
            alt={spreadsheetMode.image.alt}
            className="stat-ds2-mode-image"
          />
          {/* Right body */}
          <div className="stat-ds2-mode-body">
            <div className="stat-ds2-mode-info-row">
              <h3 className="stat-ds2-mode-title">{spreadsheetMode.title}</h3>
              <div className="stat-ds2-mode-tags">
                {spreadsheetMode.tags.map((tag) => (
                  <span key={tag} className="stat-ds2-mode-tag">{tag}</span>
                ))}
              </div>
            </div>
            <p className="stat-ds2-mode-description">{spreadsheetMode.description}</p>
          </div>
        </div>

        {/* Dialog / transition card */}
        <div
          className="stat-ds2-dialog-card"
          style={{ backgroundImage: `url(${designStrategy2Dialog.bgImage})` }}
        >
          <div className="stat-ds2-dialog-image-wrapper">
            <img
              src={designStrategy2Dialog.modeDialogImage.src}
              alt={designStrategy2Dialog.modeDialogImage.alt}
              className="stat-ds2-dialog-image"
            />
          </div>
          <aside className="stat-ds2-dialog-sidebar">
            <h3 className="stat-ds2-dialog-sidebar-title">{designStrategy2Dialog.sidebarTitle}</h3>
            <p className="stat-ds2-dialog-sidebar-description">{designStrategy2Dialog.sidebarDescription}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

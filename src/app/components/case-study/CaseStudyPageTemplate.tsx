/**
 * CaseStudyPageTemplate
 *
 * Shared shell for all case study pages.
 * Wraps children with the accessibility skip link, Header, main, and Footer
 * so individual case study page files only need to list their sections.
 *
 * @example
 * export function MyProjectPage() {
 *   return (
 *     <CaseStudyPageTemplate className="my-project-page">
 *       <CaseStudyHero {...heroSection} tags={…} />
 *       <CaseStudyPersonaSection {...personaSection} />
 *     </CaseStudyPageTemplate>
 *   );
 * }
 */

import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import '../../../styles/case-study-patterns.css';

interface CaseStudyPageTemplateProps {
  /** Section components to render inside <main> */
  children: ReactNode;
  /**
   * Optional className added to the outer div alongside "portfolio-site".
   * Use for page-specific background or layout overrides.
   */
  className?: string;
}

export function CaseStudyPageTemplate({
  children,
  className = '',
}: CaseStudyPageTemplateProps) {
  const outerClass = ['portfolio-site', className].filter(Boolean).join(' ');

  return (
    <div className={outerClass}>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

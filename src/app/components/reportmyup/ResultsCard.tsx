import { ReactNode } from 'react';
import './ResultsCard.css';

interface ResultsCardProps {
  children: ReactNode;
}

export function ResultsCard({ children }: ResultsCardProps) {
  return (
    <aside className="results-card" aria-labelledby="results-label">
      <h3 id="results-label" className="results-label">Result</h3>
      <ul className="results-list">
        {children}
      </ul>
    </aside>
  );
}

interface ResultItemProps {
  children: ReactNode;
  checkmarkPath: string;
}

export function ResultItem({ children, checkmarkPath }: ResultItemProps) {
  return (
    <li className="result-item">
      <svg className="checkmark-icon" viewBox="0 0 18 18" aria-hidden="true">
        <path d={checkmarkPath} fill="currentColor" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

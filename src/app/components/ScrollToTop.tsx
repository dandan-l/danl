import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll to top if navigating to home page with #projects hash
    // (this is handled by the project button's custom scroll logic)
    if (location.pathname === '/' && location.hash === '#projects') {
      return;
    }

    // Scroll to top for all other route changes
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

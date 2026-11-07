import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { GlobalBackground } from './GlobalBackground';
import { useCard3D } from '../../hooks/useCard3D';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Global premium 3D card system: theme-synchronized flips + pointer tilt
  // for every `.card3d` element across all routes (delegated listeners).
  useCard3D();

  // Scroll to top + page-specific document title on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/team': 'Our Team',
      '/technologies': 'Technologies & Skills',
      '/projects': 'Projects',
      '/contact': 'Contact',
    };
    const section = titles[pathname] ?? 'Home';
    document.title =
      section === 'Home'
        ? 'BYTE BUILDER — Three Minds. One Vision. Infinite Possibilities.'
        : `BYTE BUILDER — ${section}`;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-crimson)]/30 selection:text-white transition-colors duration-200">
      {/* 1. Global Animated Background Video & Ambience (Single shared instance across all 6 routes) */}
      <GlobalBackground />

      {/* 2. Shared Header */}
      <Header />

      {/* 3. Main Route Content */}
      <main className="flex-1 flex flex-col relative z-10" id="main-content">
        <Outlet />
      </main>

      {/* 4. Shared Footer */}
      <Footer />
    </div>
  );
};

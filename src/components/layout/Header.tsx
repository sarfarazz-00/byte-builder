import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
            aria-label="BYTE BUILDER Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--text-primary)] flex items-center justify-center font-display font-black text-[var(--bg-primary)] text-base tracking-tighter group-hover:bg-[var(--accent-crimson)] group-hover:text-white transition-colors shadow-xs">
              BB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[var(--text-primary)] leading-none">
                BYTE<span className="text-[var(--accent-crimson)]">.</span>BUILDER
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--text-muted)] mt-0.5">
                Tech Collective
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive: linkActive }) =>
                    `relative px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 rounded-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)] ${
                      linkActive
                        ? 'text-[var(--accent-crimson)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                    }`
                  }
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[var(--accent-crimson)] rounded-full transition-all shadow-[0_0_8px_var(--accent-crimson)]"
                      aria-hidden="true"
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: Theme Switcher & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)] transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--bg-primary)] bg-[var(--text-primary)] rounded-full hover:bg-[var(--accent-crimson)] hover:text-white transition-all shadow-md whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
            >
              <span>Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--text-primary)] hover:text-[var(--accent-crimson)] hover:bg-[var(--bg-surface-elevated)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 pt-3 pb-6 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[var(--accent-subtle)] text-[var(--accent-crimson)] font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)] shadow-[0_0_6px_var(--accent-crimson)]" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Theme Toggle Strip & Action Button */}
          <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent-crimson)] transition-all"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span className="flex items-center gap-2">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
                <span>Current Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
              </span>
              <span className="text-xs uppercase font-mono text-[var(--accent-crimson)] font-bold">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors shadow-xs"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

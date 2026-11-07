import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Byte Builder', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Technologies & Skills', path: '/technologies' },
    { label: 'Featured Projects', path: '/projects' },
    { label: 'Contact & Collaboration', path: '/contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
    { label: 'Email Team', href: 'mailto:contact@bytebuilder.dev', icon: Mail },
  ];

  return (
    <footer
      className="relative z-20 w-full bg-[var(--footer-bg)] border-t border-[var(--border-subtle)] mt-auto backdrop-blur-md transition-colors duration-200 overflow-hidden shadow-[0_-12px_32px_-8px_rgba(225,29,72,0.06)] dark:shadow-[0_-12px_32px_-8px_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: 'var(--footer-bg)' }}
    >
      {/* Subtle top edge gradient transition & ambient glow (confined to top perimeter, not behind text) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-crimson)]/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[var(--accent-crimson)]/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-left mb-4 group"
              aria-label="BYTE BUILDER Home"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--text-primary)] flex items-center justify-center font-display font-black text-[var(--bg-primary)] text-base tracking-tighter group-hover:bg-[var(--accent-crimson)] group-hover:text-white transition-colors shadow-xs">
                BB
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-[var(--text-primary)]">
                BYTE<span className="text-[var(--accent-crimson)]">.</span>BUILDER
              </span>
            </Link>

            <p className="text-base font-semibold text-[var(--text-primary)] mb-2 font-display">
              &ldquo;Three Minds. One Vision. Infinite Possibilities.&rdquo;
            </p>

            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed mb-6 font-normal">
              A collaborative engineering collective uniting Manav Kumar (Frontend &amp; UI/UX), Anurag Sharma (Systems &amp; Architecture), and Sarfaraz (AI &amp; Backend).
            </p>

            {/* Social link placeholders */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] hover:border-[var(--accent-crimson)]/50 hover:bg-[var(--bg-surface-elevated)] transition-all shadow-xs"
                    aria-label={item.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Collective & Contact Hook */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              Founding Engineers
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)] mt-2 shrink-0 shadow-[0_0_6px_var(--accent-crimson)]" />
                <div>
                  <div className="text-[var(--text-primary)] font-semibold leading-none">Manav Kumar</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">Frontend &amp; UI/UX</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)] mt-2 shrink-0 shadow-[0_0_6px_var(--accent-crimson)]" />
                <div>
                  <div className="text-[var(--text-primary)] font-semibold leading-none">Anurag Sharma</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">Systems &amp; Architecture</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)] mt-2 shrink-0 shadow-[0_0_6px_var(--accent-crimson)]" />
                <div>
                  <div className="text-[var(--text-primary)] font-semibold leading-none">Sarfaraz</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">AI &amp; Backend</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-crimson)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span>Initiate a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
          <p>
            &copy; {currentYear} <span className="font-semibold text-[var(--text-primary)]">BYTE BUILDER</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[var(--text-primary)] transition-colors">Philosophy</Link>
            <Link to="/team" className="hover:text-[var(--text-primary)] transition-colors">Team</Link>
            <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

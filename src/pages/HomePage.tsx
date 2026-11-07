import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Users, Code, Cpu, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TEAM_MEMBERS } from '../data/team';
import { FEATURED_PROJECTS } from '../data/projects';
import { TECHNOLOGY_CATEGORIES } from '../data/technologies';
import { useTheme } from '../context/ThemeContext';

export const HomePage: React.FC = () => {
  // Subtle interactive parallax offset on cursor move
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  // Shared theme state — same source as Our Team page portraits
  const { theme } = useTheme();
  // Disable hero motion for users who prefer reduced motion
  const prefersReducedMotion = useReducedMotion() === true;

  // Group-level theme transition bookkeeping: the very first mount renders the
  // group without its own animation (the per-member staggered entrance plays,
  // exactly as before), and every later mount — i.e. every real theme change —
  // replays the entrance for the whole group.
  const heroGroupFirstMount = useRef(true);

  // Page-load / return-navigation: members play their staggered entrance and the
  // group wrapper stays static. Theme-switch remounts: members render settled and
  // the GROUP replays the same entrance properties (fade + rise) as one unit.
  const memberInitial = (y: number) =>
    heroGroupFirstMount.current
      ? prefersReducedMotion
        ? { opacity: 0 }
        : { opacity: 0, y }
      : false;

  // Pre-decode all six hero variants so theme transitions never stall waiting
  // for an invisible layer to decode. The group remounts in the same commit as
  // the theme update, so the fresh layers are decoded right away.
  useEffect(() => {
    document
      .querySelectorAll('section img[src^="/hero/"]')
      .forEach((img) => {
        const el = img as HTMLImageElement;
        if (typeof el.decode === 'function') {
          el.decode().catch(() => {});
        }
      });
  }, [theme]);

  useEffect(() => {
    heroGroupFirstMount.current = false;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col w-full text-[var(--text-primary)]">
      {/* 1. CINEMATIC HERO SECTION (Leverages persistent global background) */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-transparent border-b border-[var(--border-subtle)] min-h-[680px] lg:min-h-[760px] flex items-center"
      >
        {/* Subtle Local Hero Interactive Bloom */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="hero-ambient-bloom absolute top-1/4 right-1/4 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-[var(--accent-crimson)] rounded-full blur-[140px] pointer-events-none transition-opacity duration-600"
            style={{
              transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 16}px, 0)`,
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* Hero Grid Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Bold Editorial Typography & Interactive Actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left"
            >
              {/* Kicker Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface-elevated)]/90 border border-[var(--border-strong)] text-xs font-mono text-[var(--text-secondary)] mb-6 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)] shadow-[0_0_8px_var(--accent-crimson)]" />
                <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs text-[var(--text-primary)]">
                  SOFTWARE ENGINEERING &amp; AI COLLECTIVE
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] font-display leading-[1.08] text-balance">
                Three Minds.<br />
                <span className="text-[var(--accent-crimson)] bg-gradient-to-r from-[var(--accent-crimson)] via-[#FF3B66] to-[var(--accent-crimson)] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(225,29,72,0.4)]">
                  One Vision.
                </span><br />
                Infinite Possibilities.
              </h1>

              {/* Lead Paragraph */}
              <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl text-balance font-normal">
                A multidisciplinary engineering collective founded by <strong className="text-[var(--text-primary)] font-semibold">Manav Kumar</strong>, <strong className="text-[var(--text-primary)] font-semibold">Anurag Sharma</strong>, and <strong className="text-[var(--text-primary)] font-semibold">Sarfaraz</strong>. Uniting systems architecture, modern interfaces, and applied artificial intelligence.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_24px_rgba(225,29,72,0.45)] hover:shadow-[0_0_32px_rgba(225,29,72,0.65)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] hover:border-[var(--accent-crimson)]/50 transition-all backdrop-blur-md"
                >
                  <span>Meet the Team</span>
                  <Users className="w-4 h-4 ml-0.5 text-[var(--text-muted)]" />
                </Link>
              </div>

              {/* Proof Metrics Strip */}
              <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-md">
                <div className="pr-4 border-r border-[var(--border-subtle)]">
                  <div className="text-3xl font-extrabold font-display text-[var(--text-primary)] tabular-nums tracking-tight">03</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Founding Minds</div>
                </div>
                <div className="pr-4 border-r border-[var(--border-subtle)]">
                  <div className="text-3xl font-extrabold font-display text-[var(--text-primary)] tabular-nums tracking-tight">05</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Core Tech Domains</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-[var(--text-primary)] tabular-nums tracking-tight">100%</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Collaborative Craft</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Naturally Blended Cinematic Group Portrait (No Box/Card Frame) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-6 w-full flex flex-col items-center justify-center lg:items-end"
            >
              {/* Natural Blended Container without visible box border */}
              <div
                className="relative w-full max-w-xl flex flex-col items-center select-none"
                style={{
                  transform: `perspective(1000px) rotateY(${mouseOffset.x * 4}deg) rotateX(${-mouseOffset.y * 4}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Ambient crimson halo behind the figures */}
                <div className="absolute top-1/4 inset-x-0 mx-auto w-3/4 h-3/4 bg-[var(--accent-crimson)]/20 rounded-full blur-3xl pointer-events-none" />

                {/* Cinematic group composition — Anurag centre foreground, Manav & Sarfaraz behind.
                    One-time staggered entrance; members settle permanently (no looping animations).
                    Theme crossfade: both variants stacked, identical containers, 500ms opacity fade.
                    lg+: uniform 1.2 group scale (captions included), origin tuned to keep the
                    enlarged group clear of the heading and the section edges. */}
                <div className="relative w-full md:translate-x-3 lg:translate-x-5 xl:translate-x-6 lg:scale-[1.2] lg:origin-[72%_100%]">
                  {/* On a theme change the complete group — portraits and captions — replays the
                      established entrance properties (same fade, rise, duration and easing as the
                      page-load entrance) as ONE unit, starting immediately on the theme update.
                      Members render settled on these mounts; they only stagger on the original
                      page-load / return-navigation entrance. */}
                  <motion.div
                    key={theme}
                    initial={heroGroupFirstMount.current ? false : prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? { duration: 0.25 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                  <div className="flex items-end justify-center">
                    {/* Manav Kumar — LEFT, background layer */}
                    <motion.div
                      initial={memberInitial(18)}
                      animate={{ opacity: 1, y: 0 }}
                      transition={prefersReducedMotion ? { duration: 0.3 } : { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 w-[40%]"
                    >
                      <div className="relative w-full aspect-[1312/1199] drop-shadow-[0_20px_50px_rgba(225,29,72,0.28)]">
                        <img
                          src="/hero/Manav hero dark.png"
                          alt="Manav Kumar — Frontend & UI/UX"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                        <img
                          src="/hero/Manav hero light.png"
                          alt=""
                          aria-hidden="true"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                      </div>
                      {/* Caption sits directly beneath this member's portrait */}
                      <div className="absolute inset-x-0 top-full pt-3 flex flex-col items-center text-center px-1">
                        <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight font-display">
                          Manav Kumar
                        </div>
                        <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-0.5 leading-tight">
                          Frontend &amp; UI/UX
                        </div>
                      </div>
                    </motion.div>

                    {/* Anurag Sharma — CENTRE, foreground layer, most prominent */}
                    <motion.div
                      initial={memberInitial(22)}
                      animate={{ opacity: 1, y: 0 }}
                      transition={prefersReducedMotion ? { duration: 0.3 } : { duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-20 w-[50%] -mx-[15%]"
                    >
                      <div className="relative w-full aspect-[1312/1199] drop-shadow-[0_28px_65px_rgba(225,29,72,0.38)]">
                        <img
                          src="/hero/Anurag Hero Dark.png"
                          alt="Anurag Sharma — Systems & Architecture"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                        <img
                          src="/hero/Anurag Hrero Light.png"
                          alt=""
                          aria-hidden="true"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                      </div>
                      {/* Caption sits directly beneath this member's portrait */}
                      <div className="absolute inset-x-0 top-full pt-3 flex flex-col items-center text-center px-1">
                        <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight font-display">
                          Anurag Sharma
                        </div>
                        <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-0.5 leading-tight">
                          Systems &amp; Architecture
                        </div>
                      </div>
                    </motion.div>

                    {/* Sarfaraz — RIGHT, background layer */}
                    <motion.div
                      initial={memberInitial(18)}
                      animate={{ opacity: 1, y: 0 }}
                      transition={prefersReducedMotion ? { duration: 0.3 } : { duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 w-[40%]"
                    >
                      <div className="relative w-full aspect-[1312/1199] drop-shadow-[0_20px_50px_rgba(225,29,72,0.28)]">
                        <img
                          src="/hero/sarfaraz_hero_dark.png"
                          alt="Sarfaraz — AI & Backend"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                        <img
                          src="/hero/sarfaraz_hero_light.png"
                          alt=""
                          aria-hidden="true"
                          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-600 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                          loading="eager"
                        />
                      </div>
                      {/* Caption sits directly beneath this member's portrait */}
                      <div className="absolute inset-x-0 top-full pt-3 flex flex-col items-center text-center px-1">
                        <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight font-display">
                          Sarfaraz
                        </div>
                        <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-0.5 leading-tight">
                          AI &amp; Backend
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION PREVIEW */}
      <section className="py-20 bg-[var(--bg-surface-sunken)]/60 backdrop-blur-xs border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Our Foundation"
            title="Engineered for Scalability, Refinement & Intelligence"
            description="Byte Builder converges deep infrastructure discipline, frontend aesthetics, and generative intelligence under a single collaborative philosophy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-5">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
                  Systems &amp; Architecture
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Distributed backends, high-performance database modeling, and cloud-native containerization that scale reliably under peak operational demands.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-crimson)]">
                Led by Anurag Sharma
              </div>
            </div>

            <div className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
                  Frontend &amp; Experience Craft
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Modern design systems built with atomic discipline, accessible interaction choreography, and responsive cross-device precision.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-crimson)]">
                Led by Manav Kumar
              </div>
            </div>

            <div className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2">
                  Applied Machine Learning
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Contextual reasoning agents, semantic vector databases, and multimodal model integrations designed for practical engineering applications.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-crimson)]">
                Led by Sarfaraz
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM PREVIEW */}
      <section className="py-20 bg-transparent border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-0.5 bg-[var(--accent-crimson)]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-crimson)]">
                  Founding Roster
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] font-display">
                Three Core Disciplines
              </h2>
            </div>
            <Link
              to="/team"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--accent-crimson)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="card3d card3d-deck rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface-sunken)]">
                    <img
                      src={theme === 'light' ? member.imageLightSrc : member.imageDarkSrc}
                      alt={`Portrait of ${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  
                  <span className="text-xs font-mono text-[var(--accent-crimson)] font-medium uppercase tracking-wider">
                    {member.role}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mt-1 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {member.specialization}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] px-2 py-1 rounded-sm border border-[var(--border-subtle)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY PREVIEW */}
      <section className="py-20 bg-[var(--bg-surface-sunken)]/60 backdrop-blur-xs border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Stack &amp; Capabilities"
            title="Modern Architecture Built on Proven Foundations"
            description="Our engineering toolkit spans 5 foundational tiers, emphasizing performance, developer ergonomic safety, and scalable deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGY_CATEGORIES.slice(0, 3).map((category) => (
              <div
                key={category.id}
                className="card3d card3d-deck p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  {category.category}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-5 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2.5">
                  {category.items.slice(0, 3).map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-[var(--border-subtle)] last:border-none"
                    >
                      <span className="font-semibold text-[var(--text-primary)]">{tech.name}</span>
                      <span className="font-mono text-[var(--text-secondary)]">{tech.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/technologies"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--accent-crimson)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span>Explore All 5 Technical Disciplines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS PREVIEW */}
      <section className="py-20 bg-transparent border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-0.5 bg-[var(--accent-crimson)]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-crimson)]">
                  Portfolio Highlights
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] font-display">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--accent-crimson)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span>Browse All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="card3d card3d-deck group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col"
              >
                <div className="p-4 bg-[var(--bg-surface-sunken)] border-b border-[var(--border-subtle)]">
                  {/* Project cover — theme-aware crossfade layers, same mapping as the Projects page */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[var(--border-subtle)]">
                    <img
                      src={project.coverDark}
                      alt=""
                      aria-hidden="true"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                    />
                    <img
                      src={project.coverLight}
                      alt={`${project.title} — project cover`}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-mono text-[var(--text-secondary)] mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2 group-hover:text-[var(--accent-crimson)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-crimson)]">
                      {project.status}
                    </span>
                    <Link
                      to="/projects"
                      className="text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent-crimson)] inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION */}
      <section className="py-20 lg:py-24 bg-[var(--bg-surface-sunken)]/85 backdrop-blur-xs border-t border-[var(--border-subtle)] text-[var(--text-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] text-[var(--text-secondary)] text-xs font-mono mb-6">
            <span>Collaborate With Byte Builder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-balance">
            Have a Complex Engineering Challenge?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed text-balance">
            Our three founding minds are prepared to architect, engineer, and deploy high-velocity web platforms and AI-augmented applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_24px_rgba(225,29,72,0.4)]"
            >
              <span>Start A Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:border-[var(--accent-crimson)]/50 border border-[var(--border-strong)] transition-all"
            >
              <span>Learn Our Philosophy</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

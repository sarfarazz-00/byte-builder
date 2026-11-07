import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Target, Eye, ShieldCheck, Zap, Layers } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import AnimatedEcosystem from '../components/AnimatedEcosystem';
import { useTheme } from '../context/ThemeContext';

export const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full py-16 sm:py-20 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner / Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            kicker="About Byte Builder"
            title="Three Minds. One Vision. Infinite Possibilities."
            description="Byte Builder is a unified software engineering collective dedicated to craftsmanship, system reliability, and practical intelligence."
          />
        </motion.div>

        {/* 1. TEAM INTRODUCTION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-crimson)] font-semibold">
                Origin &amp; Collective Spirit
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mt-2 mb-4">
                Born From A Shared Obsession With High-Quality Software
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                Byte Builder was formed when <strong className="text-[var(--text-primary)] font-semibold">Manav Kumar</strong>, <strong className="text-[var(--text-primary)] font-semibold">Anurag Sharma</strong>, and <strong className="text-[var(--text-primary)] font-semibold">Sarfaraz</strong> recognized that the best technological solutions emerge when interface ergonomics, infrastructure depth, and applied AI are developed in concert rather than in silos.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                Instead of handing off specs across disconnected teams, we operate as a cohesive tri-disciplinary unit where every database index, user interaction, and intelligence prompt reinforces the overall system.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-colors shadow-[0_0_20px_rgba(225,29,72,0.35)]"
                >
                  <span>Meet The Three Founders</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AnimatedEcosystem theme={theme} />
            </div>
          </div>
        </motion.section>

        {/* 2. MISSION & VISION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card3d card3d-wave mb-20 p-8 sm:p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-5">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-crimson)] font-semibold">
                Our Mission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display mt-1 mb-3">
                Build Software That Outlasts Short-Lived Trends
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                To engineer modern, production-resilient digital systems that solve non-trivial business challenges through clean code, mathematical precision, and intuitive human-first interfaces.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-crimson)] font-semibold">
                Our Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display mt-1 mb-3">
                Unlocking Infinite Possibilities Through Collaboration
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                To establish Byte Builder as a premier technology agency archetype where small, elite engineering teams deliver exponential impact by uniting specialized domain mastery.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. OUR APPROACH TO BUILDING TECHNOLOGY */}
        <section className="mb-12">
          <SectionHeader
            kicker="Our Methodology"
            title="How We Build Technology"
            description="Our three-stage development ethos combines rigorous planning, iterative refinement, and zero tolerance for technical debt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col hover:border-[var(--accent-crimson)]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] mb-1">01 / DISCOVERY &amp; BLUEPRINT</span>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                Architectural Clarity
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We establish data schemas, system boundaries, and API contracts before writing code. Early rigor eliminates downstream friction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col hover:border-[var(--accent-crimson)]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] mb-1">02 / CRAFT &amp; COMPOSABILITY</span>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                Modular Frontend Craft
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We construct accessible, atomic UI components with rigorous typographic scale, zero-pill discipline, and predictable state lifecycles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card3d card3d-deck p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col hover:border-[var(--accent-crimson)]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] mb-1">03 / CONTINUOUS RIGOR</span>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                Automated Verification
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Unit test assertions, static type checking, and real browser verification ensure zero regressions throughout rapid feature iterations.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

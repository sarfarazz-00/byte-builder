import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal, Layout, Server, Sparkles, Wrench, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TECHNOLOGY_CATEGORIES } from '../data/technologies';

export const TechnologiesPage: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-5 h-5 text-[var(--accent-crimson)]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[var(--accent-crimson)]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[var(--accent-crimson)]" />;
      case 'ai-ml':
        return <Sparkles className="w-5 h-5 text-[var(--accent-crimson)]" />;
      case 'dev-tools':
      default:
        return <Wrench className="w-5 h-5 text-[var(--accent-crimson)]" />;
    }
  };

  return (
    <div className="w-full py-16 sm:py-20 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          kicker="Capabilities & Tools"
          title="Skills & Technologies"
          description="A structured taxonomy of the engineering disciplines, libraries, and frameworks powering Byte Builder systems."
        />

        {/* 5 Technical Disciplines Grid */}
        <div className="space-y-12">
          {TECHNOLOGY_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card3d card3d-wave p-8 sm:p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      DOMAIN 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display">
                      {category.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md sm:text-right">
                  {category.description}
                </p>
              </div>

              {/* Technologies in this discipline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)]" />
                        <h4 className="text-base font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--accent-crimson)] font-medium">
                        {item.level}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="card3d mt-16 p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center max-w-3xl mx-auto shadow-[var(--shadow-card)]">
          <h4 className="text-lg font-bold text-[var(--text-primary)] font-display mb-2">
            Tooling Agnostic, Standard Driven
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
            While these 5 pillars form our primary daily stack, we adopt the optimal tool for each architectural requirement—prioritizing type safety, runtime performance, and maintainability.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-crimson)] hover:text-[var(--text-primary)] transition-colors"
          >
            <span>See These Technologies in Action</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

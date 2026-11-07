import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderBlock } from '../components/common/PlaceholderBlock';
import { FEATURED_PROJECTS, ProjectItem } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { theme } = useTheme();

  return (
    <div className="w-full py-16 sm:py-20 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          kicker="Engineering Showcase"
          title="Featured Projects"
          description="Explore key architectural systems, frontend design systems, and AI intelligence engines built by Byte Builder."
        />

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card3d card3d-deck group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover — theme-aware crossfade layers (both mounted, no blanks) */}
                <div className="p-4 bg-[var(--bg-surface-sunken)] border-b border-[var(--border-subtle)]">
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

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--text-secondary)]">{project.category}</span>
                    <span className="text-[var(--accent-crimson)] font-semibold">{project.status}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-1 group-hover:text-[var(--accent-crimson)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-[var(--accent-crimson)] mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Quantitative metrics strip */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border-subtle)] text-center">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-xs font-bold text-[var(--text-primary)] font-mono tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Project Deep Dive for ${project.title}`}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:bg-[var(--accent-crimson)] hover:border-[var(--accent-crimson)] hover:text-white rounded-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
                >
                  <span>Project Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal / Drawer — portaled to body so the sticky header
            (z-50 in main's stacking context) can never cover it */}
        {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-[60] bg-[var(--overlay-bg)] backdrop-blur-md flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[var(--text-primary)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-0.5 bg-[var(--accent-crimson)]" />
                  <span className="text-xs font-mono text-[var(--accent-crimson)] font-semibold uppercase">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] mt-1 mb-6">
                  {selectedProject.tagline}
                </p>

                {/* Media Slot in Modal */}
                <PlaceholderBlock
                  type="project"
                  title={`${selectedProject.title} Interactive Blueprint`}
                  subtitle="Detailed architectural diagram & component walkthrough placeholder"
                  aspectRatio="video"
                  className="mb-6 bg-[var(--bg-surface-sunken)] border-[var(--border-subtle)]"
                />

                <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  <p>{selectedProject.summary}</p>
                  
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold pt-2">
                    Key Architectural Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-crimson)] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--text-secondary)]">Repository status:</span>
                    <span className="text-xs font-mono font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                      {selectedProject.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to="/contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors shadow-[0_0_16px_rgba(225,29,72,0.4)]"
                    >
                      Discuss Similar Project
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
        , document.body)}

      </div>
    </div>
  );
};

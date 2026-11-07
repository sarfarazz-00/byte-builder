import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TEAM_MEMBERS } from '../data/team';
import { useTheme } from '../context/ThemeContext';

export const TeamPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full py-16 sm:py-20 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <SectionHeader
          kicker="The Collective"
          title="Meet the Minds Behind Byte Builder"
          description="Three specialized engineers uniting frontend aesthetics, distributed systems, and machine intelligence under one collaborative banner."
        />

        {/* 3 Member Profile Cards (1440px 3-column / stacked responsive) */}
        <div className="space-y-12">
          {TEAM_MEMBERS.map((member, index) => {
            // Theme-aware portrait: dark variant on dark surfaces, light variant on light
            const portraitSrc = theme === 'light' ? member.imageLightSrc : member.imageDarkSrc;
            return (
            <motion.div
              key={member.id}
              id={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card3d card3d-wave p-8 sm:p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-crimson)]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Authentic Founder Portrait */}
                <div className="lg:col-span-4 w-full flex flex-col items-center">
                  <div className="relative w-full max-w-[280px] aspect-4/5 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-surface-sunken)] shadow-lg group">
                    {/* Crimson ambient glow behind portrait */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                    
                    {portraitSrc ? (
                      <img
                        src={portraitSrc}
                        alt={`Portrait of ${member.name} - ${member.role}`}
                        className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)]">
                        {member.name}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white bg-black/75 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                        0{index + 1} // {member.name.split(' ')[0]}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)] shadow-[0_0_8px_var(--accent-crimson)]" />
                    </div>
                  </div>

                  {/* Social & Contact links */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] hover:border-[var(--accent-crimson)]/50 transition-colors shadow-xs"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] hover:border-[var(--accent-crimson)]/50 transition-colors shadow-xs"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    {member.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] hover:border-[var(--accent-crimson)]/50 transition-colors shadow-xs"
                        aria-label={`Email ${member.name}`}
                        title={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-crimson)] hover:border-[var(--accent-crimson)]/50 transition-colors shadow-xs"
                        aria-label={`Send direct message to ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right: Detailed Bio & Capabilities */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--accent-crimson)]">
                        Founder 0{index + 1}
                      </span>
                      <span className="text-[var(--border-strong)]">/</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base font-medium text-[var(--accent-crimson)]">
                      {member.specialization}
                    </p>

                    <p className="mt-4 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Core skills & Technical Focus */}
                  <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold block mb-3">
                      Core Technical Competencies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-crimson)]" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collaborative Role Quote */}
                  <div className="mt-6 p-4 rounded-lg bg-[var(--bg-surface-sunken)] border-l-2 border-[var(--accent-crimson)] text-xs text-[var(--text-secondary)] italic">
                    &ldquo;Ensuring Byte Builder delivers unified software where code reliability, design fidelity, and applied intelligence operate seamlessly.&rdquo;
                  </div>
                </div>

              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Bottom Collaboration Banner */}
        <div className="card3d card3d-wave mt-16 text-center p-8 sm:p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
          <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display mb-2">
            Want to Collaborate with the Trio?
          </h4>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto mb-6">
            Whether scoping a greenfield project or scaling an existing platform, Manav, Anurag, and Sarfaraz bring complementary end-to-end expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          >
            <span>Start A Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

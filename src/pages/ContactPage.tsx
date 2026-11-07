import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'full-stack',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields before sending.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Interactive submit simulation
    setFormSubmitted(true);
    setErrorMessage('');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'full-stack',
      message: '',
    });
    setFormSubmitted(false);
  };

  return (
    <div className="w-full py-16 sm:py-20 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <SectionHeader
          kicker="Connect & Collaborate"
          title="Contact Byte Builder"
          description="Ready to build scalable infrastructure, refined frontend experiences, or machine learning pipelines? Reach out to our founding team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Information & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card3d p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-crimson)] font-semibold">
                Direct Channels
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mt-1 mb-6">
                Start a Conversation
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--text-muted)] block">Email Inquiries</span>
                    <a
                      href="mailto:contact@bytebuilder.dev"
                      className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent-crimson)] transition-colors"
                    >
                      contact@bytebuilder.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--text-muted)] block">Response Cadence</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      Usually within 24 hours on business days
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-crimson)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--text-muted)] block">Operating Model</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      Global Distributed Engineering &amp; Client Partnerships
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold block mb-4">
                  Public Network &amp; Code
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)] transition-colors shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)] transition-colors shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)] transition-colors shadow-xs"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Availability Notice */}
            <div className="card3d p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-2 shadow-[var(--shadow-card)]">
              <div className="font-semibold text-[var(--text-primary)]">Founding Engineers On Call</div>
              <p>
                Inquiries are reviewed collectively by <strong className="text-[var(--text-primary)] font-semibold">Manav Kumar</strong>, <strong className="text-[var(--text-primary)] font-semibold">Anurag Sharma</strong>, and <strong className="text-[var(--text-primary)] font-semibold">Sarfaraz</strong> to assess technical feasibility and architectural alignment.
              </p>
            </div>
          </div>

          {/* Right Column: Collaboration Message Form UI */}
          <div className="lg:col-span-7">
            <div className="card3d p-8 sm:p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-crimson)] flex items-center justify-center mb-4 border border-[var(--accent-crimson)]/30 shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-2">
                    Message Received
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed mb-8">
                    Thank you, <strong className="text-[var(--text-primary)] font-semibold">{formData.name}</strong>. Our founding team (Manav, Anurag &amp; Sarfaraz) has received your transmission and will review your project scope shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_16px_rgba(225,29,72,0.4)]"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-crimson)] font-semibold">
                      Collaboration Scope
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display mt-1 mb-2">
                      Send Us A Project Inquiry
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mb-6">
                      Tell us about your application, technical goals, or partnership ideas.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-600 dark:text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[var(--accent-crimson)]" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                        Your Name <span className="text-[var(--accent-crimson)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:bg-[var(--bg-surface)] focus:outline-hidden focus:border-[var(--accent-crimson)] focus:ring-1 focus:ring-[var(--accent-crimson)] transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                        Email Address <span className="text-[var(--accent-crimson)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:bg-[var(--bg-surface)] focus:outline-hidden focus:border-[var(--accent-crimson)] focus:ring-1 focus:ring-[var(--accent-crimson)] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                      Primary Technical Discipline
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] focus:bg-[var(--bg-surface)] focus:outline-hidden focus:border-[var(--accent-crimson)] focus:ring-1 focus:ring-[var(--accent-crimson)] transition-all"
                    >
                      <option value="full-stack" className="bg-[var(--bg-surface)] text-[var(--text-primary)]">Full-Stack Application Development</option>
                      <option value="frontend" className="bg-[var(--bg-surface)] text-[var(--text-primary)]">Frontend Architecture &amp; Design System</option>
                      <option value="backend" className="bg-[var(--bg-surface)] text-[var(--text-primary)]">Distributed Backend &amp; Cloud Infrastructure</option>
                      <option value="ai-integration" className="bg-[var(--bg-surface)] text-[var(--text-primary)]">Applied Machine Learning &amp; AI Integration</option>
                      <option value="consulting" className="bg-[var(--bg-surface)] text-[var(--text-primary)]">Technical Advisory &amp; Codebase Audit</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                      Project Details &amp; Requirements <span className="text-[var(--accent-crimson)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your timeline, current architectural state, and what problems Byte Builder can solve..."
                      className="w-full px-4 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:bg-[var(--bg-surface)] focus:outline-hidden focus:border-[var(--accent-crimson)] focus:ring-1 focus:ring-[var(--accent-crimson)] transition-all resize-y"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-crimson)] hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-crimson)]"
                  >
                    <span>Transmit Collaboration Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

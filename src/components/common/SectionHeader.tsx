import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-2 h-0.5 bg-[var(--accent-crimson)]" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-crimson)]">
            {kicker}
          </span>
          {isCenter && <span className="w-2 h-0.5 bg-[var(--accent-crimson)]" aria-hidden="true" />}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] font-display text-balance">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

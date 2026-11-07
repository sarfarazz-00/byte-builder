import React from 'react';
import { Video, User, Layers, Sparkles } from 'lucide-react';

interface PlaceholderBlockProps {
  type: 'video' | 'portrait' | 'project' | 'animation';
  title: string;
  subtitle?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  className?: string;
}

export const PlaceholderBlock: React.FC<PlaceholderBlockProps> = ({
  type,
  title,
  subtitle = 'Placeholder Slot · Asset integration in Phase 2',
  aspectRatio = 'video',
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'video':
        return <Video className="w-6 h-6 text-[var(--accent-crimson)]" />;
      case 'portrait':
        return <User className="w-6 h-6 text-[var(--accent-crimson)]" />;
      case 'animation':
        return <Sparkles className="w-6 h-6 text-[var(--accent-crimson)]" />;
      case 'project':
      default:
        return <Layers className="w-6 h-6 text-[var(--accent-crimson)]" />;
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video':
        return 'aspect-video';
      case 'square':
        return 'aspect-square';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'wide':
        return 'aspect-[21/9]';
      case 'auto':
      default:
        return '';
    }
  };

  const getTypeBadge = () => {
    switch (type) {
      case 'video':
        return 'VIDEO CONTAINER';
      case 'portrait':
        return 'PORTRAIT ASSET';
      case 'animation':
        return 'MOTION CANVAS';
      case 'project':
      default:
        return 'PROJECT SHOWCASE';
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface-sunken)]/60 flex flex-col items-center justify-center p-6 text-center select-none transition-all duration-200 hover:border-[var(--accent-crimson)]/50 hover:bg-[var(--bg-surface)] ${getAspectClass()} ${className}`}
      role="region"
      aria-label={`${title} placeholder`}
    >
      {/* Subtle background blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />

      {/* Decorative hairline corner markers */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[var(--accent-crimson)]/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[var(--accent-crimson)]/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[var(--accent-crimson)]/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[var(--accent-crimson)]/40 pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm">
        <div className="w-12 h-12 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xs flex items-center justify-center mb-3 text-[var(--accent-crimson)]">
          {getIcon()}
        </div>
        
        <span className="text-[11px] font-mono tracking-wider text-[var(--accent-crimson)] font-medium mb-1">
          {getTypeBadge()}
        </span>

        <h4 className="text-sm font-semibold text-[var(--text-primary)] line-clamp-1">
          {title}
        </h4>

        {subtitle && (
          <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

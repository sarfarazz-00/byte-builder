import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const GlobalBackground: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [lightVideoError, setLightVideoError] = useState(false);
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const lightVideoRef = useRef<HTMLVideoElement>(null);

  // Both videos stay mounted continuously (no reload flashes on theme
  // switches). The active one plays; the hidden one is paused purely for
  // performance — playback positions are preserved across switches and
  // dark-mode playback behaviour is untouched.
  useEffect(() => {
    const dark = videoRef.current;
    const light = lightVideoRef.current;
    if (dark && !videoError) {
      if (theme === 'dark') {
        dark.play().catch(() => {});
      } else {
        dark.pause();
      }
    }
    if (light && !lightVideoError) {
      if (theme === 'light') {
        light.play().catch(() => {});
      } else {
        light.pause();
      }
    }
  }, [theme, videoError, lightVideoError]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Cinematic Background Video — DARK MODE (Single Shared Instance across all routes) */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          src="/assets/aistudio/gemini_generated_video_0554ba03_6353f93d.mp4"
          className="global-bg-video w-full h-full object-cover object-center transition-all duration-700 pointer-events-none"
        />
      )}

      {/* 1b. Light-mode Veo video — LIGHT MODE (hidden while dark, paused for performance) */}
      {!lightVideoError && (
        <video
          ref={lightVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setLightVideoError(true)}
          src="/videos/light-mode-bg.mp4"
          className="global-bg-video-light absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 pointer-events-none"
        />
      )}

      {/* 2. Static Fallback for reduced-motion, mobile devices, or video load failure */}
      <div
        className={`global-bg-fallback absolute inset-0 ${videoError || lightVideoError ? '!block' : 'hidden'} bg-[var(--bg-primary)]`}
      />

      {/* 3. Subtle Crimson & Silver Ambient Lighting (Soft directional glow, never overpowering) */}
      <div className="ambient-crimson-primary absolute -top-32 right-0 sm:right-12 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full pointer-events-none transition-all duration-700" />
      <div className="ambient-crimson-secondary absolute top-1/2 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none transition-all duration-700" />

      {/* 4. Network-Like Visual Ambience (Fine geometric network dot matrix) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-35"
        style={{
          backgroundImage: `radial-gradient(var(--border-strong) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 5. Readability Overlays — DARK MODE ONLY. They exist to dim the bright Veo
          video; in light mode they would wash out the light-mode video with
          near-white (bg-primary at 85–90%), so they are rendered exclusively in dark. */}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/85 via-[var(--bg-primary)]/50 to-[var(--bg-primary)]/90 transition-colors duration-300 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[var(--bg-primary)]/25 to-[var(--bg-primary)]/80 transition-colors duration-300 pointer-events-none" />
        </>
      )}
    </div>
  );
};

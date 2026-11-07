import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

/**
 * Global premium 3D card system.
 *
 * Theme flip: on every real theme change (never on mount) all `.card3d`
 * elements play ONE single 180° flip. The theme colours update immediately
 * with the toggle; the card turns edge-on, the rotation direction switches at
 * that concealed midpoint, and the card settles facing the viewer in the new
 * theme — content never mirrors because the turn never passes edge-on.
 * The alternating data attribute makes rapid switches restart cleanly, and it
 * is removed after settle so page navigations do not replay the flip.
 * Three-card rows (`.card3d-deck`) cascade left-to-right via nth-child
 * animation delays. Tilt is body-delegated and writes CSS variables directly —
 * no React state updates on pointer movement. Fine pointers only.
 */
export function useCard3D() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const prevTheme = useRef(theme);
  const flipCount = useRef(0);

  // One flip per real theme change; pure CSS via one data attribute.
  useEffect(() => {
    if (prevTheme.current === theme) return;
    prevTheme.current = theme;
    if (prefersReducedMotion) return;
    flipCount.current += 1;
    const root = document.documentElement;
    root.dataset.cardFlip = flipCount.current % 2 ? 'a' : 'b';
    // Removed after the longest flip (+ row stagger) has fully settled.
    const timer = window.setTimeout(() => {
      delete root.dataset.cardFlip;
    }, 950);
    return () => window.clearTimeout(timer);
  }, [theme, prefersReducedMotion]);

  // Pointer-responsive tilt via body-level delegation: no React state updates
  // on pointer movement. Fine pointers only.
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cardFrom = (target: EventTarget | null) =>
      target instanceof Element ? target.closest<HTMLElement>('.card3d') : null;

    const onMove = (e: PointerEvent) => {
      const card = cardFrom(e.target);
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--card-rx', `${(-py * 3).toFixed(2)}deg`);
      card.style.setProperty('--card-ry', `${(px * 5).toFixed(2)}deg`);
    };

    const onOut = (e: PointerEvent) => {
      const card = cardFrom(e.target);
      if (!card || card.contains(e.relatedTarget as Node)) return;
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
    };

    document.body.addEventListener('pointermove', onMove, { passive: true });
    document.body.addEventListener('pointerout', onOut, { passive: true });
    return () => {
      document.body.removeEventListener('pointermove', onMove);
      document.body.removeEventListener('pointerout', onOut);
    };
  }, [prefersReducedMotion]);
}

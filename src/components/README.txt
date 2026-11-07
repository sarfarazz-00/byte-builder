BYTE BUILDER — Premium Animated Ecosystem Visual

Files:
- AnimatedEcosystem.tsx
- AnimatedEcosystem.css

What changed from the first concept:
- Replaced the toy-like pink/blue/purple glowing spheres with restrained titanium/pearl-metal hexagonal modules.
- Replaced busy dashed orbit decoration with three clean convergence paths and discreet travelling signals.
- Added a faceted central geometric core with a refined metallic surface and restrained crimson lighting.
- Unified the palette around silver, graphite, pearl and BYTE BUILDER crimson.
- Added separate dark/light component palettes.
- Uses only React, SVG and CSS; no external libraries or image assets.
- Uses unique SVG IDs so gradients, filters and motion paths do not collide if the component is rendered more than once.
- Includes responsive sizing and prefers-reduced-motion support.

Integration:
1. Copy AnimatedEcosystem.tsx and AnimatedEcosystem.css into your existing src/components folder.
2. Replace the previous component files with these versions.
3. In AboutPage.tsx, import AnimatedEcosystem from the correct relative path.
4. Pass the existing ThemeContext value: theme={isDark ? 'dark' : 'light'} (adapt variable names to your existing context).
5. Replace only the existing "Collective Synergy Motion Slot" placeholder.

Do not create another ThemeProvider. Do not modify the existing Hero, background videos, card system, or other pages.

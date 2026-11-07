import { useId } from 'react';
import './AnimatedEcosystem.css';

export type EcosystemTheme = 'dark' | 'light';

export interface AnimatedEcosystemProps {
  /** Pass the current theme from BYTE BUILDER's existing ThemeContext. */
  theme?: EcosystemTheme;
  /** Accessible description for the decorative visual. */
  label?: string;
  className?: string;
}

/**
 * BYTE BUILDER — Three disciplines converging into one ecosystem.
 * Premium, restrained SVG motion; no external assets or animation libraries.
 */
export default function AnimatedEcosystem({
  theme = 'dark',
  label = 'Three disciplines converging into the BYTE BUILDER digital ecosystem',
  className = '',
}: AnimatedEcosystemProps) {
  const rawId = useId();
  const uid = `bbeco-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const routeLeft = `${uid}-route-left`;
  const routeMid = `${uid}-route-mid`;
  const routeRight = `${uid}-route-right`;

  return (
    <section
      className={`bb-ecosystem ${className}`.trim()}
      data-theme={theme}
      role="img"
      aria-label={label}
    >
      <div className="bb-eco-heading" aria-hidden="true">
        <span className="bb-eco-kicker">COLLECTIVE INTELLIGENCE</span>
        <span className="bb-eco-heading-rule" />
        <span className="bb-eco-subheading">THREE DISCIPLINES · ONE SYSTEM</span>
      </div>

      <svg className="bb-eco-art" viewBox="0 0 720 430" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--bb-metal-hi)" />
            <stop offset=".32" stopColor="var(--bb-metal-mid)" />
            <stop offset=".62" stopColor="var(--bb-metal-lo)" />
            <stop offset="1" stopColor="var(--bb-metal-hi)" />
          </linearGradient>
          <linearGradient id={`${uid}-metal-face`} x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="var(--bb-face-hi)" />
            <stop offset=".5" stopColor="var(--bb-face-mid)" />
            <stop offset="1" stopColor="var(--bb-face-lo)" />
          </linearGradient>
          <linearGradient id={`${uid}-core`} x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="var(--bb-core-hi)" />
            <stop offset=".38" stopColor="var(--bb-core-mid)" />
            <stop offset="1" stopColor="var(--bb-core-lo)" />
          </linearGradient>
          <linearGradient id={`${uid}-route`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--bb-route-start)" stopOpacity=".08" />
            <stop offset=".52" stopColor="var(--bb-accent)" stopOpacity=".92" />
            <stop offset="1" stopColor="var(--bb-route-end)" stopOpacity=".16" />
          </linearGradient>
          <linearGradient id={`${uid}-glint`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".48" stopColor="#fff" stopOpacity=".9" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${uid}-aura`}>
            <stop offset="0" stopColor="var(--bb-aura)" stopOpacity=".85" />
            <stop offset="1" stopColor="var(--bb-aura)" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-shadow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feOffset dy="8" result="offset" />
            <feComponentTransfer><feFuncA type="linear" slope=".28" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={`${uid}-soft-glow`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id={`${uid}-tight-glow`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id={`${uid}-core-clip`}>
            <path d="M360 218 414 249 414 311 360 342 306 311 306 249Z" />
          </clipPath>
        </defs>

        {/* Quiet technical field: deliberately restrained, never a busy grid. */}
        <g className="bb-eco-field">
          <path d="M48 98H672M48 164H672M48 230H672M48 296H672M48 362H672" />
          <path d="M108 64V370M234 64V370M360 64V370M486 64V370M612 64V370" />
          <path className="bb-eco-field-diagonal" d="M80 344 280 104M440 360 640 120" />
        </g>

        {/* Three fine routes converge at the central core. */}
        <g className="bb-eco-routes" fill="none">
          <path className="bb-eco-route-base" d="M142 143C190 165 239 194 315 258" />
          <path className="bb-eco-route-base" d="M360 113C360 157 360 194 360 239" />
          <path className="bb-eco-route-base" d="M578 143C530 165 481 194 405 258" />
          <path id={routeLeft} className="bb-eco-route-flow" stroke={`url(#${uid}-route)`} d="M142 143C190 165 239 194 315 258" />
          <path id={routeMid} className="bb-eco-route-flow bb-eco-route-flow--mid" stroke={`url(#${uid}-route)`} d="M360 113C360 157 360 194 360 239" />
          <path id={routeRight} className="bb-eco-route-flow bb-eco-route-flow--right" stroke={`url(#${uid}-route)`} d="M578 143C530 165 481 194 405 258" />
        </g>

        {/* Fine travelling signals. */}
        <g className="bb-eco-signal-set" filter={`url(#${uid}-tight-glow)`}>
          <circle r="3.2" className="bb-eco-signal bb-eco-signal--one">
            <animateMotion dur="3.4s" repeatCount="indefinite"><mpath href={`#${routeLeft}`} /></animateMotion>
          </circle>
          <circle r="3" className="bb-eco-signal bb-eco-signal--two">
            <animateMotion dur="3.1s" begin="-.8s" repeatCount="indefinite"><mpath href={`#${routeMid}`} /></animateMotion>
          </circle>
          <circle r="3.2" className="bb-eco-signal bb-eco-signal--three">
            <animateMotion dur="3.6s" begin="-1.4s" repeatCount="indefinite"><mpath href={`#${routeRight}`} /></animateMotion>
          </circle>
        </g>

        {/* Node A — interface / frontend. */}
        <g className="bb-eco-node bb-eco-node--left" transform="translate(142 143)" filter={`url(#${uid}-shadow)`}>
          <circle r="53" className="bb-eco-node-aura" />
          <path className="bb-eco-node-shadow" d="M-35 34 0 49 35 34 0 23Z" />
          <path className="bb-eco-node-back" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
          <path className="bb-eco-node-face" fill={`url(#${uid}-metal-face)`} d="M0-30 26-15 26 15 0 30-26 15-26-15Z" />
          <path className="bb-eco-node-facet" d="M0-30V30M-26-15 0 0 26-15M0 0 26 15M0 0-26 15" />
          <path className="bb-eco-node-mark" d="M-10-8-18 0-10 8M10-8 18 0 10 8M3-12-3 12" />
          <path className="bb-eco-node-specular" d="M-18-19-2-28 13-19" />
          <path className="bb-eco-node-rim" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
        </g>

        {/* Node B — systems / architecture. */}
        <g className="bb-eco-node bb-eco-node--mid" transform="translate(360 82)" filter={`url(#${uid}-shadow)`}>
          <circle r="53" className="bb-eco-node-aura" />
          <path className="bb-eco-node-shadow" d="M-35 34 0 49 35 34 0 23Z" />
          <path className="bb-eco-node-back" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
          <path className="bb-eco-node-face" fill={`url(#${uid}-metal-face)`} d="M0-30 26-15 26 15 0 30-26 15-26-15Z" />
          <path className="bb-eco-node-facet" d="M-15-8H15M-15 0H15M-15 8H15M0-15V15" />
          <circle cx="-15" cy="-8" r="2.4" className="bb-eco-node-pin" />
          <circle cx="15" cy="-8" r="2.4" className="bb-eco-node-pin" />
          <circle cx="-15" cy="8" r="2.4" className="bb-eco-node-pin" />
          <circle cx="15" cy="8" r="2.4" className="bb-eco-node-pin" />
          <path className="bb-eco-node-specular" d="M-18-19-2-28 13-19" />
          <path className="bb-eco-node-rim" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
        </g>

        {/* Node C — applied intelligence. */}
        <g className="bb-eco-node bb-eco-node--right" transform="translate(578 143)" filter={`url(#${uid}-shadow)`}>
          <circle r="53" className="bb-eco-node-aura" />
          <path className="bb-eco-node-shadow" d="M-35 34 0 49 35 34 0 23Z" />
          <path className="bb-eco-node-back" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
          <path className="bb-eco-node-face" fill={`url(#${uid}-metal-face)`} d="M0-30 26-15 26 15 0 30-26 15-26-15Z" />
          <path className="bb-eco-node-facet" d="M0-16 15-7 15 9 0 18-15 9-15-7Z" />
          <circle r="6" className="bb-eco-node-ai-core" />
          <path className="bb-eco-node-specular" d="M-18-19-2-28 13-19" />
          <path className="bb-eco-node-rim" d="M0-39 34-19 34 20 0 40-34 20-34-19Z" />
        </g>

        {/* Disciplines are labelled outside the nodes, not embedded in tiny spheres. */}
        <g className="bb-eco-labels">
          <text x="142" y="207" textAnchor="middle" className="bb-eco-label-main">FRONTEND</text>
          <text x="142" y="222" textAnchor="middle" className="bb-eco-label-sub">INTERFACES</text>
          <text x="360" y="146" textAnchor="middle" className="bb-eco-label-main">SYSTEMS</text>
          <text x="360" y="161" textAnchor="middle" className="bb-eco-label-sub">ARCHITECTURE</text>
          <text x="578" y="207" textAnchor="middle" className="bb-eco-label-main">APPLIED AI</text>
          <text x="578" y="222" textAnchor="middle" className="bb-eco-label-sub">INTELLIGENCE</text>
        </g>

        {/* Central ecosystem core — layered metal/glass geometry, not a cartoon orb. */}
        <g className="bb-eco-core">
          <ellipse cx="360" cy="347" rx="100" ry="15" className="bb-eco-core-ground-shadow" />
          <circle cx="360" cy="280" r="94" className="bb-eco-core-aura" />
          <ellipse cx="360" cy="281" rx="91" ry="29" className="bb-eco-core-orbit bb-eco-core-orbit--outer" />
          <ellipse cx="360" cy="281" rx="72" ry="22" className="bb-eco-core-orbit bb-eco-core-orbit--inner" />
          <path className="bb-eco-core-back" d="M360 207 424 244 424 316 360 353 296 316 296 244Z" />
          <path className="bb-eco-core-face" fill={`url(#${uid}-core)`} d="M360 220 411 249 411 309 360 338 309 309 309 249Z" />
          <path className="bb-eco-core-inner" d="M360 236 397 257 397 301 360 322 323 301 323 257Z" />
          <g clipPath={`url(#${uid}-core-clip)`}>
            <path className="bb-eco-core-light-sweep" fill={`url(#${uid}-glint)`} d="M285 300 350 210 382 210 317 340Z" />
          </g>
          <path className="bb-eco-core-facets" d="M360 220V338M309 249 411 309M411 249 309 309M323 257 397 301M397 257 323 301" />
          <path className="bb-eco-core-top-glint" d="M333 235 360 220 387 235" />
          <circle cx="360" cy="280" r="8" className="bb-eco-core-center" />
          <circle cx="360" cy="280" r="57" className="bb-eco-core-dash" />
          <text x="360" y="284" textAnchor="middle" className="bb-eco-core-mark">BB</text>
        </g>

        <text x="360" y="390" textAnchor="middle" className="bb-eco-brand-name">BYTE BUILDER</text>
        <text x="360" y="405" textAnchor="middle" className="bb-eco-brand-sub">ONE CONNECTED ECOSYSTEM</text>
      </svg>

      <div className="bb-eco-bottomline" aria-hidden="true">
        <span>DESIGN</span><i /><span>ENGINEER</span><i /><span>INTELLIGENCE</span>
      </div>
    </section>
  );
}

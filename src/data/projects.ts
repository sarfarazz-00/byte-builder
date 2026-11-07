export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  techStack: string[];
  summary: string;
  status: string;
  placeholderLabel: string;
  coverDark?: string;
  coverLight?: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'cloud-infrastructure-blueprint',
    title: 'Cloud Systems Architecture',
    tagline: 'Distributed service orchestrator and containerized backend blueprint',
    category: 'Systems & Infrastructure',
    techStack: ['TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
    summary: 'An architectural blueprint for unified telemetry, automated service scaling, and structured logging across multi-tier microservices.',
    status: 'Architecture Blueprint',
    placeholderLabel: 'Systems Architecture Blueprint Slot',
    coverDark: '/projects/cloud-systems-dark.png',
    coverLight: '/projects/cloud-systems-light.png',
    features: [
      'Modular service boundary definitions and container parity',
      'Event-driven communication pipelines and transaction integrity',
      'Structured health probing and telemetry visualization',
    ],
    metrics: [
      { label: 'Discipline', value: 'Systems' },
      { label: 'Architecture', value: 'Distributed' },
      { label: 'Scope', value: 'Full-Stack' },
    ],
  },
  {
    id: 'applied-ai-prototype',
    title: 'Cognitive AI Pipeline Prototype',
    tagline: 'Contextual reasoning and neural retrieval integration concept',
    category: 'Applied Artificial Intelligence',
    techStack: ['Python', 'Gemini API', 'React', 'Vector DB', 'FastAPI'],
    summary: 'A prototype pipeline exploring multimodal LLM reasoning, grounded citations, and semantic vector indexing for complex unstructured documents.',
    status: 'AI Prototype',
    placeholderLabel: 'Applied AI Workflow Slot',
    coverDark: '/projects/cognitive-aI-dark.png',
    coverLight: '/projects/cognitive-ai-light.png',
    features: [
      'Semantic document chunking and vector retrieval prototypes',
      'Tool-augmented function calling with verified citations',
      'Interactive conversational synthesis interface',
    ],
    metrics: [
      { label: 'Discipline', value: 'AI / ML' },
      { label: 'Reasoning', value: 'Multimodal' },
      { label: 'Scope', value: 'Applied' },
    ],
  },
  {
    id: 'design-system-primitive',
    title: 'Design System & UI Engine',
    tagline: 'Tokens-first accessible component framework concept',
    category: 'Frontend Engineering',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI'],
    summary: 'An accessible, tokens-driven component library engineered for modern web platforms with strict WCAG contrast compliance and fluid interactions.',
    status: 'Design Concept',
    placeholderLabel: 'Frontend Component Engine Slot',
    coverDark: '/projects/design-system-dark.png',
    coverLight: '/projects/design-system-light.png',
    features: [
      'WCAG AA accessible keyboard navigation and focus rings',
      'Composable design tokens with zero-runtime CSS overhead',
      'Responsive interaction choreography and fluid states',
    ],
    metrics: [
      { label: 'Discipline', value: 'Frontend' },
      { label: 'Aesthetics', value: 'Tokens' },
      { label: 'Scope', value: 'Component' },
    ],
  },
];

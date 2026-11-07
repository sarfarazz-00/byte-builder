export interface TechnologyCategory {
  id: string;
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    purpose: string;
  }[];
}

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    id: 'programming',
    category: 'Programming Languages',
    description: 'Foundational typed and high-performance languages power our core logic and engineering.',
    items: [
      { name: 'TypeScript', level: 'Primary', purpose: 'Type-safe full-stack application development' },
      { name: 'JavaScript (ESNext)', level: 'Core', purpose: 'Universal runtime & dynamic client-side scripting' },
      { name: 'Python', level: 'Core', purpose: 'AI modeling, scientific workflows, and backend automation' },
      { name: 'SQL', level: 'Advanced', purpose: 'Relational database schema modeling and data analysis' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    description: 'Modern component libraries and styling systems delivering responsive, accessible experiences.',
    items: [
      { name: 'React 19', level: 'Specialist', purpose: 'Declarative component architecture & state trees' },
      { name: 'Tailwind CSS v4', level: 'Specialist', purpose: 'Utility-first modern design token systems' },
      { name: 'Vite', level: 'Standard', purpose: 'Lightning-fast compilation and bundling toolchain' },
      { name: 'Motion / Framer', level: 'Advanced', purpose: 'Fluid UI transitions and physics-based interactions' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend Development',
    description: 'Scalable services, RESTful APIs, and resilient transactional databases.',
    items: [
      { name: 'Node.js & Express', level: 'Core', purpose: 'Asynchronous event-driven server runtime' },
      { name: 'PostgreSQL', level: 'Advanced', purpose: 'Relational data integrity, indexing, and storage' },
      { name: 'REST & GraphQL APIs', level: 'Specialist', purpose: 'Structured inter-service and client communication' },
      { name: 'Firebase & Cloud SQL', level: 'Advanced', purpose: 'Real-time synchronization and managed persistence' },
    ],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    description: 'Intelligent systems, multimodal APIs, and applied machine learning integration.',
    items: [
      { name: 'Google Gemini API', level: 'Specialist', purpose: 'Multimodal generative reasoning and function calling' },
      { name: 'PyTorch / Scikit-Learn', level: 'Core', purpose: 'Applied model training, embeddings, and predictive math' },
      { name: 'Prompt Engineering & Agents', level: 'Advanced', purpose: 'Structured tool use and automated reasoning chains' },
      { name: 'Vector Embeddings', level: 'Core', purpose: 'Semantic search, retrieval, and contextual memory' },
    ],
  },
  {
    id: 'dev-tools',
    category: 'Development Tools & DevOps',
    description: 'Continuous integration, containerization, and developer productivity workflows.',
    items: [
      { name: 'Git & GitHub', level: 'Universal', purpose: 'Version control, branch protection, and collaborative review' },
      { name: 'Docker', level: 'Core', purpose: 'Isolated containerized runtimes and environment parity' },
      { name: 'ESLint & TypeScript Compiler', level: 'Universal', purpose: 'Automated static analysis and zero-defect linting' },
      { name: 'Vercel / Cloud Run', level: 'Standard', purpose: 'Modern serverless deployments and edge routing' },
    ],
  },
];

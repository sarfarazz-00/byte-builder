export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  skills: string[];
  imageSrc?: string;
  imageDarkSrc?: string;
  imageLightSrc?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  portfolioUrl?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'manav-kumar',
    name: 'Manav Kumar',
    role: 'Frontend & UI/UX',
    specialization: 'Modern Web Interfaces, Component Architecture & Fluid Interaction Design',
    bio: 'Crafting pixel-perfect, accessible, and high-performance user interfaces with modern frontend frameworks and fluid design systems.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'State Management', 'UI/UX Design'],
    imageSrc: '/assets/aistudio/anurag_portrait.png',
    imageDarkSrc: '/team/manav_member_dark.png',
    imageLightSrc: '/team/manav_member_light.png',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'anurag-sharma',
    name: 'Anurag Sharma',
    role: 'Systems & Architecture',
    specialization: 'Distributed Architecture, Scalable Backend & Cloud Infrastructure',
    bio: 'Architecting resilient backend systems, distributed services, and cloud-native databases engineered for high availability and structural reliability.',
    skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Distributed Systems'],
    imageSrc: '/assets/aistudio/manav_portrait.png',
    imageDarkSrc: '/team/anurag_member_dark.png',
    imageLightSrc: '/team/anurag_member_light.png',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'sarfaraz',
    name: 'Sarfaraz',
    role: 'AI & Backend',
    specialization: 'Applied Machine Learning, Intelligent Pipelines & Server Infrastructure',
    bio: 'Integrating cutting-edge machine learning models, cognitive workflows, and high-throughput server backends into seamless digital products.',
    skills: ['Python', 'FastAPI', 'Gemini API', 'Machine Learning', 'API Engineering'],
    imageSrc: '/assets/aistudio/sarfaraz_portrait.png',
    imageDarkSrc: '/team/sarfaraz_member_dark.png',
    imageLightSrc: '/team/sarfaraz_member_light.png',
    githubUrl: 'https://github.com/sarfarazz-00',
    linkedinUrl: 'https://www.linkedin.com/in/sarfaraz-eng/',
    email: 'msfaraz91@gmail.com',
  },
];


import type { ImageMetadata } from 'astro';
import type { Period } from '@/lib/format';
import type { TechKey } from './tech';

import profilePhoto from '@/assets/profile.png';
import touchLogo from '@/assets/logos/touch-multimedia.jpg';
import tecsenLogo from '@/assets/logos/tecsen-logo.png';
import unipdLogo from '@/assets/logos/unipd.png';
import quadriLogo from '@/assets/logos/quadri.png';
import cambridgeLogo from '@/assets/logos/cambridge-logo.jpg';
import aicaLogo from '@/assets/logos/aica-logo.png';
import snoutspaceIcon from '@/assets/projects/snoutspace_icon.png';
import powsupIcon from '@/assets/projects/paws-up.webp';
import whiskerIcon from '@/assets/projects/WhiskerWatcher-logo.png';
import fitnessIcon from '@/assets/projects/fitness-center.png';
import svelascaIcon from '@/assets/projects/svelasca.png';
import oziverseIcon from '@/assets/projects/oziverse-logo.png';
import oziverseShot1 from '@/assets/projects/oziverse-screen-1.png';
import oziverseShot2 from '@/assets/projects/oziverse-screen-2.png';
import oziverseShot3 from '@/assets/projects/oziverse-screen-3.png';
import oziverseShot4 from '@/assets/projects/oziverse-screen-4.png';

export interface Link {
  label: string;
  url: string;
  icon: string;
}

const website = (url: string): Link => ({ label: 'Website', url, icon: 'fa6-solid:globe' });
const github = (url: string): Link => ({ label: 'GitHub', url, icon: 'fa6-brands:github' });
const linkedin = (url: string): Link => ({ label: 'LinkedIn', url, icon: 'fa6-brands:linkedin-in' });

export const meta = {
  title: 'Riccardo Martinello — Full-Stack Developer',
  description:
    'Full-stack developer and Computer Science student at the University of Padova: C#/.NET, Angular, Java and native Android in Kotlin.',
};

export const profile = {
  name: 'Riccardo Martinello',
  firstName: 'Riccardo',
  role: 'Full-Stack Developer',
  subtitle: 'Computer Science Student',
  photo: profilePhoto,
  status: ['Open for work', 'Open to relocation'],
  details: [
    { label: 'Email', value: 'rickyma686@gmail.com', url: 'mailto:rickyma686@gmail.com' },
    { label: 'Phone', value: '+39 331 580 4865', url: 'tel:+393315804865' },
    { label: 'Location', value: 'Vicenza, Italy' },
    { label: 'Relocation', value: 'Open to relocation' },
  ],
  about:
    'Full-stack software developer with professional experience building production web platforms and native mobile apps. I work across the stack in C#/.NET, Angular, and Java, and ship native Android in Kotlin. Currently completing my BSc in Computer Science at the University of Padova (expected Oct 2026) while delivering client solutions in e-commerce, web portals, and intelligent transportation systems. Fluent in English (C1) and always exploring new technologies.',
  cv: { url: '/cv.pdf', fileName: 'CV-Riccardo_Martinello.pdf' },
  website: 'https://riccardo.martinello.dev',
  /** Closing line of the résumé; Italian recruiters expect the GDPR consent. */
  consent:
    'I hereby consent to the processing of the personal data contained in this CV for recruitment purposes, in accordance with Regulation (EU) 2016/679 (GDPR).',
  email: 'rickyma686@gmail.com',
  links: [
    github('https://github.com/IsThisDemi'),
    linkedin('https://linkedin.com/in/riccardo-martinello/'),
  ] satisfies Link[],
};

export interface SkillGroup {
  title: string;
  icon: string;
  tint: readonly [string, string];
  items: TechKey[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Currently using',
    icon: 'fa6-solid:bolt',
    tint: ['#64d2ff', '#0a84ff'],
    items: [
      'angular',
      'react',
      'astro',
      'tailwind',
      'bootstrap',
      'threejs',
      'csharp',
      'qt',
      'mongodb',
      'javascript',
      'typescript',
      'kotlin',
    ],
  },
  {
    title: 'Proficient',
    icon: 'fa6-solid:star',
    tint: ['#ffd60a', '#ff9f0a'],
    items: ['html', 'css', 'c', 'cpp', 'php', 'java', 'postgresql'],
  },
  {
    title: 'Learning',
    icon: 'fa6-solid:book-open',
    tint: ['#5fe38a', '#13a454'],
    items: ['nodejs', 'nextjs', 'electron'],
  },
  {
    title: 'Creative',
    icon: 'fa6-solid:palette',
    tint: ['#ff8fb1', '#ff375f'],
    items: ['blender', 'photoshop', 'procreate', 'unity'],
  },
  {
    title: 'Tools',
    icon: 'fa6-solid:screwdriver-wrench',
    tint: ['#b4b4bc', '#5d5d66'],
    items: ['windows', 'macos', 'linux', 'vscode', 'git', 'gitlab', 'aws', 'docker', 'clickup'],
  },
  {
    title: 'Languages',
    icon: 'fa6-solid:language',
    tint: ['#da8fff', '#5e5ce6'],
    items: ['italian', 'english'],
  },
];

export interface Job {
  role: string;
  company: string;
  logo: ImageMetadata;
  period: Period;
  place: string;
  summary: string;
  highlights: string[];
  stack: TechKey[];
  links: Link[];
}

export const jobs: Job[] = [
  {
    role: 'Software Developer',
    company: 'TouchMultimedia S.r.l.',
    logo: touchLogo,
    period: { from: '2025-04', to: null },
    place: 'Sarcedo, Italy',
    summary:
      'Touch Multimedia (founded 1996) designs and builds complex digital solutions — web portals, e-commerce platforms, and custom mobile applications.',
    highlights: [
      'Built and maintained backend business logic and API services in C#/.NET powering client e-commerce and web-portal platforms.',
      'Developed responsive front-ends in Angular, shipping production features across multiple client projects.',
      'Delivered native Android applications in Kotlin, owning features end-to-end from spec to release.',
      'Worked full-stack on the implementation and ongoing maintenance of web platforms for a range of clients.',
    ],
    stack: ['csharp', 'angular', 'kotlin', 'bootstrap'],
    links: [
      website('https://www.touchmultimedia.com/'),
      linkedin('https://www.linkedin.com/company/touch-multimedia-s-r-l/'),
    ],
  },
  {
    role: 'Software Developer',
    company: 'TEC Systems Engineering S.r.l.',
    logo: tecsenLogo,
    period: { from: '2024-10', to: '2025-03' },
    place: 'Padua, Italy',
    summary:
      'TecSen (founded 2007) builds advanced solutions for traffic management and Intelligent Transportation Systems (ITS).',
    highlights: [
      'Co-designed and implemented a modular Java platform for managing urban traffic lights and control systems, working alongside a team of Java developers.',
      "Built an automated PDF reporting tool with PDFBox, integrated into the platform's Java interface to replace manual report generation.",
      'Led R&D on traffic-light priority algorithms to improve urban mobility.',
      'Led development of the company website and several product-specific sites to modern standards of usability and performance.',
    ],
    stack: ['java', 'angular', 'astro', 'tailwind'],
    links: [website('https://www.tecsen.it/'), linkedin('https://www.linkedin.com/company/tecsen-srl')],
  },
];

export interface Project {
  name: string;
  icon: ImageMetadata;
  period: Period;
  description: string;
  team: number;
  roles: string[];
  categories: string[];
  stack: TechKey[];
  links: Link[];
  screenshots?: { src: ImageMetadata; alt: string }[];
}

export const projects: Project[] = [
  {
    name: 'SnoutSpace',
    icon: snoutspaceIcon,
    period: { from: '2024-08', to: '2024-10' },
    description:
      "SnoutSpace is a social networking platform where users can create profiles, share photos, and engage with content from other users, similar to Instagram and DeviantArt. Whether you're an artist showcasing your latest work, a photographer sharing your favorite shots, or just someone looking to connect with others, SnoutSpace provides a fun and interactive space to express yourself.",
    team: 1,
    roles: ['Full-stack Developer'],
    categories: ['Website', 'Open source'],
    stack: ['react', 'tailwind', 'apollo', 'postgresql'],
    links: [website('https://snoutspace.vercel.app/'), github('https://github.com/IsThisDemi/snoutspace')],
  },
  {
    name: 'PowsUp',
    icon: powsupIcon,
    period: { from: '2023-09', to: null },
    description:
      'PowsUp! is an Italian group that organizes furry events in Lazio and Central Italy. I manage the website and the general IT infrastructure together with three other developers. We are building a blog to post upcoming events; it is a work in progress, built with Astro and Contentful.',
    team: 10,
    roles: ['Volunteer', 'Front-end Developer'],
    categories: ['Website', 'Open source'],
    stack: ['astro', 'contentful', 'tailwind', 'pnpm', 'eslint', 'prettier'],
    links: [website('https://powsup.net/'), github('https://github.com/PowsUp/website')],
  },
  {
    name: 'WhiskerWatcher',
    icon: whiskerIcon,
    period: { from: '2024-01', to: '2024-07' },
    description: 'Object-Oriented Programming university project: a sensors application built with C++ and Qt.',
    team: 1,
    roles: ['Front-end Developer', 'Back-end Developer'],
    categories: ['Application', 'UI', 'Open source'],
    stack: ['cpp', 'qt'],
    links: [github('https://github.com/IsThisDemi/WhiskerWatcher')],
  },
  {
    name: 'FitnessCenter',
    icon: fitnessIcon,
    period: { from: '2023-05', to: '2023-09' },
    description:
      'Web Technologies university project: a website built with only plain HTML and CSS, fully WCAG 2.1 compliant, using PHP to connect to and manage data in a database.',
    team: 3,
    roles: ['Front-end Developer', 'Back-end Developer'],
    categories: ['Website', 'Open source'],
    stack: ['html', 'css', 'php', 'javascript'],
    links: [github('https://github.com/IsThisDemi/FitnessCenter')],
  },
  {
    name: 'Svelasca',
    icon: svelascaIcon,
    period: { from: '2023-07', to: '2023-08' },
    description:
      'Databases university project: designing, creating, and populating a PostgreSQL database for a fictional company from a given specification, with queries run through the PostgreSQL library in C++.',
    team: 1,
    roles: ['Database Modeler', 'Back-end Developer'],
    categories: ['Database', 'Open source'],
    stack: ['postgresql', 'cpp'],
    links: [github('https://github.com/IsThisDemi/progetto-basi-di-dati')],
  },
  {
    name: 'Oziverse',
    icon: oziverseIcon,
    period: { from: '2018-11', to: '2020-09' },
    description:
      'Oziverse was a social platform where people could build, share and play their own games. It had an active community and peaked at 60+ monthly active users.',
    team: 20,
    roles: ['Founder', 'Full-stack Developer', 'Game Developer', 'Moderator'],
    categories: ['Website', 'Video game', 'Forum'],
    stack: ['html', 'css', 'bootstrap', 'php', 'javascript', 'threejs', 'unity'],
    links: [],
    screenshots: [
      { src: oziverseShot1, alt: 'In-game multiplayer' },
      { src: oziverseShot2, alt: 'Game workshop' },
      { src: oziverseShot3, alt: 'Avatar customisation shop' },
      { src: oziverseShot4, alt: 'Avatar customisation' },
    ],
  },
];

export interface Diploma {
  title: string;
  institution: string;
  logo: ImageMetadata;
  period: Period;
  description: string;
  result?: string;
  url: string;
  /** A certification rather than a school: listed under Certifications in the résumé. */
  certificate?: boolean;
}

export const education: Diploma[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: 'University of Padova',
    logo: unipdLogo,
    period: { from: '2020-10', to: null },
    description: 'Expected graduation: October 2026.',
    result: 'In progress',
    url: 'https://informatica.math.unipd.it/en/',
  },
  {
    title: 'Scientific High School Diploma',
    institution: 'Liceo Scientifico G.B. Quadri',
    logo: quadriLogo,
    period: { from: '2015-09', to: '2020-07' },
    description: 'Applied sciences track.',
    result: '88/100',
    url: 'https://www.liceoquadri.edu.it/',
  },
  {
    title: 'C1 Advanced',
    institution: 'Cambridge English',
    logo: cambridgeLogo,
    period: { from: '2018-10', to: '2019-05' },
    description:
      'Cambridge Assessment English exam certifying high-level English for university and professional life.',
    result: 'C1 · 185',
    url: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/',
    certificate: true,
  },
  {
    title: 'ECDL Full Standard',
    institution: 'AICA',
    logo: aicaLogo,
    period: { from: '2017-10', to: '2019-02' },
    description: 'Internationally recognised computer literacy certification.',
    url: 'https://www.aicanet.it/aica/qualita/ecdl-full-standard',
    certificate: true,
  },
];

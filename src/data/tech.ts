import { registerSpriteIcons } from '@/lib/icon';

/**
 * Every technology mentioned on the site. Skills, jobs and projects refer to these by key,
 * so a name, logo or link is defined once.
 *
 * Icons are Iconify names ("set:name") rendered to SVG at build time, on a white tile:
 * colored logos keep their brand colors, single-color ones take `color` (default near-black).
 */
export interface Tech {
  name: string;
  icon: string;
  color?: string;
  url?: string;
}

export const tech = {
  angular: { name: 'Angular', icon: 'logos:angular-icon', url: 'https://angular.dev/' },
  react: { name: 'React', icon: 'logos:react', url: 'https://react.dev/' },
  astro: { name: 'Astro', icon: 'logos:astro-icon', url: 'https://astro.build/' },
  tailwind: { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
  bootstrap: { name: 'Bootstrap', icon: 'logos:bootstrap', url: 'https://getbootstrap.com/' },
  threejs: { name: 'Three.js', icon: 'simple-icons:threedotjs', url: 'https://threejs.org/' },
  csharp: { name: 'C# / .NET', icon: 'logos:c-sharp', url: 'https://dotnet.microsoft.com/' },
  qt: { name: 'Qt', icon: 'logos:qt', url: 'https://www.qt.io/' },
  mongodb: { name: 'MongoDB', icon: 'logos:mongodb-icon', url: 'https://www.mongodb.com/' },
  javascript: {
    name: 'JavaScript',
    icon: 'logos:javascript',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  typescript: { name: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
  kotlin: { name: 'Kotlin', icon: 'logos:kotlin-icon', url: 'https://kotlinlang.org/' },
  html: { name: 'HTML5', icon: 'logos:html-5', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  css: { name: 'CSS', icon: 'logos:css-3', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  c: { name: 'C', icon: 'logos:c', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  cpp: { name: 'C++', icon: 'logos:c-plusplus', url: 'https://isocpp.org/' },
  php: { name: 'PHP', icon: 'logos:php', url: 'https://www.php.net/' },
  java: { name: 'Java', icon: 'logos:java', url: 'https://www.java.com/' },
  postgresql: { name: 'PostgreSQL', icon: 'logos:postgresql', url: 'https://www.postgresql.org/' },
  nodejs: { name: 'Node.js', icon: 'logos:nodejs-icon', url: 'https://nodejs.org/' },
  nextjs: { name: 'Next.js', icon: 'simple-icons:nextdotjs', url: 'https://nextjs.org/' },
  electron: { name: 'Electron', icon: 'logos:electron', url: 'https://www.electronjs.org/' },
  blender: { name: 'Blender', icon: 'logos:blender', url: 'https://www.blender.org/' },
  photoshop: {
    name: 'Photoshop',
    icon: 'simple-icons:adobephotoshop',
    color: '#31A8FF',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  procreate: { name: 'Procreate', icon: 'mdi:palette', color: '#E8336D', url: 'https://procreate.com/' },
  unity: { name: 'Unity', icon: 'simple-icons:unity', url: 'https://unity.com/' },
  windows: { name: 'Windows', icon: 'logos:microsoft-windows-icon', url: 'https://www.microsoft.com/windows' },
  macos: { name: 'macOS', icon: 'simple-icons:apple', url: 'https://www.apple.com/macos/' },
  linux: { name: 'Linux', icon: 'logos:linux-tux', url: 'https://kernel.org/' },
  vscode: { name: 'VS Code', icon: 'logos:visual-studio-code', url: 'https://code.visualstudio.com/' },
  git: { name: 'Git', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
  gitlab: { name: 'GitLab', icon: 'logos:gitlab', url: 'https://about.gitlab.com/' },
  aws: { name: 'AWS', icon: 'logos:aws', url: 'https://aws.amazon.com/' },
  docker: { name: 'Docker', icon: 'logos:docker-icon', url: 'https://www.docker.com/' },
  clickup: { name: 'ClickUp', icon: 'simple-icons:clickup', color: '#7B68EE', url: 'https://clickup.com/' },
  apollo: { name: 'Apollo GraphQL', icon: 'simple-icons:apollographql', url: 'https://www.apollographql.com/' },
  contentful: { name: 'Contentful', icon: 'logos:contentful', url: 'https://www.contentful.com/' },
  pnpm: { name: 'pnpm', icon: 'logos:pnpm', url: 'https://pnpm.io/' },
  eslint: { name: 'ESLint', icon: 'logos:eslint', url: 'https://eslint.org/' },
  prettier: { name: 'Prettier', icon: 'logos:prettier', url: 'https://prettier.io/' },
  italian: { name: 'Italian · native', icon: 'circle-flags:it' },
  english: { name: 'English · C1', icon: 'circle-flags:uk' },
} as const satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;

registerSpriteIcons(Object.values(tech).map((item) => item.icon));

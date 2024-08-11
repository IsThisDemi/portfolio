import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const appwrite = createSkillFactory({
  name: 'Appwrite',
  icon: 'simple-icons:appwrite',
  iconColor: '#eb4034',
  url: 'https://appwrite.io/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'logos:astro-icon',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const blender = createSkillFactory({
  name: 'Blender',
  icon: 'logos:blender',
  iconColor: '#fca103',
  url: 'https://www.blender.org/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'logos:bootstrap',
  iconColor: '#7229f0',
  url: 'https://getbootstrap.com/',
});

export const c = createSkillFactory({
  name: 'C',
  icon: 'logos:c',
  iconColor: '#3467eb',
  url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
});

export const cplusplus = createSkillFactory({
  name: 'C++',
  icon: 'logos:c-plusplus',
  iconColor: '#3467eb',
  url: 'https://en.wikipedia.org/wiki/C%2B%2B',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const contentful = createSkillFactory({
  name: 'Contentful',
  icon: 'logos:contentful',
  iconColor: '#2478CC',
  url: 'https://www.contentful.com/',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'logos:css-3',
  iconColor: '#2954f0',
  url: 'https://en.wikipedia.org/wiki/CSS',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const electron = createSkillFactory({
  name: 'Electron',
  icon: 'logos:electron',
  iconColor: '#40899c',
  url: 'https://www.electronjs.org/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'logos:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'logos:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const git = createSkillFactory({
  name: 'git',
  icon: 'logos:git-icon',
  iconColor: '#ff4e21',
  url: 'https://git-scm.com/',
});

export const html = createSkillFactory({
  name: 'HTML5',
  icon: 'logos:html-5',
  iconColor: '#f08229',
  url: 'https://en.wikipedia.org/wiki/HTML',
});

export const js = createSkillFactory({
  name: 'JS',
  icon: 'logos:javascript',
  iconColor: '#ffe226',
  url: 'https://en.wikipedia.org/wiki/JavaScript',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'logos:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'logos:linux-tux',
  iconColor: '#2b2b2b',
  url: 'https://en.wikipedia.org/wiki/Linux',
});

export const macos = createSkillFactory({
  name: 'macOS',
  icon: 'logos:macosx',
  iconColor: '#4a4a4a',
  url: 'https://en.wikipedia.org/wiki/MacOS',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'logos:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'logos:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'NextJS',
  icon: 'logos:nextjs',
  iconColor: '#E0234E',
  url: 'https://nextjs.org/',
});

export const nodeJS = createSkillFactory({
  name: 'Node.js',
  icon: 'logos:nodejs-icon',
  iconColor: '#01852f',
  url: 'https://nodejs.org/en/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'logos:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const photoshop = createSkillFactory({
  name: 'photoshop',
  icon: 'simple-icons:adobephotoshop',
  iconColor: '#7578ff',
  url: 'https://www.adobe.com/products/photoshop.html',
});

export const php = createSkillFactory({
  name: 'php',
  icon: 'logos:php',
  iconColor: '#7578ff',
  url: 'https://www.php.net/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'logos:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'logos:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'logos:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const qt = createSkillFactory({
  name: 'Qt',
  icon: 'logos:qt',
  iconColor: '#32a852',
  url: 'https://www.qt.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'logos:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'logos:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'logos:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'logos:tailwindcss-icon',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const threejs = createSkillFactory({
  name: 'Three.js',
  icon: 'logos:threejs',
  iconColor: '#d4d4d4',
  url: 'https://threejs.org/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'logos:typescript-icon',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const unity = createSkillFactory({
  name: 'Unity',
  icon: 'logos:unity',
  iconColor: '#292929',
  url: 'https://unity.com/',
});

export const visualstudiocode = createSkillFactory({
  name: 'Visual Studio Code',
  icon: 'logos:visual-studio-code',
  iconColor: '#4f9bff',
  url: 'https://code.visualstudio.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'logos:vue',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const windows = createSkillFactory({
  name: 'Windows',
  icon: 'logos:microsoft-windows-icon',
  iconColor: '#4281ff',
  url: 'https://www.microsoft.com/en-us/windows',
});

export const xampp = createSkillFactory({
  name: 'XAMPP',
  icon: 'logos:xampp',
  iconColor: '#ff6b21',
  url: 'https://www.apachefriends.org/',
});

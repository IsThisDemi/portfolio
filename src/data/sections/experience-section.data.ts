import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  angular,
  astro,
  bootstrap,
  chakraUi,
  csharp,
  eslint,
  firebase,
  java,
  kotlin,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    // {
    //   role: 'Senior front-end developer',
    //   company: 'Google',
    //   image: import('@/assets/logos/google-logo.jpg'),
    //   dates: [new Date('2020-02'), null],
    //   description: `
    //     - In tristique vulputate augue vel egestas.
    //     - Quisque ac imperdiet tortor, at lacinia ex.
    //     - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
    //     - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
    //     - Nunc malesuada leo et est iaculis facilisis.
    //     - Fusce eu urna ut magna malesuada fringilla.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), nextJs(), typescript(), nx(), firebase()],
    //   },
    //   links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    // },
    // {
    //   role: 'React.js developer',
    //   company: 'Facebook',
    //   image: import('@/assets/logos/facebook-logo.png'),
    //   dates: [new Date('2019-04'), new Date('2020-02')],
    //   description: `
    //     - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
    //     - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
    //     - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
    //     - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), reactQuery(), chakraUi(), eslint()],
    //   },
    //   links: [website({ url: '#' }), instagram({ url: '#' })],
    // },
    // {
    //   role: 'Junior front-end developer',
    //   company: 'GitLab',
    //   image: import('@/assets/logos/gitlab-logo.png'),
    //   dates: [new Date('2016-09'), new Date('2019-04')],
    //   description: `
    //     Nulla volutpat justo ante, rhoncus posuere massa egestas in:
    //     - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
    //     - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.
    //     Donec non vulputate augue 🤓
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [vue(), tailwindCss(), pnpm()],
    //   },
    //   links: [twitter({ url: '#' }), github({ url: '#' })],
    // },
    {
      role: 'Software Developer',
      company: 'TouchMultimedia S.r.l.',
      image: import('@/assets/logos/touch-multimedia.jpg'),
      dates: [new Date('2025-04'), null],
      description: `
      Touch Multimedia S.r.l., founded in 1996 and based in Sarcedo (VI), Italy, specializes in the design and development of high-quality, complex digital solutions, including web portals, e-commerce platforms, and custom mobile applications.
      - Backend development in C# for business logic and API services.
      - Frontend development in Angular for modern, responsive web portals.
      - Full-stack implementation and maintenance of web platforms for various clients.
      - Native Android application development using Kotlin.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), bootstrap(), angular(), kotlin()],
      },
      links: [
        website({ url: 'https://www.touchmultimedia.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/tecsen-srl' }),
      ],
    },
    {
      role: 'Software Developer',
      company: 'TEC Systems Engineering S.r.l.',
      image: import('@/assets/logos/tecsen-logo.png'),
      dates: [new Date('2024-10'), new Date('2025-03')],
      description: `
      TEC Systems Engineering S.r.l. (TecSen), founded in 2007 in Padua, Italy, specializes in developing advanced solutions for traffic management and Intelligent Transportation Systems (ITS).
      - Collaborated with Java developers to design and implement a modular internal software platform for the management of urban traffic lights and control systems.
      - Led the development of the company’s websites and several product-specific sites, ensuring modern standards and usability.
      - Developed a reporting tool using PDFBox to generate PDF reports directly from the Java interface of the traffic management platform.
      - Conducted research and development activities focused on traffic light priority solutions to enhance urban mobility.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(), angular(), astro(), tailwindCss()],
      },
      links: [
        website({ url: 'https://www.tecsen.it/' }),
        linkedin({ url: 'https://www.linkedin.com/company/tecsen-srl' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

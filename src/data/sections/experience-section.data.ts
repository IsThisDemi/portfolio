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
      Touch Multimedia S.r.l. (founded 1996, Sarcedo, Italy) designs and builds complex digital solutions — web portals, e-commerce platforms, and custom mobile applications.
      - Built and maintained backend business logic and API services in C#/.NET powering client e-commerce and web-portal platforms.
      - Developed responsive front-ends in Angular, shipping production features across multiple client projects.
      - Delivered native Android applications in Kotlin, owning features end-to-end from spec to release.
      - Worked full-stack on the implementation and ongoing maintenance of web platforms for a range of clients.
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
      TEC Systems Engineering S.r.l. (TecSen, founded 2007, Padua, Italy) builds advanced solutions for traffic management and Intelligent Transportation Systems (ITS).
      - Co-designed and implemented a modular Java platform for managing urban traffic lights and control systems, working alongside a team of Java developers.
      - Built an automated PDF reporting tool with PDFBox, integrated into the platform's Java interface to replace manual report generation.
      - Led R&D on traffic-light priority algorithms to improve urban mobility.
      - Led development of the company website and several product-specific sites to modern standards of usability and performance.
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

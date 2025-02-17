import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  angular,
  chakraUi,
  eslint,
  firebase,
  java,
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
      company: 'TEC Systems Engineering S.r.l.',
      image: import('@/assets/logos/tecsen-logo.png'),
      dates: [new Date('2024-10'), null],
      description: `
      TEC Systems Engineering S.r.l. (TecSen), founded in 2007 in Padua, Italy, specializes in developing advanced solutions for traffic management and Intelligent Transportation Systems (ITS). Through a partnership with La Semaforica, Italy's leading traffic control systems company, TecSen provides powerful and flexible tools to public administrations, system integrators, and private companies, contributing to urban innovation and improved mobility.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(), angular()],
      },
      links: [
        website({ url: 'https://www.tecsen.it/' }),
        linkedin({ url: 'https://www.linkedin.com/company/tecsen-srl' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

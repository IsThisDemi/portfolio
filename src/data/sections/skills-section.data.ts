import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  astro,
  blender,
  bootstrap,
  c,
  cplusplus,
  css,
  git,
  electron,
  html,
  java,
  js,
  kotlin,
  linux,
  macos,
  mongoDb,
  nextJs,
  nodeJS,
  photoshop,
  php,
  pnpm,
  postgreSql,
  react,
  tailwindCss,
  threejs,
  typescript,
  unity,
  visualstudiocode,
  windows,
  xampp,
  csharp,
} from '../helpers/skills';
import { levels } from 'astro/dist/core/logger/core';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        html({ level: 4 }),
        css({ level: 4 }),
        c({ level: 4 }),
        cplusplus({ level: 4 }),
        csharp({ level: 2 }),
        php({ level: 3 }),
        bootstrap({ level: 4 }),
        threejs({ level: 2 }),
        js({ level: 3 }),
        java({ level: 3 }),
        kotlin({ level: 2 }),
        typescript({ level: 2 }),
        react({ level: 3 }),
        astro({ level: 4 }),
        angular({ level: 3 }),
        tailwindCss({ level: 3 }),
        /*prettier({ level: 5 }),
        eslint({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),*/
        postgreSql({ level: 3 }),
        mongoDb({ level: 3 }),
        //firebase({ level: 1 }),
        //pnpm({ level: 3 }),
      ],
    },
    // {
    //   title: 'I am learning',
    //   skills: [electron()],
    // },
    {
      title: 'I want to learn',
      skills: [nodeJS(), nextJs(), electron()],
    },
    {
      title: 'Software I use',
      skills: [blender({ level: 3 }), photoshop({ level: 3 }), unity({ level: 3 })],
    },
    {
      title: 'Tools I use',
      skills: [windows(), macos(), linux(), visualstudiocode(), git(), xampp()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:it', name: 'Italian - native' },
        { icon: 'circle-flags:uk', name: 'English - C1' },
        //{ icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

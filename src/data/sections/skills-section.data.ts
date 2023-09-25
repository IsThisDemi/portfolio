import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  bootstrap,
  c,
  cplusplus,
  css,
  cypress,
  html,
  //pnpm,
  postgreSql,
  supabase,
  tailwindCss,
  threejs,
  //typescript,
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
        css({ level: 3 }),
        c({ level: 3 }),
        cplusplus({ level: 3 }),
        bootstrap({ level: 4 }),
        threejs({ level: 2 }),
        /*react({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),*/
        tailwindCss({ level: 2 }),
        /*prettier({ level: 5 }),
        eslint({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),*/
        postgreSql({ level: 3 }),
        //mongoDb({ level: 1 }),
        //firebase({ level: 1 }),
        //pnpm({ level: 3 }),
      ],
    },
    // {
    //   title: 'I am learning',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
    // {
    //   title: 'I want to learn',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
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

import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  astro,
  aws,
  blender,
  bootstrap,
  c,
  clickup,
  cplusplus,
  css,
  docker,
  git,
  gitlab,
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
  postgresql,
  procreate,
  qt,
  react,
  tailwindCss,
  threejs,
  typescript,
  unity,
  visualstudiocode,
  windows,
  csharp,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Currently Using',
      skills: [
        angular(),
        react(),
        astro(),
        tailwindCss(),
        bootstrap(),
        threejs(),
        csharp(),
        qt(),
        mongoDb(),
        js(),
        typescript(),
        kotlin(),
      ],
    },
    {
      title: 'Proficient',
      skills: [html(), css(), c(), cplusplus(), php(), java(), postgresql()],
    },
    // {
    //   title: 'I am learning',
    //   skills: [electron()],
    // },
    {
      title: 'Learning Focus',
      skills: [nodeJS(), nextJs(), electron()],
    },
    {
      title: 'Creative Stack',
      skills: [blender(), photoshop(), procreate(), unity()],
    },
    {
      title: 'Development Tools',
      skills: [windows(), macos(), linux(), visualstudiocode(), git(), gitlab(), aws(), docker(), clickup()],
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

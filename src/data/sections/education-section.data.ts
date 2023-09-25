import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: "Bachelor's Degree",
      institution: 'University of Padova',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2020.10'), new Date('2024.10')],
      description: "Bachelor's Degree in Computer Science",
      result: 'tba',
      links: [website({ url: 'https://informatica.math.unipd.it/en/' })],
    },
    {
      title: 'Science High School',
      institution: 'Liceo scientifico G.B.Quadri',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2015.09'), new Date('2020.07')],
      description: 'High School Diploma. Specialization in applied sciences.',
      result: '88/100',
      links: [website({ url: 'https://www.liceoquadri.edu.it/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

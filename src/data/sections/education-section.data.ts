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
      image: import('@/assets/logos/unipd.png'),
      dates: [new Date('2020.10'), new Date('2025.07')],
      description: "Bachelor's Degree in Computer Science",
      result: 'tba',
      links: [website({ url: 'https://informatica.math.unipd.it/en/' })],
    },
    {
      title: 'Science High School',
      institution: 'Liceo scientifico G.B.Quadri',
      image: import('@/assets/logos/quadri.png'),
      dates: [new Date('2015.09'), new Date('2020.07')],
      description: 'High School Diploma. Specialization in applied sciences.',
      result: '88/100',
      links: [website({ url: 'https://www.liceoquadri.edu.it/' })],
    },
    {
      title: 'C1 Advanced',
      institution: 'Cambridge English',
      image: import('@/assets/logos/cambridge-logo.jpg'),
      dates: [new Date('2018.10'), new Date('2019.05')],
      description:
        'English language examination provided by Cambridge Assessment English. C1 Advanced looks to prove high-level achievement in English and is designed for learners preparing for university or professional life.',
      result: 'C1 - 185',
      links: [website({ url: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/' })],
    },
    {
      title: 'ECDL Full Standard',
      institution: 'AICA',
      image: import('@/assets/logos/aica-logo.png'),
      dates: [new Date('2017.10'), new Date('2019.02')],
      description: 'ECDL is a worldwide recognised computer literacy certification programme.',
      result: '',
      links: [website({ url: 'https://www.aicanet.it/aica/qualita/ecdl-full-standard' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

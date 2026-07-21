import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile.png'),
  fullName: 'Riccardo Martinello',
  role: 'Full-Stack Developer | Computer Science Student',
  details: [
    { label: 'Email', value: 'rickyma686@gmail.com', url: 'mailto:rickyma686@gmail.com' },
    { label: 'Phone', value: '+393315804865', url: 'tel:+393315804865' },
    { label: 'Location', value: 'Vicenza, Italy' },
    { label: 'Relocation', value: 'Open to relocation' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+393315804865' },
    { label: 'Email', value: 'rickyma686@gmail.com' },
    { label: 'LinkedIn', value: '/in/riccardo-martinello/', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/IsThisDemi', url: 'https://github.com' },
    { label: 'Website', value: 'riccardo.martinello.dev', url: '/', fullRow: true },
    { label: 'Location', value: 'Vicenza, Italy' },
    { label: 'Relocation', value: 'Open to relocation', fullRow: true },
  ],
  description: `Full-stack software developer with professional experience building production web platforms and native mobile apps. I work across the stack in C#/.NET, Angular, and Java, and ship native Android in Kotlin. Currently completing my BSc in Computer Science at the University of Padova (expected Oct 2026) while delivering client solutions in e-commerce, web portals, and intelligent transportation systems. Fluent in English (C1) and always exploring new technologies.`,
  tags: [{ name: 'Open for work' }, { name: 'Open to relocation' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Riccardo_Martinello.pdf',
  },
  links: [
    //facebook({ url: '#' }),
    github({ url: 'https://github.com/IsThisDemi' }),
    linkedin({ url: 'https://linkedin.com/in/riccardo-martinello/' }),
    //twitter({ url: '#' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

import { differenceInYears } from 'date-fns';

const birthday = new Date(2001, 1, 10);
const currentDate = new Date();

const age = differenceInYears(currentDate, birthday);

console.log(age);

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Riccardo Martinello',
  role: 'Computer Science Student',
  details: [
    //{ label: 'Phone', value: '+393315804865', url: 'tel:+393315804865' },
    { label: 'Email', value: 'rickyma686@gmail.com', url: 'mailto:rickyma686@gmail.com' },
    { label: 'From', value: 'Vicenza, Italy' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+393315804865' },
    { label: 'Email', value: 'rickyma686@gmail.com' },
    { label: 'LinkedIn', value: '/in/riccardo-martinello/', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/IsThisDemi', url: 'https://github.com' },
    { label: 'Website', value: 'riccardo.martinello.dev', url: '/', fullRow: true },
  ],
  description: `I'm a ${age} years old computer science student based in Vicenza, Italy. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Skilled in Front-end Development. I have 5+ years of experience in HTML, CSS, C, C++, Bootstrap, Three.js. Hence, I have successfully completed several web projects from scratch. Yet, I learn continuously and never stop exploring new technologies.`,
  tags: [{ name: 'Open for freelance' }, { name: 'Working on side project' }],
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

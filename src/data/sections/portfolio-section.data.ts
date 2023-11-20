import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  astro,
  bootstrap,
  chakraUi,
  cplusplus,
  css,
  eslint,
  firebase,
  html,
  jest,
  js,
  nestJs,
  nextJs,
  nx,
  php,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  threejs,
  typescript,
  unity,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'PowsUp',
      image: import('@/assets/portfolio/paws-up.webp'),
      dates: [new Date('2023-09'), null],
      details: [
        { label: 'Team size', value: '10 person' },
        { label: 'My role', value: ['Volunteer', 'Front-end Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Website', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Link', value: 'https://powsup.net/', url: 'https://powsup.net/' },
        {
          label: 'Repository',
          value: 'https://github.com/PowsUp/website',
          url: 'https://github.com/PowsUp/website',
        },
      ],
      description:
        "PowsUp! is an Italian group for the organization and creation of Furry events in Lazio and Central Italy. My role in the group is to manage the website and the general IT infrastructure in collaboration with other three developers. We are actively developing a blog to post future events, it's still a work in progress but the main employed tecnologies are Astro and Sanity.",
      tagsList: {
        title: 'Technologies',
        tags: [astro(), tailwindCss(), pnpm(), eslint(), prettier()],
      },
      links: [website({ url: 'https://powsup.net/' }), github({ url: 'https://github.com/IsThisDemi/FitnessCenter' })],
    },
    {
      name: 'FitnessCenter',
      image: import('@/assets/portfolio/fitness-center.png'),
      dates: [new Date('2023-05'), new Date('2023-09')],
      details: [
        { label: 'Team size', value: '3 person' },
        { label: 'My role', value: ['Front-end Developer', 'Back-end Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Website', 'Open source'] },
      ],
      pdfDetails: [
        // { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        {
          label: 'Repository',
          value: 'https://github.com/IsThisDemi/FitnessCenter',
          url: 'https://github.com/IsThisDemi/FitnessCenter',
        },
      ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'WebTec University Project. The main objective was making a website using only plain HTML and CSS being full WCAG 2.1 Compatible, and using PHP to connect and manage data in a database.',
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), php(), js()],
      },
      links: [github({ url: 'https://github.com/IsThisDemi/FitnessCenter' })],
    },
    {
      name: 'Svelasca',
      image: import('@/assets/portfolio/svelasca.png'),
      dates: [new Date('2023-07'), new Date('2023-08')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Database Modeler', 'Back-end Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Database Management', 'Website', 'Open source'] },
      ],
      pdfDetails: [
        // { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        {
          label: 'Repository',
          value: 'https://github.com/IsThisDemi/progetto-basi-di-dati',
          url: 'https://github.com/IsThisDemi/progetto-basi-di-dati',
        },
      ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'Database University Project. The main objective was designing, creating, and filling a database in PostgreSQL for a fictional company respecting the given parameters, and show some queries using the PostgreSQL library in C++.',
      tagsList: {
        title: 'Technologies',
        tags: [postgreSql(), cplusplus()],
      },
      links: [github({ url: 'https://github.com/IsThisDemi/progetto-basi-di-dati' })],
    },
    {
      name: 'Oziverse',
      image: import('@/assets/portfolio/oziverse-logo.png'),
      dates: [new Date('2018-11'), new Date('2020-09')],
      details: [
        { label: 'Team size', value: '20 person' },
        {
          label: 'My role',
          value: ['Founder', 'Front-end Developer', 'Back-end Developer', 'Game Developer', 'Moderator'],
        },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Website', 'Video Game', 'Forum'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      // ],
      screenshots: [
        { src: import('@/assets/portfolio/oziverse-screen-1.png'), alt: 'Ingame multiplayer' },
        { src: import('@/assets/portfolio/oziverse-screen-2.png'), alt: 'Game workshop' },
        { src: import('@/assets/portfolio/oziverse-screen-3.png'), alt: 'Avatar customisation shop' },
        { src: import('@/assets/portfolio/oziverse-screen-4.png'), alt: 'Avatar customisation' },
      ],
      description:
        'Oziverse was a massive project, it was a social platform where people could build, share and play their own games. It had an active community and reached a peak of 60+ monthly active users.',
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), bootstrap(), php(), js(), threejs(), unity()],
      },
      links: [],
    },
    // {
    //   name: 'Golden Bulls',
    //   image: import('@/assets/portfolio/project-1.jpeg'),
    //   dates: [new Date('2020-03'), null],
    //   details: [
    //     { label: 'Team size', value: '1 person' },
    //     { label: 'My role', value: ['Front-end Developer', 'Designer'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
    //   ],
    //   screenshots: [
    //     { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
    //     { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
    //     { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
    //   ],
    //   description:
    //     'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
    //   },
    //   links: [mockups({ url: '#' }), demo({ url: '#' })],
    // },
    // {
    //   name: 'TruQuest',
    //   image: import('@/assets/portfolio/project-2.jpeg'),
    //   dates: [new Date('2019-06'), new Date('2020-02')],
    //   details: [
    //     { label: 'Team size', value: '7 people' },
    //     { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
    //     { label: 'Company', value: 'Facebook' },
    //     { label: 'Category', value: ['Web app', 'Mobile app'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
    //   ],
    //   description:
    //     'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), tailwindCss(), nestJs(), postgreSql()],
    //   },
    //   links: [mockups({ url: '#' }), demo({ url: '#' })],
    // },
    // {
    //   name: 'Software Chasers',
    //   image: import('@/assets/portfolio/project-3.jpeg'),
    //   dates: [new Date('2018-01'), new Date('2020-12')],
    //   details: [
    //     { label: 'Team size', value: '3 people' },
    //     { label: 'My role', value: ['Front-end Developer', 'Designer'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
    //   ],
    //   description:
    //     'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
    //   },
    //   links: [website({ url: '#' }), github({ url: '#' })],
    // },
    // {
    //   name: 'Disco Ninjas',
    //   image: import('@/assets/portfolio/project-4.jpeg'),
    //   dates: [new Date('2016-05'), new Date('2018-07')],
    //   details: [
    //     { label: 'Team size', value: '11 people' },
    //     { label: 'My role', value: 'Front-end Developer' },
    //     { label: 'Company', value: 'Google' },
    //     { label: 'Category', value: ['Mobile app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
    //   ],
    //   description:
    //     'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [typescript(), jest(), firebase()],
    //   },
    //   links: [mockups({ url: '#' }), github({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

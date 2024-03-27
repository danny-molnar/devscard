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
  image: import('@/assets/danny-molnar.png'),
  fullName: 'Danny Molnar',
  role: 'Cloud DevOps Engineer',
  details: [
    {
      label: 'Phone',
      value: '+44 (0) 7704 475576',
      url: 'tel:+447704475576',
    },
    {
      label: 'Email',
      value: 'danny.molnar@proton.me',
      url: 'mailto:danny.molnar@proton.me',
    },
    { label: 'Based in', value: 'London, UK' },
    { label: 'Salary range', value: '£70,000 - £80,000' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+44 (0) 7704 475576' },
    { label: 'Email', value: 'danny.molnar@proton.me' },
    {
      label: 'LinkedIn',
      value: '/in/sandor-daniel-danny-molnar-047323125',
      url: 'https://linkedin.com',
    },
    { label: 'GitHub', value: '/danny-molnar', url: 'https://github.com' },
  ],
  description:
    'Experienced Cloud DevOps Engineer skilled in designing, implementing, and optimizing cloud solutions across AWS and GCP. Proficient in infrastructure automation, CI/CD pipeline development, and cloud-native deployments. Track record of leading high-impact projects, enhancing system scalability, performance, and reliability through innovative DevOps practices. Adept at fostering collaboration for continuous improvement and technical excellence. Seeking challenging projects with teams valuing innovation, efficiency, and quality in cloud computing solutions.',
  tags: [{ name: 'Open for opportunities' }, { name: 'Full-time' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Danny_Molnar.pdf',
  },
  links: [
    github({ url: 'https://github.com/danny-molnar' }),
    linkedin({
      url: 'https://www.linkedin.com/in/sandor-daniel-danny-molnar-047323125/',
    }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

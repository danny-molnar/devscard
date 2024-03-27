import type { Config } from '@/types/data';
import { enGB } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enGB,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Danny Molnar - Cloud DevOps Engineer',
    description:
      'Experienced Cloud DevOps Engineer skilled in designing, implementing, and optimizing cloud solutions across AWS and GCP. Proficient in infrastructure automation, CI/CD pipeline development, and cloud-native deployments. Track record of leading high-impact projects, enhancing system scalability, performance, and reliability through innovative DevOps practices. Adept at fostering collaboration for continuous improvement and technical excellence. Seeking challenging projects with teams valuing innovation, efficiency, and quality in cloud computing solutions.',
    faviconPath: '/src/assets/favicon.png',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

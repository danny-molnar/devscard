import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  aws,
  bash,
  dataAnalytics,
  gcp,
  githubActions,
  golang,
  kubernetes,
  python,
  terraform,
  ansible,
  linux,
  machineLearning,
  javascript,
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
      title: 'I already know',
      skills: [
        terraform({
          level: 5,
          description:
            'I have utilized Terraform and Terratest extensively for infrastructure automation and testing.\nAdditionally, I have built robust modules to reliably manage cloud infrastructures.\nI have also personally developed and maintained resilient cloud architectures, integrating Terragrunt to enhance the efficiency of infrastructure management.',
        }),
        aws({
          level: 4,
          description:
            'Athena\nCloudWatch\nEBS\nEC2\nS3\nSageMaker\nVPC\nAFT\nSSM',
        }),
        gcp({
          level: 4,
          description:
            'API Gateway\nApp Engine\nCloud Functions\nCloud Logging\nCloud Run\nCloud SQL\nCompute Engine\nFirestore\nGKE\nPub/Sub',
        }),
        dataAnalytics({
          level: 4,
          description:
            'Proficient in data analytics, utilising tools such as Anaconda, SQL, R, and Tableau for insightful data interpretation',
        }),
        ansible({ level: 4 }),
        linux({ level: 4 }),
        githubActions({ level: 4 }),
        bash({ level: 4 }),
        python({ level: 4 }),
        golang({ level: 3 }),
        javascript({ level: 3 }),
        kubernetes({ level: 2 }),
        machineLearning({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [aws()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:hu', name: 'Hungarian - native' },
        { icon: 'circle-flags:uk', name: 'English ~ C1' },
        { icon: 'circle-flags:de', name: 'German - intermediate' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/',
});

export const gcp = createSkillFactory({
  name: 'Google Cloud (GCP)',
  icon: 'simple-icons:googlecloud',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#623CE4',
  url: 'https://www.terraform.io/',
});

export const machineLearning = createSkillFactory({
  name: 'Machine Learning',
  icon: 'icon-park:chart-graph',
  iconColor: '#FF6F00',
  url: '',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const bash = createSkillFactory({
  name: 'Bash',
  icon: 'simple-icons:gnubash',
  iconColor: '#4EAA25',
  url: 'https://www.gnu.org/software/bash/',
});

export const golang = createSkillFactory({
  name: 'Golang',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://golang.org/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const dataAnalytics = createSkillFactory({
  name: 'Data Analytics',
  icon: 'icon-park:chart-histogram-two',
  iconColor: '#00C853',
  url: '',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#FCC624',
  url: 'https://www.linux.org/',
});

export const githubActions = createSkillFactory({
  name: 'GitHub Actions - CI/CD',
  icon: 'simple-icons:githubactions',
  iconColor: '#2088FF',
  url: 'https://github.com/features/actions',
});

export const ansible = createSkillFactory({
  name: 'Ansible',
  icon: 'simple-icons:ansible',
  iconColor: '#2066EE',
  url: 'https://www.ansible.com/',
});

export const nodejs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#68A063',
  url: 'https://nodejs.org/',
});

export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'simple-icons:rust',
  iconColor: '#000000',
  url: 'https://www.rust-lang.org/',
});

export const mojo = createSkillFactory({
  name: 'Mojo',
  icon: 'fa6-solid:fire-flame-curved',
  iconColor: '#FFC107',
  url: 'https://www.modular.com/max/mojo',
});

export const istio = createSkillFactory({
  name: 'Istio',
  icon: 'simple-icons:istio',
  iconColor: '#0056C7',
  url: 'https://istio.io/',
});

export const mlops = createSkillFactory({
  name: 'MLOps',
  icon: 'fa6-solid:robot',
  iconColor: '#FF7043',
  url: '',
});

export const dataEngineering = createSkillFactory({
  name: 'Data Engineering',
  icon: 'icon-park:data',
  iconColor: '#795548',
  url: '',
});

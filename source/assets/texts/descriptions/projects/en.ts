import IProject from './IProject';
import resume from '../../../markdown/en/resume.md';
import multilingualClicker from '../../../markdown/en/multilingualClicker.md';
import contractBuilder from '../../../markdown/en/contractBuilder.md';
import brainGame from '../../../markdown/en/brainGame.md';
import cognitiveDistortions from '../../../markdown/en/cognitiveDistortions.md';
import musicBox from '../../../markdown/en/musicBox.md';

const projects: IProject[] = [
  {
    type: 'Frontend',
    projects: [
      {
        id: 'resume',
        title: 'CV',
        shortDescription:
          'My CV, written using the React and Svelte frameworks in TypeScript. Executed in two versions, in Russian and English',
        stack:
          'Technology Stack: React, React Hooks, Svelte, i18next, html2pdf.js, vanta.js, Bootstrap, Vercel, Webpack, Husky, Babel, PostCSS, EsLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
        description: resume,
      },
      {
        id: 'multilingualClicker',
        title: 'Multilingual clicker',
        shortDescription:
          'Frontend application written in pure JavaScript using the i18next internationalisation library',
        stack:
          'Technology Stack: JavaScript, i18next, Yup, onChange, Lodash, Bootstrap, Webpack, Babel, PostCSS, Vercel, ESLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
        description: multilingualClicker,
      },
      {
        id: 'contractBuilder',
        title: 'Contract builder',
        shortDescription: 'Frontend application on Svelte framework',
        stack:
          'Technology Stack: Svelte, JavaScript, Bootstrap, Webpack, Babel, PostCSS, Vercel, Prettier, Git, GitHub',
        description: contractBuilder,
      },
    ],
  },
  {
    type: 'Backend',
    projects: [
      {
        id: 'brainGame',
        title: 'Brain game',
        shortDescription:
          'An CLI application written in TypeScript using the Node.JS module Commander.JS and the readline-sync console library',
        stack:
          'Technology Stack: TypeScript, Node.js, Commander.JS, Jest, npm, ESLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
        description: brainGame,
      },
    ],
  },
  {
    type: 'Layout',
    projects: [
      {
        id: 'cognitiveDistortions',
        title: 'Music Box',
        shortDescription: 'Music Box website layout',
        stack: 'Technology Stack: HTML, CSS, Flex, Grid, SASS, npm, Git, Surge',
        description: cognitiveDistortions,
      },
      {
        id: 'musicBox',
        title: 'Cognitive distortions',
        shortDescription: "Landing on 'Cognitive Distortions in Programming'",
        stack:
          'Technology Stack: HTML, CSS, Flex, CSS Animation, CSS Transform, JavaScript (DOM API), npm, Git',
        description: musicBox,
      },
    ],
  },
];

export default projects;

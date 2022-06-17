import IProject from './IProject';
import resume from '../../../markdown/ru/resume.md';
import multilingualClicker from '../../../markdown/ru/multilingualClicker.md';
import contractBuilder from '../../../markdown/ru/contractBuilder.md';
import brainGame from '../../../markdown/ru/brainGame.md';
import cognitiveDistortions from '../../../markdown/ru/cognitiveDistortions.md';
import musicBox from '../../../markdown/ru/musicBox.md';

const projects: IProject[] = [
  {
    type: 'Frontend',
    projects: [
      {
        id: 'resume',
        title: 'Резюме',
        shortDescription:
          'Моё резюме, написанное с использованием фреймворков React и Svelte на TypeScript. Исполнено в двух версиях, на русском и английском языке',
        stack:
          'Стек технологий: React, React Hooks, Svelte, i18next, html2pdf.js, vanta.js, Bootstrap, Vercel, Webpack, Husky, Babel, PostCSS, EsLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
        description: resume,
      },
      {
        id: 'multilingualClicker',
        title: 'Мультиязычный кликер',
        shortDescription:
          'Frontend приложение, написанное на чистом JavaScript с применением библиотеки для интернационализации i18next',
        stack:
          'Стек технологий: JavaScript, i18next, Yup, onChange, Lodash, Bootstrap, Webpack, Babel, PostCSS, Vercel, ESLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
        description: multilingualClicker,
      },
      {
        id: 'contractBuilder',
        title: 'Конструктор договоров',
        shortDescription: 'Frontend приложение на фреймворке Svelte',
        stack:
          'Стек технологий: Svelte, JavaScript, Bootstrap, Webpack, Babel, PostCSS, Vercel, Prettier, Git, GitHub',
        description: contractBuilder,
      },
    ],
  },
  {
    type: 'Backend',
    projects: [
      {
        id: 'brainGame',
        title: 'Игры разума',
        shortDescription:
          'СLI приложение, написанное на TypeScript с применением Node.JS модуля Commander.JS и консольной библиотеки readline-sync',
        stack:
          'Стек технологий: TypeScript, Node.js, Commander.JS, Jest, npm, ESLint (airbnb), Prettier, Git, GitHub, GitHub Actions (CI), CodeClimate',
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
        shortDescription: 'Верстка сайта "Music Box".',
        stack: 'Стек технологий: HTML, CSS, Flex, Grid, SASS, npm, Git, Surge',
        description: cognitiveDistortions,
      },
      {
        id: 'musicBox',
        title: 'Когнитивные искажения',
        shortDescription: 'Лендинг на тему "Когнитивные искажения в программировании"',
        stack:
          'Стек технологий: HTML, CSS, Flex, CSS Animation, CSS Transform, JavaScript (DOM API), npm, Git',
        description: musicBox,
      },
    ],
  },
];

export default projects;

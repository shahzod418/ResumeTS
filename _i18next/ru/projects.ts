import IProjects, { ProjectsId } from '../../source/interfaces/IProjects';
import resume from './markdown/resume.md';
import multilingualClicker from './markdown/multilingualClicker.md';
import contractBuilder from './markdown/contractBuilder.md';
import brainGame from './markdown/brainGame.md';
import cognitiveDistortions from './markdown/cognitiveDistortions.md';
import musicBox from './markdown/musicBox.md';
import stacks from '../../_data/stacks';

const getStack = (key: ProjectsId) => `Стек технологий: ${stacks[key]}`;

const projects: IProjects[] = [
  {
    type: 'Frontend',
    projects: [
      {
        id: ProjectsId.Resume,
        title: 'Резюме',
        shortDescription: 'Моё резюме, написанное с использованием фреймворка React на TypeScript',
        stack: getStack(ProjectsId.Resume),
        description: resume,
      },
      {
        id: ProjectsId.MultilingualClicker,
        title: 'Мультиязычный кликер',
        shortDescription:
          'Frontend приложение, написанное на чистом JavaScript с применением библиотеки для интернационализации i18next',
        stack: getStack(ProjectsId.MultilingualClicker),
        description: multilingualClicker,
      },
      {
        id: ProjectsId.ContractBuilder,
        title: 'Конструктор договоров',
        shortDescription: 'Frontend приложение на фреймворке Svelte',
        stack: getStack(ProjectsId.ContractBuilder),
        description: contractBuilder,
      },
    ],
  },
  {
    type: 'Backend',
    projects: [
      {
        id: ProjectsId.BrainGame,
        title: 'Игры разума',
        shortDescription:
          'СLI приложение, написанное на TypeScript с применением Node.JS модуля Commander.JS и консольной библиотеки readline-sync',
        stack: getStack(ProjectsId.BrainGame),
        description: brainGame,
      },
    ],
  },
  {
    type: 'Layout',
    projects: [
      {
        id: ProjectsId.MusicBox,
        title: 'Music Box',
        shortDescription: 'Верстка сайта "Music Box".',
        stack: getStack(ProjectsId.MusicBox),
        description: musicBox,
      },
      {
        id: ProjectsId.CognitiveDistortions,
        title: 'Когнитивные искажения',
        shortDescription: 'Лендинг на тему "Когнитивные искажения в программировании"',
        stack: getStack(ProjectsId.CognitiveDistortions),
        description: cognitiveDistortions,
      },
    ],
  },
];

export default projects;

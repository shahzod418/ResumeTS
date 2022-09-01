import IProjects, { ProjectsId } from '../../source/interfaces/IProjects';
import resume from './markdown/resume.md';
import multilingualClicker from './markdown/multilingualClicker.md';
import contractBuilder from './markdown/contractBuilder.md';
import brainGame from './markdown/brainGame.md';
import cognitiveDistortions from './markdown/cognitiveDistortions.md';
import musicBox from './markdown/musicBox.md';
import stacks from '../../_data/stacks';

const getStack = (key: ProjectsId) => `Technology Stack: ${stacks[key]}`;

const projects: IProjects[] = [
  {
    type: 'Frontend',
    projects: [
      {
        id: ProjectsId.Resume,
        title: 'CV',
        shortDescription: 'My CV, written using the React framework in TypeScript',
        stack: getStack(ProjectsId.Resume),
        description: resume,
      },
      {
        id: ProjectsId.MultilingualClicker,
        title: 'Multilingual clicker',
        shortDescription:
          'Frontend application written in pure JavaScript using the i18next internationalisation library',
        stack: getStack(ProjectsId.MultilingualClicker),
        description: multilingualClicker,
      },
      {
        id: ProjectsId.ContractBuilder,
        title: 'Contract builder',
        shortDescription: 'Frontend application on Svelte framework',
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
        title: 'Brain game',
        shortDescription:
          'An CLI application written in TypeScript using the Node.JS module Commander.JS and the readline-sync console library',
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
        shortDescription: 'Music Box website layout',
        stack: getStack(ProjectsId.MusicBox),
        description: musicBox,
      },
      {
        id: ProjectsId.CognitiveDistortions,
        title: 'Cognitive distortions',
        shortDescription: "Landing on 'Cognitive Distortions in Programming'",
        stack: getStack(ProjectsId.CognitiveDistortions),
        description: cognitiveDistortions,
      },
    ],
  },
];

export default projects;

import ISkill from './ISkill';

const skills: ISkill[] = [
  {
    title: 'JavaScript/TypeScript',
    list: ['React', 'Redux', 'Svelte'],
    description:
      'Form validation, yup library.\n' +
      'Internalization of texts, i18next library.\n' +
      'Working with HTTP, axios library.\n' +
      'Asynchronous code using async/await and Promise.\n' +
      'Basic knowledge of TypeScript. (Learning)\n',
  },
  // {
  //  title: 'Node.JS',
  //  list: ['Express', 'Nest', 'SQL', 'REST', 'HTTP Server'],
  //  description:
  //    'Creating a CLI application, library Commander.JS.\n' +
  //    'Asynchronous code using async/await and Promise.\n' +
  //    'Working with HTTP, axios library.',
  // },
  // {
  //   title: 'Unit testing',
  //   list: ['Jest', 'JSDOM', 'GitHub Actions'],
  //   description:
  //     'Writing automated tests and further integrating with GitHub to test after each commit. ' +
  //     'Adding GitHub Bages to each test in the README of the project.',
  // },
  {
    title: 'HTML/CSS',
    list: ['Pug', 'SASS', 'CSS Flex/Grid', 'CSS Functions', 'Bootstrap', 'PostCSS'],
    description:
      'Adaptive page layout using Flex, Grid and CSS Functions.\n' +
      'Working with preprocessors Pug, SASS.\n' +
      'Using the Bootstrap framework.',
  },
  {
    title: 'Other',
    list: ['Git', 'Webpack', 'Figma', 'Linux (Arch/Fedora)'],
    description:
      'Using Git in the Terminal.\n' +
      'Configuring the Webpack configuration.\n' +
      'Working with layouts in Figma.\n' +
      'Experience with Linux distributions Arch and Fedora.',
  },
];

export default skills;

import skills from './en/skills';
import about from './en/about';
import education from './en/education';
import projects from './en/projects';

export default {
  translation: {
    header: {
      title: 'Davlatov Shahzod',
      caption: 'Simplicity is prerequisite for reliability',
      download: 'Download CV',
    },
    about: {
      title: 'About me',
      description: about,
    },
    skills: {
      title: 'Skills',
      description: skills,
    },
    projects: {
      title: 'Projects',
      description: projects,
    },
    education: {
      title: 'Education',
      description: education,
    },
    toast: 'Oops, something went wrong',
    canvas: 'Sections',
    resume: {
      main:
        'Looking for a job as a Junior Frontend Developer in Moscow. ' +
        'Considering a full-time job in the office or remote work.',
      contacts: 'Contacts',
      projects: 'The source code of my projectsLinks is available on GitHub.',
    },
  },
};

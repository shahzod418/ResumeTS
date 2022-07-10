import skills from './ru/skills';
import about from './ru/about';
import education from './ru/education';
import projects from './ru/projects';

export default {
  translation: {
    header: {
      title: 'Давлатов Шахзод',
      caption: 'Простота — залог надежности',
      download: 'Скачать резюме',
    },
    about: {
      title: 'Обо мне',
      description: about,
    },
    skills: {
      title: 'Навыки',
      description: skills,
    },
    projects: {
      title: 'Проекты',
      description: projects,
    },
    education: {
      title: 'Образование',
      description: education,
    },
    toast: 'Упс, что-то пошло не так',
    canvas: 'Разделы',
    resume: {
      main:
        'Ищу работу на позицию Junior Frontend Developer в Москве. ' +
        'Рассматриваю полную занятость в офисе или удалённую работу.',
      contacts: 'Контакты',
      projects: 'Исходный код моих проектов представлен на GitHub.',
    },
  },
};

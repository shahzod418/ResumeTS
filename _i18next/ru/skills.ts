import ISkill from '../../source/interfaces/ISkill';

const skills: ISkill[] = [
  {
    title: 'JavaScript/TypeScript',
    list: ['React', 'Redux', 'Svelte'],
    description:
      'Валидация форм, библиотека yup.\n' +
      'Интернализация текстов, библиотека i18next.\n' +
      'Работа с HTTP, библиотека axios.\n' +
      'Асинхронный код с использованием async/await и Promise.\n' +
      'Базовые знания TypeScript. (Осваиваю)\n',
  },
  // {
  //  title: 'Node.JS',
  //  list: ['Express', 'Nest', 'SQL', 'REST', 'HTTP Server'],
  //  description:
  //    'Создание CLI приложения, библиотека Commander.JS.\n' +
  //     'Асинхронный код с использованием async/await и Promise.\n' +
  //     'Работа с HTTP, библиотека axios.',
  // },
  // {
  //   title: 'Unit testing',
  //   list: ['Jest', 'JSDOM', 'GitHub Actions'],
  //   description:
  //     'Написание автоматических тестов и дальнейшая интеграция с GitHub для тестирования после каждого коммита. ' +
  //     'Добавление GitHub Bages на каждый тест в README проекта.',
  // },
  {
    title: 'HTML/CSS',
    list: ['Pug', 'SASS', 'CSS Flex/Grid', 'CSS Functions', 'Bootstrap', 'PostCSS'],
    description:
      'Верстка адаптивных страниц с использованием Flex, Grid и CSS Functions.\n' +
      'Работа с препроцессорами Pug, SASS.\n' +
      'Использование фреймворка Bootstrap.',
  },
  {
    title: 'Other',
    list: ['Git', 'Webpack', 'Figma', 'Linux (Arch/Fedora)'],
    description:
      'Использование Git в терминале.\n' +
      'Настройка конфигурации Webpack.\n' +
      'Работа с макетами в Figma.\n' +
      'Опыт использования дистрибутивов Linux Arch и Fedora.',
  },
];

export default skills;

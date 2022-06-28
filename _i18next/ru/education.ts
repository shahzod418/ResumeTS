import IEducation from '../../source/interfaces/IEducation';

const education: IEducation = {
  higher: {
    title: 'Высшее',
    universities: [
      {
        university: 'Российский экономический университет имени Г.В. Плеханова',
        faculty: 'Высшая школа кибертехнологий, математики и статистики',
        specialisation: 'Инжиниринг предприятий и информационных систем',
        date: 'Сентябрь 2018 – Июнь 2022',
      },
    ],
  },
  additional: {
    title: 'Дополнительное',
    schools: [
      {
        school: 'learn.javascript.ru',
        courses: [
          {
            name: 'JavaScript/DOM/Интерфейсы',
            date: 'Апрель 2022 - Июнь 2022',
            link: 'https://learn.javascript.ru/courses/jsbasic-20220418-2/shahzod-davlatov/ru/certificate.jpg',
          },
        ],
      },
      {
        school: 'Хекслет',
        courses: [
          {
            name: 'Профессия «Фронтенд-разработчик»',
            date: 'Октябрь 2021 – Апрель 2022',
            link: 'https://ru.hexlet.io/programs/backend',
          },
          {
            name: 'Профессия «Node.js-разработчик»',
            date: 'Октябрь 2021 – Апрель 2022',
            link: 'https://ru.hexlet.io/programs/layout-designer',
          },
          {
            name: 'Профессия «Верстальщик»',
            date: 'Август 2021 – Октябрь 2021',
            link: 'https://ru.hexlet.io/programs/frontend',
          },
        ],
      },
      {
        school: 'HTML Academy',
        courses: [
          {
            name: 'Тренажёры',
            date: 'Июль 2021 – Август 2021',
            link: 'https://htmlacademy.ru/courses',
          },
        ],
      },
    ],
  },
};

export default education;

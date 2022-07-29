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
            id: 'LearnJsTypeScript',
            name: 'Интенсив по TypeScript',
            date: 'Июль 2022',
          },
          {
            id: 'LearnJsReact',
            name: 'Курс по React',
            date: 'Июнь 2022 - Июль 2022',
          },
          {
            id: 'JavaScriptDomInterfaces',
            name: 'JavaScript/DOM/Интерфейсы',
            date: 'Апрель 2022 - Июнь 2022',
          },
        ],
      },
      {
        school: 'Хекслет',
        courses: [
          {
            id: 'FrontendDeveloper',
            name: 'Профессия «Фронтенд-разработчик»',
            date: 'Октябрь 2021 – Апрель 2022',
          },
          {
            id: 'NodeJsDeveloper',
            name: 'Профессия «Node.js-разработчик»',
            date: 'Октябрь 2021 – Апрель 2022',
          },
          {
            id: 'LayoutDesigner',
            name: 'Профессия «Верстальщик»',
            date: 'Август 2021 – Октябрь 2021',
          },
        ],
      },
      {
        school: 'HTML Academy',
        courses: [
          {
            id: 'HtmlAcademyTrainers',
            name: 'Тренажёры',
            date: 'Июль 2021 – Август 2021',
          },
        ],
      },
    ],
  },
};

export default education;

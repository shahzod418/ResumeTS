import IEducation from '../../source/interfaces/IEducation';

const education: IEducation = {
  higher: {
    title: 'Higher',
    universities: [
      {
        university: 'Plekhanov Russian University of Economics',
        faculty: 'Graduate School of Cyber Technology, Mathematics and Statistics',
        specialisation: 'Enterprise and information systems engineering',
        date: 'September 2018 - June 2022',
      },
    ],
  },
  additional: {
    title: 'Additional',
    schools: [
      {
        school: 'learn.javascript.ru',
        courses: [
          {
            id: 'LearnJsTypeScript',
            name: 'TypeScript Intensive',
            date: 'July 2022',
          },
          {
            id: 'LearnJsReact',
            name: 'React course',
            date: 'June 2022 to July 2022',
          },
          {
            id: 'JavaScriptDomInterfaces',
            name: 'JavaScript/DOM/interfaces',
            date: 'April 2022 to June 2022',
          },
        ],
      },
      {
        school: 'Hexlet',
        courses: [
          {
            id: 'FrontendDeveloper',
            name: 'Frontend Developer',
            date: 'October 2021 to April 2022',
          },
          {
            id: 'NodeJsDeveloper',
            name: 'Node.js Developer»',
            date: 'October 2021 to April 2022',
          },
          {
            id: 'LayoutDesigner',
            name: 'Layout Designer',
            date: 'August 2021 to October 2021',
          },
        ],
      },
      {
        school: 'HTML Academy',
        courses: [
          {
            id: 'HtmlAcademyTrainers',
            name: 'Trainers',
            date: 'July 2021 - August 2021',
          },
        ],
      },
    ],
  },
};

export default education;

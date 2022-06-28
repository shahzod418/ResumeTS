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
            name: 'JavaScript/DOM/interfaces',
            date: 'April 2022 to June 2022',
            link: 'https://learn.javascript.ru/courses/jsbasic-20220418-2/shahzod-davlatov/ru/certificate.jpg',
          },
        ],
      },
      {
        school: 'Hexlet',
        courses: [
          {
            name: 'Frontend Developer',
            date: 'October 2021 - present',
            link: 'https://ru.hexlet.io/programs/frontend',
          },
          {
            name: 'Node.js Developer»',
            date: 'October 2021 - present',
            link: 'https://ru.hexlet.io/programs/backend',
          },
          {
            name: 'Layout Designer',
            date: 'August 2021 to October 2021',
            link: 'https://ru.hexlet.io/programs/layout-designer',
          },
        ],
      },
      {
        school: 'HTML Academy',
        courses: [
          {
            name: 'Trainers',
            date: 'July 2021 - August 2021',
            link: 'https://htmlacademy.ru/courses',
          },
        ],
      },
    ],
  },
};

export default education;

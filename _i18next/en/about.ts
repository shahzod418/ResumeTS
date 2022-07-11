import IAbout from '../../source/interfaces/IAbout';

const about: IAbout = {
  nationality: {
    title: 'Citizenship',
    text: 'Russia',
  },
  city: {
    title: 'City',
    text: 'Moscow',
  },
  birthday: {
    title: 'Date of birth',
    text: new Date('2000-09-17').toLocaleString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  description:
    'I like programming and learning new technologies.\n' +
    'In my spare time, I read books, mostly prose and detective stories.\n' +
    'Lead a healthy lifestyle, go to the gym, walk in the parks.\n' +
    'I don`t have bad habits, I don`t drink or smoke.',
};

export default about;

import IAboutMe from '../../source/Interfaces/IAboutMe';

const myBirthday = new Date('2000-09-17');
const currentAge = Math.floor((Date.now() - myBirthday.getTime()) / (24 * 3600 * 365.25 * 1000));

const about: IAboutMe = {
  nationality: {
    title: 'Citizenship',
    text: 'Russia',
  },
  age: {
    title: 'Age',
    text: currentAge,
  },
  birthday: {
    title: 'Date of birth',
    text: myBirthday.toLocaleString('en', {
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
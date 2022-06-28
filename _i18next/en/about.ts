import IAboutMe from '../../source/interfaces/IAboutMe';
import getDates from '../../source/api/getDates';

const { myBirthday, currentAge } = getDates();

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

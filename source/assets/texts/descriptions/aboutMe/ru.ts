import IAboutMe from './IAboutMe';
import i18n from '../../../../i18n';

const myBirthday = new Date('2000-09-17');
const currentAge = Math.floor((Date.now() - myBirthday.getTime()) / (24 * 3600 * 365.25 * 1000));

const aboutMe: IAboutMe = {
  nationality: {
    title: 'Гражданство',
    text: 'РФ',
  },
  age: {
    title: 'Возраст',
    text: currentAge,
  },
  birthday: {
    title: 'Дата рождения',
    text: myBirthday.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  description:
    'Люблю программировать и осваивать новые технологии.\n' +
    'В свободное время читаю книги, в основном это проза и детективы.\n' +
    'Веду здоровый образ жизни, хожу в тренажёрный зал, гуляю по паркам.\n' +
    'Не имею вредных привычек, я не пью и не курю.',
};

export default aboutMe;

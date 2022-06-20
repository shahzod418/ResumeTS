import IAboutMe from '../../source/Interfaces/IAboutMe';
import getDates from '../../source/api/getDates';

const { myBirthday, currentAge } = getDates();

const about: IAboutMe = {
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

export default about;

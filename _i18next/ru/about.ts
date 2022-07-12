import IAbout from '../../source/interfaces/IAbout';

const about: IAbout = {
  nationality: {
    title: 'Гражданство',
    text: 'РФ',
  },
  city: {
    title: 'Город',
    text: 'Москва',
  },
  birthday: {
    title: 'Дата рождения',
    text: new Date('2000-09-17').toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  firstParagraph:
    'Люблю программировать и осваивать новые технологии.' +
    'В свободное время читаю книги, в основном это проза и детективы.' +
    'Веду здоровый образ жизни, хожу в тренажёрный зал, гуляю по паркам.' +
    'Не имею вредных привычек, я не пью и не курю.',
};

export default about;

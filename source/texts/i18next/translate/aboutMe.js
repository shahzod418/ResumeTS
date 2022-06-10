const myBirthday = new Date('2000-09-17');
const currentAge = Math.floor((Date.now() - myBirthday.getTime()) / (24 * 3600 * 365.25 * 1000));

export default {
  nationality: {
    title: 'aboutMe.description.nationality.title',
    text: 'aboutMe.description.nationality.text',
  },
  age: {
    title: 'aboutMe.description.age',
    text: currentAge,
  },
  birthday: {
    title: 'aboutMe.description.birthday',
    text: myBirthday,
  },
  description: 'aboutMe.description.text',
};

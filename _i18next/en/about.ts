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
  firstParagraph:
    'I love programming and mastering new technologies. \n' +
    'I started my way in IT in my school years. Then I first got acquainted with such programming language as Pascal. After that we were given a couple of lessons in creating simple websites. It was then that I became acquainted with JS.\n' +
    'But more actively I began to learn JavaScript a couple of years ago in times of high school, so I began a career in IT.\n' +
    'My goal is to become highly skilled in Frontend and backend development.',
  secondParagraph:
    'I am a responsible employee who always performs the assigned tasks.\n' +
    'At work I am always focused on the process, I am not distracted by "going out for a smoke break", as I do not smoke or drink.\n' +
    'In addition, I am a very punctual person, so I am never late.',
  thirdParagraph:
    'I got my basic knowledge of JavaScript from the Hexlet Programming School, where I studied as part of a self-study on a subscription basis.\n' +
    'I accessed their courses in the following ways: I wrote posts about learning and programming on their block, for which I was given all the materials available from them. I still publish something there to this day, as I love to write small articles.\n' +
    'I learned React and Redux at learn.javascript.ru, a course on these technologies. Although there were only functional components, I learned how to use class components at Hexlet.\n' +
    'All the rest I already learn on my own with the help of various Internet resources, such as videos on YouTube and official documentation.',
};

export default about;

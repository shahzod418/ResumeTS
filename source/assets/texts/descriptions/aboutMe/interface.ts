export default interface AboutMe {
  nationality: {
    title: string;
    text: string;
  };
  age: {
    title: string;
    text: number;
  };
  birthday: {
    title: string;
    text: Date;
  };
  description: string;
}

export default interface IAboutMe {
  readonly [index: string]: any;
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
    text: string;
  };
  description: string;
}

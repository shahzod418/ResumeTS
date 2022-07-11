export default interface IAbout {
  readonly [index: string]: any;
  nationality: {
    title: string;
    text: string;
  };
  city: {
    title: string;
    text: string;
  };
  birthday: {
    title: string;
    text: string;
  };
  description: string;
}

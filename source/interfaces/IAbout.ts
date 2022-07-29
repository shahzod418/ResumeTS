export default interface IAbout {
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
  firstParagraph?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
}

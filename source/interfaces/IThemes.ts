interface ITheme {
  id: string;
  background: string;
  navbar: string;
  footer: string;
  spinner: string;
  button: string;
  class: {
    text: string;
    border: string;
    btn: string;
    contact: string;
  };
  popup: {
    background: string;
    color: string;
    text: string;
  };
}

export default interface IThemes {
  light: ITheme;
  dark: ITheme;
}

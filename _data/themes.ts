import IThemes from '../source/interfaces/IThemes';

const themes: IThemes = {
  light: {
    id: 'light',
    background: '#fff',
    navbar: '#000',
    footer: '#000',
    spinner: 'dark',
    button: 'outline-dark',
    closeVariant: '',
    class: {
      text: '',
      border: '',
      btn: 'btn-outline-dark',
      contact: 'text-black',
    },
    popup: {
      background: '#000',
      color: '#000',
      text: '',
    },
  },
  dark: {
    id: 'dark',
    background: '#0d1117',
    navbar: '#0d1117',
    footer: '#0d1117',
    spinner: 'light',
    button: 'outline-light',
    closeVariant: 'white',
    class: {
      text: 'text-white',
      border: 'border-white',
      btn: 'btn-outline-light',
      contact: 'text-white',
    },
    popup: {
      background: '#fff',
      color: '#fff',
      text: 'text-black',
    },
  },
};

export default themes;

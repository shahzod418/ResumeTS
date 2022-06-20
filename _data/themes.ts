const themes = {
  light: {
    id: 'light',
    background: '#fff',
    navbar: '#000',
    footer: '#000',
    spinner: 'dark',
    button: 'outline-dark',
    class: {
      text: '',
      border: '',
      footer: '',
      navbar: '',
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
    class: {
      text: 'text-white',
      border: 'border-white',
      footer: 'border-top',
      navbar: 'border-bottom',
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

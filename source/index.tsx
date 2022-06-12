import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import "./i18n";
import {useTranslation} from "react-i18next";

const Test = () => {
  const [t, i18n] = useTranslation();

  console.log(t('aboutMe.description', { returnObjects: true }))
  i18n.changeLanguage('en')
  console.log(t('aboutMe.description', { returnObjects: true }))

  return <div>Test</div>
};

const root = ReactDOM.createRoot(document.body);
root.render(<div style={{ color: 'white', textAlign: 'center' }}>
  <Test />
</div>);

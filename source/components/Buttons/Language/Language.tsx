import React, { useState, lazy, Suspense } from 'react';
import { Dropdown, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/translate'));

const Language = ({ languages }) => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (short) => async () => {
    if (short === language) return;

    await i18n.changeLanguage(short);
    setLanguage(short);
  };

  return (
    <Dropdown className="position-absolute" style={{ top: '10px', right: '10px', zIndex: '100' }}>
      <Dropdown.Toggle variant="outline-dark">
        <Suspense fallback={<Spinner animation="border" size="sm" />}>
          <Icon />
        </Suspense>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {languages.map(({ short, full }) => (
          <Dropdown.Item
            key={short}
            active={short === language}
            onClick={handleChangeLanguage(short)}
            style={{ pointerEvents: short === language ? 'none' : 'auto' }}
          >
            {full}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Language;

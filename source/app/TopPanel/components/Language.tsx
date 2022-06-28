import React, { useState, lazy, Suspense, FC } from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Popup from 'reactjs-popup';
import ILanguage from '../../../interfaces/ILanguage';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/translate'));

const Language: FC<{ languages: ILanguage[] }> = ({ languages }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (short: string) => async () => {
    if (short === language) return;

    await i18n.changeLanguage(short);
    setLanguage(short);
  };

  return (
    <Popup
      trigger={
        <Button variant="outline-light">
          <Suspense fallback={<Spinner animation="border" size="sm" />}>
            <Icon />
          </Suspense>
        </Button>
      }
      position={['bottom right']}
      on="hover"
      arrow={false}
    >
      <ListGroup className="mt-1">
        {languages.map(({ short, full }) => (
          <ListGroup.Item
            key={short}
            active={short === language}
            onClick={handleChangeLanguage(short)}
            style={{ pointerEvents: short === language ? 'none' : 'auto' }}
          >
            {full}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Popup>
  );
};

export default Language;

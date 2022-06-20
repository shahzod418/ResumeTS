import React, { Suspense, useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import Clipboard from './components/Clipboard';
import ThemeContext from '../../../../context/ThemeContext';

const Contacts = ({ contacts }) => {
  const { theme } = useContext(ThemeContext);

  const contentStyle = { background: theme.popup.background, borderRadius: '0.25rem' };
  const arrowStyle = { color: theme.popup.color };

  return (
    <div className="d-flex">
      {contacts.map(({ link, type, popup, lazy }) => (
        <Popup
          key={type}
          trigger={
            <Button size="lg" className="bg-transparent border-0">
              <Suspense fallback={<Spinner animation="border" size="sm" variant="dark" />}>
                <a href={link} target="_blank" className={theme.class.contact} rel="noreferrer">
                  {lazy}
                </a>
              </Suspense>
            </Button>
          }
          position={['right center', 'bottom right', 'bottom left', 'bottom center']}
          on="hover"
          {...{ contentStyle, arrowStyle }}
        >
          <Clipboard popup={popup} />
        </Popup>
      ))}
    </div>
  );
};

export default Contacts;

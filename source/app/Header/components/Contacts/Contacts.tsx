import React, { Suspense } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import Clipboard from './components/Clipboard';

const contentStyle = { background: '#000', borderRadius: '0.25rem' };
const arrowStyle = { color: '#000' };

const Contacts = ({ contacts }) => (
  <div className="d-flex">
    {contacts.map(({ link, type, popup, lazy }) => (
      <Popup
        key={type}
        trigger={
          <Button variant="link" size="lg">
            <Suspense fallback={<Spinner animation="border" size="sm" variant="dark" />}>
              <a href={link} target="_blank" className="text-black" rel="noreferrer">
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

export default Contacts;

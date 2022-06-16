import React, { Suspense } from 'react';
import Popup from 'reactjs-popup';
import { Spinner, Button } from 'react-bootstrap';
import Clipboard from '../Clipboard/Clipboard';

const contentStyle = { background: '#212529', borderRadius: '0.25rem' };
const arrowStyle = { color: '#212529' };

const Link = ({ link, lazy }) => (
  <Suspense fallback={<Spinner animation="border" size="sm" variant="dark" />}>
    <a href={link} target="_blank" className={`text-black`} rel="noreferrer">
      {lazy}
    </a>
  </Suspense>
);

const ContactPopup = ({ contact }) => {
  const { link, type, popup, lazy } = contact;
  return (
    <Popup
      key={type}
      trigger={
        <Button variant="link" size="lg">
          <Link {...{ link, lazy }} />
        </Button>
      }
      position={['right center', 'bottom right', 'bottom left', 'bottom center']}
      on="hover"
      {...{ contentStyle, arrowStyle }}
    >
      <Clipboard popup={popup} />
    </Popup>
  );
};

export default ContactPopup;

import React, { FC, Suspense } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import Clipboard from '../Clipboard/Clipboard';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IContact from '../../interfaces/IContact';

const Contacts: FC<{ contacts: IContact[] }> = ({ contacts }) => {
  const theme = useSelector(selectTheme);

  const contentStyle = { background: theme.popup.background, borderRadius: '0.25rem' };
  const arrowStyle = { color: theme.popup.color };

  return (
    <div className="d-flex">
      {contacts.map(({ link, type, popup, lazy }) => (
        <Popup
          key={type}
          trigger={
            <Button size="lg" className="bg-transparent border-0">
              <Suspense fallback={<Spinner animation="border" size="sm" variant={theme.spinner} />}>
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
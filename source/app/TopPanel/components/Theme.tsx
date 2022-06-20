import React, { lazy, Suspense, useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import ThemeContext from '../../../context/ThemeContext';

const Sun = lazy(() => import('react-bootstrap-icons/dist/icons/sun'));
const Moon = lazy(() => import('react-bootstrap-icons/dist/icons/moon'));

const Theme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Button variant="outline-light me-3" onClick={changeTheme}>
      <Suspense fallback={<Spinner animation="border" size="sm" />}>
        {theme.id === 'light' ? <Sun /> : <Moon />}
      </Suspense>
    </Button>
  );
};

export default Theme;

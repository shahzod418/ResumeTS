import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useSelector from '../../../store/hooks/useSelector';
import useDispatch from '../../../store/hooks/useDispatch';
import { changeTheme } from '../../../store/modules/theme/actions';
import selectTheme from '../../../store/modules/theme/selectors';

const Sun = lazy(() => import('react-bootstrap-icons/dist/icons/sun'));
const Moon = lazy(() => import('react-bootstrap-icons/dist/icons/moon'));

const Theme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { current } = useRef(document.body);

  useEffect(() => {
    current.style.backgroundColor = theme.background;
    current.id = theme.id;
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme.id === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
  };

  return (
    <Button variant="outline-light me-3" onClick={handleChangeTheme}>
      <Suspense fallback={<Spinner animation="border" size="sm" />}>
        {theme.id === 'light' ? <Sun /> : <Moon />}
      </Suspense>
    </Button>
  );
};

export default Theme;

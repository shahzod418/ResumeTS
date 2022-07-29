import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useSelector from '../../store/hooks/useSelector';
import useDispatch from '../../store/hooks/useDispatch';
import { changeTheme } from '../../store/modules/theme/actions';
import selectTheme from '../../store/modules/theme/selectors';
import useDevice from '../../hooks/useDevice';

const Sun = lazy(() => import('react-bootstrap-icons/dist/icons/sun'));
const Moon = lazy(() => import('react-bootstrap-icons/dist/icons/moon'));

const Theme = () => {
  const { id, background } = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { isMobile } = useDevice();
  const { current } = useRef(document.body);

  useEffect(() => {
    if (document.cookie) {
      dispatch(changeTheme(document.cookie.includes('dark') ? 'dark' : 'light'));
    }
  }, []);

  useEffect(() => {
    current.style.backgroundColor = background;
    current.id = id;
    document.cookie = `theme="${id}"`;
  }, [id]);

  const handleChangeTheme = () => {
    const newTheme = id === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
  };

  return (
    <Button
      size={isMobile ? 'sm' : undefined}
      variant="outline-light me-3"
      onClick={handleChangeTheme}
    >
      <Suspense fallback={<Spinner animation="border" size="sm" />}>
        {id === 'light' ? <Sun /> : <Moon />}
      </Suspense>
    </Button>
  );
};

export default Theme;

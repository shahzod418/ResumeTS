import { Spinner } from 'react-bootstrap';
import React from 'react';
import useSelector from '../../../../../store/hooks/useSelector';
import selectTheme from '../../../../../store/modules/theme/selectors';

const PhotoSpinner = () => {
  const theme = useSelector(selectTheme);

  return (
    <div style={{ height: '400px', width: '310px' }} className="mx-auto position-relative">
      <div className="position-absolute top-50 start-50">
        <Spinner animation="border" variant={theme.spinner} />
      </div>
    </div>
  );
};

export default PhotoSpinner;

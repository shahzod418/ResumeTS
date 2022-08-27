import React, { useEffect, useState, FC } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import useSelector from '../store/hooks/useSelector';
import selectTheme from '../store/modules/theme/selectors';

const LazyImage: FC<{ name: string }> = ({ name }) => {
  const [img, setImg] = useState<ImportAssertions>();
  const { spinner } = useSelector(selectTheme);

  useEffect(() => {
    import(`../../assets/images/${name}.png`).then(setImg);
  }, []);

  return img ? (
    <Image src={img.default} style={{ width: '100%', height: 'auto' }} />
  ) : (
    <Spinner animation="border" variant={spinner} className="position-absolute start-50 top-50" />
  );
};

export default LazyImage;

import React, { useEffect, useState, FC } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import useSelector from '../store/hooks/useSelector';
import selectTheme from '../store/modules/theme/selectors';

const LazyGif: FC<{ name: string }> = ({ name }) => {
  const [gif, setGif] = useState<any>();
  const { spinner } = useSelector(selectTheme);

  useEffect(() => {
    import(`../../assets/gifs/${name}.gif`).then(setGif);
  }, []);

  return gif ? (
    <Image src={gif.default} fluid rounded />
  ) : (
    <Spinner
      animation="border"
      variant={spinner}
      className="position-absolute"
      style={{ left: '50%', top: '100px' }}
    />
  );
};

export default LazyGif;

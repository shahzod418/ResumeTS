import React, { useEffect, useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';

const LazyGif = ({ name }) => {
  const [gif, setGif] = useState();

  useEffect(() => {
    import(`../../assets/gifs/${name}.gif`).then(setGif);
  }, []);

  return gif ? (
    <Image src={gif.default} fluid rounded />
  ) : (
    <Spinner
      animation="border"
      variant="dark"
      className="position-absolute"
      style={{ left: '50%', top: '100px' }}
    />
  );
};

export default LazyGif;

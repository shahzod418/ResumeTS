import { useState, useCallback, useEffect } from 'react';
import useSwipe from './useSwipe';

const useShowCanvas = () => {
  const [show, setShow] = useState(false);
  const { isSwipe, setIsSwipe } = useSwipe();

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (isSwipe) {
      handleShow();
      setIsSwipe(false);
    }
  }, [isSwipe]);

  return { show, handleShow, handleClose };
};

export default useShowCanvas;

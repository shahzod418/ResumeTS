import { useCallback, useEffect, useState } from 'react';
import useSwipe, { SwipeType } from './useSwipe';

const useShowCanvas = () => {
  const [show, setShow] = useState<boolean>(false);
  const { swipe, setSwipe } = useSwipe();

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (swipe.status) {
      if (swipe.type === SwipeType.Left) {
        handleShow();
      }

      if (swipe.type === SwipeType.Right) {
        handleClose();
      }

      setSwipe();
    }
  }, [swipe]);

  return { show, handleShow, handleClose };
};

export default useShowCanvas;

import { useCallback, useEffect, useRef, useState } from 'react';

export enum SwipeType {
  Left = 'Left',
  Right = 'Right',
}

interface ISwipe {
  status: boolean;
  type?: SwipeType;
}

const useSwipe = () => {
  const [swipe, setSwipe] = useState<ISwipe>({ status: false });
  const { current } = useRef<Document>(document);

  const changeSwipeStatus = useCallback(() => {
    setSwipe({ status: false });
  }, []);

  let touchStart = 0;
  let touchEnd = 0;

  const checkDirection = () => {
    if (touchStart - touchEnd > 100) {
      setSwipe({ status: true, type: SwipeType.Left });
    }

    if (touchEnd - touchStart > 100) {
      setSwipe({ status: true, type: SwipeType.Right });
    }

    touchStart = 0;
    touchEnd = 0;
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStart = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    touchEnd = event.changedTouches[0].screenX;
    checkDirection();
  };

  useEffect(() => {
    current.addEventListener('touchstart', handleTouchStart);
    current.addEventListener('touchend', handleTouchEnd);

    return () => {
      current.removeEventListener('touchstart', handleTouchStart);
      current.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { swipe, setSwipe: changeSwipeStatus };
};

export default useSwipe;

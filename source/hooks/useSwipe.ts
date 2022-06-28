import { useEffect, useRef, useState } from 'react';

const useSwipe = () => {
  const [isSwipe, setIsSwipe] = useState(false);
  const { current } = useRef(document);

  let touchStart = 0;
  let touchEnd = 0;

  const checkDirection = () => {
    if (touchStart - touchEnd > 100) {
      setIsSwipe(true);
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

  return { isSwipe, setIsSwipe };
};

export default useSwipe;

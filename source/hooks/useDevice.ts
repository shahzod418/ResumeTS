import { useEffect, useRef, useState } from 'react';

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(() => false);
  const { current } = useRef(window);

  const handleResize = () => {
    setIsMobile(() => window.screen.width <= 575);
  };

  useEffect(() => {
    setIsMobile(() => window.screen.width <= 575);

    current.addEventListener('resize', handleResize);

    return () => {
      current.removeEventListener('resize', handleResize);
    };
  });

  return { isMobile };
};

export default useDevice;

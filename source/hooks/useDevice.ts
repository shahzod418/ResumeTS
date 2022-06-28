import { useEffect, useRef, useState } from 'react';

const useDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => false);
  const { current } = useRef<Window>(window);

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

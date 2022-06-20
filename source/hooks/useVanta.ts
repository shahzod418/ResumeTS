import { useCallback, useContext, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import ThemeContext from '../context/ThemeContext';

const useVanta = () => {
  const { theme } = useContext(ThemeContext);
  const setRef = useRef(null);

  const vanta = useCallback(() => {
    NET({
      el: setRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0d6efd,
      backgroundColor: theme.background,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 20.0,
    });
  }, [theme]);

  useEffect(() => {
    vanta();
  }, [theme]);

  return { setRef };
};

export default useVanta;

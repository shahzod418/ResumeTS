import { useCallback, useRef, useState } from 'react';
import themes from '../../_data/themes';

const useTheme = () => {
  const [theme, setTheme] = useState(themes.light);
  const { current } = useRef(document.body);

  const changeTheme = useCallback(() => {
    setTheme(({ id }) => {
      if (id === 'light') {
        return themes.dark;
      }

      return themes.light;
    });
  }, []);

  current.style.backgroundColor = theme.background;
  current.id = theme.id;

  return { theme, changeTheme };
};

export default useTheme;

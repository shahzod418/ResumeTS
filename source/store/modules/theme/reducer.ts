import themes from '../../../../_data/themes';
import { THEME_ACTIONS } from './actions';
import { ITheme } from '../../../interfaces/IThemes';
import IThemeAction from '../../../interfaces/IThemeAction';

const defaultTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return themes.dark;
  }

  return themes.light;
};

const themeReducer = (state: ITheme = defaultTheme(), action: IThemeAction) => {
  switch (action.type) {
    case THEME_ACTIONS.ChangeTheme:
      return themes[action.payload];
    default:
      return state;
  }
};

export default themeReducer;

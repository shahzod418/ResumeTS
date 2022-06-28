import themes from '../../../../_data/themes';
import { THEME_ACTIONS } from './actions';

const themeReducer = (state = themes.light, action) => {
  switch (action.type) {
    case THEME_ACTIONS.ChangeTheme:
      return themes[action.payload];
    default:
      return state;
  }
};

export default themeReducer;

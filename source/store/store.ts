import createStore from './Store/Store';
import themeReducer from './modules/theme/reducer';
import IStoreState from '../interfaces/IStoreState';
import toastReducer from './modules/toast/reducer';
import IThemeAction from '../interfaces/IThemeAction';
import IToastAction from '../interfaces/IToastAction';

const rootReducer = (state: IStoreState, action: any) => {
  return {
    theme: themeReducer(state?.theme, action || {}),
    toast: toastReducer(state?.toast, action || {}),
  };
};

const store = createStore(rootReducer);

export default store;

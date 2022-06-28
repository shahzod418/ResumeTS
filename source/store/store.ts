import createStore from './Store/Store';
import themeReducer from './modules/theme/reducer';
import IStore from '../interfaces/IStore';
import IAction from '../interfaces/IAction';

const rootReducer = (state: IStore | any = {}, action: IAction | any = {}) => {
  return {
    theme: themeReducer(state.theme, action),
  };
};

const store = createStore(rootReducer);

export default store;

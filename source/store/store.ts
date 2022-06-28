import createStore from './Store/Store';
import themeReducer from './modules/theme/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    theme: themeReducer(state.theme, action),
  };
};

const store = createStore(rootReducer);

export default store;

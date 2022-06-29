import IToastAction from '../../../interfaces/IToastAction';
import { TOAST_ACTIONS } from './actions';

const toastReducer = (state = false, action: IToastAction) => {
  switch (action.type) {
    case TOAST_ACTIONS.ShowToast:
      return true;
    case TOAST_ACTIONS.CloseToast:
      return false;
    default:
      return state;
  }
};

export default toastReducer;

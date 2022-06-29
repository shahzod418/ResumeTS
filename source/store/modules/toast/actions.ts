export const TOAST_ACTIONS = {
  ShowToast: 'TOAST/SHOW_TOAST',
  CloseToast: 'TOAST/CLOSE_TOAST',
};

export const showToast = () => {
  return {
    type: TOAST_ACTIONS.ShowToast,
    payload: true,
  };
};

export const closeToast = () => {
  return {
    type: TOAST_ACTIONS.CloseToast,
    payload: true,
  };
};

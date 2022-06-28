export const THEME_ACTIONS = {
  ChangeTheme: 'THEME/CHANGE_THEME',
};

export const changeTheme = (newTheme: string) => {
  return {
    type: THEME_ACTIONS.ChangeTheme,
    payload: newTheme,
  };
};

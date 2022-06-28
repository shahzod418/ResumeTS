import IStore from '../../../interfaces/IStore';

const selectTheme = (state: IStore) => state.theme;

export default selectTheme;

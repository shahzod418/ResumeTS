import React, { FC, ReactNode } from 'react';
import StoreContext from '../context/StoreContext';
import store from '../store';

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;

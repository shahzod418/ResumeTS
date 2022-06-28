import React from 'react';
import StoreContext from '../context/StoreContext';
import store from '../store';

function StoreProvider({ children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export default StoreProvider;

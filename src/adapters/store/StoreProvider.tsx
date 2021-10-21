import React, { createContext, FC, ReactElement, PropsWithChildren } from 'react';
import { RootStore } from '.';

interface Props {
  store: RootStore;
}

export const StoreContext = createContext<RootStore>({} as RootStore);

const StoreProvider: FC<PropsWithChildren<Props>> = ({ children, store }): ReactElement => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export default StoreProvider;

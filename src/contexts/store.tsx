import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

type Store = {
  numRepos: number;
};

type StoreContext = {
  store: Store | null;
  updateStore: (newData: Store | null) => void;
};

type StoreProviderProps = {
  children: ReactNode;
};

const StoreContext = createContext<StoreContext>({} as StoreContext);

function StoreProvider({ children }: StoreProviderProps) {
  const [store, setData] = useState<StoreContext['store'] | null>(null);

  const updateStore = (newData: Store | null) => {
    setData(newData);
  };

  return (
    <StoreContext.Provider value={{ store, updateStore }}>
      {children}
    </StoreContext.Provider>
  );
}

export type { Store };
export { StoreProvider, StoreContext };

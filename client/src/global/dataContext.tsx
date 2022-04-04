import React, { createContext, useContext, useState } from 'react';
import { TDataContext, TDataContextProps, TDataContextProviderProps } from './types';

const DataContext = createContext<TDataContextProps>({
  dataContext: undefined,
  setDataContext: () => {},
});

export const DataContextProvider = ({
  children = null,
  initialValue,
}: TDataContextProviderProps) => {
  const [dataContext, setDataContext] = useState<TDataContext | undefined>(
    initialValue,
  );
  return (
    <DataContext.Provider
      value={{
        dataContext,
        setDataContext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.defaultProps = {
  children: null,
  initialValue: null,
};

export const useDataContext = (): TDataContextProps => {
  const context = useContext(DataContext);
  if (!context || !context.dataContext) {
    throw new Error('No context found');
  }
  return context as TDataContextProps;
};

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create initial state
const initialState = {
  transations: [
    { id: 1, description: 'Income 1', transactionAmount: 1000 },
    { id: 2, description: 'Expense 1', transactionAmount: -100 },
    { id: 3, description: 'Income 2', transactionAmount: 2000 },
    { id: 4, description: 'Expense 2', transactionAmount: -500 },
  ],
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Create a provider for GlobalContext
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transations: state.transations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

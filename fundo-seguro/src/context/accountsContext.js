// DebitContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Ações disponíveis
const ADD_DEBIT = 'ADD_DEBIT';

// Criar o contexto
const DebitContext = createContext();

// Reducer para manipular as ações
const debitReducer = (state, action) => {
  switch (action.type) {
    case ADD_DEBIT:
      return {
        ...state,
        debitList: [...state.debitList, action.payload],
      };
    default:
      return state;
  }
};

// Componente Provedor que envolve a aplicação
export const DebitProvider = ({ children }) => {

    const [state, dispatch] = useReducer(debitReducer, { debitList: [] });

    const totalAmount = state.debitList.reduce((acc, curItem) => curItem.amount + acc, 0)

  // Função para adicionar um débito
  const addDebit = (debit) => {
    dispatch({ type: ADD_DEBIT, payload: {id: `${state.debitList.length + 1} - ${debit.description.length}`, ...debit}});
  };

  return (
    <DebitContext.Provider value={{ state, addDebit, totalAmount }}>
      {children}
    </DebitContext.Provider>
  );
};

// Hook para consumir o contexto
export const useDebit = () => {
  const context = useContext(DebitContext);
  if (!context) {
    throw new Error('useDebit deve ser usado dentro de DebitProvider');
  }
  return context;
};
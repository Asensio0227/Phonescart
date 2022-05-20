import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import data from './data';
import ErrorBoundary from './ErrorBoundary';
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialState = {
  amount: 0,
  isLoading: false,
  total: 0,
  cart: data,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const removeCart = (id) => {
    dispatch({ type: 'REMOVE_CART', payload: id });
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'FETCH_DATA', payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({type: "GET_TOTALS"})
  },[state.cart])

  return (
    <ErrorBoundary>
      <AppContext.Provider value={{
        ...state,
        clearCart,
        removeCart,
        toggleAmount,
      }}>
        {children}
      </AppContext.Provider>
    </ErrorBoundary>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
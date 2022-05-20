const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === 'REMOVE_CART') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
    }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.type === 'Inc') {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        if (action.payload.type === 'desc') {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
      }
      return cartItem;
    })
      .filter((cartItem) => cartItem.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    }
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === 'FETCH_DATA') {
    return {
      ...state,
      isLoading: false,
      cart: action.payload,
    }
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const totalItems = price * amount;

      cartTotal.total += totalItems;
      cartTotal.amount += amount;

      return cartTotal;
    }, {
      total: 0,
      amount: 0,
    })
    total = parseFloat(total.toFixed(2));
    return {
      ...state, total, amount,
    }
  }
    
  throw new Error(`these no matching action type`);
};

export { reducer };
import { useReducer } from 'react';

const initialState = {
  user: null,
  cart: [],
  logs: [],
  totalSpent: 0,
};

function shopReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, logs: [...state.logs, `Event: ${action.payload} joined`] };
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cart: [...state.cart, action.payload],
        logs: [...state.logs, `Event: ${action.payload.name} added to cart`] 
      };
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart[action.index];
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.index),
        logs: [...state.logs, `Event: ${itemToRemove.name} removed`]
      };
    case 'CHECKOUT':
      const total = state.cart.reduce((acc, item) => acc + item.price, 0);
      return {
        ...state,
        totalSpent: state.totalSpent + total,
        cart: [],
        logs: [...state.logs, `Event: Checkout success (Rs.${total})`]
      };
    case 'LOGOUT':
      return {
        ...initialState,
        logs: [...state.logs, `Event: Session ended for ${state.user}`]
      };
    default:
      return state;
  }
}

export function useShop() {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const performCheckout = async () => {
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: state.cart, user: state.user }),
    });
    
    if (response.ok) {
      dispatch({ type: 'CHECKOUT' });
      alert("Purchase synced with Node.js Server!");
    }
  };

  return { state, dispatch, performCheckout };
}
import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    checkout: false,
    prodList: [],
  };

  const getFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  const mergedInitialState = {
    ...initialState,
    cartItems: getFromLocalStorage(),
  };

  const [state, dispatch] = useReducer(CartReducer, mergedInitialState);

  const setProdList = (payload) => {
    dispatch({ type: "UPDATE_SEARCH_RESULTS", payload });
  };

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        showcart: state.showcart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart,
        setProdList,
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

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
    //Add the functions that have been defined above into the Context provider, and pass on to the children
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
        ...state,
      }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

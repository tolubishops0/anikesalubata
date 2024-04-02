import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    checkout: false,
    prodList: [],
    authState: {
      isUserLoggedIn: false,
      userDetails: null,
      storedUsertems: [],
      totalCost: null
    },
  };

  const getFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };
  const getLoggedUserDetailsFromLocalStorage = () => {
    const storedCartItemsForeLoggedInUser =
      localStorage.getItem("userDataAndCart");

    return storedCartItemsForeLoggedInUser
      ? JSON.parse(storedCartItemsForeLoggedInUser)
      : [];
  };

  const mergedInitialState = {
    ...initialState,
    cartItems: getFromLocalStorage(),
    authState: getLoggedUserDetailsFromLocalStorage(),
  };

  const [state, dispatch] = useReducer(CartReducer, mergedInitialState);

  const setAuthState = (userDetails, storedCartItems, totalCost) => {
    dispatch({
      type: "AUTH_STATE",
      payload: { storedCartItems, userDetails, totalCost },
    });
  };

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
        setAuthState,
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

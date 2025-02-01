import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  // const initialState = {
  //   cartItems: [],
  //   checkout: false,
  //   prodList: [],
  //   likedProd: [],
  // };

  // const mergedInitialState = {
  //   ...initialState,
  //   cartItems: getFromLocalStorage(),
  // };

  const getFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  const initialState = {
    cartItems: getFromLocalStorage(),
    checkout: false,
    prodList: [],
    likedProd: [],
  };
  // console.log(initialState.cartItems, "from cartstate");

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

  const setProdList = (payload) => {
    dispatch({ type: "UPDATE_SEARCH_RESULTS", payload });
  };

  const addToLike = (payload) => {
    dispatch({ type: "FAVOURITE_PRODUCT", payload });
  };

  const removeFromLiked = (payload) => {
    dispatch({ type: "REMOVE_FAVOURITE_PRODUCT", payload });
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
        addToLike,
        removeFromLiked,
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

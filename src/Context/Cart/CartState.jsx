import { useReducer, useContext, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initializeAuthState = () => ({
    isUserLoggedIn: false,
    userDetails: [],
    storedCartItems: [],
    totalCost: null,
  });

  const initialState = {
    cartItems: [],
    checkout: false,
    prodList: [],
    authState: initializeAuthState(),
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


// <Box sx={style.authContainer}>
//             <form
//               onSubmit={getPaymentDetails}
//               style={style.formContainer}
//               type="submit">
//               <input
//                 type="text"
//                 placeholder="card name"
//                 required
//                 value={cardName}
//                 onChange={(e) => setCardName(e.target.value)}
//                 className="auth-inputfield"
//               />
//               <input
//                 type="number"
//                 placeholder="card number"
//                 required
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 className="auth-inputfield"
//               />
//               <div className="auth-zipcodeinputfild">
//                 <input
//                   type="text"
//                   placeholder="expYear"
//                   required
//                   value={expYear}
//                   onChange={(e) => setExpYear(e.target.value)}
//                   className="auth-inputfieldzippayment"
//                 />
//                 <input
//                   type="number"
//                   placeholder="expitation month"
//                   required
//                   value={expMonth}
//                   onChange={(e) => setExpMonth(e.target.value)}
//                   className="auth-inputfieldzippayment"
//                 />
//                 <input
//                   type="text"
//                   placeholder="cvv"
//                   required
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value)}
//                   className="auth-inputfieldzippayment"
//                 />
//               </div>
//               <button className="auth-inputfield-button" type="submit">
//                 Complete order
//               </button>
//             </form>
//           </Box>
//         </Box>
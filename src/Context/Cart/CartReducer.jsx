import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
  UPDATE_SEARCH_RESULTS,
  AUTH_STATE,
  GLOBAL_USER_STATE,
} from "./CartTypes";

const saveToLocalStorage = (itemsCount, total, cartItems) => {
  localStorage.setItem("itemsCount", JSON.stringify(itemsCount));
  localStorage.setItem("total", JSON.stringify(total));
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const sumItems = (cartItems) => {
  let itemsCount = cartItems?.reduce(
    (total, product) => total + product?.quantity,
    0
  );
  let total =
    "$" +
    cartItems
      ?.reduce(
        (total, product) =>
          total + parseFloat(product.price.replace("$", "")) * product.quantity,
        0
      )
      .toFixed(2);
  saveToLocalStorage(itemsCount, total, cartItems);
  return { itemsCount, total };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartItems = [...state.cartItems, ...action.payload];
      saveToLocalStorage(updatedCartItems);
      return {
        ...state,
        ...sumItems(updatedCartItems),
        cartItems: updatedCartItems,
      };
    case REMOVE_ITEM:
      const filteredCartItems = state.cartItems?.filter(
        (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(filteredCartItems);
      return {
        ...state,
        ...sumItems(filteredCartItems),
        cartItems: filteredCartItems,
      };
    case INCREASE:
      const increasedCartItems = state.cartItems?.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      saveToLocalStorage(increasedCartItems);
      return {
        ...state,
        ...sumItems(increasedCartItems),
        cartItems: increasedCartItems,
      };
    case DECREASE:
      const decreasedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveToLocalStorage(decreasedCartItems);
      return {
        ...state,
        ...sumItems(decreasedCartItems),
        cartItems: decreasedCartItems,
      };
    case AUTH_STATE:
      const { userDetails, storedCartItems } = action.payload;
      const userDataAndCart = {
        isUserLoggedIn: userDetails?.uid ? true : false,
        userDetails,
        storedCartItems,
        totalCost: storedCartItems?.reduce(
          (total, item) =>
            total + parseFloat(item.price?.replace("$", "")) * item.quantity,
          0
        ),
      };
      localStorage.setItem("userDataAndCart", JSON.stringify(userDataAndCart));
      return {
        ...state,
        authState: {
          ...userDataAndCart,
        },
      };
    case CHECKOUT:
      saveToLocalStorage([]);
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case CLEAR:
      saveToLocalStorage([]);
      return {
        cartItems: [],
        ...sumItems([]),
      };

    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        prodList: action.payload,
      };

    default:
      return state;
  }
};
export default CartReducer;

import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes";

export const sumItems = (cartItems) => {
  console.log(cartItems);
  let itemsCount = cartItems.reduce(
    (total, product) => total + product?.qty,
    0
  );
  console.log(itemsCount, "itemcount");
  let total = cartItems
    .reduce((total, product) => total + product?.price * product?.quantity, 0)
    .toFixed(2);
  return { itemsCount, total };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex == -1) {
        // console.log("it is not found so will craete a new item in the cartS");
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          ...sumItems(state.cartItems),
        };
      } else {
        // console.log("it is fund so it will update the quntty");
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
export default CartReducer;

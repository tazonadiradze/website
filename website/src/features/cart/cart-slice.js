import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDiv: false,
  cart: [],
  showRegister: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showDivHandler(state) {
      state.showDiv = true;
    },
    closeDivHandler(state) {
      state.showDiv = false;
    },

    hideDivHandler(state) {
      state.showDiv = false;
    },
    addItemInCart(state, action) {
      const { id, quantity, price } = action.payload;

      const product = state.cart.find((each) => each.id === id);
      if (product) {
        product.quantity += quantity;
        return;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        if (item.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          item.quantity -= 1;
        }
      }
    },
    incrementQuantity(state, action) {
      const { id } = action.payload;
      const plusitem = state.cart.find((item) => item.id === id);
      if (plusitem) {
        plusitem.quantity++;
      }
    },

    loginOpenFunc(state) {
      state.showRegister = true;
    },
    loginCloseFunc(state) {
      state.showRegister = false;
    },
  },
});

export const {
  showDivHandler,
  addItemInCart,
  removeFromCart,
  incrementQuantity,
  hideDivHandler,
  loginCloseFunc,
  loginOpenFunc,
  closeDivHandler,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDiv: false,
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showDivHandler(state) {
      state.showDiv = true;
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
      const { id, quantity } = action.payload;
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
        plusitem.quantity += 1;
      }
    },
  },
});

export const {
  showDivHandler,
  addItemInCart,
  removeFromCart,
  incrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

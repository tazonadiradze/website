import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cart-slice";
import createAuth from "../features/auth/auth";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: createAuth,
  },
});

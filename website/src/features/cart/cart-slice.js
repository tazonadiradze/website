import { createAction, createSlice, payloadAction } from "@reduxjs/toolkit";

const initialState = {
  showDiv: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showDivHandler(state) {
      state.showDiv = true;
    },
  },
});

console.log(cartSlice.actions, "createSlice.acyiton");

export const { showDivHandler } = cartSlice.actions;
export default cartSlice.reducer;

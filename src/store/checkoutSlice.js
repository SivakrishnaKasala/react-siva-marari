import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    value: true,
  },
  reducers: {
    closeCheckoutPage: (state) => (state.value = false),
    openCheckoutPage: (state) => (state.value = true),
  },
});

export const { closeCheckoutPage, openCheckoutPage } = checkoutSlice.actions;
export default checkoutSlice.reducer;

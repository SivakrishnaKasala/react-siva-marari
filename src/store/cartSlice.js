import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = 110;
    },
    decrement: (state, action) => {
      state.value = 65;
    },
    reset: (state, action) => {
      state.value = 0;
    },
    resetTwoExams: (state) => {
      state.value = 110;
    },
  },
});

export const { increment, decrement, reset, resetTwoExams } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const Cardslice = createSlice({
  name: "CardInfo",
  initialState,
  reducers: {
    setCardData: (state, action) => {
      state.splice(0, 1, action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCardData } = Cardslice.actions;

export default Cardslice.reducer;

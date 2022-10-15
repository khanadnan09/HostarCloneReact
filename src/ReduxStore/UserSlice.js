import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
export const Userslice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserLogIn: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogOut:(state) => {
         state.name = null
         state.email = null
         state.photo = null
    }
  },
});

export const {setUserLogIn , setUserLogOut} = Userslice.actions;
export default Userslice.reducer
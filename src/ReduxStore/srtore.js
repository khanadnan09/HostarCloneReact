import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './Cradslice'
import UserReducer from "./UserSlice";
export const store = configureStore({
  reducer: {
    card: CardReducer,
    user:UserReducer
  },
});

store.subscribe(()=>{
  localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

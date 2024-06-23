import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./PostSlice";
import productsReduser from "./Secondslice";

export const store = configureStore({
  reducer: {
    postSlice,
  },
});

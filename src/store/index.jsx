import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import fetchReducer from "./fetchSlice";

export const store = configureStore({
  reducer: {
    PostSlice,
    fetchReducer,
  },
});

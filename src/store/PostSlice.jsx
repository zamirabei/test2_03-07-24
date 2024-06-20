import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "Post Slice",
  initialState: {
    count: 0,
    posts: [],
  },
  reducers: {
    postsBack: (state, action) => {
      state.posts = action.payload;
    },
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count = Math.max(state.count - action.payload, 0);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { postsBack, increment, decrement, reset } = postSlice.actions;
export default postSlice.reducer;

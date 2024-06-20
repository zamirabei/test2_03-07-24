import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk(
  "getPosts",
  async function (info, { dispatch, reject }) {
    dispatch(loaderOnn());
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const data = await response.json();
    console.log(data);
    dispatch(loaderOff());
  }
);

const fetchReducer = createSlice({
  name: "fetchReducer",
  initialState: {
    loader: false,
  },
  reducers: {
    loaderOnn: (state) => {
      state.loader = true;
    },
    loaderOff: (state) => {
      state.loader = false;
    },
  },
});
export const { loaderOnn, loaderOff } = fetchReducer.actions;

export default fetchReducer.reducer;

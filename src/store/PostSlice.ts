import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ThunkConfig } from "../constants/constants";
import axios from "axios";

export interface IPost {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IState {
  posts: IPost[];
}

export const requestPosts = createAsyncThunk<
  IPost[],
  IPost,
  { rejectValue: string }
>("posts/requestPosts", async (data: IPost, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:3001/posts", data);
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to post data");
  }
});

export const getRequest = createAsyncThunk(
  "posts/getPosts",
  async (_, { dispatch }) => {
    const response = await fetch("http://localhost:3001/posts");
    const data = await response.json();
    dispatch(getUsers(data));
  }
);

const initialState: IState = {
  posts: [],
};

export const postReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { getUsers } = postReducer.actions;
export const postsReducer = postReducer.reducer;

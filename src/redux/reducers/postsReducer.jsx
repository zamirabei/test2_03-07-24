import { types } from "../types";

const initialState = {
  preloader: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADER_ONN:
      return {
        preloader: true,
      };
    case types.LOADER_OFF:
      return {
        preloader: false,
      };
    default:
      return state;
  }
}

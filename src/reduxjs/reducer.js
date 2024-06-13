import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import fetchUsers from "./UserReducer";

export const rootReducer = combineReducers({
  mainReducer,
  fetchUsers,
});

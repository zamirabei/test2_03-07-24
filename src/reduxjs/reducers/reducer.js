import { combineReducers } from "redux";
import fetchUsers from "./UserReducer";

export const rootReducer = combineReducers({
  fetchUsers,
});

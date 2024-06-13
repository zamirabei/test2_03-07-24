import { types } from "./types";

export function asyncFn(users) {
  return {
    type: types.ASYNC_FN,
    payload: users,
  };
}

export function asyncFunctionFetch() {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(asyncFn(data));
    console.log(data);
  };
}

export function asyncFunctionTwo(object) {
  return {
    type: types.ASYNC_ONE,
    payload: object,
  };
}

export function asyncFunctionOne(id) {
  return async function (dispatch) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    dispatch(asyncFunctionTwo(data));
  };
}

import { types } from "../types";

export function loaderOnn() {
  return {
    type: types.LOADER_ONN,
  };
}
export function loaderOff() {
  return {
    type: types.LOADER_OFF,
  };
}

export function fetchUserData(user) {
  return async function (dispatch) {
    dispatch(loaderOnn());
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`,
      options
    );
    if (response.status >= 200 || response.status <= 204) {
      dispatch(loaderOff());
    } else if (response.status === 404) {
      dispatch(loaderOff());
    }
  };
}

export function fetchUser() {
  return {
    type: types.FETCH,
  };
}

export function fetchUserPosts(users) {
  return async function (dispatch) {
    dispatch(loaderOnn());
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    };
    const response = await fetch(`https://httpbin.org/post`, options);
    if (response.status >= 200 || response.status <= 204) {
      dispatch(loaderOff());
    } else if (response.status === 404) {
      dispatch(loaderOff());
    }
  };
}

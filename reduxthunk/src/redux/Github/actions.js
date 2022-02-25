import { GETUSER } from "./actionTypes";

export const getUser = (data) => {
  return {
    type: GETUSER,
    payload: data,
  };
};

export const getUserList = (query, page, page_size) => (dispatch) => {
  fetch(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${page_size}`
  )
    .then((e) => e.json())
    .then((e) => dispatch(getUser(e)));
};

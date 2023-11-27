// actions/userActions.js
export const SET_USER = 'SET_USER';

export const setUser = (username) => ({
  type: SET_USER,
  payload: username,
});

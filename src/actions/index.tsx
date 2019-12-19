import * as actionTypes from '../constants/actionType';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const setUri = (uri) => ({
  type: actionTypes.SET_URI,
  uri,
});

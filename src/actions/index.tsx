import * as actionTypes from '../constants/actionType';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const setBlob = (blob) => ({
  type: actionTypes.SET_BLOB,
  blob,
});

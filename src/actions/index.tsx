import * as actionTypes from '../constants/actionType';

export const setUer = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const hoge = () => ({
  type: actionTypes.HOGE,
});

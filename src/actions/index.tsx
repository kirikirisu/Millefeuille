import * as actionTypes from '../constants/actionType';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const setImgData = (imgData) => ({
  type: actionTypes.SET_IMG_DATA,
  imgData,
});

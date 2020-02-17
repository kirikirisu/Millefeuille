import * as actionTypes from '../constants/actionType';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const setUri = (uri) => ({
  type: actionTypes.SET_URI,
  uri,
});

export const setDate = (date) => ({
  type: actionTypes.SET_DATE,
  date,
});

export const setText = (text) => ({
  type: actionTypes.SET_TEXT,
  text,
});

export const setRecordThunk = (thunk) => ({
  type: actionTypes.SET_RECORD_THUNK,
  thunk,
});

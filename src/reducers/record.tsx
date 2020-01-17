import { SET_URI, SET_DATE, SET_TEXT } from '../constants/actionType';

const initialState = {
  uri: '',
  date: new Date(),
  text: '',
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URI:
      return {
        ...state,
        uri: action.uri,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default recordReducer;

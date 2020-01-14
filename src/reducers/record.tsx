import { SET_URI, SET_DATE } from '../constants/actionType';

const initialState = {
  uri: '',
  date: new Date(),
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
    default:
      return state;
  }
};

export default recordReducer;

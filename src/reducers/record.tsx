import {
  SET_URI, SET_DATE, SET_TEXT, INITIALIZE_RECORD,
} from '../constants/actionType';

const initialState = {
  uri: '',
  date: new Date(),
  coment: '',
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
        coment: action.coment,
      };
    case INITIALIZE_RECORD:
      return initialState;
    default:
      return state;
  }
};

export default recordReducer;

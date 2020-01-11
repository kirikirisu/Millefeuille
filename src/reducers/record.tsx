import { SET_URI } from '../constants/actionType';

const initialState = {
  uri: '',
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URI:
      return {
        ...state,
        uri: action.uri,
      };
    default:
      return state;
  }
};

export default recordReducer;

import { SET_RECORD_THUNK } from '../constants/actionType';

const initialState = {
  recordThunk: {},
};

const recordThunkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECORD_THUNK:
      return {
        ...state,
        recordThunk: action.thunk,
      };
    default:
      return state;
  }
};

export default recordThunkReducer;

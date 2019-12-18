import { SET_BLOB } from '../constants/actionType';

const initialState = {
  blob: {},
};

const blobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOB:
      return {
        ...state,
        blob: { ...action.blob },
      };
    default:
      return state;
  }
};

export default blobReducer;

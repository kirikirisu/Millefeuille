import { SET_IMG_DATA } from '../constants/actionType';

const initialState = {
  imgData: {},
};

const imgDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG_DATA:
      return {
        ...state,
        imgData: { ...action.imgData },
      };
    default:
      return state;
  }
};

export default imgDataReducer;

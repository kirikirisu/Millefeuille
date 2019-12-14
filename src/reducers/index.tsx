import { combineReducers } from 'redux';
import user from './user';
import imgData from './imgData';

export default combineReducers({
  user,
  imgData,
});

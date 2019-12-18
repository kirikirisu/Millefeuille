import { combineReducers } from 'redux';
import user from './user';
import blob from './blob';

export default combineReducers({
  user,
  blob,
});

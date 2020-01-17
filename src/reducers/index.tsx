import { combineReducers } from 'redux';
import user from './user';
import record from './record';

export default combineReducers({
  user,
  record,
});

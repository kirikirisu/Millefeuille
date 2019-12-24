import { combineReducers } from 'redux';
import user from './user';
import uri from './uri';

export default combineReducers({
  user,
  uri,
});

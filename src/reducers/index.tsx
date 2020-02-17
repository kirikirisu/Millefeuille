import { combineReducers } from 'redux';
import user from './user';
import record from './record';
import recordThunk from './recordThunk';

export default combineReducers({
  user,
  record,
  recordThunk,
});

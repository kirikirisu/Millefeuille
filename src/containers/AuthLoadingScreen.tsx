import { connect } from 'react-redux';
import { setUser, setRecordThunk } from '../actions';

import AuthLoadingScreen from '../components/AuthLoadingScreen/AuthLoadingScreen';

const mapStateToProps = (state) => ({
  state: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser(user) {
    dispatch(setUser(user));
  },
  setRecordThunk(thunk) {
    dispatch(setRecordThunk(thunk));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

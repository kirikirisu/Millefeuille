import { connect } from 'react-redux';
import { setUer } from '../actions';

import AuthLoadingScreen from '../components/AuthLoadingScreen/AuthLoadingScreen';

const mapStateToProps = (state) => ({
  state: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser(user) {
    dispatch(setUer(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

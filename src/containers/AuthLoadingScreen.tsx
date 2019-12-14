import { connect } from 'react-redux';
import { setUser } from '../actions';

import AuthLoadingScreen from '../components/AuthLoadingScreen/AuthLoadingScreen';

const mapStateToProps = (state) => ({
  state: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser(user) {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

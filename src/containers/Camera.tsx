import { connect } from 'react-redux';
import { setUri } from '../actions';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  setUri(uri) {
    dispatch(setUri(uri));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);

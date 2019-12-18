import { connect } from 'react-redux';
import { setBlob } from '../actions';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  setBlob(blob) {
    dispatch(setBlob(blob));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);

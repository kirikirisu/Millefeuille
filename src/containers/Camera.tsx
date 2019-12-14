import { connect } from 'react-redux';
import { setImgData } from '../actions';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  setImgData(imgData) {
    dispatch(setImgData(imgData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);

import { connect } from 'react-redux';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

export default connect(mapStateToProps, null)(Camera);

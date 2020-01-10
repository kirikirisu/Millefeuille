import { connect } from 'react-redux';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = ({ user, uri }) => ({
  uid: user.user.uid,
  uri: uri.uri,
});

export default connect(mapStateToProps, null)(Camera);

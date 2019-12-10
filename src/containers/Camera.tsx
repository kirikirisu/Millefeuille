import { connect } from 'react-redux';

import Camera from '../components/AppScreens/CameraScreen/Camera';

const mapStateToProps = (state) => ({
  state: state.user,
});

export default connect(mapStateToProps, null)(Camera);

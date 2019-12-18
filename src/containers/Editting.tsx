
import { connect } from 'react-redux';
// import { setImgData } from '../actions';

import Editting from '../components/AppScreens/CameraScreen/EditScreen/Editting';

const mapStateToProps = ({ blob }) => ({
  blob: blob.blob,
});

/* const mapDispatchToProps = (dispatch) => ({
  setImgData(imgData) {
    dispatch(setImgData(imgData));
  },
});
*/

export default connect(mapStateToProps, null)(Editting);

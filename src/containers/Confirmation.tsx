import { connect } from 'react-redux';
// import { setImgData } from '../actions';

import Confirmation from '../components/AppScreens/RecordScreen/Confirmation';

const mapStateToProps = ({ record, user }) => ({
  uid: user.user.uid,
  record,
});

/* const mapDispatchToProps = (dispatch) => ({
  setImgData(imgData) {
    dispatch(setImgData(imgData));
  },
});
*/

export default connect(mapStateToProps, null)(Confirmation);

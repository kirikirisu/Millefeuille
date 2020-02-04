import { connect } from 'react-redux';
import ComparisonScreen from '../components/AppScreens/ComparisonScreen/index';

const mapStateToProps = ({ user, recordThunk }) => ({
  uid: user.user.uid,
  recordThunk: recordThunk.recordThunk,
});

export default connect(mapStateToProps, null)(ComparisonScreen);

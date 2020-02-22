import { connect } from 'react-redux';
import ComparisonScreen from '../components/AppScreens/ComparisonScreen/Comparison';

const mapStateToProps = ({ user, recordThunk }) => ({
  uid: user.user.uid,
  recordThunk: recordThunk.recordThunk,
});

export default connect(mapStateToProps, null)(ComparisonScreen);

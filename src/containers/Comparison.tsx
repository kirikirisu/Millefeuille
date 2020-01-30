import { connect } from 'react-redux';
import ComparisonScreen from '../components/AppScreens/ComparisonScreen/index';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

export default connect(mapStateToProps, null)(ComparisonScreen);

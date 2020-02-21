import { connect } from 'react-redux';
import Detailes from '../components/AppScreens/CalendarScreen/Details';

const mapStateToProps = ({ user }) => ({
  uid: user.user.uid,
});

export default connect(mapStateToProps, null)(Detailes);

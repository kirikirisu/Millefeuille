import { connect } from 'react-redux';
import CalenderList from '../components/AppScreens/CalendarScreen/CalendarList';

const mapStateToProps = ({ recordThunk }) => ({
  recordThunk: recordThunk.recordThunk,
});

export default connect(mapStateToProps, null)(CalenderList);

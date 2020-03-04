import { connect } from 'react-redux';
import CalenderList from '../components/AppScreens/CalendarScreen/CalendarList';

import { setRecordThunk } from '../actions/index';

const mapStateToProps = ({ recordThunk, user }) => ({
  recordThunk: recordThunk.recordThunk,
});

export default connect(mapStateToProps, null)(CalenderList);

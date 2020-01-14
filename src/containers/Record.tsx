import { connect } from 'react-redux';
import { setDate } from '../actions/index';

import Record from '../components/AppScreens/RecordScreen/Record';

const mapStateToProps = ({ user, record }) => ({
  uid: user.user.uid,
  uri: record.uri,
  date: record.date,
});

const mapDispatchToProps = (dispatch) => ({
  setDate(date) {
    dispatch(setDate(date));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);

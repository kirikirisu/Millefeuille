import { connect } from 'react-redux';
import { setDate, setText } from '../actions/index';

import Record from '../components/AppScreens/RecordScreen/Record';

const mapStateToProps = ({ record }) => ({
  uri: record.uri,
  date: record.date,
});

const mapDispatchToProps = (dispatch) => ({
  setDate(date) {
    dispatch(setDate(date));
  },
  setText(text) {
    dispatch(setText(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);

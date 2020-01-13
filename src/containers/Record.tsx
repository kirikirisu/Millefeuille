import { connect } from 'react-redux';

import Record from '../components/AppScreens/RecordScreen/Record';

const mapStateToProps = ({ user, record }) => ({
  uid: user.user.uid,
  uri: record.uri,
});

export default connect(mapStateToProps, null)(Record);

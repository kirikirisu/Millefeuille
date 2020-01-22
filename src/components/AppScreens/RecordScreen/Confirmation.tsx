import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { renderPhoto } from './Record';
import { formatDate } from '../../../utils/methodFactory';

type Props = {
  uid: string;
  record: {
    uri: string;
    text: string;
    date: string;
  };
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'center',
    padding: 30,
  },
  comentContainer: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  comentLabel: {
    fontSize: 23,
    color: '#141823',
  },
  coment: {
    fontSize: 20,
    marginLeft: 10,
    color: '#4E5665',
  },
  dateContainer: {
    padding: 10,
  },
  dateLabel: {
    fontSize: 23,
    color: '#141823',
  },
  date: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#4E5665',
  },
});

const renderTexts = (date, coment): React.ReactElement => (
  <View style={styles.container}>
    <View style={styles.comentContainer}>
      <Text style={styles.comentLabel}>コメント:</Text>
      <Text style={styles.coment}>{coment}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.dateLabel}>日付:</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);

const Confirmation: React.FC<Props> = ({ uid, record }) => {
  const { uri, date, text } = record;
  const formatedDate = formatDate(date);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {renderPhoto(uri)}
        {renderTexts(formatedDate, text)}
      </ScrollView>
    </View>
  );
};

export default Confirmation;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { renderPhoto } from './Record';

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
});

type Props = {
  uid: string;
  record: {
    uri: string;
    text: string;
    date: string;
  };
}

// eslint-disable-next-line consistent-return
const formatDate = (objDate): string => {
  const YEAR = 3;
  const DAY = 2;
  const strDate = objDate.toString();
  const element = strDate.split(' ');

  switch (element[1]) {
    case 'Jan':
      return `${element[YEAR]}-${1}-${element[DAY]}`;
    case 'Feb':
      return `${element[YEAR]}-${2}-${element[DAY]}`;
    case 'Mar':
      return `${element[YEAR]}-${3}-${element[DAY]}`;
    case 'Apr':
      return `${element[YEAR]}-${4}-${element[DAY]}`;
    case 'May':
      return `${element[YEAR]}-${5}-${element[DAY]}`;
    case 'Jun':
      return `${element[YEAR]}-${6}-${element[DAY]}`;
    case 'Jul':
      return `${element[YEAR]}-${7}-${element[DAY]}`;
    case 'Aug':
      return `${element[YEAR]}-${8}-${element[DAY]}`;
    case 'Sep':
      return `${element[YEAR]}-${9}-${element[DAY]}`;
    case 'Oct':
      return `${element[YEAR]}-${10}-${element[DAY]}`;
    case 'Nov':
      return `${element[YEAR]}-${11}-${element[DAY]}`;
    case 'Dec':
      return `${element[YEAR]}-${12}-${element[DAY]}`;
    default:
  }
};


const renderTexts = (date, coment): React.ReactElement => (
  <View style={styles.container}>
    <View><Text>{coment}</Text></View>
    <View><Text>{date}</Text></View>
  </View>
);

const Confirmation: React.FC<Props> = ({ uid, record }) => {
  const { uri, date, text } = record;
  const formatedDate = formatDate(date);

  return (
    <View style={{ flex: 1 }}>
      {renderPhoto(uri)}
      {renderTexts(formatedDate, text)}
    </View>
  );
};

export default Confirmation;

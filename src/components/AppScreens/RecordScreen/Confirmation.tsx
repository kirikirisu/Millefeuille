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

const renderTexts = (date, coment) => (
  <View style={styles.container}>
    <View><Text>{coment}</Text></View>
  </View>
);

const Confirmation: React.FC<Props> = ({ uid, record }) => {
  const { uri, date, text } = record;

  console.log(typeof date);
  return (
    <View style={{ flex: 1 }}>
      {renderPhoto(uri)}
      {renderTexts(date, text)}
    </View>
  );
};

export default Confirmation;

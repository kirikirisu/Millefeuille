import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../../utils/methodFactory';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.7,
    height: 50,
  },
  text: {
    fontSize: 24,
  },
});

const AndroidDatePicker = ({ date: stateDate, setDate: setDt }) => {
  const [show, setShow] = useState(false);

  const setDate = (event, date): void => {
    const finallydate = date || stateDate;

    setShow(false);
    setDt(finallydate);
  };

  const displayDate = formatDate(stateDate);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={() => setShow(true)} title={`${displayDate}`} />
      </View>
      {show && (
        <DatePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={stateDate}
          mode="date"
          is24Hour
          display="default"
          onChange={(event, date) => setDate(event, date)}
        />
      )}
    </View>
  );
};

export default AndroidDatePicker;

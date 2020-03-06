import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import { formatDate } from '../../../utils/methodFactory';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: w(70),
    height: h(6),
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
        <Button
          buttonStyle={{
            backgroundColor: 'rgb(79, 55, 256)',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 5,
          }}
          onPress={() => setShow(true)}
          title={`${displayDate}`}
        />
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

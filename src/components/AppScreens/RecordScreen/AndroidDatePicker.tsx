import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

const AndroidDatePicker = ({ date: stateDate, setDate: setDt }) => {
  const [show, setShow] = useState(false);

  const setDate = (event, date): void => {
    const finallydate = date || stateDate;

    setDt(finallydate);
    setShow(false);
  };

  return (
    <View>
      <View>
        <Button onPress={() => setShow(true)} title="Push me to show date picker!!" />
        <Text>{`${stateDate}`}</Text>
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

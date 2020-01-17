import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const IosDatePicker = ({ date: stateDate, setDate: setDt }): React.ReactElement => {
  const setDate = (event, date): void => {
    const finallydate = date || stateDate;

    setDt(finallydate);
  };


  return (
    <View>
      <DateTimePicker
        value={stateDate}
        mode="date"
        is24Hour
        display="default"
        onChange={(event, date): void => setDate(event, date)}
      />
    </View>
  );
};

export default IosDatePicker;

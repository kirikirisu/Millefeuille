import React, { Component } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class IosDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  setDate = (event, date) => {
    const { date: stateDate } = this.state;
    const finallydate = date || stateDate;

    this.setState({
      date: finallydate,
    });
  }

  render(): React.ReactElement {
    const { date } = this.state;

    return (
      <View>
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={this.setDate}
        />
      </View>
    );
  }
}

export default IosDatePicker;

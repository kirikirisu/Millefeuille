import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { NavigationStackProp, NavigationStackScreenComponent } from 'react-navigation-stack';
import { View } from 'react-native';

type Props = {
  navigation: NavigationStackProp;
  recordThunk: {
    date: string;
    coment: string;
    url: string;
  };
}

type ShapingThunk = {
  date?: string;
  coment?: string;
  url?: string;
  selected?: boolean;
  selectedColor?: string;
};

const conversionForCalender = (thunk) => new Promise(
  (resolve) => {
    const data: ShapingThunk = {};
    Object.keys(thunk).map((key, value) => {
      data[`${key}`] = { ...thunk[key], selected: true, selectedColor: 'green' };
      return null;
    });
    resolve(data);
  },
);

const Calendar: React.FC<Props> = ({ navigation, recordThunk }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    conversionForCalender(recordThunk).then((shaping) => {
      console.log(shaping);
      setData(shaping);
    });
  }, []);

  return (
    <View>
      <CalendarList
        onDayPress={() => navigation.navigate('Details')}
        markedDates={data}
      />
    </View>
  );
};

Calendar.navigationOptions = {
  title: 'Home',
};

export default Calendar;

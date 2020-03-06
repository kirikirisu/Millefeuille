import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { NavigationStackProp, NavigationStackScreenComponent } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import { View } from 'react-native';
import { RecordState } from '../../../types/index';
// import { reload } from '../../../utils/methodFactory';

type Props = {
  navigation: NavigationStackProp;
  recordThunk: RecordState;
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


const transitionDetails = (navigation, day) => {
  // console.log(day);
  navigation.navigate('Details', { pressedDay: day });
};

let reloadDate;
let thunk;

const mappingDot = (recordThunk) => {
  conversionForCalender(recordThunk).then((shaping) => {
    console.log('touch!!');
    reloadDate(shaping);
  });
};

const Reload = () => (
  <AntDesign size={h(3.5)} name="reload1" color="white" onPress={() => mappingDot(thunk)} style={{ marginRight: 20 }} />
);

const Calendar: NavigationStackScreenComponent<Props> = ({ navigation, recordThunk }) => {
  const [data, setData] = useState({});
  reloadDate = setData;
  thunk = recordThunk;

  useEffect(() => {
    if (recordThunk) {
      mappingDot(recordThunk);
    }
  }, []);

  return (
    <View>
      <CalendarList
        onDayPress={(day): void => transitionDetails(navigation, day)}
        markedDates={data}
      />
    </View>
  );
};

Calendar.navigationOptions = {
  title: 'ホーム',
  headerRight: () => (
    <Reload />
  ),
};

export default Calendar;

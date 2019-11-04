import React from 'react';
import { Agenda } from 'react-native-calendars';
import { View, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';

const CalendarScreen: React.FC = () => {
  const { height: h } = Dimensions.get('screen');
  const screenHeight = h - (Constants.statusBarHeight + 30);
  return (
    // https://github.com/wix/react-native-calendars/issues/388
    <View style={{ height: screenHeight }}>
      <Agenda
        items={{
          '2019-11-2': [{ text: 'item 1 - any js object' }],
          '2019-10-30': [{ text: 'item 2 - any js object' }],
          '2019-11-24': [{ text: 'item 3 - any js object' }, { text: 'any js object' }],
          '2019-11-25': [{ text: 'item 3 - any js object' }, { text: 'any js object' }],
        }}
        renderItem={(item, firstItemInDay) => (<View />)}
        rowHasChanged={(r1, r2) => r1.text !== r2.text}
        renderEmptyData={() => (<View><Text>hello</Text></View>)}
      />
    </View>
  );
};

export default CalendarScreen;

import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { NavigationStackProp, NavigationStackScreenComponent } from 'react-navigation-stack';
import { View } from 'react-native';

interface Props {
  navigation: NavigationStackProp;
}

const CalendarScreen: NavigationStackScreenComponent<Props> = ({ navigation }) => (
  <View>
    <CalendarList
      onDayPress={() => navigation.navigate('Details')}
    />
  </View>
);

CalendarScreen.navigationOptions = {
  title: 'Home',
};

export default CalendarScreen;

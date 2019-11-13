import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import CalendarList from './CalendarList';
import DetailsScreen from './DetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: CalendarList,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
);

export default RootStack;

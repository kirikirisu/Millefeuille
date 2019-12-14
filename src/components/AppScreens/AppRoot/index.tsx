import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';

import CalendarScreen from '../CalendarScreen/index';
import CameraScreen from '../CameraScreen/index';
import ComparisonScreen from '../ComparisonScreen/index';
import SettingScreen from '../SettingScreen/index';

const TabContainer = createBottomTabNavigator(
  {
    Calendar: { screen: CalendarScreen },
    Camera: { screen: CameraScreen },
    Comparison: { screen: ComparisonScreen },
    Setting: { screen: SettingScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }): React.ReactElement => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Calendar') {
          iconName = 'calendar';
        } else if (routeName === 'Camera') {
          iconName = `${focused ? 'camera' : 'camerao'}`;
        } else if (routeName === 'Comparison') {
          iconName = `${focused ? 'eye' : 'eyeo'}`;
        } else if (routeName === 'Setting') {
          iconName = 'setting';
        }

        return <AntDesign name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default TabContainer;

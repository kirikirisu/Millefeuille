import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';

import CalendarScreen from '../CalendarScreen/index';
import CameraScreen from '../CameraScreen/index';
import ComparisonScreen from '../ComparisonScreen/index';

let cameraNotForcus = true; // カメラ画面の時だけTabBarを消す

const TabContainer = createBottomTabNavigator(
  {
    Calendar: { screen: CalendarScreen },
    Camera: { screen: CameraScreen },
    Comparison: { screen: ComparisonScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Calendar') {
          iconName = 'calendar';
        } else if (routeName === 'Camera') {
          iconName = `${focused ? 'camera' : 'camerao'}`;
          cameraNotForcus = false;
        } else if (routeName === 'Comparison') {
          iconName = `${focused ? 'eye' : 'eyeo'}`;
        }

        return <AntDesign name={iconName} size={25} color={tintColor} />;
      },
      tabBarVisible: cameraNotForcus,
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabContainer);

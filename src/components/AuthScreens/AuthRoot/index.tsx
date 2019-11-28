import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import FacebookLoginScreen from '../LoginScreen/FacebookLoginScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: FacebookLoginScreen,
    },
  },
);

export default RootStack;

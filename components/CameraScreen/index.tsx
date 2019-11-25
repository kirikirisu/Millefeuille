import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Camera from './Camera';
import Dummy from './HowToUpload';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Camera,
    },
    Dummy: {
      screen: Dummy,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default RootStack;

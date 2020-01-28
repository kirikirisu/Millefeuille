import { createStackNavigator } from 'react-navigation-stack';

import SwipeRouter from '../LoginScreen/SwipeRouter';
import RegisterScreen from '../LoginScreen/RegisterScreen';

const RootStack = createStackNavigator(
  {
    LoginTop: { screen: SwipeRouter },
    Register: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'LoginTop',
    mode: 'modal',
  },
);

export default RootStack;

import { createStackNavigator } from 'react-navigation-stack';

import LoginTopScreen from '../LoginScreen/LoginTopScreen';
import RegisterScreen from '../LoginScreen/RegisterScreen';

const RootStack = createStackNavigator(
  {
    LoginTop: { screen: LoginTopScreen },
    Register: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'LoginTop',
    mode: 'modal',
  },
);

export default RootStack;

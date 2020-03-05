import { createStackNavigator } from 'react-navigation-stack';

import SwipeRouter from './LoginScreen/SwipeRouter';
import PrivacyPolicy from '../AppScreens/SettingScreen/PrivacyPolicy';

const RootStack = createStackNavigator(
  {
    LoginContainer: { screen: SwipeRouter },
    LoginPrivacyPolicy: { screen: PrivacyPolicy },
  },
  {
    initialRouteName: 'LoginContainer',
  },
);

export default RootStack;

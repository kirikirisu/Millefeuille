import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../containers/AuthLoadingScreen';
import AppScreen from './AppScreens/AppRoot/index';
import AuthScreen from './AuthScreens/LoginScreen/SwipeRouter';

const NavigationContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppScreen,
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(NavigationContainer);

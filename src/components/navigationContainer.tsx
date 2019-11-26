import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreens/index';
import AppScreen from './AppScreens/AppRoot/index';
import AuthScreen from './AuthScreens/AuthRoot/index';

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

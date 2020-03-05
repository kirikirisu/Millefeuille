import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../containers/AuthLoadingScreen';
import AppScreen from './AppScreens/AppRoot/index';
import AuthScreen from './AuthScreens/index';

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

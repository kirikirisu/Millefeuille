import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreens/index';
import AppScreen from './AppScreens/AppRoot/index';

const NavigationContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(NavigationContainer);

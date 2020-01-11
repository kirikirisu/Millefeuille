import { createStackNavigator } from 'react-navigation-stack';

import Camera from '../../../containers/Camera';
import Edit from './EditScreen/index';
import Prompt from './PromptPermission';

const RootStack = createStackNavigator(
  {
    Camera: {
      screen: Camera,
    },
    Edit: {
      screen: Edit,
    },
    Prompt: {
      screen: Prompt,
    },
  },
  {
    initialRouteName: 'Camera',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
);

/*
// https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens
RootStack.navigationOptions = () => {
  const tabBarVisible = false;
  return {
    tabBarVisible,
  };
};
*/

export default RootStack;

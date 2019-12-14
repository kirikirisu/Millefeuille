import { createStackNavigator } from 'react-navigation-stack';

import Camera from '../../../containers/Camera';
import Edit from './EditScreen/index';

const RootStack = createStackNavigator(
  {
    Camera: {
      screen: Camera,
    },
    Edit: {
      screen: Edit,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
// https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens
RootStack.navigationOptions = () => {
  const tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export default RootStack;

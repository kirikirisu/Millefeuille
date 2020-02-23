import { createStackNavigator } from 'react-navigation-stack';

import Record from '../../../containers/Record';
import Confirmation from '../../../containers/Confirmation';
import Done from './DoneScreen';
import Prompt from './PromptPermission';

const RootStack = createStackNavigator(
  {
    Record: {
      screen: Record,
    },
    Confirmation: {
      screen: Confirmation,
    },
    Done: {
      screen: Done,
    },
    Prompt: {
      screen: Prompt,
    },
  },
  {
    initialRouteName: 'Record',
    mode: 'modal',
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

// https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens
RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index === 1) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default RootStack;

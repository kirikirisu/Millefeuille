import { createStackNavigator } from 'react-navigation-stack';

import ComparisonScreen from '../../../containers/Comparison';

const RootStack = createStackNavigator(
  {
    Comparison: { screen: ComparisonScreen },
  },
  {
    initialRouteName: 'Comparison',
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

export default RootStack;

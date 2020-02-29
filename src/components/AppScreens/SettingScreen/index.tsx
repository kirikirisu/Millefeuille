import { createStackNavigator } from 'react-navigation-stack';
import Option from './Setting';

const SettingRoute = createStackNavigator(
  {
    Options: { screen: Option },
  },
  {
    initialRouteName: 'Options',
    defaultNavigationOptions: {
      title: '設定',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'rgb(57, 62, 70)',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
);

export default SettingRoute;

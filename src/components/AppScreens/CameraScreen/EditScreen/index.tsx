import { createStackNavigator } from 'react-navigation-stack';

import Editting from '../../../../containers/Editting';
import Confirmation from './Confirmation';

const RootStack = createStackNavigator(
  {
    Editting: {
      screen: Editting,
    },
    Confirmation: {
      screen: Confirmation,
    },
  },
);

export default RootStack;

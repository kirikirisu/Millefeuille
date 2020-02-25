import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavigationService from './src/utils/NavigationService';

import NavigationContainer from './src/components/navigationContainer';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NavigationContainer from './src/components/navigationContainer';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer />
  </Provider>
);

export default App;

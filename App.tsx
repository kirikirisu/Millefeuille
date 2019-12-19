import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers/index';


import NavigationContainer from './src/components/navigationContainer';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer />
  </Provider>
);

export default App;

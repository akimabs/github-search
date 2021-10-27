import React from 'react';
import { Home } from 'app/pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './lib/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

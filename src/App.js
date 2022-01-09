import React from 'react';
import Navigation from './navigation/Navigation';
import ConfigureStore from './redux/store';
import {Provider} from 'react-redux';

export default function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

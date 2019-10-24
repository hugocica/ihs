import React from 'react';
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'
import Routes from './routes';
import configureStore from './src/store/configStore';

export default function AppWithRedux() {
  const RenderRoutes = Routes;
  const store = configureStore()

  return (
    <Provider store={store}>
      <RenderRoutes />
    </Provider>
  );
}

// AppRegistry.registerComponent(appName, () => AppWithRedux)
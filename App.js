import React, { useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);
import MealsNavigator from './navigation/MealsNavigator';

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <Provider store = {store}>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
        />
      </Provider>
    );
  }

  return (
    <Provider store = {store}>
      <MealsNavigator />
    </Provider>
  );
}

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Weather from './components/Weather';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

const RootStack = createStackNavigator(
  {
    Weather: WeatherScreen,
    ZipCode: ZipCodeScreen
  },
  {
    initialRouteName: 'Weather',
  }
)

export default class App extends React.Component {
  
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

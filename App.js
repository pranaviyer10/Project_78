import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignupLoginScreen from './screens/SignupLoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';

export function App () {
    return (
      <AppContainer/>
    );
}

const bottomTabNavigator =  createBottomTabNavigator({
  Home: {screen: HomeScreen},
  ExchangeItems: {screen: ExchangeScreen}
})

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: {screen: SignupLoginScreen},
  bottomTabNavigator: {screen: bottomTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)
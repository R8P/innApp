import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import {AppStackParams} from '../Constants/types';
import LoginScreen from '../Screens/LoginScreen';
import DetailScreen from '../Screens/DetailScreen';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();


const screenOptions = {
  headerShown: false,
};
const AppStack = () => {
  return (
    <App.Navigator screenOptions={screenOptions} initialRouteName="Detai">
      <App.Screen name="HomeScreen" component={HomeScreen} />
      <App.Screen name="DetailScreen" component={DetailScreen} />
    </App.Navigator>
  );
};

export default AppStack;

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stacks/AppStack';
import LoginStack from './src/Stacks/LoginStack';
import {useAppDispatch, useAppSelector} from './src/Redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsLoginSuccess} from './src/Redux/reducers/reducers';

type Props = {};

const Main = (props: Props) => {
  const {isLoginSuccess} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AsyncStorage.getItem('LOGIN_SUCCESS').then(value => {
      if (value) {
        dispatch(setIsLoginSuccess(true));
      } else {
        dispatch(setIsLoginSuccess(false));
      }
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        {isLoginSuccess ? <AppStack /> : <LoginStack />}
      </NavigationContainer>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({});

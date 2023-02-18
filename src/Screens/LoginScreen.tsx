import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../Redux/store/store';
import {setIsLoginSuccess} from '../Redux/reducers/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};
const LoginScreen = (props: Props) => {
  const dispatch = useAppDispatch();

  const goAppWithStorage = async () => {
    await AsyncStorage.setItem('LOGIN_SUCCESS', 'true');
    dispatch(setIsLoginSuccess(true));
  };
  return (
    <View>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 300}}
        onPress={() => {
          goAppWithStorage();
        }}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

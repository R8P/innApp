import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../Redux/store/store';
import {setIsLoginSuccess} from '../Redux/reducers/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../Constants/Colors';
import {WIDTH, responsive} from '../Constants/Helpers';
import CustomButton from '../Components/CustomButton/CustomButton';
import {useForm, Controller} from 'react-hook-form';

type Props = {};

const LoginScreen = (props: Props) => {
  const dispatch = useAppDispatch();

  const goAppWithStorage = async () => {
    await AsyncStorage.setItem('LOGIN_SUCCESS', 'true');
    dispatch(setIsLoginSuccess(true));
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => {
    goAppWithStorage();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>User Name</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <View style={styles.button}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            text="Login"
            textColor={Colors.white}
            fontSize={20}
            borderRadius={10}
            bgColor={Colors.green}
            width={WIDTH * 0.9}
            height={50}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
  container: {
    alignSelf: 'center',
    width: WIDTH * 0.9,
    marginVertical: responsive(14),
  },
  textInput: {
    borderBottomColor: Colors.gray,
    backgroundColor: Colors.smokeWhite,
    padding: responsive(16),
    borderRadius: 8,
    color: Colors.darkGray,
    marginVertical: responsive(5),
  },

  errorTitle: {
    fontSize: 13,
    color: Colors.red,
    marginTop: responsive(10),
  },
  labelTitle: {
    marginBottom: responsive(10),
    fontSize: responsive(16),
    color: Colors.white,
  },
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.35,
  },
  titleText: {
    color: Colors.white,
    fontSize: responsive(40),
    fontWeight: 'bold',
  },
  formContainer: {
    marginHorizontal: responsive(20),
    marginBottom: responsive(20),
  },

  label: {
    color: Colors.smokeWhite,
    fontSize: responsive(16),
    marginBottom: responsive(5),
    fontWeight: '600',
  },
  errorText: {
    fontWeight: 'bold',
    color: Colors.yellow,
  },
  button: {
    marginTop: responsive(30),
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

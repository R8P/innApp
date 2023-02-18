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
import {Form, Field} from 'react-final-form';
import {WIDTH, responsive} from '../Constants/Helpers';
import CustomButton from '../Components/CustomButton/CustomButton';

type Props = {};
const required = (value: boolean) => !value && '*Required';

// Custom Components
const CustomTextInput = ({placeholder, input, meta, label}) => (
  <View style={styles.container}>
    {label && <Text style={styles.labelTitle}>{label}</Text>}
    <TextInput style={styles.textInput} {...input} placeholder={placeholder} />
    {meta.error && meta.touched && (
      <Text style={styles.errorTitle}>{meta.error}</Text>
    )}
  </View>
);

const CustomField = ({name, placeholder, label, validate}) => {
  return (
    <Field
      {...{name, validate}}
      render={({input, meta}) => (
        <>
          <CustomTextInput {...{input, meta, label, placeholder}} />
        </>
      )}
    />
  );
};
const LoginScreen = (props: Props) => {
  const dispatch = useAppDispatch();
  const initialValues = {email: '', password: '', securityQuestion: ''};
  const goAppWithStorage = async () => {
    await AsyncStorage.setItem('LOGIN_SUCCESS', 'true');
    dispatch(setIsLoginSuccess(true));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View style={styles.formContainer}>
        <Form
          initialValues={initialValues}
          onSubmit={values => goAppWithStorage()}
          render={({handleSubmit}) => {
            return (
              <>
                <CustomField
                  name="email"
                  validate={required}
                  placeholder="Enter Email"
                  label="E-Mail"
                />
                <CustomField
                  name="password"
                  validate={required}
                  placeholder="Enter password"
                  label="Password"
                />

                <CustomButton
                  onPress={() => {
                    handleSubmit();
                  }}
                  text="Login"
                  textColor={Colors.white}
                  fontSize={20}
                  borderRadius={10}
                  bgColor={Colors.green}
                  width={WIDTH * 0.9}
                  height={50}
                />
              </>
            );
          }}
        />
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
    alignItems:"center",
    flex: 0.35,
  },
  titleText: {
    color: Colors.white,
    fontSize: responsive(40),
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 0.65,
  },
});

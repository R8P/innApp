import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import {LoginStackParams} from '../Constants/types';

const Login = createNativeStackNavigator<LoginStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const LoginStack = () => {
  return (
    <Login.Navigator screenOptions={screenOptions}>
      <Login.Screen name="LoginScreen" component={LoginScreen} />
    </Login.Navigator>
  );
};

export default LoginStack;

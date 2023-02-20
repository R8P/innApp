import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {AppStackParams, UserType} from '../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createUser, getUsers} from '../Redux/services/services';
import TodoRow from '../Components/TodoRow/TodoRow';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Components/Header/Header';
import CustomButton from '../Components/CustomButton/CustomButton';
import {Colors} from '../Constants/Colors';
import {WIDTH, responsive} from '../Constants/Helpers';
import NewUserModal from '../Components/NewUserModal/NewUserModal';
import {useAppDispatch, useAppSelector} from '../Redux/store/store';
import {setNewUserModal, setUsers} from '../Redux/reducers/reducers';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
};
const HomeScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {newUserModalVisble, user} = useAppSelector(state => state.global);
  const [userList, setUserList] = useState<UserType[]>([]);
  // const [newUser, setNewUser] = useState(Array<string>);

  useEffect(() => {
    getUsers().then((res: any) => {
      setUserList(res.data.data);
    });
  }, []);
  useEffect(() => {
    // users.name !== '' && console.log('USERS', users);
    // users.name !== '' && userList.push();
    // if (newUserModalVisble && user.name !== '') {
    //   // let test: any = user;
    //   // userList.push(test);
    //   console.log('userlist', userList);
    // }
  }, [newUserModalVisble]);

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Header />
      </View>
      <ScrollView style={styles.list}>
        {userList.map((item: any, index: any) => {
          return (
            <TodoRow
              key={index}
              onPress={() => {
                navigation.navigate('DetailScreen', {
                  id: item.id,
                  first_name: item.first_name,
                  last_name: item.last_name,
                  email: item.email,
                  avatar: item.avatar,
                });
              }}
              text={item.first_name}
            />
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          onPress={() => {
            dispatch(setNewUserModal());
          }}
          text="New User"
          textColor={Colors.white}
          fontSize={20}
          borderRadius={10}
          bgColor={Colors.green}
          width={WIDTH * 0.9}
          height={50}
        />
      </View>
      {newUserModalVisble && (
        <NewUserModal
          onSave={data => {
            setUserList([...userList, data]);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  headerArea: {
    flex: 0.1,
    paddingTop: responsive(20),
    justifyContent: 'flex-end',
  },
  list: {
    flex: 0.6,
    marginTop: responsive(30),
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 0.25,
  },
});
export default HomeScreen;

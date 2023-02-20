import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';
import CustomButton from '../CustomButton/CustomButton';
import Modal from 'react-native-modal';
import {useAppDispatch} from '../../Redux/store/store';
import {setNewUserModal, setUsers} from '../../Redux/reducers/reducers';
import {useForm, Controller} from 'react-hook-form';
import {UserType} from '../../Constants/types';

type Props = {
  onSave: (data: UserType) => void;
};
const NewUserModal = ({onSave}: Props) => {
  const dispatch = useAppDispatch();
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: 0,
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    },
  });
  const onSubmit = (data: UserType) => {
    data.first_name !== '' &&
      dispatch(
        setUsers({
          id: getRandomInt(100),
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          avatar: data.avatar,
        }),
      );

    onSave(data);
    dispatch(setNewUserModal());
    console.log(data);
  };
  return (
    <Modal
      backdropColor={'#000'}
      isVisible={true}
      style={styles.modalStyle}
      useNativeDriver={true}
      animationOut={'slideInDown'}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.close}></View>
            <Text style={styles.title}>New User</Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                dispatch(setNewUserModal());
              }}>
              <Text style={styles.closeIcon}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="first_name"
            />
            {errors.first_name && (
              <Text style={styles.errorText}>This is required.</Text>
            )}
            <Text style={styles.label}>Last Name</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: false,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="last_name"
            />
            {errors.last_name && (
              <Text style={styles.errorText}>This is required.</Text>
            )}
            <Text style={styles.label}>Email</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: false,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errorText}>This is required.</Text>
            )}
            <Text style={styles.label}>Avatar URL</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: false,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="avatar"
            />
            {errors.avatar && (
              <Text style={styles.errorText}>This is required.</Text>
            )}
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              text="Add"
              textColor={Colors.white}
              fontSize={20}
              borderRadius={10}
              bgColor={Colors.green}
              width={WIDTH * 0.8}
              height={50}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewUserModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8));',
    position: 'absolute',
    height: HEIGHT,
    width: WIDTH,
    zIndex: 9999,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {},
  closeIcon: {
    fontSize: responsive(40),
    fontWeight: 'bold',
    color: Colors.white,
  },
  card: {
    borderRadius: 20,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.7,
    shadowColor: Colors.darkGray,
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
  },
  cardHeader: {
    width: WIDTH * 0.8,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsive(20),
  },
  title: {
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: responsive(30),
  },
  textInput: {
    borderBottomColor: Colors.gray,
    backgroundColor: Colors.smokeWhite,
    padding: responsive(16),
    borderRadius: 8,
    color: Colors.darkGray,
    marginVertical: responsive(5),
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputContainer: {
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
});

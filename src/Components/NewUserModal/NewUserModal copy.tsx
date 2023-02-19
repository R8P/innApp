import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';
import CustomButton from '../CustomButton/CustomButton';
import Modal from 'react-native-modal';
import {useAppDispatch} from '../../Redux/store/store';
import {setNewUserModal} from '../../Redux/reducers/reducers';

const NewUserModal = () => {
  const dispatch = useAppDispatch();
  return (
    <Modal
      backdropColor={'#000'}
      isVisible={true}
      style={styles.modalStyle}
      useNativeDriver={true}
      animationOut={'slideInDown'}
      onSwipeComplete={() => dispatch(setNewUserModal({visible: false}))}
      onBackdropPress={() => dispatch(setNewUserModal({visible: false}))}>
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>New User</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.textInput} onChangeText={value=>{
                setText(value);
                handleTextChangee()
              }}/>
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Surname</Text>
              <TextInput style={styles.textInput} onChangeText={value=>{
                setText(value);
                handleTextChangee()
              }}/>
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.textInput} onChangeText={value=>{
                setText(value);
                handleTextChangee()
              }}/>
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Avatar Url</Text>
              <TextInput style={styles.textInput} onChangeText={value=>{
                setText(value);
                handleTextChangee()
              }}/>
            </View>
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={() => {}}
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
  messageBox: {
    borderRadius: 20,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.6,
    shadowColor: Colors.darkGray,
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
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
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: responsive(20),
    marginBottom: responsive(20),
  },
  inputRow: {
    flexDirection: 'column',
    marginVertical: responsive(10),
  },
  label: {
    color: Colors.smokeWhite,
    fontSize: responsive(16),
    marginBottom: responsive(5),
    fontWeight: '600',
  },
});

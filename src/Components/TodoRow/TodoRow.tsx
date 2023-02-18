import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';
import {WIDTH, responsive} from '../../Constants/Helpers';

type Props = {
  onPress?: () => void;
  text: string;
  completed?: boolean;
};
const TodoRow = ({onPress, text, completed}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.icon}
        source={require('../../Assets/Images/ListIcon.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TodoRow;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 10,
    width: WIDTH * 0.9,
    alignSelf: 'center',
    height: responsive(70),
    marginVertical: responsive(10),
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:responsive(20)
  },
  text: {
    width:WIDTH*.7,
    marginLeft:responsive(10),
    color: Colors.white,
    fontSize: responsive(14),
  },
  icon: {
    resizeMode: 'contain',
    width: responsive(30),
    height: responsive(30),
  },
});

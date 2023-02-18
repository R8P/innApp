import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  onPress?: () => void;
  text: string;
  completed?: boolean;
};
const TodoRow = ({onPress, text,completed}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default TodoRow;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
    width: '95%',
    alignSelf: 'center',
    height:50,
    marginVertical:10
  },
});

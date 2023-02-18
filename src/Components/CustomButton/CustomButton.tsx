import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  text: string;
  textColor: string;
  fontSize: number;
  width: string | number;
  height: string | number;
  borderRadius: number;
  bgColor: string;
};
const CustomButton = ({
  onPress,
  text,
  textColor,
  fontSize,
  width,
  height,
  borderRadius,
  bgColor,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width,
          height: height,
          backgroundColor: bgColor,
          borderRadius: borderRadius,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor, fontSize: fontSize}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});

import {StyleSheet, Text, View,TextInput} from 'react-native';
import React from 'react';

type Props = {
  placeholder: string;
  input: string;
  meta: string;
  label: string;
};
const FormInput = ({placeholder, input, meta, label}: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelTitle}>{label}</Text>}
      <TextInput
        style={styles.textInput}
        {...input}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <Text style={styles.errorTitle}>{meta.error}</Text>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  errorTitle: {
    fontSize: 13,
    color: 'red',
    marginTop: 8,
  },
  labelTitle: {
    marginBottom: 8,
    fontSize: 16,
  },
  textInput: {
    borderBottomColor: '#787878',
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 8,
    color: 'gray',
    fontFamily: 'Avenir-Medium',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

type Props = {};
const Header = ({}: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>innAPP TODO</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex:.1,
    justifyContent: 'flex-end',
    alignSelf:"center",
    alignItems:"baseline"
  },
  title: {
    fontSize: 30,
    color: Colors.white,
    fontWeight:"bold"
  },
});

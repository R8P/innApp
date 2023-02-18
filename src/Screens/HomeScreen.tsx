import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {AppStackParams} from '../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getData} from '../Redux/services/services';
import TodoRow from '../Components/TodoRow/TodoRow';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Components/Header/Header';
import CustomButton from '../Components/CustomButton/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
};
const HomeScreen = ({navigation}: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res: any) => {
      console.log('RES:RES', res.data);
      setData(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>HOME SCREENS</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
        <Text>DETAIL SCREEN</Text>
      </TouchableOpacity> */}
      <Header />
      <ScrollView style={styles.list}>
        {data.map((item: any, index: any) => {
          return <TodoRow onPress={() => {}} text={item.title} />;
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          onPress={() => {}}
          text="Add"
          textColor="red"
          fontSize={20}
          borderRadius={10}
          bgColor="orange"
          width={'90%'}
          height={50}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
  },
  list: {
    flex: 0.75,
    marginVertical: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 0.15,
  },
});
export default HomeScreen;

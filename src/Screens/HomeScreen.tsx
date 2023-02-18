import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {AppStackParams} from '../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getData} from '../Redux/services/services';
import TodoRow from '../Components/TodoRow/TodoRow';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Components/Header/Header';
import CustomButton from '../Components/CustomButton/CustomButton';
import {Colors} from '../Constants/Colors';
import {WIDTH, responsive} from '../Constants/Helpers';

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
      <View style={styles.headerArea}>
        <Header />
      </View>
      <ScrollView style={styles.list}>
        {data.map((item: any, index: any) => {
          return (
            <TodoRow
              key={index}
              onPress={() => {
                navigation.navigate('DetailScreen', {
                  id: item.id,
                  title: item.title,
                  completed: item.completed,
                });
              }}
              text={item.title}
            />
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          onPress={() => {}}
          text="Add"
          textColor={Colors.white}
          fontSize={20}
          borderRadius={10}
          bgColor={Colors.green}
          width={WIDTH * 0.9}
          height={50}
        />
      </View>
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

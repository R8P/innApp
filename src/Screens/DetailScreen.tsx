import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {AppStackParams} from '../Constants/types';

type Props = {
  route: RouteProp<AppStackParams, 'DetailScreen'>;
};
const DetailScreen = ({route}: Props) => {
  return (
    <View style={{alignSelf: 'center', marginTop: 300}}>
      <Text>DETAIL SCREENS</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
};

export default DetailScreen;

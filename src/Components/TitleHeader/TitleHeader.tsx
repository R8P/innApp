import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';
import {responsive} from '../../Constants/Helpers';
import {useNavigation} from '@react-navigation/native';
import {AppStackParams} from '../../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../Redux/store/store';

type Props = {
  title: string;
  backAction: any;
};

const TitleHeader = ({title, backAction}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.headerItemCorner}>
        <Image
          source={require('../../Assets/Images/BackIcon.png')}
          style={[styles.icon]}
        />
      </TouchableOpacity>
      <View style={styles.headerItem}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
      <View style={styles.headerItemCorner}></View>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: responsive(100),
    paddingTop: responsive(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerItem: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItemCorner: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: responsive(40),
    height: responsive(40),
  },
  title: {
    fontSize: responsive(22),
    color: Colors.white,
  },
});

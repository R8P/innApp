import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppStackParams} from '../Constants/types';
import {Colors} from '../Constants/Colors';
import TitleHeader from '../Components/TitleHeader/TitleHeader';
import {WIDTH, responsive} from '../Constants/Helpers';

type Props = {
  route: RouteProp<AppStackParams, 'DetailScreen'>;
};
const DetailScreen = ({route}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TitleHeader title="Detail Screen" backAction={'HomeScreen'} />
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{uri: route.params.avatar}} />
          <View style={styles.cardCol}>
            <View style={styles.cardTextRow}>
              <Text style={styles.cardTextTitle}>Name:</Text>
              <Text style={styles.cardText}>{route.params.first_name}</Text>
            </View>
            <View style={styles.cardTextRow}>
              <Text style={styles.cardTextTitle}>Surname: </Text>
              <Text style={styles.cardText}>{route.params.last_name}</Text>
            </View>
            <View style={styles.cardTextRow}>
              <Text style={styles.cardTextTitle}>Email:</Text>
              <Text style={styles.cardText}>{route.params.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.darkGray,
  },
  header: {
    flex: 0.15,
  },
  container: {
    flex: 0.85,
    padding: responsive(30),
  },
  card: {
    width: WIDTH * 0.8,
    borderRadius: 10,
    borderWidth:2,
    borderColor:Colors.green,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.lightGray,
    paddingVertical: responsive(50),
  },
  avatar: {
    resizeMode: 'contain',
    width: responsive(200),
    height: responsive(200),
    borderRadius:10,
  },
  cardCol: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: responsive(30),
  },
  cardTextTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    marginRight: responsive(4),
    fontSize: responsive(20),
  },
  cardText: {
    color: Colors.white,
    fontSize: responsive(18),
  },
  cardTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive(10),
  },
});

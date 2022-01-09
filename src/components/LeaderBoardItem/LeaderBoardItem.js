import React from 'react';
import {View, Text} from 'react-native';
import styles from './LeaderBoardItem.styles';
import { floatKm } from '../../utils/utilityFunctions';

export default function LeaderBoardItem({user}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberStyles}>{user.order}.</Text>
      <Text style={styles.textStyles}>{user.name}</Text>
      <Text style={styles.scoreStyles}>{floatKm(user.totalDistance)} km</Text>
    </View>
  ); 
}

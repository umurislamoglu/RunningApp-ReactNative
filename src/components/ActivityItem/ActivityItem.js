import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ActivityItem.styles';
import {localDate , floatKm} from '../../utils/utilityFunctions';

export default function ActivityItem({activity}) {
  const [formatDate, setFormatDate] = useState();

  useEffect(() => {
    let date = localDate(activity.activityDate);
    setFormatDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dataView}>
        <Text style={styles.dateStyle}>{formatDate}</Text>
        <Text style={styles.distanceStyle}>
          Distance: {floatKm(activity.distanceTravelled)} km
        </Text>
      </View>
      <View style={styles.weatherView}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: activity.activityWeatherIconUrl,
          }}
        />
        <Text style={styles.temperatureStyle}>
          {activity.activityTemperature}
        </Text>
      </View>
    </View>
  );
}

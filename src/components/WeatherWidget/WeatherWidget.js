import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WeatherWidget.styles';



export default function WeatherWidget({weatherData, loading}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Weather</Text>
      {!loading && (
        <Image
          style={styles.imageStyle}
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
          }}
        />
      )}
      {!loading && (
        <Text style={styles.valueStyle}>{Math.round(weatherData.main.temp)}&#176;</Text>
      )}
    </View>
  );
}

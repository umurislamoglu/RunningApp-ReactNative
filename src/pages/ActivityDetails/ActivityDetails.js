import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ActivityDetails.styles';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../../utils/mapStyle/values';
import Metric from './../../components/Metric';
import {formatTime, localDate , floatKm} from '../../utils/utilityFunctions';

export default function ActivityDetails({route}) {
  const {activity} = route.params;
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    let initialCoordinate = {
      latitude: activity.routeCoordinates[0].latitude,
      longitude: activity.routeCoordinates[0].longitude,
    };
    setMapCoordinates(initialCoordinate);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.metricContainer}>
          <View style={styles.metricBox}>
            <Metric
              label="Activity Date"
              value={localDate(activity.activityDate)}
            />
          </View>
          <View style={styles.metricBox}>
            <Metric
              label="Total Distance"
              value={`${floatKm(activity.distanceTravelled)} km`}
            />
          </View>
        </View>
        <View style={styles.metricContainer}>
          <View style={styles.metricBox}>
            <Metric label="Total Time" value={formatTime(activity.time)} />
          </View>
          <View style={styles.metricBox}>
            <View style={styles.weatherContainer}>
              <Text style={styles.headerStyle}>Weather</Text>
              <View style={styles.weatherView}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: activity.activityWeatherIconUrl,
                  }}
                />
                <Text style={styles.valueStyle}>
                  {activity.activityTemperature}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.innerContainer}>
        {activity.routeCoordinates && (
          <MapView
            style={styles.innerContainer}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            showUserLocation
            followUserLocation
            loadingEnabled
            region={{
              latitude: mapCoordinates.latitude,
              longitude: mapCoordinates.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Polyline coordinates={activity.routeCoordinates} strokeWidth={5} />
          </MapView>
        )}
      </View>
    </View>
  );
}

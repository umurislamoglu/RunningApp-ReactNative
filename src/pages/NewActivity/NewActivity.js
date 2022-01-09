import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../../utils/mapStyle/values';
import styles from './NewActivity.styles';
import Geolocation from '@react-native-community/geolocation';
import Button from '../../components/Button';
import Metric from '../../components/Metric/';
import haversine from 'haversine';
import Chronometer from '../../components/Chronometer';
import {setActivities} from '../../utils/firebaseUtils';
import WeatherWidget from '../../components/WeatherWidget';
import useWeatherData from './../../utils/weatherData/useWeatherData';
import BarChart from '../../components/BarChart';
import {useDispatch} from 'react-redux';
import {setUserData} from './../../redux/actions/userDataActions';
import {floatKm} from '../../utils/utilityFunctions';

export default function NewActivity() {
  const dispatch = useDispatch();

  const [coordinate, setCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [prevLatLng, setPrevLatLng] = useState({});
  const [runningState, setRunningState] = useState(false);
  const [chronometerState, setChronometerState] = useState(false);
  const [watchID, setWatchID] = useState();
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState();
  const [distancePerTime, setDistancePerTime] = useState([0, 0, 0, 0]);
  const [activityTemperature, setActivityTemperature] = useState(0);
  const [activityWeatherIconUrl, setActivityWeatherIconUrl] = useState('');
  const [activityDate, setActivityDate] = useState();

  const {weatherData, loading} = useWeatherData(url);

  const calcDistance = newLatLng => {
    return haversine(prevLatLng, newLatLng) || 0;
  };

  const getCurrentDate = () => {
    let datetime = new Date().getTime();

    setActivityDate(datetime);
  };

  const resetData = () => {
    setRunningState(false);
    setDistanceTravelled(0);
    setRouteCoordinates([]);
    setTime(0);
    setActivityDate(0);
    setDistancePerTime([0, 0, 0, 0])
  };

  //For starting point
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setUrl(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=bd81f6ac0a1d7327faef46e6f22d2b90`,
        );
        setError(null);
      },
      err => {
        setError(err);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    if (!loading && weatherData.weather) {
      setActivityWeatherIconUrl(
        prevState =>
          (prevState = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`),
      );
      setActivityTemperature(Math.round(weatherData.main.temp));
    }
  }, [weatherData]);

  const handleStartRunning = () => {
    getCurrentDate();
    setRunningState(true);
    setChronometerState(true);
    setWatchID(
      Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          const newCoordinate = {
            latitude,
            longitude,
          };

          setRouteCoordinates(prevState => prevState.concat([newCoordinate]));
          setDistanceTravelled(
            prevState => prevState + calcDistance(newCoordinate),
          );
          setDistancePerTime(prevState => [
            prevState[1],
            prevState[2],
            prevState[3],
            parseFloat(calcDistance(newCoordinate)).toFixed(2),
          ]);
          setPrevLatLng(newCoordinate);
        },
        err => {
          setError(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 10,
        },
      ),
    );
  };

  const handleStopRunning = () => {
    setChronometerState(false);
    Geolocation.clearWatch(watchID);
    setWatchID();

    let activity = {
      routeCoordinates,
      distanceTravelled,
      time,
      distancePerTime,
      activityTemperature,
      activityWeatherIconUrl,
      activityDate,
    };
    setActivities(activity);
    resetData();
    dispatch(setUserData());
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.mapViewStyle}
        zoomEnabled
        showUserLocation
        followUserLocation
        loadingEnabled
        region={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {runningState ? (
          <Polyline coordinates={routeCoordinates} strokeWidth={5} />
        ) : (
          <Marker coordinate={coordinate}></Marker>
        )}
      </MapView>

      {runningState ? (
        <View style={styles.bottomViewStyle}>
          <View style={styles.metricViewStyles}>
            <Metric
              label="Distance"
              value={`${floatKm(distanceTravelled)} km`}
            />
            <Chronometer
              label="Time"
              chronometerState={chronometerState}
              setTime={setTime}
            />
          </View>

          <View style={styles.metricViewStyles}>
            <WeatherWidget
              weatherData={weatherData}
              loading={loading}
              setActivityTemperature={setActivityTemperature}
              setActivityWeatherIconUrl={setActivityWeatherIconUrl}
            />
            <BarChart distancePerTime={distancePerTime} />
          </View>
          <View style={styles.stopButton}>
            <Button title="Stop Running" onPress={handleStopRunning} />
          </View>
        </View>
      ) : (
        <View style={styles.floatingButton}>
          <Button title="Start Running" onPress={handleStartRunning} />
        </View>
      )}
    </View>
  );
}

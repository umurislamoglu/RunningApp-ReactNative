import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../components/Button';
import styles from './Dashboard.styles';
import {formatTime} from '../../utils/utilityFunctions';
import {localDate, floatKm} from '../../utils/utilityFunctions';
import DashboardItem from '../../components/DashboardItem';
import {logoutDataFromRedux} from '../../redux/actions/userAuthActions';
import {
  removeUserDataFromRedux,
  setUserData,
} from '../../redux/actions/userDataActions';
import {removeAllUserDataFromRedux} from '../../redux/actions/allUsersActions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const userAuth = useSelector(state => state.userAuth.userAuth);
  const userData = useSelector(state => state.userData.userData);

  const handlePress = () => {
    auth().signOut();
    dispatch(logoutDataFromRedux());
    dispatch(removeUserDataFromRedux());
    dispatch(removeAllUserDataFromRedux());
  };
  useEffect(() => {
    dispatch(setUserData());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topDataContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=`,
          }}
        />
        {userData && <Text style={styles.titleStyle}>{userData.name}</Text>}
      </View>
      <View style={styles.margin}>
        <View>
          <Text style={styles.headerStyle}>Profile</Text>
          <DashboardItem title="Email" value={userAuth.email} />
          {userAuth.metadata && (
            <>
              <DashboardItem
                title="Creation Date"
                value={localDate(userAuth.metadata.creationTime)}
              />
              <DashboardItem
                title="Last Sign in Date"
                value={localDate(userAuth.metadata.lastSignInTime)}
              />
            </>
          )}
        </View>
        {userData && (
          <View>
            <Text style={styles.headerStyle}>Overall Stats</Text>

            <DashboardItem
              title="Total Running Distance"
              value={
                userData.totalDistance !== null
                  ? floatKm(userData.totalDistance)
                  : '0.00'
              }
            />
            <DashboardItem
              title="Total Running Time"
              value={
                userData.totalTime !== null
                  ? formatTime(userData.totalTime)
                  : '00 : 00 : 00'
              }
            />
            <DashboardItem
              title="Total Pace"
              value={
                userData.totalDistance !== null
                  ? `${parseFloat(
                      (userData.totalDistance * 1000) / userData.totalTime,
                    ).toFixed(2)} m/s`
                  : '0'
              }
            />
            <DashboardItem
              title="Activity Count"
              value={userData.activities ? userData.activities.length : '0'}
            />
          </View>
        )}
      </View>
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={handlePress} />
      </View>
    </View>
  );
}

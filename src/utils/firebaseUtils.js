import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const addNewUserToDatabase = (user , registerData) => {
  const newUser = {
    id: user.uid,
    email: user.email,
    name: registerData.name,
    totalDistance: 0,
    totalTime: 0,
    activities: [],
  };
  database()
    .ref('runningapp')
    .once('value', snapshot => {
      if (snapshot.hasChild(user.uid) === true) {
        return;
      }
      let newChild = database().ref('runningapp').child(user.uid);
      newChild.set(newUser);
    });
};

export const onLogin = loginData => {
  if (!!loginData.email && !!loginData.password) {
    try {
      auth().signInWithEmailAndPassword(loginData.email, loginData.password);
      Alert.alert('Running App', 'Logged In');
    } catch (error) {
      console.log(error);
      Alert.alert('Running App', 'An error occurred');
    }
  }
};
export const onRegister = registerData => {
  try {
    auth()
      .createUserWithEmailAndPassword(registerData.email, registerData.password)
      .then(userCredential => {
        userCredential.user.updateProfile({
          displayName: registerData.name,
        });

        addNewUserToDatabase(userCredential.user , registerData)
      })
    
    Alert.alert(
      'Running App',
      'User created. Now you can sign in with your address',
    );
  } catch (error) {
    console.log(error);
    Alert.alert('Running App', 'An error occurred');
  }
};


export const setActivities = activity => {
  const user = auth().currentUser;
  database()
    .ref('runningapp')
    .once('value', snapshot => {
      let userData = snapshot.child(user.uid).val();
      if (userData.activities) {
        userData.activities = [...userData.activities, activity];
      } else {
        userData = {...userData, activities: [activity]};
      }

      if (userData.totalDistance) {
        userData.totalDistance += activity.distanceTravelled;
      } else {
        userData = {...userData, totalDistance: activity.distanceTravelled};
      }
      if (userData.totalTime) {
        userData.totalTime += activity.time;
      } else {
        userData = {...userData, totalTime: activity.time};
      }

      database().ref('runningapp').child(user.uid).set(userData);
    });
};

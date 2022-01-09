import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import RunningAppTab from './RunningAppTab';
import LoginRegisterStack from './LoginRegisterStack';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {addNewUserToDatabase} from '../utils/firebaseUtils';
import {
  setAllUsersData,
  removeAllUserDataFromRedux,
} from '../redux/actions/allUsersActions';
import {
  setUserData,
  removeUserDataFromRedux,
} from '../redux/actions/userDataActions';
import {loginUser, logoutDataFromRedux} from '../redux/actions/userAuthActions';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();

  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setHasSession);
    return subscribe;
  }, []);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(loginUser());
        dispatch(setAllUsersData());
        dispatch(setUserData());
      } else {
        dispatch(logoutDataFromRedux());
        dispatch(removeAllUserDataFromRedux());
        dispatch(removeUserDataFromRedux());
      }
    });
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!!hasSession ? (
          <Stack.Screen
            name={routes.RUNNING_APP_TAB}
            component={RunningAppTab}
          />
        ) : (
          <>
            <Stack.Screen
              name={routes.LOGIN_REGISTER_STACK}
              component={LoginRegisterStack}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

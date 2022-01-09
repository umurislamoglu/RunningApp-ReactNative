import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import Register from './../../pages/Register';
import Login from './../../pages/Login';

const Stack = createNativeStackNavigator();

export default function LoginRegisterStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name={routes.LOGIN}
        component={Login}
        options={{title: routes.LOGIN , headerShown: false}}
      />
      <Stack.Screen
        name={routes.REGISTER}
        component={Register}
        options={{title: routes.REGISTER , headerShown: false}}
      />
    </Stack.Navigator>
  );
}

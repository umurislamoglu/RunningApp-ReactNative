import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import ActivityList from './../../pages/ActivityList/';
import ActivityDetails from './../../pages/ActivityDetails/';

const Stack = createNativeStackNavigator();

export default function ActivityStack() {
  
  return (
    <Stack.Navigator options={{headerShown: false}} >
      <Stack.Screen
        name={routes.LIST_PAGE}
        component={ActivityList}
        options={{title: routes.LIST_PAGE , headerShown: false}}
      />
      <Stack.Screen
        name={routes.DETAIL_PAGE}
        component={ActivityDetails}
        options={{title: routes.DETAIL_PAGE }}
      />

    </Stack.Navigator>
  );
}

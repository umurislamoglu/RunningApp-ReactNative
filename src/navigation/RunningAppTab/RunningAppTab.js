import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../routes';
import Dashboard from './../../pages/Dashboard/';
import NewActivity from './../../pages/NewActivity/NewActivity';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ActivityStack from './../ActivityStack/';
import Leaderboard from './../../pages/Leaderboard/Leaderboard';

const Tab = createBottomTabNavigator();

export default function RunningAppTab() {
  return (
      <Tab.Navigator initialRouteName={routes.DASHBOARD}>
        <Tab.Screen
          name={routes.DASHBOARD}
          component={Dashboard}
          options={{
            headerShown: false,
            title: routes.DASHBOARD,
            tabBarIcon: () => <Icon name="home" color="#2f2f2f" size={25} />,
          }}
        />
        <Tab.Screen
          name={routes.NEW_ACTIVITY}
          component={NewActivity}
          options={{
            headerShown: false,
            title: routes.NEW_ACTIVITY,
            tabBarIcon: () => <Icon name="plus" color="#2f2f2f" size={25} />,
          }}
        />
        <Tab.Screen
          name={routes.ACTIVITY_STACK}
          component={ActivityStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="notebook" color="#2f2f2f" size={25} />
            ),
          }}
        />
            <Tab.Screen
          name={routes.LEADERBOARD}
          component={Leaderboard}
          options={{
            headerShown: false,
            title: routes.LEADERBOARD,
            tabBarIcon: () => (
              <Icon name="trophy" color="#2f2f2f" size={25} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

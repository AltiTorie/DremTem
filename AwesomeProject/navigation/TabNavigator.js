import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Home,
  Notification,
  Activity,
  Chart,
  Category,
  Star,
} from 'react-native-iconly';
import {useTheme} from '@react-navigation/native';
// import {useTheme} from 'react-native-paper';
import NavigationDarkTheme from './AppNavigator';

import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import Dashboards from '../screens/Dashboards';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import GroupScreen from '../screens/GroupScreen';
import NotificationScreen from '../screens/NotificationScreen';
import DeviceStackNavigator from '../navigation/DeviceStackNavigator';
import DashboardStackNavigator from '../navigation/DashboardStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  const paperTheme = useTheme();
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      barStyle={{
        backgroundColor: paperTheme.dark ? '#202020' : 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Home
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DeviceStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Star
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboards"
        component={DashboardStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Chart
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Category
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Notification
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';
import UsersMainScreen from '../screens/UsersMainScreen';
import {Home} from 'react-native-iconly';
import LogInScreen from '../screens/LoginScreen';

import DashboardsWebScreen from '../screens/DashboardsWebScreen';
import DefaultDashboardScreen from '../screens/Dashboards/DefaultDashboardScreen';
import DevicesPanelScreen from '../screens/Devices/DevicesPanelScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
const RootStackWeb = createNativeStackNavigator();

const linking = {
  // prefixes: ['http://localhost:8080', 'localhost:8080/'],
  // enable: true,
  config: {
    screens: {
      Home: '',
      Products: '/products',
      About: '/aboutUs',
      LogIn: '/LogInScreen',
      Dashboards: '/Dashboards',
      DevicesPanel: '/DevicesPanel',
      DevicePanel: '/DevicePanel',
    },
  },
};

const RootWebStackNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootStackWeb.Navigator screenOptions={{headerShown: false}}>
        <RootStackWeb.Screen name="Home" component={HomeScreen} />
        <RootStackWeb.Screen name="Products" component={ProductsScreen} />
        <RootStackWeb.Screen name="About" component={AboutScreen} />
        <RootStackWeb.Screen name="LogIn" component={LogInScreen} />
        <RootStackWeb.Screen
          name="Dashboards"
          component={DashboardsWebScreen}
        />
        <RootStackWeb.Screen
          name="DefaultDashboard"
          component={DefaultDashboardScreen}
        />
        <RootStackWeb.Screen
          name="DevicesPanel"
          component={DevicesPanelScreen}
        />
        <RootStackWeb.Screen name="Device" component={DevicePanelScreen} />
      </RootStackWeb.Navigator>
    </NavigationContainer>
  );
};

export default RootWebStackNavigator;

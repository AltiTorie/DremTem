import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import Dashboards from './screens/Dashboards';
import ConfigureDevicesScreen from './screens/ConfigureDevicesScreen';
import DevicesPanelScreen from './screens/DevicesPanelScreen';
import DevicePanelScreen from './screens/DevicePanelScreen';
import MoistureDashboardScreen from './screens/Dashboards/MoistureDashboardScreen';
import TemperatureDashboardScreen from './screens/Dashboards/TemperatureDashboardScreen';
import TemperatureMoistureDashboardScreen from './screens/Dashboards/TemperatureMoistureDashboardScreen';
import LightDashboardScreen from './screens/Dashboards/LightDashboardScreen';
import DefaultDashboardScreen from './screens/Dashboards/DefaultDashboardScreen';
import ConfigureDevicesScreen from './screens/ConfigureDevicesScreen';
import DevicesPanelScreen from './screens/DevicesPanelScreen';
import DevicePanelScreen from './screens/DevicePanelScreen';
import DeviceConfigScreen from './screens/DeviceConfigScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MoistureDashboard"
          component={MoistureDashboardScreen}
        />
        <Stack.Screen
          name="TemperatureDashboard"
          component={TemperatureDashboardScreen}
        />
        <Stack.Screen
          name="TemperatureMoistureDashboard"
          component={TemperatureMoistureDashboardScreen}
        />
        <Stack.Screen name="LightDashboard" component={LightDashboardScreen} />
        <Stack.Screen
          name="DefaultDashboard"
          component={DefaultDashboardScreen}
        />
        <Stack.Screen name="Devices" component={DevicesPanelScreen} />
        <Stack.Screen
          name="Configure Devices"
          component={ConfigureDevicesScreen}
        />
        <Stack.Screen name="Dashboard" component={Dashboards} />
        <Stack.Screen name="Device" component={DevicePanelScreen} />
        <Stack.Screen name="DeviceConfig" component={DeviceConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

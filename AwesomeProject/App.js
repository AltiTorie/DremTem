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
import BluetoothScreen from './screens/BluetoothScreen';
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
        <Stack.Screen name="DevicesPanel" component={DevicesPanelScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen} />
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

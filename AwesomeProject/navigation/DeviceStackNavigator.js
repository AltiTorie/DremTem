import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';

import DeviceScreen from '../screens/DeviceScreen';
import AddScanNewDevice from '../screens/AddScanNewDeviceScreen';

const DeviceStack = createNativeStackNavigator();

const DeviceStackNavigator = ({navigation}) => {
  return (
    <DeviceStack.Navigator headerMode="none">
      <DeviceStack.Screen name="DeviceScreen" component={DeviceScreen} />
      <DeviceStack.Screen
        name="AddScanNewDevice"
        component={AddScanNewDevice}
      />
    </DeviceStack.Navigator>
  );
};

export default DeviceStackNavigator;

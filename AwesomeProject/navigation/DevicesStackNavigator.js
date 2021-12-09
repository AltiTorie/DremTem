import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';

const DevicesStack = createStackNavigator();

const DevicesStackNavigator = () => {
  return (
    <DevicesStack.Navigator screenOptions={{headerShown: false}}>
      <DevicesStack.Screen name="DevicesPanel" component={DevicesPanel} />
      <DevicesStack.Screen name="Device" component={DevicePanelScreen} />
    </DevicesStack.Navigator>
  );
};

export default DevicesStackNavigator;

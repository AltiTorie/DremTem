import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ConfigureDevicesParentScreen from '../screens/Devices/ConfigureDeviceParent';
import DeviceConfigScreen from '../screens/Devices/DeviceConfigScreen';

const ConfigureDevicesStack = createStackNavigator();

const ConfigureDevicesStackNavigator = () => {
  return (
    <ConfigureDevicesStack.Navigator screenOptions={{headerShown: false}}>
      <ConfigureDevicesStack.Screen
        name="ConfigureDevices"
        component={ConfigureDevicesParentScreen}
      />

      <ConfigureDevicesStack.Screen
        name="DeviceConfig"
        component={DeviceConfigScreen}
      />
    </ConfigureDevicesStack.Navigator>
  );
};

export default ConfigureDevicesStackNavigator;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfigureDevicesScreen from '../screens/Devices/ConfigureDevicesScreen';
import DeviceConfigScreen from '../screens/Devices/DeviceConfigScreen';
import DevicesCsv from '../screens/Devices/DevicesCsvScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import DefaultMobileDashboardScreen from '../screens/MobileDashboards/DefaultMobileDashboardScreen';
const DeviceStack = createNativeStackNavigator();

const DeviceStackNavigator = ({navigation}) => {
  return (
    <DeviceStack.Navigator headerMode="none">
      <DeviceStack.Screen name="DevicesPanel" component={DevicesPanel} />
      <DeviceStack.Screen name="Device" component={DevicePanelScreen} />
      <DeviceStack.Screen
        name="ConfigureDevices"
        component={ConfigureDevicesScreen}
      />
      <DeviceStack.Screen name="DeviceConfig" component={DeviceConfigScreen} />
      <DeviceStack.Screen name="DevicesCsv" component={DevicesCsv} />
      <DeviceStack.Screen
        name="DefaultMobileDashboard"
        component={DefaultMobileDashboardScreen}
      />
    </DeviceStack.Navigator>
  );
};

export default DeviceStackNavigator;

import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerHeader from '../components/Drawer_header';
import AddDeviceParentScreen from '../screens/Devices/AddDeviceParent';
import ConfigureDevicesParentScreen from '../screens/Devices/ConfigureDeviceParent';
import DeviceAdditionScreen from '../screens/Devices/DeviceAdditionScreen';
import DeviceConfigScreen from '../screens/Devices/DeviceConfigScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import DevicesCsv from '../screens/Devices/DevicesCsvScreen';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import DefaultMobileDashboardScreen from '../screens/MobileDashboards/DefaultMobileDashboardScreen';
import OfflineDataDashboardScreen from '../screens/MobileDashboards/OfflineDataDashboardScreen';

const AddDeviceStack = createStackNavigator();

const AddDeviceStackNavigator = () => {
  return (
    <AddDeviceStack.Navigator>
      <AddDeviceStack.Screen
        name="DevicesPanel"
        component={DevicesPanel}
        options={{
          headerLeft: () => (
            <DrawerHeader
              onPress={() => props.navigation.openDrawer()}
              screen=""></DrawerHeader>
          ),
        }}
      />
      <AddDeviceStack.Screen
        name="AddDevice"
        component={AddDeviceParentScreen}
      />

      <AddDeviceStack.Screen
        name="DeviceAddition"
        component={DeviceAdditionScreen}
      />
    </AddDeviceStack.Navigator>
  );
};

export default AddDeviceStackNavigator;

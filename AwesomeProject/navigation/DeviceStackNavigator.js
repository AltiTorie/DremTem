import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';

import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import ConfigureDevicesScreen from '../screens/Devices/ConfigureDevicesScreen';
import DeviceConfigScreen from '../screens/Devices/DeviceConfigScreen';
import DevicesCsv from '../screens/Devices/DevicesCsvScreen';
import {useTheme} from '@react-navigation/native';
import DrawerHeader from '../components/Drawer_header';

const DeviceStack = createStackNavigator();

const DeviceStackNavigator = props => {
  const {colors} = useTheme();
  return (
    <DeviceStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Robot',
        },
        headerTitleAlign: 'center',
      }}>
      <DeviceStack.Screen
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
      <DeviceStack.Screen name="Device" component={DevicePanelScreen} />
      <DeviceStack.Screen
        name="ConfigureDevices"
        component={ConfigureDevicesScreen}
      />
      <DeviceStack.Screen name="DeviceConfig" component={DeviceConfigScreen} />
      <DeviceStack.Screen name="DevicesCsv" component={DevicesCsv} />
    </DeviceStack.Navigator>
  );
};

export default DeviceStackNavigator;

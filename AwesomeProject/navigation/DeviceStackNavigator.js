import {useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerHeader from '../components/Drawer_header';
import DevicesCsv from '../screens/Devices/DevicesCsvScreen';
import HomeDevicesScreen from '../screens/Devices/HomeDevicesScreen';
import DefaultMobileDashboardScreen from '../screens/MobileDashboards/DefaultMobileDashboardScreen';
import OfflineDataDashboardScreen from '../screens/MobileDashboards/OfflineDataDashboardScreen';
import AddDeviceStackNavigator from './AddDeviceStackNavigator';
import ConfigureDevicesStackNavigator from './ConfigureDevicesStackNavigator';
import DevicesStackNavigator from './DevicesStackNavigator';

const HomeDeviceStack = createStackNavigator();

const HomeDeviceStackNavigator = props => {
  const {colors} = useTheme();
  return (
    <HomeDeviceStack.Navigator
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
      <HomeDeviceStack.Screen
        name="Home devices"
        component={HomeDevicesScreen}
        options={{
          headerLeft: () => (
            <DrawerHeader
              onPress={() => props.navigation.openDrawer()}
              screen=""></DrawerHeader>
          ),
        }}
      />
      <HomeDeviceStack.Screen
        name="Devices panel"
        component={DevicesStackNavigator}
      />
      <HomeDeviceStack.Screen
        name="Add device"
        component={AddDeviceStackNavigator}
      />
      <HomeDeviceStack.Screen
        name="Manage devices"
        component={ConfigureDevicesStackNavigator}
      />
      <HomeDeviceStack.Screen name="Devices CSV" component={DevicesCsv} />
      <HomeDeviceStack.Screen
        name="DefaultMobileDashboard"
        component={DefaultMobileDashboardScreen}
      />
      <HomeDeviceStack.Screen
        name="OfflineDataDashboardScreen"
        component={OfflineDataDashboardScreen}
      />
    </HomeDeviceStack.Navigator>
  );
};

export default HomeDeviceStackNavigator;

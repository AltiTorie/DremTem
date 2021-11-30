import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';
import UsersMainScreen from '../screens/User/UsersMainScreen';
import {Home} from 'react-native-iconly';
import LogInScreen from '../screens/Registration/LoginScreen';

import DashboardsWebScreen from '../screens/DashboardsWebScreen';
import DefaultDashboardScreen from '../screens/Dashboards/DefaultDashboardScreen';
import DevicesPanelScreen from '../screens/Devices/DevicesPanelScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import SideNavbar from '../components/SideNavbar';
import UploadCsvScreen from '../screens/Devices/UploadCsvScreen';
const SideStackWeb = createNativeStackNavigator();

const linking = {
  // prefixes: ['http://localhost:8080', 'localhost:8080/'],
  // enable: true,
  config: {
    screens: {
      Main: '',
      Dashboards: '/Dashboards',
      DevicesPanel: '/DevicesPanel',
      DevicePanel: '/DevicePanel',
    },
  },
};

const SideWebStackNavigator = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 3,
          zIndex: 100,
          height: '100vh',
          width: '100%',
        }}>
        <SideNavbar />
      </View>
      <View style={{flex: 20}}>
        <SideStackWeb.Navigator screenOptions={{headerShown: false}}>
          <SideStackWeb.Screen name="Main" component={UsersMainScreen} />
          <SideStackWeb.Screen
            name="Dashboards"
            component={DashboardsWebScreen}
          />
          <SideStackWeb.Screen
            name="DefaultDashboard"
            component={DefaultDashboardScreen}
          />
          <SideStackWeb.Screen
            name="DevicesPanel"
            component={DevicesPanelScreen}
          />
          <SideStackWeb.Screen name="Device" component={DevicePanelScreen} />
          <SideStackWeb.Screen name="UploadCsv" component={UploadCsvScreen} />
        </SideStackWeb.Navigator>
      </View>
    </View>
  );
};

export default SideWebStackNavigator;

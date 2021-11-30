import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import SideNavbar from '../components/SideNavbar';
import DefaultDashboardScreen from '../screens/Dashboards/DefaultDashboardScreen';
import DashboardsWebScreen from '../screens/DashboardsWebScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import DevicesPanelScreen from '../screens/Devices/DevicesPanelScreen';
import UploadCsvScreen from '../screens/Devices/UploadCsvScreen';
import UsersMainScreen from '../screens/User/UsersMainScreen';

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

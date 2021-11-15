import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DefaultDashboardScreen from '../screens/Dashboards/DefaultDashboardScreen';
import LightDashboardScreen from '../screens/Dashboards/LightDashboardScreen';
import MoistureDashboardScreen from '../screens/Dashboards/MoistureDashboardScreen';
import TemperatureDashboardScreen from '../screens/Dashboards/TemperatureDashboardScreen';
import TemperatureMoistureDashboardScreen from '../screens/Dashboards/TemperatureMoistureDashboardScreen';
import DashboardScreen from '../screens/Dashboards';

const DashboardStack = createNativeStackNavigator();

const DashboardStackNavigator = ({navigation}) => {
  return (
    <DashboardStack.Navigator headerMode="none">
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <DashboardStack.Screen
        name="DefaultDashboard"
        component={DefaultDashboardScreen}
      />
      <DashboardStack.Screen
        name="LightDashboard"
        component={LightDashboardScreen}
      />
      <DashboardStack.Screen
        name="MoistureDashboard"
        component={MoistureDashboardScreen}
      />
      <DashboardStack.Screen
        name="TemperatureDashboard"
        component={TemperatureDashboardScreen}
      />
      <DashboardStack.Screen
        name="TemperatureMoistureDashboard"
        component={TemperatureMoistureDashboardScreen}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;

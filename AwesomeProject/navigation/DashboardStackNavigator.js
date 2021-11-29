import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import DrawerHeader from '../components/Drawer_header';

import DashboardScreen from '../screens/Dashboards';

const DashboardStack = createStackNavigator();

const DashboardStackNavigator = props => {
  const {colors} = useTheme();
  return (
    <DashboardStack.Navigator
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
      <DashboardStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerLeft: () => (
            <DrawerHeader
              onPress={() => props.navigation.openDrawer()}
              screen=""></DrawerHeader>
          ),
        }}
      />
      {/* <DashboardStack.Screen
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
      /> */}
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';
import UsersMainScreen from '../screens/UsersMainScreen';
import DevicesWebScreen from '../screens/DevicesWebScreen';
import DashboardsWebScreen from '../screens/DashboardsWebScreen';
import SideNavigator from '../components/SideNavbar';

// import {AuthContext} from '../components/context';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerWeb = createDrawerNavigator();

const WebSideNavigator = () => {
  return (
    <NavigationContainer>
      {/* {loginState.userToken !== null ? ( */}
      <DrawerWeb.Navigator
        drawerContent={props => <SideNavigator {...props} />}>
        <DrawerWeb.Screen name="UserHome" component={UsersMainScreen} />
        <DrawerWeb.Screen name="Devices" component={DevicesWebScreen} />
        <DrawerWeb.Screen name="Dashboards" component={DashboardsWebScreen} />
      </DrawerWeb.Navigator>
      {/* ) : (
          <RootStackNavigator />
        )} */}
    </NavigationContainer>
  );
};

export default WebSideNavigator;

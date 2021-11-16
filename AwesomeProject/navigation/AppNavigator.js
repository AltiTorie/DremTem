import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';

import AboutScreen from '../screens/AboutScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
// import Dashboards from '../screens/Dashboards';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import SettingsScreen from '../screens/User/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import RootStackNavigator from './RootStackScreen';
import SigninScreen from '../screens/Registration/SigninScreen';

const Drawer = createDrawerNavigator();

const AppStackNavigator = () => {
  return (
    //     // <NavigationContainer>
    //     //   <RootStackNavigator />
    //     // </NavigationContainer>
    //     // <RootStack.Navigator headerMode="none">
    //     //   <RootStack.Screen name="SignInScreen" component={SigninScreen} />
    //     //   {/* <RootStack.Screen name="SignUpScreen" component={SignupScreen} /> */}
    //     // </RootStack.Navigator>
    <Drawer.Navigator drawerContent={props => <DrawerNavigator {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
    </Drawer.Navigator>
  );
};

export default AppStackNavigator;

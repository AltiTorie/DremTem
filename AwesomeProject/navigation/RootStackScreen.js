import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import AppStackNavigator from './AppNavigator';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <RootStack.Screen name="SignInScreen" component={LoginScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignupScreen} />
    </RootStack.Navigator>
    // <AppStackNavigator />
  );
};

export default RootStackNavigator;

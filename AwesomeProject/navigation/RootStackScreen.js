import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

import SignUpScreen from '../screens/Registration/SignupScreen';
import SigninScreen from '../screens/Registration/SigninScreen';
import AppStackNavigator from './AppNavigator';

// const RootStack = createNativeStackNavigator();
const Stack = createStackNavigator();

const RootStackNavigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={AppStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;

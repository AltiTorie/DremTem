import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from '../screens/Registration/SignupScreen';
import SigninScreen from '../screens/Registration/SigninScreen';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SignIn" component={SigninScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

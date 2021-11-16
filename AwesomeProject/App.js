import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import AppStackNavigator from './navigation/AppNavigator';
import RootStackNavigator from './navigation/RootStackScreen';

import SigninScreen from './screens/Registration/SigninScreen';

export default function App() {
  // const Stack = createNativeStackNavigator();

  return <RootStackNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

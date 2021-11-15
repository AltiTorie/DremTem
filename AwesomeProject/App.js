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
import AppStackNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppStackNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

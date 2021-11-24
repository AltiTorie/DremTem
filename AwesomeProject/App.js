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
import AppStackNavigator from './navigation/AppNavigator';

import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
  return <AppStackNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

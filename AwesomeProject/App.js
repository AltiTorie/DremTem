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
  LogBox,
} from 'react-native';
import AppStackNavigator from './mobile/navigation/AppNavigator';

LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
  return <AppStackNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

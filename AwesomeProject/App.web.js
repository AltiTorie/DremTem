import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TestScreen from './web/screens/test';

export default function App() {
  return <TestScreen />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

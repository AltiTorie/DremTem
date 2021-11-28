import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from './web/screens/HomeScreen';
import RootWebStackNavigator from './web/navigation/RootNavigation';
import SideWebStackNavigator from './web/navigation/SideNavigation';

export default function App() {
  return <RootWebStackNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

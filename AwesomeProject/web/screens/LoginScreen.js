import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import Navbar from '../components/Navbar';

const LogInScreen = props => {
  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.main}>
        <Text>Działa???</Text>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  main: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

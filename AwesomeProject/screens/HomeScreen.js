import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTitle from '../components/Title';
import AppButton from '../components/Button';

const HomeScreen = props => {
  return (
    <View style={styles.main}>
      <View>
        <AppTitle title="HOME" />
      </View>
      <View style={styles.text}>
        <Text>Tu się mają pokazać wszystkie rzeczy dla usera</Text>
      </View>
      <AppButton
        title="Devices"
        onPress={() => {
          props.navigation.navigate('Devices');
        }}
      />
      <AppButton
        title="Configure devices"
        onPress={() => {
          props.navigation.navigate('Configure Devices');
        }}
      />
      <AppButton
        title="Arek"
        onPress={() => {
          props.navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5,
  },
});

export default HomeScreen;

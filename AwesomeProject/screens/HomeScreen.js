import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AppButton from '../components/Button_main';
import AppTitle from '../components/Title';
import DrawerHeader from '../components/Drawer_header';

const HomeScreen = props => {
  return (
    <View style={styles.main}>
      <DrawerHeader
        screen="Home"
        onPress={() => props.navigation.openDrawer()}
      />
      <View>
        <AppTitle title="HOME" />
      </View>
      <AppButton
        title="Devices"
        onPress={() => {
          props.navigation.navigate('Devices');
        }}
      />
      <AppButton
        title="Add device"
        onPress={() => {
          props.navigation.navigate('AddDevice');
        }}
      />
      <AppButton
        title="Configure devices"
        onPress={() => {
          props.navigation.navigate('ConfigureDevices');
        }}
      />
      <AppButton
        title="Devices Csv"
        onPress={() => {
          props.navigation.navigate('DevicesCsv');
        }}
      />
      <AppButton
        title="Dashboards"
        onPress={() => {
          props.navigation.navigate('Dashboards');
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

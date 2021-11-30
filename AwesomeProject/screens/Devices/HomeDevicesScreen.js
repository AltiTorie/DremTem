import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AppButton from '../../components/Button_main';
import AppTitle from '../../components/Title';
import DrawerHeader from '../../components/Drawer_header';
import AddDeviceStackNavigator from '../../navigation/AddDeviceStackNavigator';

const HomeDevicesScreen = props => {
  return (
    <View style={styles.main}>
      <DrawerHeader
        screen="Devices"
        onPress={() => props.navigation.openDrawer()}
      />
      <AppButton
        title="Devices"
        onPress={() => {
          props.navigation.navigate('Devices');
        }}
      />
      <AppButton
        title="Add device"
        onPress={() => {
          props.navigation.navigate('AddDeviceStackNavigator', {
            screen: 'AddDevice',
          });
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

export default HomeDevicesScreen;

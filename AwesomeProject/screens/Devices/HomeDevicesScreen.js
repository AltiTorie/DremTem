import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/Button_main';

const HomeDevicesScreen = props => {
  return (
    <View style={styles.main}>
      <AppButton
        title="Devices"
        onPress={() => {
          props.navigation.push('Devices panel');
        }}
      />
      <AppButton
        title="Add device"
        onPress={() => {
          props.navigation.push('Add device');
        }}
      />
      <AppButton
        title="Manage devices"
        onPress={() => {
          props.navigation.push('Manage devices');
        }}
      />
      <AppButton
        title="Devices Csv"
        onPress={() => {
          props.navigation.push('Devices CSV');
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

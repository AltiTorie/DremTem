import React from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';
import AppTitle from '../../components/Title';
import AppButton from '../../components/Button_main';

const DevicePanelScreen = props => {
  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'This will delete all your device data.',
      [
        {
          text: 'Yes',
          onPress: () => {
            console.log('Yes');
            props.route.params.onGoBack();
            props.navigation.goBack();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  return (
    <View style={styles.main}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.textHeader}>{props.route.params.device.name}</Text>
        <Text style={styles.text}>
          {'\nDevice ID: ' + props.route.params.device.deviceID}
        </Text>
        <Text style={styles.text}>
          {'\nWorking as online device: ' + props.route.params.device.online}
        </Text>
      </View>
      <View style={styles.bottom}>
        <AppButton
          title="Check last data"
          onPress={() =>
            props.navigation.navigate('DefaultMobileDashboard', {
              item: {types: ['one', 'two']},
            })
          }
        />
        <AppButton title="Delete device" onPress={() => showConfirmDialog()} />
      </View>
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
  textHeader: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});

export default DevicePanelScreen;

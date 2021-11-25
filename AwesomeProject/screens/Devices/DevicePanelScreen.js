import React from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';
import AppTitle from '../../components/Title';
import AppButton from '../../components/Button_main';
import {useTheme} from '@react-navigation/native';

const DevicePanelScreen = props => {
  const {colors} = useTheme();
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
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 40, color: colors.text}}>
          {props.route.params.device.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            justifyContent: 'center',
            color: colors.text,
          }}>
          {'\nDevice ID: ' + props.route.params.device.deviceID}
        </Text>
        <Text
          style={{
            fontSize: 20,
            justifyContent: 'center',
            color: colors.text,
          }}>
          {'\nWorking as online device: ' + props.route.params.device.online}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 36,
          color: colors.background,
        }}>
        {/* <View style={styles.bottom}> */}
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
  main: {},
  textHeader: {},
  text: {},
  bottom: {},
});

export default DevicePanelScreen;

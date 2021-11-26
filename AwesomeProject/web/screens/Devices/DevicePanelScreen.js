import React, {useState} from 'react';
import {Text, View, Modal, StyleSheet, TouchableHighlight} from 'react-native';
// import {confirmAlert} from 'react-confirm-alert'; // Import
import Navbar from '../../components/Navbar';

import AppButton from '../../components/Button_main';
import {useTheme} from '@react-navigation/native';

const DevicePanelScreen = props => {
  const {colors} = useTheme();
  //   const [showAlert, setShowAlert] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const showConfirmDialog = () => {
    console.log('Show dialog');
    //   return Alert.alert(
    //     'Are your sure?',
    //     'This will delete all your device data.',
    //     [
    //       {
    //         text: 'Yes',
    //         onPress: () => {
    //           console.log('Yes');
    //           props.route.params.onGoBack();
    //           props.navigation.goBack();
    //         },
    //       },
    //       {
    //         text: 'No',
    //       },
    //     ],
    //   );
  };

  submit = () => {
    console.log('submit');
    // alert('This will delete all your device data');
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes'),
        },
        {
          label: 'No',
          onClick: () => alert('Click No'),
        },
      ],
    });
    console.log('sfter');
  };

  _show_modal = () => {
    setModalOpen(true);
  };

  _hide_modal = () => {
    setModalOpen(false);
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={{alignItems: 'center', paddingTop: 80}}>
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
        <AppButton title="Delete device" onPress={() => _show_modal()} />
        <Modal visible={modalOpen} animationType="slide">
          <View>
            <AppButton
              title="close"
              onPress={() => {
                _hide_modal();
              }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  textHeader: {},
  text: {},
  bottom: {},
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});

export default DevicePanelScreen;

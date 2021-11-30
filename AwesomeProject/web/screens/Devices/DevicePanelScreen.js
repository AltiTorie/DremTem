import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import AccentButton from '../../components/Button_accent';
import DeclineButton from '../../components/Button_decline';
import AppButton from '../../components/Button_main';

const DevicePanelScreen = props => {
  const {colors} = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  _show_modal = () => {
    setModalOpen(true);
  };

  _hide_modal = () => {
    setModalOpen(false);
  };

  _delete_device_data = () => {
    console.log('Deleting ' + props.route.params.device + ' data');
    // TODO: add sending proper request to server app one its available
  };

  return (
    <View
      style={{
        // width: '100%',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
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
        <View style={styles.bottom}>
          <AppButton
            title="Check last data"
            onPress={() =>
              props.navigation.navigate('DefaultMobileDashboard', {
                item: {types: ['one', 'two']},
              })
            }
          />
          <AppButton title="Delete device" onPress={() => _show_modal()} />
        </View>
        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {'Are your sure?\nThis will delete all your device data.'}
              </Text>
              <DeclineButton
                title="Yes, delete device data"
                onPress={() => {
                  _hide_modal();
                  _delete_device_data();
                  props.route.params.onGoBack(props.route.params.device);
                  props.navigation.pop();
                }}
              />
              <AccentButton
                title="Cancel"
                onPress={() => {
                  _hide_modal();
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cat: {
    alignItems: 'center',
    margin: 80,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  modalView: {
    marginTop: 200,
    marginLeft: '13%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: '16vw',
    width: '35vw',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: '1.5vw',
  },
});

export default DevicePanelScreen;

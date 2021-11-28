import React, {useState} from 'react';
import AppButton from '../../components/Button_main';
import SelectDropdown from 'react-native-select-dropdown';
import {TextInput, View, StyleSheet, ToastAndroid, Text} from 'react-native';
import SecondButton from '../../components/Button_second';
import DrawerHeader from '../../components/Drawer_header';
import {useTheme} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DeviceAdditionScreen = props => {
  const {colors} = useTheme();
  const [deviceName, setDeviceName] = useState('');

  const addDeviceToSystem = () => {
    if (deviceName == '') {
      ToastAndroid.show(`Enter device name`, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        `Adding device ` + deviceName + ` to system`,
        ToastAndroid.SHORT,
      );

      if (props.route.params.deviceConfig.online == false) {
        console.log('Add offline device ' + deviceName + ' to system');
      } else {
        console.log('Add online device ' + deviceName + ' to system');
      }
    }
  };

  return (
    <View style={styles.main}>
      <Text style={{fontSize: 40, color: colors.text}}>
        {props.route.params.deviceConfig.deviceID}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
        }}>
        <TextInput
          style={{
            height: 50,
            width: 250,
            margin: 12,
            borderWidth: 1,
            borderColor: colors.text,
            padding: 10,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 15,
            color: colors.text,
          }}
          placeholder="Enter device name"
          placeholderTextColor={colors.text}
          onChangeText={text => setDeviceName(text)}
          defaultValue={deviceName}
        />
        <AppButton
          title="Add this device to system"
          onPress={() => {
            addDeviceToSystem();
          }}></AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default DeviceAdditionScreen;

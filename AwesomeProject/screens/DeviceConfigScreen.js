import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch, ToastAndroid} from 'react-native';
import AppButton from '../components/Button';
import SelectDropdown from 'react-native-select-dropdown';

const DeviceConfigScreen = props => {
  const getSensorsNamesList = sensorsData => {
    let sensorsNames = [];
    console.log('sensorsData' + sensorsData);
    for (let i = 0; i < sensorsData.length; i++) {
      sensorsNames.push(sensorsData[i].sensorID);
    }
    // console.log(sensorsNames);
    return sensorsNames;
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const [dropdownValue, setdropdownValue] = useState();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.main}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.textHeader}>Device:</Text>
        <Text style={styles.textHeader}>
          {props.route.params.deviceConfig.deviceID}
        </Text>
        <Text style={styles.text}>
          {'\nWorking as online device: ' +
            props.route.params.deviceConfig.online +
            '\n\n'}
        </Text>
        <SelectDropdown
          defaultButtonText="Select sensor"
          data={getSensorsNamesList(props.route.params.deviceConfig.sensors)}
          onSelect={(selectedItem, index) => {
            setdropdownValue(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <Text style={styles.text}>{'\nSet sensor state:'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isEnabled ? '#FFC163' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.bottom}>
        <AppButton
          title="SEND TO DEVICE"
          onPress={() => {
            if (typeof dropdownValue == 'undefined') {
              ToastAndroid.show(`Select sensor`, ToastAndroid.SHORT);
            } else {
              let state = isEnabled ? 'ON' : 'OFF';
              props.route.params.bt.sendStateConfig(dropdownValue, state);
            }
          }}
        />
      </View>
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

export default DeviceConfigScreen;

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  ToastAndroid,
  TextInput,
} from 'react-native';
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
  const [dropdownValue, setDropdownValue] = useState();
  const [interval, setInterval] = useState();
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
            props.route.params.deviceConfig.online}
        </Text>
        <Text style={styles.text}>{'\nSelect sensor:'}</Text>
        <SelectDropdown
          defaultButtonText="SENSOR"
          data={getSensorsNamesList(props.route.params.deviceConfig.sensors)}
          onSelect={(selectedItem, index) => {
            setDropdownValue(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <Text style={styles.text}>{'Set sensor interval (in seconds):'}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={inputNumber => setInterval(inputNumber)}
          value={interval}
          maxLength={3}
        />
        <Text style={styles.text}>{'Set sensor state:'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isEnabled ? '#FFC163' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
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
              if (interval != '' && !isNaN(+interval)) {
                let intervalInMicroSec = interval * 1000;
                props.route.params.bt.sendIntervalConfig(
                  dropdownValue,
                  intervalInMicroSec,
                );
              } else {
                console.log('Interval not a number ' + interval);
              }
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
  },
  textHeader: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default DeviceConfigScreen;

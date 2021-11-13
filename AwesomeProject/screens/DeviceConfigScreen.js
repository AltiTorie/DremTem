import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
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
  var selectedSensorID;
  var sensorState;

  const [isEnabled, setIsEnabled] = useState(false);
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
            selectedSensorID = selectedItem;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
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
          title="LIGHT ON"
          onPress={() => props.route.params.bt.lightOn()}
        />
        <AppButton
          title="LIGHT OFF"
          onPress={() => props.route.params.bt.lightOff()}
        />
        <AppButton
          title="SEND TO DEVICE"
          onPress={
            () =>
              props.route.params.bt.sendStateConfig(
                selectedSensorID,
                sensorState,
              ) // TODO: fix params (are undefined now)
          }
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

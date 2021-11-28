import {xorBy} from 'lodash';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import makeAnimated from 'react-select/animated';
import MultiSelect from 'react-select';
import Globals from '../../components/Globals';

export default class MultiSelectChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelection: props.onSelection,
      style: props.style,
      autoSelectedOptions: props.autoSelectedOptions,
      selectedTypes: [],
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.autoSelectedOptions != []);

    if (nextProps.autoSelectedOptions != []) {
      let label = nextProps.autoSelectedOptions.device.device.deviceName + '-';
      let nextTypes = nextProps.autoSelectedOptions.sensors.map(sensor => ({
        value: sensor,
        label: label + sensor.type,
      }));
      this.setState({selectedTypes: nextTypes}, () =>
        console.log(this.state.selectedTypes),
      );
    }
  }
  render() {
    const user_devices = require('../MockedData/UserDevices.json');
    let device_mapped = user_devices.devices.map(device => {
      return device.sensors.map(sensor => ({
        value: sensor,
        label: device.deviceName + '-' + sensor.type,
      }));
    });
    device_mapped = device_mapped.flat();
    const animatedComponents = makeAnimated();
    return (
      <View style={{margin: 30, ...this.state.style}}>
        <Text style={{fontSize: 20, paddingBottom: 10}}>Choose Types</Text>
        <MultiSelect
          options={device_mapped}
          defaultValue={this.state.autoSelectedOptions}
          components={animatedComponents}
          isMulti
          closeMenuOnSelect={false}
          onChange={val => {
            this.state.onSelection(val);
          }}
          makeAnimated
        />
      </View>
    );
  }
}

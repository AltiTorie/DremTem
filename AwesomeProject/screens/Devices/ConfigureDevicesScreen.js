import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
} from 'react-native';
var _ = require('lodash');
import BluetoothSerial from 'react-native-bluetooth-serial';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTitle from '../../components/Title';
import AppButton from '../../components/Button_main';

export default class ConfigureDevicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
    };
  }
  UNSAFE_componentWillMount() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      values => {
        const [isEnabled, devices] = values;

        this.setState({isEnabled, devices});
      },
    );

    BluetoothSerial.on('bluetoothEnabled', () => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
          this.setState({devices});
        },
      );

      BluetoothSerial.on('bluetoothDisabled', () => {
        this.setState({devices: []});
      });
      BluetoothSerial.on('error', err => console.log(`Error: ${err.message}`));
    });
  }
  connect(device) {
    ToastAndroid.show(
      `Connecting to device ${device.name}`,
      ToastAndroid.SHORT,
    );
    this.setState({connecting: true});
    BluetoothSerial.connect(device.id)
      .then(res => {
        console.log(`Connected to device ${device.name}`);

        ToastAndroid.show(
          `Connected to device ${device.name}`,
          ToastAndroid.SHORT,
        );

        this.getDeviceConfig();
      })
      .catch(err =>
        ToastAndroid.show(
          `Unable to connect to device ${device.name}`,
          ToastAndroid.SHORT,
        ),
      );
  }
  _renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.connect(item.item)}>
        <View style={styles.deviceNameWrap}>
          <Text style={styles.deviceName}>
            {item.item.name ? item.item.name : item.item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  enable() {
    BluetoothSerial.enable()
      .then(res => this.setState({isEnabled: true}))
      .catch(err => Toast.showShortBottom(err.message));
  }

  disable() {
    BluetoothSerial.disable()
      .then(res => this.setState({isEnabled: false}))
      .catch(err => Toast.showShortBottom(err.message));
  }

  toggleBluetooth(value) {
    if (value === true) {
      this.enable();
    } else {
      this.disable();
    }
  }
  discoverAvailableDevices() {
    if (this.state.discovering) {
      return false;
    } else {
      this.setState({discovering: true});
      BluetoothSerial.discoverUnpairedDevices()
        .then(unpairedDevices => {
          const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
          console.log(uniqueDevices);
          this.setState({unpairedDevices: uniqueDevices, discovering: false});
        })
        .catch(err => console.log(err.message));
    }
  }
  toggleSwitch() {
    BluetoothSerial.write('T')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));
  }

  sendStateConfig(selectedSensorID, sensorState) {
    let cmd = 'S:' + selectedSensorID + ':' + sensorState + '#';
    console.log(cmd);
    BluetoothSerial.write(cmd)
      .then(res => {
        console.log(res);
        ToastAndroid.show(
          `Successfully changed ${selectedSensorID} sensor state`,
          ToastAndroid.SHORT,
        ),
          this.setState({connected: true});
      })
      .catch(err =>
        ToastAndroid.show(
          `Failed to change ${selectedSensorID} sensor state`,
          ToastAndroid.SHORT,
        ),
      );
  }

  sendIntervalConfig(selectedSensorID, interval) {
    let cmd = 'I:' + selectedSensorID + ':' + interval + '#';
    console.log(cmd);
    BluetoothSerial.write(cmd)
      .then(res => {
        console.log(res);
        ToastAndroid.show(
          `Successfully changed ${selectedSensorID} sensor interval`,
          ToastAndroid.SHORT,
        ),
          this.setState({connected: true});
      })
      .catch(err =>
        ToastAndroid.show(
          `Failed to change ${selectedSensorID} sensor interval`,
          ToastAndroid.SHORT,
        ),
      );
  }

  getDeviceConfig() {
    BluetoothSerial.write('GDC#')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));

    // BluetoothSerial.readFromDevice().then(data => {
    //   console.log(data);
    // });
    BluetoothSerial.withDelimiter('STOP').then(() => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
        },
      );
      BluetoothSerial.on('read', data => {
        let deviceConfigsString = data.data;
        console.log(deviceConfigsString);
        deviceConfigsString = deviceConfigsString.split('START')[1];
        deviceConfigsString = deviceConfigsString.split('STOP')[0];
        let deviceConfigString = deviceConfigsString.split('#')[0];
        let sensorsConfiString = deviceConfigsString.split('#')[1];
        deviceConfigString = deviceConfigString.replace(/^\n|\n$/g, '');
        sensorsConfiString = sensorsConfiString.replace(/^\n|\n$/g, '');

        let deviceConfig = JSON.parse(deviceConfigString);
        console.log('-------------------------');
        console.log(deviceConfig);
        let sensorsConfig = JSON.parse(sensorsConfiString);
        console.log('-------------------------');
        console.log(sensorsConfig);

        console.log('navigation');
        this.props.navigation.navigate('DeviceConfig', {
          deviceConfig: deviceConfig,
          sensorsConfig: sensorsConfig,
          bt: this,
        });
      });
    });
  }

  getSensorsConfig() {
    BluetoothSerial.write('GETSENSORSCONFIG#')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));

    BluetoothSerial.withDelimiter('#').then(() => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
        },
      );
      BluetoothSerial.on('read', data => {
        var sensorsConfigString = data.data;
        sensorsConfigString = sensorsConfigString
          .split('START')[1]
          .split('#')[0];
        sensorsConfigString = sensorsConfigString.replace(/^\n|\n$/g, '');
        console.log(sensorsConfigString);
        var sensorsConfig = JSON.parse(sensorsConfigString);
        console.log('RETURNING');
        console.log(sensorsConfig);
        return sensorsConfig;
      });
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.toolbar}>
          <Text style={styles.text}>Bluetooth</Text>
          <View style={styles.toolbarButton}>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={this.state.isEnabled ? '#FFC163' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              value={this.state.isEnabled}
              onValueChange={val => this.toggleBluetooth(val)}
            />
          </View>
        </View>
        <AppButton
          onPress={this.discoverAvailableDevices.bind(this)}
          title="Scan for Devices"
        />
        <FlatList
          style={{flex: 1}}
          data={this.state.devices}
          keyExtractor={item => item.id}
          renderItem={item => this._renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  toolbarButton: {
    width: 50,
    marginTop: 8,
  },
  toolbarTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    marginTop: 6,
  },
  deviceName: {
    fontSize: 17,
    color: 'white',
  },
  deviceNameWrap: {
    backgroundColor: '#4a67a1',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    height: 40,
    width: 200, // approximate a square
  },
});

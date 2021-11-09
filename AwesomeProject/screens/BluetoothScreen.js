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
} from 'react-native';
var _ = require('lodash');
import BluetoothSerial from 'react-native-bluetooth-serial';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTitle from '../components/Title';
import AppButton from '../components/Button';

export default class App extends Component {
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
    this.setState({connecting: true});
    BluetoothSerial.connect(device.id)
      .then(res => {
        console.log(`Connected to device ${device.name}`);

        ToastAndroid.show(
          `Connected to device ${device.name}`,
          ToastAndroid.SHORT,
        );
      })
      .catch(err => console.log(err.message));
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
  tempOn() {
    BluetoothSerial.write('STATE:TEMP:ON#')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));
  }
  tempOff() {
    BluetoothSerial.write('STATE:TEMP:OFF#')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));
  }

  getFromDevice() {
    BluetoothSerial.write('GETFROMDEVICE#')
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));

    // BluetoothSerial.readFromDevice().then(data => {
    //   console.log(data);
    // });
    BluetoothSerial.withDelimiter('#').then(() => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
        },
      );
      BluetoothSerial.on('read', data => {
        var deviceConfig = data.data;
        // console.log(`DATA FROM BLUETOOTH: ${data.data}`);
        console.log(deviceConfig.split('START')[1].split('#')[0]);
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Bluetooth Device List</Text>
          <View style={styles.toolbarButton}>
            <Switch
              value={this.state.isEnabled}
              onValueChange={val => this.toggleBluetooth(val)}
            />
          </View>
        </View>
        <Button
          onPress={this.discoverAvailableDevices.bind(this)}
          title="Scan for Devices"
          color="#841584"
        />
        <FlatList
          style={{flex: 1}}
          data={this.state.devices}
          keyExtractor={item => item.id}
          renderItem={item => this._renderItem(item)}
        />
        <Button
          onPress={this.getFromDevice.bind(this)}
          title="getFromDevice"
          color="#4983e6"
        />
        <Button
          onPress={this.tempOn.bind(this)}
          title="TEMP(On)"
          color="#86e86b"
        />
        <Button
          onPress={this.tempOff.bind(this)}
          title="TEMP(Off)"
          color="#e83535"
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
  text: {},
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
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
    color: 'black',
  },
  deviceNameWrap: {
    margin: 10,
    borderBottomWidth: 1,
  },
});

//export default DeviceScreen;

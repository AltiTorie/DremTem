import React, {Component} from 'react';
import {
  Alert,
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Switch,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import AppButton from '../../components/Button_main';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
var _ = require('lodash');

export default class ConfigureDevicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
      colors: props.colors,
    };
  }

  componentDidUpdate() {
    if (this.state.colors !== this.props.colors) {
      this.setState({colors: this.props.colors});
    }
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

    BluetoothSerial.withDelimiter('STOP').then(() => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
        },
      );
      BluetoothSerial.on('read', data => {
        console.log('123');
        let dataFromDevice = data.data;
        dataFromDevice = dataFromDevice.split('START')[1];
        dataFromDevice = dataFromDevice.split('STOP')[0];
        if (dataFromDevice.includes('{')) {
          // json - device configs
          let deviceConfigString = dataFromDevice.split('#')[0];
          let sensorsConfigString = dataFromDevice.split('#')[1];
          deviceConfigString = deviceConfigString.replace(/^\n|\n$/g, '');
          sensorsConfigString = sensorsConfigString.replace(/^\n|\n$/g, '');

          let deviceConfig = JSON.parse(deviceConfigString);
          let sensorsConfig = JSON.parse(sensorsConfigString);

          this.state.props.navigation.navigate('DeviceConfig', {
            deviceConfig: deviceConfig,
            sensorsConfig: sensorsConfig,
            bt: this,
          });
        } else {
          // sensor csv
          if (dataFromDevice.includes('EMPTY CSV')) {
            console.log('EMPTY CSV');
            ToastAndroid.show(`Empty csv`, ToastAndroid.SHORT);
          } else {
            console.log(dataFromDevice);
            let csvName = dataFromDevice.split('#')[0];
            csvName = csvName.split('.')[0];
            csvName = `${csvName}_${moment()}.csv`;
            let csvContent = dataFromDevice.split('#')[1];
            ToastAndroid.show(`Downloaded csv: ${csvName}`, ToastAndroid.SHORT);
            const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/dremtemfiles/${csvName}`;
            console.log('pathToWrite', pathToWrite);
            RNFetchBlob.fs
              .writeFile(pathToWrite, csvContent, 'utf8')
              .then(() => {
                console.log(`wrote file ${pathToWrite}`);
              })
              .catch(error => console.error(error));
          }
        }
      });
    });
  }

  getSensorCsv = async (deviceID, sensorID) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        BluetoothSerial.write(deviceID + '_' + sensorID + '.csv#')
          .then(res => {
            console.log(res);
            console.log('Successfuly wrote to device');
            this.setState({connected: true});
          })
          .catch(err => console.log(err.message));
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    // const {colors} = useTheme();
    return (
      <View style={styles.main}>
        <View style={styles.toolbar}>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              color: this.state.colors.text,
            }}>
            Bluetooth
          </Text>
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
    alignItems: 'center',
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

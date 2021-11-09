// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   FlatList,
//   Switch,
//   TouchableOpacity,
//   ToastAndroid,
// } from 'react-native';
// var _ = require('lodash');
// import BluetoothSerial from 'react-native-bluetooth-serial';

// UNSAFE_componentWillMount() {
//     Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
//       values => {
//         const [isEnabled, devices] = values;

//         this.setState({isEnabled, devices});
//       },
//     );

//     BluetoothSerial.on('bluetoothEnabled', () => {
//       Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
//         values => {
//           const [isEnabled, devices] = values;
//           this.setState({devices});
//         },
//       );

//       BluetoothSerial.on('bluetoothDisabled', () => {
//         this.setState({devices: []});
//       });
//       BluetoothSerial.on('error', err => console.log(`Error: ${err.message}`));
//     });
//   }

//   connect(device) {
//     this.setState({connecting: true});
//     BluetoothSerial.connect(device.id)
//       .then(res => {
//         console.log(`Connected to device ${device.name}`);

//         ToastAndroid.show(
//           `Connected to device ${device.name}`,
//           ToastAndroid.SHORT,
//         );
//       })
//       .catch(err => console.log(err.message));
//   }
//   _renderItem(item) {
//     return (
//       <TouchableOpacity onPress={() => this.connect(item.item)}>
//         <View style={styles.deviceNameWrap}>
//           <Text style={styles.deviceName}>
//             {item.item.name ? item.item.name : item.item.id}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
//   enable() {
//     BluetoothSerial.enable()
//       .then(res => this.setState({isEnabled: true}))
//       .catch(err => Toast.showShortBottom(err.message));
//   }

//   disable() {
//     BluetoothSerial.disable()
//       .then(res => this.setState({isEnabled: false}))
//       .catch(err => Toast.showShortBottom(err.message));
//   }

//   toggleBluetooth(value) {
//     if (value === true) {
//       this.enable();
//     } else {
//       this.disable();
//     }
//   }
//   discoverAvailableDevices() {
//     if (this.state.discovering) {
//       return false;
//     } else {
//       this.setState({discovering: true});
//       BluetoothSerial.discoverUnpairedDevices()
//         .then(unpairedDevices => {
//           const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
//           console.log(uniqueDevices);
//           this.setState({unpairedDevices: uniqueDevices, discovering: false});
//         })
//         .catch(err => console.log(err.message));
//     }
//   }
//   toggleSwitch() {
//     BluetoothSerial.write('T')
//       .then(res => {
//         console.log(res);
//         console.log('Successfuly wrote to device');
//         this.setState({connected: true});
//       })
//       .catch(err => console.log(err.message));
//   }
//   tempOn() {
//     BluetoothSerial.write('STATE:TEMP:ON#')
//       .then(res => {
//         console.log(res);
//         console.log('Successfuly wrote to device');
//         this.setState({connected: true});
//       })
//       .catch(err => console.log(err.message));
//   }
//   tempOff() {
//     BluetoothSerial.write('STATE:TEMP:OFF#')
//       .then(res => {
//         console.log(res);
//         console.log('Successfuly wrote to device');
//         this.setState({connected: true});
//       })
//       .catch(err => console.log(err.message));
//   }

//   getFromDevice() {
//     BluetoothSerial.write('GETFROMDEVICE#')
//       .then(res => {
//         console.log(res);
//         console.log('Successfuly wrote to device');
//         this.setState({connected: true});
//       })
//       .catch(err => console.log(err.message));

//     // BluetoothSerial.readFromDevice().then(data => {
//     //   console.log(data);
//     // });
//     BluetoothSerial.withDelimiter('#').then(() => {
//       Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
//         values => {
//           const [isEnabled, devices] = values;
//         },
//       );
//       BluetoothSerial.on('read', data => {
//         var deviceConfig = data.data;
//         // console.log(`DATA FROM BLUETOOTH: ${data.data}`);
//         console.log(deviceConfig.split('START')[1].split('#')[0]);
//       });
//     });
//   }

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DrawerHeader from '../../components/Drawer_header';

var mockedData = [
  {deviceID: 'A836b19g7', name: 'My device', online: true},
  {deviceID: 'Cc83h2k5n', name: 'Device in forest', online: false},
  {deviceID: 'Ejs2354nn', name: "Kevins' device", online: true},
  {deviceID: 'F234hh23i', name: 'New device', online: true},
  {deviceID: 'Gkk35n46n', name: 'Bedroom', online: true},
  {deviceID: 'B83b154hb', name: 'Device in kitchen', online: true},
  {deviceID: 'H187345gh', name: 'Garden', online: false},
  {deviceID: 'I2j2j35hh', name: 'Temperature measuring', online: false},
  {deviceID: 'Jwsehjhrw', name: 'Living room', online: false},
  {deviceID: 'D21jh6456', name: 'My favourite device', online: false},
];
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({deviceID: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

export default class DevicesPanel extends React.Component {
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Device', {
              device: item,
              onGoBack: () => this.refresh(),
            });
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  getDevicesData() {
    // TODO: add API call
    return mockedData;
  }

  refresh() {
    console.log('refresh');
    this.render();
  }

  render() {
    console.log('render DevicesPanel');
    let devicesData = this.getDevicesData();
    console.log(devicesData);
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={formatData(devicesData, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  logoText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    marginVertical: 0,
  },
  item: {
    backgroundColor: '#4a67a1',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    height: Dimensions.get('window').width / (1.5 * numColumns), // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

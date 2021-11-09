import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const data = [
  {deviceID: 'A836b19g7', name: 'My device 1', online: true},
  {deviceID: 'Cc83h2k5n', name: 'Device in forest', online: false},
  {deviceID: 'Ejs2354nn', name: 'Ejs2354nn', online: true},
  {deviceID: 'F234hh23i', name: 'F234hh23i', online: true},
  {deviceID: 'Gkk35n46n', name: 'Gkk35n46n', online: true},
  {deviceID: 'B83b154hb', name: 'Device in kitchen', online: true},
  {deviceID: 'H187345gh', name: 'H187345gh', online: false},
  {deviceID: 'I2j2j35hh', name: 'I2j2j35hh', online: false},
  {deviceID: 'Jwsehjhrw', name: 'Jwsehjhrw', online: false},
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
            this.props.navigation.navigate('Device', {device: item});
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={formatData(data, numColumns)}
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
    backgroundColor: 'white',
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
  text: {},
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

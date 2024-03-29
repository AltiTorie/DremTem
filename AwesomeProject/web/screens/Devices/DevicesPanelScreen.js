import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import SideNavbar from '../../components/SideNavbar';
import ScreenTitle from '../../components/ScreenTitle';

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

const numColumns = 3;

const DevicesPanelScreen = props => {
  const [devicesData, setDevicesData] = useState([]);

  useEffect(() => {
    setDevicesData(getDevicesData());
  }, []);

  const getDevicesData = () => {
    // TODO: add API call
    return mockedData;
  };

  const refresh = () => {
    mockedData = mockedData.slice(1); // TODO: remove
    console.log(getDevicesData());
    setDevicesData(getDevicesData());
  };

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

  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Device', {
              device: item,
              onGoBack: () => refresh(),
            });
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.title_box}>
        <ScreenTitle title="Devices Panel"></ScreenTitle>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={formatData(devicesData, numColumns)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title_box: {
    marginLeft: 170,
    marginTop: 50,
  },
  text: {
    margin: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
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
    margin: 20,
    height: '15vw',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: '2vw',
    fontWeight: 'bold',
  },
  flatListView: {
    marginLeft: 150,
    marginRight: 100,
  },
});

export default DevicesPanelScreen;

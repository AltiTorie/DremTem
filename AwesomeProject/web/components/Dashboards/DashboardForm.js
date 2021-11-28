import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native';
import makeAnimated from 'react-select/animated';
import MultiSelect from 'react-select';
import {Formik, Field} from 'formik';
// import AppButton from '../Button_main';
import MultiSelectChart from './MultiSelectChart';
import Globals from '../../../components/Globals';
import AppButton from '../Button_main';
import ChartTypeConnections from '../DefinedCharts/ChartTypeConnections';

export default function DashboardForm({additionalFunction}) {
  const [selectedFromSuggested, setSelectedFromSuggested] = useState([]);

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

  const setDashboardTypes = function (props, selectedTypes) {
    console.log('selectedTypes');
    console.log(selectedTypes);
    setSelectedFromSuggested([]);
    if (selectedTypes.length > 0) {
      // types is wrong now
      let types = [];
      selectedTypes.forEach(item => types.push(item.abbr));

      let q = Globals.definedCharts.find(
        chart =>
          chart.required_types.length == types.length &&
          chart.required_types.every(rt => types.includes(rt)),
      );
      props.setFieldValue('sensor_types', selectedTypes);
      let chart_link = q ? q.chart_link : 'DefaultDashboard';
      props.setFieldValue('screen_name', chart_link);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: 'New_dashboard',
          screen_name: '',
          sensor_types: [],
        }}
        onSubmit={(values, actions) => {
          additionalFunction(values);
          actions.resetForm();
        }}>
        {props => {
          const selectTypes = selectedTypes =>
            setDashboardTypes(props, selectedTypes);
          const user_devices = require('../MockedData/UserDevices.json');

          let device_mapped = user_devices.devices.map(device => {
            return device.sensors.map(sensor => ({
              value: sensor,
              label: device.deviceName + '-' + sensor.type,
            }));
          });
          device_mapped = device_mapped.flat();
          const animatedComponents = makeAnimated();

          renderItem = ({item, index}) => {
            if (item.empty === true) {
              return <View style={[styles.item, styles.itemInvisible]} />;
            }
            return (
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(item);
                    // setSelectedSensors(item);
                    let sensorTypes = item.sensors.map(sensor => ({
                      value: sensor,
                      label: item.device.device.deviceName + '-' + sensor.type,
                    }));
                    props.setFieldValue('sensor_types', sensorTypes);
                    setSelectedFromSuggested(item);
                    // let chart_link = q ? q.chart_link : 'DefaultDashboard';
                    // TODO: change screen name to appropriate Dashboard
                    props.setFieldValue('screen_name', 'DefaultDashboard');
                  }}>
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              </View>
            );
          };
          let suggested = suggest_dashboards();
          return (
            <>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Screen name"
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                <View style={{margin: 30, width: '50%', zIndex: 1}}>
                  <Text style={{fontSize: 20, paddingBottom: 10}}>
                    Choose Types
                  </Text>
                  <MultiSelect
                    options={device_mapped}
                    components={animatedComponents}
                    value={
                      selectedFromSuggested.sensors
                        ? selectedFromSuggested.sensors.map(sensor => ({
                            value: sensor,
                            label:
                              selectedFromSuggested.device.device.deviceName +
                              '-' +
                              sensor.type,
                          }))
                        : props.getFieldMeta('sensor_types').value
                    }
                    backspaceRemovesValue
                    captureMenuScroll
                    maxMenuHeight="15vw"
                    minMenuHeight="5vw"
                    placeholder="Choose Types"
                    isMulti
                    closeMenuOnSelect={false}
                    onChange={val => selectTypes(val)}
                  />
                </View>
                <FlatList
                  data={formatData(suggest_dashboards(), 5)}
                  style={styles.container}
                  renderItem={renderItem}
                  numColumns={5}
                />
                <AppButton title="submit" onPress={props.handleSubmit} />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

// Get user devices from API
// fetch(api).then(devices=>DO_STUFF).error(e=>console.log(e))
// Sort devices
// Device A has: Temperature, Humidity, Moisture
// Device B has: Light, Moisture
// () => [TemperatureHumidityDashboard, LightMoistureDashboard]
const suggest_dashboards = () => {
  const user_devices = require('../MockedData/UserDevices.json');
  let device_mapped = user_devices.devices.map(device => {
    let device_sensor_types = device.sensors.map(sensor => sensor.type);
    return {
      device: device,
      types: device_sensor_types,
    };
  });
  let charts = [];
  device_mapped.forEach(mapped_device => {
    let q = ChartTypeConnections.definedCharts.find(chart =>
      chart.required_types.every(rt => mapped_device.types.includes(rt)),
    );

    if (q) {
      let sensors = [];
      mapped_device.device.sensors.forEach(sensor => {
        if (q.required_types.includes(sensor.type)) {
          sensors.push(sensor);
        }
      });
      charts.push({
        chart: q,
        device: mapped_device,
        sensors: sensors,
        label:
          mapped_device.device.deviceName +
          ' - (' +
          q.required_types.join(',') +
          ')',
      });
    }
  });
  return charts;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
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
    height: '10vw',
    width: '10vw',
    padding: '1vw',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: '1.3vw',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '10em',
    right: '10em',
  },
});

import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MultiSelect from 'react-select';
import makeAnimated from 'react-select/animated';
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
    setSelectedFromSuggested([]);
    if (selectedTypes.length > 0) {
      let types = [];
      selectedTypes.forEach(item => types.push(item.value.type));
      let definedCharts = [
        ChartTypeConnections.definedSimpleCharts,
        ChartTypeConnections.definedComplexCharts,
      ].flat();
      // check if all types are the same
      let check = types.every(type => type === types[0]);
      let q = [];
      if (check) {
        q = ChartTypeConnections.definedSimpleCharts.find(
          chart => chart.required_types[0] === types[0],
        );
      } else {
        q = definedCharts.find(
          chart =>
            chart.required_types.length == types.length &&
            chart.required_types.every(rt => types.includes(rt)),
        );
      }
      props.setFieldValue('sensor_types', selectedTypes);
      let chart_link = q ? q.chart_component : 'DefaultDashboardComponent';
      props.setFieldValue('component_name', chart_link);
    } else {
      props.setFieldValue('sensor_types', []);
      props.setFieldValue('component_name', '');
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: 'New_dashboard',
          component_name: '',
          sensor_types: [],
        }}
        onSubmit={(values, actions) => {
          if (values.sensor_types.length == 0) {
            alert('Please choose sensors!');
          } else {
            additionalFunction(values);
          }
          actions.resetForm();
        }}>
        {props => {
          const selectTypes = selectedTypes =>
            setDashboardTypes(props, selectedTypes);
          const user_devices = require('../../data/UserDevices.json');
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
              <TouchableOpacity
                style={{
                  backgroundColor: '#4a67a1',
                  borderColor: '#fff',
                  borderRadius: 20,
                  borderWidth: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '15vw',
                  height: '10vw',
                  margin: '.7vw',
                  zIndex: 1,
                }}
                onPress={() => {
                  let sensorTypes = item.sensors.map(sensor => ({
                    value: sensor,
                    label: item.device.device.deviceName + '-' + sensor.type,
                  }));
                  props.setFieldValue('sensor_types', sensorTypes);
                  setSelectedFromSuggested(item);
                  props.setFieldValue(
                    'component_name',
                    item.chart.chart_component,
                  );
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.3vw',
                    fontWeight: 'bold',
                    padding: '0.5vw',
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          };
          return (
            <>
              <View>
                <Text style={{fontSize: 20, paddingBottom: 10}}>
                  Dashboard Name
                </Text>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFC163',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 20,
                    bottom: '-7vw',
                    width: '30vw',
                    height: '3vw',
                    margin: '.7vw',
                    zIndex: 1,
                  }}
                  onPress={props.handleSubmit}>
                  <Text style={styles.itemText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

const suggest_dashboards = () => {
  const user_devices = require('../../data/UserDevices.json');
  let device_mapped = user_devices.devices.map(device => {
    let device_sensor_types = device.sensors.map(sensor => sensor.type);
    return {
      device: device,
      types: device_sensor_types,
    };
  });
  let charts = [];
  device_mapped.forEach(mapped_device => {
    let q = ChartTypeConnections.definedComplexCharts.find(chart =>
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
    color: 'black',
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

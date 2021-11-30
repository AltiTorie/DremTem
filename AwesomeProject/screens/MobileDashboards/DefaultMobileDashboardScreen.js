import moment from 'moment';
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Plotly from 'react-native-plotly';
import Globals from '../../components/Globals';

{
  /*
  This class is supposed to show data from one device/sensor (to be decided).
  If from device then it should be called from DevicePanel.
  If from sensor, then (if such screen will exist) it should gather data from one sensor.
  If the device/sensor works in offline mode, data passed to this Dashboard could come from
  data sent via Bluetooth in .csv format.
  */
}
export default class DefaultMobileDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    let devices_mapping = {
      A836b19g7: 1,
      Cc83h2k5n: 2,
      Ejs2354nn: 3,
    };
    let item = props.route.params.item;
    let dd = [];
    let DATA = require('../../web/data/UserData.json');
    let UserDevices = require('../../web/data/UserDevices.json');
    let device = UserDevices.devices.find(
      userDevice => devices_mapping[item.deviceID] == userDevice.deviceID,
    );
    props.navigation.setOptions({title: 'Last data from ' + device.deviceName});
    let sensor_data = device.sensors.map(sensor =>
      DATA.sensor_data.find(sd => sd.sensorID == sensor.sensorID),
    );
    dd = sensor_data.map(sensorData => {
      let data = sensorData.data.map(sd => sd.value).slice(-100);
      let times = sensorData.data.map(sd => sd.time).slice(-100);
      return {
        __id: sensorData.sensorID,
        x: times,
        y: data,
        name: device.deviceName + '-' + sensorData.type,
        mode: 'markers',
        type: 'scattergl',
        dataType: sensorData.type,
      };
    });
    let scaled_data = dd.map(item => {
      let max = Math.max(...item.y);
      let min = Math.min(...item.y);
      let scaledY = item.y.map(Y => ((Y - min) / (max - min)).toFixed(2) * 100);
      min = min.toFixed(2);
      max = max.toFixed(2);
      max = max > 0 ? max : '(' + max + ')';
      let hovertemplate = '<i>%{x}</i>: <b>%{text:.2f}</b>';

      return {
        ...item,
        y: scaledY,
        hovertemplate: hovertemplate,
        text: item.y,
        name: item.name + ' (' + min + ' - ' + max + ')',
      };
    });
    this.state = {
      props: props,
      dashboard_data: scaled_data,
      layout: {
        title: device.deviceName,
        autozise: true,
        font: {size: 18},
        showlegend: true,

        hovermode: 'x unified',
        legend: {orientation: 'h', y: -0.2},
      },
    };
  }
  update = (_, {data, layout, config}, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
    return (
      <View style={styles.container}>
        <Plotly
          data={this.state.dashboard_data}
          layout={this.state.layout}
          style={styles.chart}
          update={this.update}
          onLoad={() => console.log('loaded')}
          debug
          // TODO: Delete saving as picture
          // TODO: Delete unnecesary 'select' options
          config={{
            displaylogo: false,
            responsive: true,
            autosize: true,
          }}
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
  logoContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  logoText: {
    fontSize: 20,
  },
  text: {},
  playground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  addDashboard: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: Dimensions.get('window').width,
    fontSize: 30,
  },
});

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
    let dashboard_options = props.route.params;
    console.log(dashboard_options);
    let labels = Globals.TEST_LABELS.slice(-50);
    let data = Globals.TEST_DATA.slice(-50);
    let data2 = Globals.TEST_DATA_2.slice(-50);
    this.state = {
      props: props,
      data: {
        __id: '1',
        x: labels,
        y: data,
        mode: 'lines+markers',
        line: {shape: 'spline'},
        type: 'scatter',
      },
      data2: {
        __id: '2',
        x: labels,
        y: data2,
        yaxis: 'y2',
        mode: 'markers',
        type: 'scatter',
      },
      layout: {
        title: 'Default',
        autozise: true,
        font: {size: 18},
        showlegend: false,
        xaxis: {rangeslider: {}},
        yaxis: {title: 'yaxis title'},
        yaxis2: {
          title: 'yaxis2 title',
          // titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        },
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
          data={[this.state.data, this.state.data2]}
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

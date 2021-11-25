import moment from 'moment';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Plotly from 'react-native-plotly';
import {SafeAreaView} from 'react-native-safe-area-context';
import Globals from '../../components/Globals';
export default class LightDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      data1: {
        __id: '1',
        x: Globals.TEST_LABELS,
        y: Globals.TEST_DATA,
        mode: 'markers',
        type: 'lines',
        marker: {
          size: 4,
        },
      },
      layout: {
        title: 'Plotly.js running in React Native!',
        autozise: true,
        xaxis: {
          autorange: true,
          rangeslider: {},
          type: 'date',
        },
        yaxis: {
          position: 0,
        },
      },
      line: {shape: 'spline'},
    };
  }
  update = (_, {data, layout, config}, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Plotly
          data={[this.state.data1]}
          layout={this.state.layout}
          style={styles.chart}
          update={this.update}
          onLoad={() => console.log('loaded')}
          debug
          // TODO: Delete saving as picture
          // TODO: Delete unnecesary 'select' options
          // TODO: Rotate x axis
          config={{
            displaylogo: false,
            responsive: true,
            autosize: true,
          }}
        />
      </SafeAreaView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: Dimensions.get('window').width,
    fontSize: 30,
  },
});

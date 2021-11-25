import moment from 'moment';
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Plotly from 'react-native-plotly';
import Globals from '../../components/Globals';
export default class DefaultDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    let dashboard_options = props.route.params.item;
    console.log(dashboard_options);
    let labels = Globals.TEST_LABELS;
    let data = Globals.TEST_DATA;
    let data2 = Globals.TEST_DATA_2;
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
        mode: 'markers',
        type: 'scatter',
      },
      layout: {
        title: 'Default',
        autozise: true,
        font: {size: 18},
        xaxis: {rangeslider: {}},
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: Dimensions.get('window').width,
    fontSize: 30,
  },
});

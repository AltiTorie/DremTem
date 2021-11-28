import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Plot from 'react-plotly.js';
import Globals from '../../../components/Globals';

export default class MoistureLightDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    let labels = Globals.TEST_LABELS;
    let data = Globals.TEST_DATA;
    let data2 = Globals.TEST_DATA_2;
    this.state = {
      props: props,
      data: {
        __id: '1',
        x: labels,
        y: data,
        name: 'Garden',
        mode: 'lines+markers',
        line: {shape: 'spline'},
        type: 'scattergl',
        marker: {
          symbol: '132',
        },
      },
      data2: {
        __id: '2',
        name: 'Basement',
        x: labels,
        y: data2,
        mode: 'markers',
        type: 'scattergl',
      },
      layout: {
        title: 'MoistureLightDashboard',
        autozise: true,
        font: {size: 18},
        xaxis: {
          rangeslider: {
            borderwidth: 3,
            bordercolor: '#5080F0',
            thickness: 0.05,
            yaxis: {rangemode: 'auto'},
          },
        },
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.85,
      },
    };
  }
  update = (_, {data, layout, config}, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Plot
            data={[this.state.data, this.state.data2]}
            layout={this.state.layout}
            update={this.update}
            onLoad={() => console.log('loaded')}
            debug
            config={{
              displaylogo: false,
              responsive: true,
              autosize: true,
            }}
          />
        </View>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    backgroundColor: '#F5D500',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    top: 10,
    left: 50,
    z: 0,
  },
  addButtonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f7e6b5',
  },
});

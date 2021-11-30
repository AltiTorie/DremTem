import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Plot from 'react-plotly.js';
import Globals from '../../../components/Globals';

export default class TemperatureHumidityDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    let withAxisData = props.data.map(data => {
      return {
        ...data,
        yaxis: data.dataType == 'humid' ? 'y2' : 'y',
      };
    });
    var button_layer_2_height = 1.2;
    var updatemenus = [
      {
        buttons: [
          {
            args: [{mode: 'markers'}],
            label: 'Markers',
            method: 'update',
          },
          {
            args: [{mode: 'lines+markers'}],
            label: 'Markers + lines',
            method: 'update',
          },
        ],
        direction: 'left',
        pad: {r: 10, t: 10},
        showactive: true,
        type: 'buttons',
        x: 0.1,
        xanchor: 'left',
        y: button_layer_2_height,
        yanchor: 'top',
      },
    ];

    this.state = {
      props: props,
      dashboard_data: withAxisData,
      layout: {
        title: props.name,
        autozise: true,
        font: {size: 18},
        updatemenus: updatemenus,
        xaxis: {
          rangeslider: {
            borderwidth: 3,
            bordercolor: '#5080F0',
            thickness: 0.05,
            yaxis: {rangemode: 'auto'},
          },
        },
        yaxis: {
          title: 'Temperature',
          ticksuffix: '°C',
        },
        yaxis2: {
          title: 'Humidity',
          overlaying: 'y',
          side: 'right',
          ticksuffix: '%',
        },
        hovermode: 'x unified',
        width: Dimensions.get('window').width * 0.8,
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
            data={this.state.dashboard_data}
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
    width: Dimensions.get('window').width * 0.8,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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

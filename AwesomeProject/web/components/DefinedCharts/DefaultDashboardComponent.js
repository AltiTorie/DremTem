import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Plot from 'react-plotly.js';

export default class DefaultDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    let scaled_data = props.data.map(item => {
      let max = Math.max(...item.y);
      let min = Math.min(...item.y);
      let scaledY = item.y.map(Y => ((Y - min) / (max - min)).toFixed(2) * 100);
      min = min.toFixed(2);
      max = max.toFixed(2);
      max = max > 0 ? max : '(' + max + ')';
      hovertemplate = '<i>%{x}</i>: <b>%{text:.2f}</b>';

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
        title: props.name,
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
        hovermode: 'x unified',
        legend: {orientation: 'h', y: -0.2},
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

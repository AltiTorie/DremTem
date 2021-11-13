import InteractiveChart from '../../components/Charts/Interactive_chart';
import React from 'react';
import LinedChart from '../../components/Charts/Line_Chart';
import {SafeAreaView, Text, StyleSheet, View, Platform} from 'react-native';
import PlotlyComponent from '../../components/Charts/PlotlyComponent';
// import Plot from 'react-native-plotly.js';

const MoistureDashboardScreen = props => {
  const {data, labels} = props.route.params;
  if (Platform.OS == 'web') {
    return (
      <SafeAreaView style={styles.main}>
        {/* <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        /> */}
      </SafeAreaView>
    );
  } else {
    // let a = <Plot />;
    return (
      <SafeAreaView style={styles.main}>
        <Text>Moisture Dasboard</Text>
        <PlotlyComponent></PlotlyComponent>
        {/* <LinedChart data={data} labels={labels}></LinedChart> */}
        {/* <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        /> */}
      </SafeAreaView>
    );
  }
};

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
});

export default MoistureDashboardScreen;

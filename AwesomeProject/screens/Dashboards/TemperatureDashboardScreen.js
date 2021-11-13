import React from 'react';
import InteractiveChart from '../../components/Charts/Interactive_chart';
import LinedChart from '../../components/Charts/Line_Chart';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const TemperatureDashboardScreen = props => {
  const {data, labels} = props.route.params;
  return (
    <View style={styles.main}>
      <Text>asd</Text>
      <LinedChart data={data} labels={labels}></LinedChart>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TemperatureDashboardScreen;

// {"navigation":
// 	{"addListener": [Function addListener],
// 	"canGoBack": [Function canGoBack],
// 	"dispatch": [Function dispatch],
// 	"getParent": [Function getParent],
// 	"getState": [Function anonymous],
// 	"goBack": [Function anonymous],
// 	"isFocused": [Function isFocused],
// 	"navigate": [Function anonymous],
// 	"pop": [Function anonymous],
// 	"popToTop": [Function anonymous],
// 	"push": [Function anonymous],
// 	"removeListener": [Function removeListener],
// 	"replace": [Function anonymous],
// 	"reset": [Function anonymous],
// 	"setOptions": [Function setOptions],
// 	"setParams": [Function anonymous]},
// 	"route": {"key": "TemperatureDashboard-W5q35-gku0CtBQiIamp_A", "name": "TemperatureDashboard", "params": {"data": [Array], "labels": [Array]}, "path": undefined}}

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinedChart from '../../components/Charts/Line_Chart';

const TemperatureMoistureDashboardScreen = props => {
  const {data, labels} = props.route.params;
  return (
    <View style={styles.main}>
      <Text>Temperature Moisture</Text>
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

export default TemperatureMoistureDashboardScreen;
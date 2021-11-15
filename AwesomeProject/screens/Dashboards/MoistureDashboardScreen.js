import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MoistureDashboardScreen = props => {
  const {data, labels} = props.route.params;

  return (
    <SafeAreaView style={styles.main}>
      <Text>Moisture Dasboard</Text>
    </SafeAreaView>
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

export default MoistureDashboardScreen;

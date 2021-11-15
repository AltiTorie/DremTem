import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import AppTitle from '../components/Title';

const SupportScreen = props => {
  return (
    <View style={styles.main}>
      <View>
        <AppTitle title="Support" />
      </View>
      <View style={styles.text}>
        <Text>..................</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
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
});

export default SupportScreen;

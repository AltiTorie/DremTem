TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SecondButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FFC163',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 272,
    heigh: 51,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default SecondButton;

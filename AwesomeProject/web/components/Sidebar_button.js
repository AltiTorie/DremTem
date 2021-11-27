TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SideButton = ({onPress, title, icon}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.appButtonContainer}
    icon={icon}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#FFC163',
    borderRadius: 22,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    width: '100%',
    // heigh: 51,
    margin: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1.0,
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default SideButton;

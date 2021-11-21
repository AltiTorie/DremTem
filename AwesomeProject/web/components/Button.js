TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Link} from '@react-navigation/native';

const Dupa = ({screen, title}) => (
  <View style={styles.appButtonContainer}>
    <Link to={{screen: screen}}>{title}</Link>
  </View>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#FFC163',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 272,
    height: 51,
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

export default Dupa;

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Link} from '@react-navigation/native';

const AppLink = ({screen, title}) => (
  <View style={styles.appButtonContainer}>
    <Link to={{screen: screen}} style={styles.appButtonText}>
      {title}
    </Link>
  </View>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    // elevation: 8,
    backgroundColor: '#FFC163',
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 152,
    height: 53,
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    alignItems: 'center',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default AppLink;

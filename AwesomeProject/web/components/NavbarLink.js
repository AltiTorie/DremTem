TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import {Link} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const AppLink = ({screen, title}) => (
  <View style={styles.appButtonContainer}>
    <Link to={{screen: screen}} style={styles.appButtonText}>
      {title}
    </Link>
  </View>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#FFC163',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    alignItems: 'center',
    textAlign: 'left',
  },
});

export default AppLink;

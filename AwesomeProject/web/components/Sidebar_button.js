TouchableOpacity.defaultProps = {activeOpacity: 0.8};

import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Link} from '@react-navigation/native';

const SideButton = ({onPress, title, icon, screen}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.appButtonContainer}
    icon={icon}>
    {/* <Link style={}>{title}/> */}
    <Link to={{screen: screen}} style={styles.appButtonText}>
      {title}
    </Link>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#FFC163',
    // borderRadius: 22,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    width: 275,
    height: 50,
    margin: 10,
    // shadowColor: 'grey',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowRadius: 4,
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
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

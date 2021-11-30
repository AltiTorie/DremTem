TouchableOpacity.defaultProps = {activeOpacity: 0.8};
import {Link} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

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
    width: '100%',
    height: 50,
    // alignItems: 'center',
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

export default SideButton;

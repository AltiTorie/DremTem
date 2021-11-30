import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import AppLink from './NavbarLink';

const Navbar = () => (
  <View style={styles.main}>
    <View style={styles.navLeft}>
      <Avatar.Image
        source={{
          uri: 'https://www.logoground.com/uploads6/dv6y2020448282020-01-224858473catwithfish.jpg',
        }}
        size={45}
        paddingLeft={10}
        style={styles.logo}
      />
      <AppLink title="Home" screen="Home" />
    </View>

    <View style={styles.navRight}>
      <AppLink title="Log in" screen="LogIn" />
      <AppLink title="Sign up" screen="SignUp" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFC163',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.8,
  },
  logo: {
    margin: 13,
  },
  navLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 6,
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Navbar;

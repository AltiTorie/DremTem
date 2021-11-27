import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import AppLink from './NavbarLink';
import {AuthContext} from './context';
import SideButton from './Sidebar_button';
import AppButton from './Button_main';
import SecondButton from './Button_second';
import {Danger, Home, Logout, Setting, User} from 'react-native-iconly';

const SideNavbar = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
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
        <AppLink title="Home" screen="Main" />
        <AppLink title="Dashboards" screen="Dashboards" />
        <AppLink title="Devices Panel" screen="DevicesPanel" />
      </View>

      <View style={styles.navRight}>
        {/* <AppLink title="Sign out" screen="SignOut" /> */}
        <SecondButton
          title="Sign out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'fixed',
    backgroundColor: '#FFC163',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.8,
  },
  logo: {
    // margin: 13,
  },
  navLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    // marginVertical: 6,
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default SideNavbar;

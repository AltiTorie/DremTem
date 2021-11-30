import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AuthContext} from './context';
import AppLink from './NavbarLink';
import SideButton from './Sidebar_button';

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
        <SideButton title="Home" screen="Main" />
        <SideButton title="Dashboards" screen="Dashboards" />
        <SideButton title="Devices" screen="DevicesPanel" />
        <SideButton title="Upload CSV" screen="UploadCsv" />
      </View>

      <View style={styles.navRight}>
        {/* <AppLink title="Sign out" screen="SignOut" /> */}
        <SideButton
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
    width: '13%',
    alignItems: 'center',
    alignSelf: 'stretch',
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
    marginVertical: 40,
  },
  navLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

export default SideNavbar;

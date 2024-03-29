import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import AppTitle from '../components/Title';
import DrawerHeader from '../components/Drawer_header';

const AboutScreen = props => {
  return (
    <View style={styles.main}>
      <DrawerHeader
        screen="Daschboards"
        onPress={() => props.navigation.openDrawer()}
      />
      <View>
        <AppTitle title="ABOUT" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
  },
});

export default AboutScreen;

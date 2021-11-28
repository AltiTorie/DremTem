import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import Navbar from '../../components/Navbar';
import AppLink from '../../components/NavbarLink';
import SideNavbar from '../../components/SideNavbar';
import ProductsScreen from '../ProductsScreen';

const UsersMainScreen = props => {
  return <View></View>;
};

const styles = StyleSheet.create({
  cat: {
    alignItems: 'center',
    margin: 80,
  },
  text: {
    margin: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#FFC163',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
    heigh: 51,
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

export default UsersMainScreen;

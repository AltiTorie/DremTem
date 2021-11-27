import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navbar from '../../components/Navbar';

const UploadCsvScreen = props => {
  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
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
});

export default UploadCsvScreen;

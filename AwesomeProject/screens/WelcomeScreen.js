import React from 'react';
import {View, StyleSheet} from 'react-native';

import AppButton from '../components/Button';
import AppTitle from '../components/Title';

const WelcomeScreen = props => {
  return (
    <View style={styles.main}>
      <View>
        <AppTitle title="drem tem" />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="About"
          onPress={() => props.navigation.navigate('About')}
        />
        <AppButton title="Log in" />
        <AppButton title="Sign up" />
        <AppButton
          title="Next"
          onPress={() => {
            props.navigation.replace('Home');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;

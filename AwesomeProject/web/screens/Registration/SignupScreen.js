import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {
  User,
  Hide,
  Show,
  Lock,
  Password,
  TickSquare,
} from 'react-native-iconly';
import {Link} from '@react-navigation/native';
import AppButton from '../../components/Button_main';
import Navbar from '../../components/Navbar';

const SignUpScreen = props => {
  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}> Join us! </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.text_footer}> Username </Text>
            <View style={styles.action}>
              <User set="curved" color="#05375a" size={25} />
              <TextInput placeholder="Your username" style={styles.textInput} />
            </View>

            <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
            <View style={styles.action}>
              <Lock set="light" color="#05375a" size={25} />
              <TextInput placeholder="Your password" style={styles.textInput} />
            </View>

            <Text style={[styles.text_footer, {marginTop: 20}]}>
              Confirm password
            </Text>
            <View style={styles.action}>
              <Lock set="light" color="#05375a" size={25} />
              <TextInput placeholder="Your password" style={styles.textInput} />
            </View>

            <View style={styles.button}>
              <AppButton
                title="Sign up"
                onPress={() => {
                  console.log('clicked');
                  // loginHandle(data.username, data.password);
                }}
              />
            </View>
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <Text>Already have an account? </Text>
              <Link to={{screen: 'LogIn'}} style={{color: '#FFC163'}}>
                Log in!
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  container: {
    width: '35%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#FFC163',
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    color: 'black',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  text_header: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: '5%',
    marginBottom: '1.5%',
  },
  textInput: {
    width: '100%',
    marginLeft: '3%',
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginBottom: '1.7%',
  },
  button: {
    marginTop: '4%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});

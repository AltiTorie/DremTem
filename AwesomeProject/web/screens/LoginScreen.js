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
import Navbar from '../components/Navbar';

const LogInScreen = props => {
  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.main}>
        <Text>Działa???</Text>
      </View>
      <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.header}>
        <Text style={styles.text_header}> Hello! </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}> Username </Text>
        <View style={styles.action}>
          <User set="curved" color="#05375a" size={25} />
          <TextInput
            placeholder="Your username"
            style={styles.textInput}
            // autoCapitalize="none"
            // onChangeText={value => textInputChange(value)}
            // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {/* {data.chceck_textInputChange ? ( */}
            <View>
              <TickSquare set="curved" color="#639E6C" size={25} />
            </View>
        {/* //   ) : null} */}
        </View>
        {/* {data.isValidUser ? null : ( */}
          {/* <View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 chcaracters long
            </Text>
          </View>
        )} */}

        <Text style={[styles.text_footer, {marginTop: 35}]}> Password </Text>
        <View style={styles.action}>
          <Lock set="light" color="#05375a" size={25} />
          <TextInput
            placeholder="Your password"
            // secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={value => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {/* {data.secureTextEntry ? ( */}
              <Hide set="curved" color="#05375a" size={25} />
            {/* ) : ( */}
              <Show set="curved" color="#05375a" size={25} />
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* {data.isValidPassword ? null : ( */}
          <View>
            <Text style={styles.errorMsg}>
              Password must be 8 chcaracters long
            </Text>
          </View>
        {/* )} */}

        <TouchableOpacity>
          <Text style={{color: 'black', marginTop: 15}}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <AppButton
            title="Sign in"
            onPress={() => {
              console.log('clicked');
            }}
          />
          <SecondButton
            title="Sign up"
            onPress={() => {
              // props.navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
};


export default LogInScreen;

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  main: {
    flex: 1,
    marginTop: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

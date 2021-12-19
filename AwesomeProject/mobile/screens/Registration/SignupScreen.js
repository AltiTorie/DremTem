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
import * as Animatable from 'react-native-animatable';
import {
  User,
  Hide,
  Show,
  Lock,
  Password,
  TickSquare,
} from 'react-native-iconly';
import AppButton from '../../components/Button_main';
import SecondButton from '../../components/Button_second';
import {AuthContext} from '../../components/context';

import SignUpScreen from './SignupScreen';
import DrawerNavigator from '../../navigation/DrawerNavigator';

const SignunScreen = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    chceck_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = value => {
    if (value.length > 0) {
      setData({
        ...data,
        email: value,
        chceck_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        chceck_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = value => {
    setData({
      ...data,
      password: value,
    });
  };

  const handleConfirmPasswordChange = value => {
    setData({
      ...data,
      confirm_password: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const signUpAPI = async () => {
    if (data.email === '') {
      return;
    }
    const response = await fetch(
      'http://c6140c902ac7.sn.mynetname.net:8080/api/v1/auth/signup',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      },
    );
    console.log(response.json());
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.header}>
        <Text style={styles.text_header}> Join us! </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}> E-mail </Text>
        <View style={styles.action}>
          <User set="curved" color="#05375a" size={25} />
          <TextInput
            placeholder="Your username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => textInputChange(value)}
          />
          {data.chceck_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <TickSquare set="curved" color="#05375a" size={25} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, {marginTop: 25}]}> Password </Text>
        <View style={styles.action}>
          <Lock set="light" color="#05375a" size={25} />
          <TextInput
            placeholder="Your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Hide set="curved" color="#05375a" size={25} />
            ) : (
              <Show set="curved" color="#05375a" size={25} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 25}]}>
          Confirm password{' '}
        </Text>
        <View style={styles.action}>
          <Lock set="light" color="#05375a" size={25} />
          <TextInput
            placeholder="Confirm your password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => handleConfirmPasswordChange(value)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Hide set="curved" color="#05375a" size={25} />
            ) : (
              <Show set="curved" color="#05375a" size={25} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <AppButton
            title="Sign up"
            onPress={() => {
              signUpAPI();
            }}
          />
          <SecondButton
            title="Sign in"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignunScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDC84',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    color: 'black',
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

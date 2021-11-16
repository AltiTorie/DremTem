import React from 'react';
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
import {User, Hide, Show, Lock, Password} from 'react-native-iconly';
import AppButton from '../../components/Button_main';
import SecondButton from '../../components/Button_second';
import SignUpScreen from './SignupScreen';
import DrawerNavigator from '../../navigation/DrawerNavigator';

const SigninScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Hello! </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}> E-mail </Text>
        <View style={styles.action}>
          <User set="curved" color="#05375a" size={20} />
          <TextInput
            placeholder="Your mail"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}> Password </Text>
        <View style={styles.action}>
          <Lock set="light" color="#05375a" size={20} />
          <TextInput
            placeholder="Your password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Hide set="curved" color="#05375a" size={20} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Log in"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <SecondButton
            title="Sign up"
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;

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
    flex: 3,
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
    marginTop: 50,
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

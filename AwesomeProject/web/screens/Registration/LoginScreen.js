import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import {User, Hide, Show, Lock, TickSquare} from 'react-native-iconly';
import {Link} from '@react-navigation/native';
import AppButton from '../../components/Button_main';
import Navbar from '../../components/Navbar';
import Users from '../../model/users';
import {AuthContext} from '../../components/context';

const LogInScreen = props => {
  const [data, setData] = useState({
    username: '',
    password: '',
    chceck_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = value => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        username: value,
        chceck_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: value,
        chceck_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = value => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName === item.username && password === item.password;
    });

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Wrong input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid user', 'Username or password is incorrect', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.main}>
        <View style={styles.container}>
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
                autoCapitalize="none"
                onChangeText={value => textInputChange(value)}
                onEndEditing={e => handleValidUser(e.nativeEvent.text)}
              />
              {data.chceck_textInputChange ? (
                <TickSquare set="curved" color="#639E6C" size={25} />
              ) : null}
            </View>
            {data.isValidUser ? null : (
              <View>
                <Text style={styles.errorMsg}>
                  Username must be 4 chcaracters long
                </Text>
              </View>
            )}

            <Text style={[styles.text_footer]}>Password</Text>
            <View style={styles.action}>
              <Lock set="light" color="#05375a" size={25} />
              <TextInput
                placeholder="Your password"
                style={styles.textInput}
                secureTextEntry={data.secureTextEntry ? true : false}
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
            {data.isValidPassword ? null : (
              <View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 chcaracters long
                </Text>
              </View>
            )}

            <TouchableOpacity>
              <Text style={{color: 'grey', marginTop: '1.5%'}}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <AppButton
                title="Sign in"
                onPress={() => {
                  console.log('clicked');
                  loginHandle(data.username, data.password);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: '5%',
              }}>
              <Text>Don't have an account? </Text>
              <Link to={{screen: 'SignUp'}} style={{color: '#FFC163'}}>
                Join us!
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;

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
    marginTop: '0.5%',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  button: {
    marginTop: '2%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});

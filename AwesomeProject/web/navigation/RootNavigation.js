import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {AuthContext} from '../components/context';
import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/Registration/LoginScreen';
import SignUpScreen from '../screens/Registration/SignupScreen';
import SideWebStackNavigator from './SideNavigation';

const RootStackWeb = createNativeStackNavigator();

const linking = {
  // prefixes: ['http://localhost:8080', 'localhost:8080/'],
  // enable: true,
  config: {
    screens: {
      Home: '',
      Products: '/products',
      About: '/aboutUs',
      LogIn: '/LogInScreen',
      SignUp: '/SignUpScreen',
      Dashboards: '/Dashboards',
      DevicesPanel: '/DevicesPanel',
      DevicePanel: '/DevicePanel',
      UploadCsv: '/UploadCsv',
    },
  },
};

const RootWebStackNavigator = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        let userToken;
        userToken = String(foundUser[0].userToken);
        const userName = String(foundUser[0].username);
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, userToken: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer linking={linking}>
        {loginState.userToken !== null ? (
          <SideWebStackNavigator />
        ) : (
          <RootStackWeb.Navigator screenOptions={{headerShown: false}}>
            <RootStackWeb.Screen name="Home" component={HomeScreen} />
            <RootStackWeb.Screen name="LogIn" component={LogInScreen} />
            <RootStackWeb.Screen name="SignUp" component={SignUpScreen} />
          </RootStackWeb.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootWebStackNavigator;

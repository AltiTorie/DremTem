import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';
import UsersMainScreen from '../screens/User/UsersMainScreen';
import {Home} from 'react-native-iconly';
import LogInScreen from '../screens/Registration/LoginScreen';
import SignUpScreen from '../screens/Registration/SignupScreen';

import DashboardsWebScreen from '../screens/DashboardsWebScreen';
import DefaultDashboardScreen from '../screens/Dashboards/DefaultDashboardScreen';
import DevicesPanelScreen from '../screens/Devices/DevicesPanelScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SideWebStackNavigator from './SideNavigation';

import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {AuthContext} from '../components/context';

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
            {/* <RootStackWeb.Screen
                name="Dashboards"
                component={DashboardsWebScreen}
              />
              <RootStackWeb.Screen
                name="DefaultDashboard"
                component={DefaultDashboardScreen}
              />
              <RootStackWeb.Screen
                name="DevicesPanel"
                component={DevicesPanelScreen}
              />
              <RootStackWeb.Screen name="Device" component={DevicePanelScreen} /> */}
          </RootStackWeb.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootWebStackNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';
import Navbar from '../components/Navbar';
import {Home} from 'react-native-iconly';

const RootStackWeb = createNativeStackNavigator();

const linking = {
  // prefixes: ['http://localhost:8080', 'localhost:8080/'],
  // enable: true,
  config: {
    screens: {
      Home: '',
      Products: '/products',
      About: '/aboutUs',
    },
  },
};

const RootWebStackNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootStackWeb.Navigator screenOptions={{headerShown: false}}>
        <RootStackWeb.Screen name="Home" component={HomeScreen} />
        <RootStackWeb.Screen name="Products" component={ProductsScreen} />
        <RootStackWeb.Screen name="About" component={AboutScreen} />
      </RootStackWeb.Navigator>
    </NavigationContainer>
  );
};

export default RootWebStackNavigator;

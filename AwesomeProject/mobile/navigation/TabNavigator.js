import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Category, Home, Notification} from 'react-native-iconly';
import Icon from 'react-native-vector-icons/Entypo';
import HomeDeviceStackNavigator from '../navigation/DeviceStackNavigator';
import GroupScreen from '../screens/GroupScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFC163"
      barStyle={{
        backgroundColor: paperTheme.dark ? '#202020' : 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Home
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={HomeDeviceStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="rss" size={25} color={colors.text} />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Category
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Notification
              set="light"
              primaryColor={colors.text}
              stroke="bold"
              size="large"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

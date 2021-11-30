import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddDeviceParentScreen from '../screens/Devices/AddDeviceParent';
import DeviceAdditionScreen from '../screens/Devices/DeviceAdditionScreen';

const AddDeviceStack = createStackNavigator();

const AddDeviceStackNavigator = () => {
  return (
    <AddDeviceStack.Navigator screenOptions={{headerShown: false}}>
      <AddDeviceStack.Screen
        name="AddDevice"
        component={AddDeviceParentScreen}
      />

      <AddDeviceStack.Screen
        name="DeviceAddition"
        component={DeviceAdditionScreen}
      />
    </AddDeviceStack.Navigator>
  );
};

export default AddDeviceStackNavigator;

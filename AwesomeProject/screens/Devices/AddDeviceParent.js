import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import AddDeviceScreen from './AddDeviceScreen';

const AddDeviceParentScreen = props => {
  const {colors} = useTheme();
  return <AddDeviceScreen {...props} colors={colors} />;
};

export default AddDeviceParentScreen;

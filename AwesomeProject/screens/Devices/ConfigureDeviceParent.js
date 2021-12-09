import {useTheme} from '@react-navigation/native';
import React from 'react';
import ConfigureDevicesScreen from './ConfigureDevicesScreen';

const ConfigureDevicesParentScreen = props => {
  const {colors} = useTheme();
  return <ConfigureDevicesScreen {...props} colors={colors} />;
};

export default ConfigureDevicesParentScreen;

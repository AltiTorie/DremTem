import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import ConfigureDevicesScreen from './ConfigureDevicesScreen';

const ConfigureDevicesParentScreen = props => {
  const {colors} = useTheme();
  return <ConfigureDevicesScreen {...props} colors={colors} />;
};

export default ConfigureDevicesParentScreen;

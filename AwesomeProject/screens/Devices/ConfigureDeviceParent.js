import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import ConfigureDevicesScreen from './ConfigureDevicesScreen';

const ConfigureDevicesParentScreen = () => {
  const {colors} = useTheme();

  return <ConfigureDevicesScreen colors={colors} />;
};

export default ConfigureDevicesParentScreen;

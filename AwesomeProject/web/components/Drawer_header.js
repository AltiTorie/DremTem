import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

const DrawerHeader = ({screen, onPress}) => {
  const {colors} = useTheme();
  return (
    <View style={headerStyles.container}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon name="md-menu" size={30} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
          }}>
          {screen}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: colors.background,
          }}>
          HOM
        </Text>
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    elevation: 10,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});

export default DrawerHeader;

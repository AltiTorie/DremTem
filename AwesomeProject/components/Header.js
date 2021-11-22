import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useNavigation, useTheme} from '@react-navigation/native';

export default function Header({screen}) {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={24} color={colors.text} />
      </TouchableOpacity>
      <View>
        <Text>{screen}</Text>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    // backgroundColor: '#fa7da7',
    elevation: 1,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const AppTitle = props => {
  const {colors} = useTheme();
  return (
    <View style={styles.logoContainer}>
      <Text
        style={{
          color: colors.text,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  logoText: {},
});

export default AppTitle;

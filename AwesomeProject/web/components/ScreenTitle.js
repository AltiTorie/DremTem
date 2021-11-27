import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const ScreenTitle = props => {
  const {colors} = useTheme();
  return (
    <View style={styles.screenTitleContainer}>
      <Text
        style={{
          color: colors.text,
          fontWeight: 'bold',
          fontSize: 40,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenTitleContainer: {
    marginBottom: 30,
  },
});

export default ScreenTitle;

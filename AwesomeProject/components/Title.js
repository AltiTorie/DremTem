import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const AppTitle = (props) => (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>{props.title}</Text>
    </View>
  );

const styles = StyleSheet.create({
    logoContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 30
      },
    logoText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 30,
    },
  });


  export default AppTitle;
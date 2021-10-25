import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';

const DeviceScreen = props => {
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Dvajsiki</Text>
            </View>
            <View style={styles.text}>
                <Text>i dwajsiątka</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
      },
      logoText: {
        fontSize: 20,
      },
      text: {
      }
});

export default DeviceScreen;
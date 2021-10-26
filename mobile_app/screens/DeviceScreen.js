import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';
import AppTitle from "../components/Title";
import AppButton from "../components/Button";

const DeviceScreen = props => {
    return (
        <View style={styles.main}>
            <View>
                <AppTitle title="Dvajsiki"/>
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
      text: {
      }
});

export default DeviceScreen;
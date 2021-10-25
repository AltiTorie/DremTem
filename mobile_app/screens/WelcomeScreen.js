import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';
import AboutScreen from '../screens/AboutScreen';

const WelcomeScreen = props => {
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>DREM TEM</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="About" onPress={() => {props.navigation.navigate('About');
                }}/>
                <Button title="Sign in"/>
                <Button title="Log in"/>
                <Button title="Next" onPress={() => {props.navigation.replace('Home');
                }}/>
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
      buttonContainer: {
          borderColor: "#7cb48f",
      },

});

export default WelcomeScreen;
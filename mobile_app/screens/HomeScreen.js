import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';
import AppTitle from "../components/Title";
import AppButton from "../components/Button";

const HomeScreen = props => {
    return (
        <View style={styles.main}>
            <View>
                <AppTitle title="HOME"/>
            </View>
            <View style={styles.text}>
                <Text>Tu się mają pokazać wszystkie rzeczy dla usera</Text>
            </View>
                <AppButton  title="Kama" onPress={() => {props.navigation.navigate('Device') }}/>
                <AppButton  title="Arek" onPress={() => {props.navigation.navigate('Dashboard') }}/>
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
          fontSize: 10,
          textAlign: 'center',
          margin: 5
      }
});

export default HomeScreen;
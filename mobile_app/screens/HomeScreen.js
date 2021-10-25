import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { HeaderTitle } from "react-navigation-stack";
import DrawerNavigator from "../navigation/DrawerNavigator";
// import { HeaderButton } from "react-navigation-header-buttons";

const HomeScreen = props => {
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>HOME</Text>
            </View>
            <View style={styles.text}>
                <Text>Tu się mają pokazać wszystkie pierdoły dla userahbjhbjhb</Text>
            </View>
                <Button  title="Kama" onPress={() => {props.navigation.navigate('Device') }}/>
                <Button  title="Arek" onPress={() => {props.navigation.navigate('Dashboard') }}/>
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
          fontSize: 10
      }
});

export default HomeScreen;
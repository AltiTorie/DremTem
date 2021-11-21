import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import RootWebStackNavigator from '../navigation/RootNavigation';
import Dupa from './Button';
import {Link} from '@react-navigation/native';

const Navbar = () => (
  <View>
    <Dupa title="Home" screen="Home" />
    <Dupa title="Produkty" screen="Products" />
    {/* /* <Link to={{screen: 'Home'}}>Hooome</Link> */}
  </View>
  //   <View style={styles.main}>
  //     <View style={styles.navLeft}>
  /* <Avatar.Image
        source={{
          uri: 'https://www.logoground.com/uploads6/dv6y2020448282020-01-224858473catwithfish.jpg',
        }}
        size={45}
        // paddingLeft={10}
      /> */

  /* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Products');
        }}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>About us</Text>
      </TouchableOpacity> */

  // </View>

  /* <View style={styles.navRight}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Products');
        }}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Products');
        }}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Sign up</Text>
      </TouchableOpacity>
    </View> */
  //   </View>
);

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#FFC163',
    // width: '100%',
    // height: 53,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  //   logo: {
  //     paddingVertical: 10,
  //     paddingHorizontal: 12,
  //   },
  navLeft: {
    // display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // marginVertical: 6,
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  //   appButtonContainer: {
  //     elevation: 8,
  //     backgroundColor: '#FFC163',
  //     borderRadius: 22,
  //     paddingVertical: 10,
  //     paddingHorizontal: 12,
  //     width: 150,
  //     heigh: 51,
  //     margin: 10,
  //   },
  //   appButtonText: {
  //     fontSize: 18,
  //     color: 'black',
  //     fontWeight: '500',
  //     alignSelf: 'center',
  //     textTransform: 'uppercase',
  //   },
});

export default Navbar;

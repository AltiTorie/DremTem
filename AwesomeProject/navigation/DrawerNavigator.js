import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  useTheme,
} from 'react-native-paper';
// import {useTheme} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Logout, Setting, User, Danger, Home} from 'react-native-iconly';

import {AuthContext} from '../components/context';
import {signOut} from './AppNavigator';

const DrawerNavigator = props => {
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const [isEnglishVersion, setisEnglishVersion] = React.useState(false);

  const toggleLanguageVersion = () => {
    setisEnglishVersion(!isEnglishVersion);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View styel={styles.userInfoSection}>
            <View
              style={{flexDirection: 'row', marginTop: 15, paddingLeft: 10}}>
              <Avatar.Image
                source={{
                  uri: 'https://www.clipartmax.com/png/middle/72-722180_these-are-some-cats-avatar-i-drew-during-my-free-time-black.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Agata Kowalczyk</Title>
                <Caption style={styles.caption}>@kowalczykAgata</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
              icon={() => (
                <Home set="light" primaryColor={colors.text} size="large" />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={() => (
                <User set="curved" primaryColor={colors.text} size="large" />
              )}
              label="My profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={() => (
                <Setting set="curved" primaryColor={colors.text} size="large" />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={() => (
                <Danger set="curved" primaryColor={colors.text} size="large" />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={{paddingLeft: 20}}>
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch
                    trackColor={{true: '#FFC163', false: 'grey'}}
                    thumbColor={paperTheme.dark ? '#FFC163' : 'white'}
                    value={paperTheme.dark}
                  />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => toggleLanguageVersion()}>
              <View style={styles.preference}>
                <Text>English</Text>
                <View pointerEvents="none">
                  <Switch
                    trackColor={{true: '#FFC163', false: 'grey'}}
                    thumbColor={isEnglishVersion ? '#FFC163' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    value={isEnglishVersion}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={() => (
            <Logout set="light" primaryColor={colors.text} size="large" />
          )}
          label="Sign out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borberTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    pddingHorizontal: 16,
  },
});

export default DrawerNavigator;

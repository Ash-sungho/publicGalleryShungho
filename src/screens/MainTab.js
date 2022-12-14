import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyProfileStackNavigation from './myProfile/MyProfileStackNavigation';
import HomeStackNavigation from './home/HomeStackNavigation';
import useUserContext from '../contexts/UserContext';
import {Image, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const {user} = useUserContext();
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
    //   <Tab.Screen
    //     name="MyProfileStackNavigation"
    //     component={MyProfileStackNavigation}
    //   />
    // </Tab.Navigator>
    <View style={styles.block}>
      {user.photoURL && (
        <Image
          source={{uri: user.photoURL}}
          style={{width: 128, height: 128, marginBottom: 16}}
          resizeMode={'cover'}
        />
      )}
      <Text style={styles.text}>{user.displayName}</Text>
    </View>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

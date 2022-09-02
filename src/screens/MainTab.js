import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyProfileStackNavigation from './myProfile/MyProfileStackNavigation';
import HomeStackNavigation from './home/HomeStackNavigation';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
      <Tab.Screen
        name="MyProfileStackNavigation"
        component={MyProfileStackNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

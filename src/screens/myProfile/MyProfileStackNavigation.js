import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyprofileScreen from './MyprofileScreen';

const Stack = createNativeStackNavigator();

const MyProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyprofileScreen" component={MyprofileScreen} />
    </Stack.Navigator>
  );
};

export default MyProfileStackNavigation;

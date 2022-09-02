import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import SettingScreen from './SettingScreen';
import SignScreen from './SignScreen';
import UploadScreen from './UploadScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="SignScreen" component={SignScreen} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
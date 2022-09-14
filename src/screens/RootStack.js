import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import SettingScreen from './SettingScreen';
import UploadScreen from './UploadScreen';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './signIn/SignInScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;

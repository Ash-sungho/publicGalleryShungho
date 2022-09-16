import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import SettingScreen from './SettingScreen';
import UploadScreen from './UploadScreen';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './signIn/SignInScreen';
import useUserContext from '../contexts/UserContext';

const Stack = createNativeStackNavigator();

function RootStack() {
  React.useEffect(() => {}, [user]);

  const {user} = useUserContext();
  console.log('user::', user);
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name={'MainTab'}
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
      )}

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

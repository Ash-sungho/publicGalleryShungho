import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './src/screens/RootStack';
import {UserContextProvider} from './src/contexts/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;

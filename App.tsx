import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { AppProvider } from './src/context/AppContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <StackNavigator />
      </AppProvider>
    </NavigationContainer>
  )
}

export default App;

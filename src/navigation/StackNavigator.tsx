import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {RestaurantScreen} from '../screens/RestaurantScreen';
import {LocationScreen} from '../screens/LocationScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  RestaurantScreen: undefined;
  LocationScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'HomeScreen'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="RestaurantScreen"
        options={{title: 'RestaurantScreen'}}
        component={RestaurantScreen}
      />
      <Stack.Screen
        name="LocationScreen"
        options={{title: 'LocationScreen'}}
        component={LocationScreen}
      />
    </Stack.Navigator>
  );
};

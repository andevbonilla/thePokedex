import React, { useContext } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { themeContext } from '../context/themeContext/ThemeContext';
import { PokemonDetails } from '../screens/PokemonDetails';

const Stack = createStackNavigator();

export const Navigator = () => {

   const {theme} = useContext(themeContext)

  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: theme.backgroundColor}}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
}


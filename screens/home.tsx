import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global-stylesheet';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilesScreen from './profile';
import CarouselScreen from './carousel';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carousels" component={CarouselScreen} />
      <Stack.Screen name="Profile" component={ProfilesScreen} />
    </Stack.Navigator>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import ClasslistScreen from './screens/classlist';
import PhotosScreen from './screens/photos';
import BottomTab from './navigation/bottom-tab';
import MenuScreen from './screens/menu';
import ProfileVisitsScreen from './screens/profile-visits';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <BottomTab.Screen name="Classlist" component={ClasslistScreen} />
        <BottomTab.Screen name="Photos" component={PhotosScreen} />
        <BottomTab.Screen name="ProfileVisits" component={ProfileVisitsScreen} />
        <BottomTab.Screen name="Menu" component={MenuScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

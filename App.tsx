import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import ClasslistScreen from './screens/classlist';
import PhotosScreen from './screens/photos';
import BottomTab from './navigation/bottom-tab';
import MenuScreen from './screens/menu';
import ProfileVisitsScreen from './screens/profile-visits';
import Drawer from './navigation/drawer';
import { TouchableOpacity } from 'react-native';

function tabs() {
  return (<BottomTab.Navigator>
    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="Classlist" component={ClasslistScreen} />
    <BottomTab.Screen name="Photos" component={PhotosScreen} />
    <BottomTab.Screen name="ProfileVisits" component={ProfileVisitsScreen} />
    <BottomTab.Screen name="Menu" component={MenuScreen} options={({ navigation }) => ({
      tabBarButton: (props) => (
        <TouchableOpacity {...props} onPress={() => {
          navigation.toggleDrawer();
        }} />
      )
    })}/>
  </BottomTab.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerPosition: 'right', headerShown: false }}>
        <Drawer.Screen name="Drawer Menu" component={tabs} options={{ headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

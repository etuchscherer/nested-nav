import * as React from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global-stylesheet';

type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: undefined;
};

import { StackNavigationProp } from '@react-navigation/stack';
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function CarouselScreen({ navigation }: Props) {
  return (
    <View style={globalStyles.container}>
      <Text>Carousel</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
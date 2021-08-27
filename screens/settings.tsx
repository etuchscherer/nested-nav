import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global-stylesheet';

export default function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Settings</Text>
    </View>
  );
}
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import All from './All';
import Add from './Add';
import { DefaultTheme } from 'react-native-paper';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="All" component={All} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({});

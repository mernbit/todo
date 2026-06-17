/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabProvider from './src/contexts/TabContext';
import Routes from './src/screens/index';
import { initDb } from './src/database';

function App() {
  useEffect(() => {
    initDb();
  }, []);
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle={!isDark ? 'dark-content' : 'light-content'}
          backgroundColor={!isDark ? '#ffffff' : '#121212'}
        />

        <TabProvider>
          <Routes />
        </TabProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabProvider from './src/contexts/TabContext';
import Routes from './src/screens/index';
import { initDb } from './src/database';
function App() {
  useEffect(() => {
    initDb();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent barStyle="dark-content" />

        <TabProvider>
          <Routes />
        </TabProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

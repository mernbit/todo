/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabProvider from './src/contexts/TabContext';
import Routes from './src/screens/index';
import { PaperProvider } from 'react-native-paper';
// import { Text } from 'react-native-paper';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent barStyle="dark-content" />
        {/* <PaperProvider
          theme={{ colors: { background: '#ffffff' }, roundness: 1 }}
        > */}
        <TabProvider>
          <Routes />
        </TabProvider>
        {/* </PaperProvider> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

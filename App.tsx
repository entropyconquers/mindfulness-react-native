import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";




const newColorTheme = {
  brand: {
    50: '#e5efff',
    100: '#bfcef6',
    200: '#96adea',
    300: '#6c8ddf',
    400: '#446cd5',
    500: '#2a52bb',
    600: '#1f4093',
    700: '#152e6a',
    800: '#091b42',
    900: '#01091c',
  },

};
const theme = extendTheme({ colors: newColorTheme });
export default function App() {




  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <Navigation />
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}

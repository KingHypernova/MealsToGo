import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'; //Android status bar only
import {
   StatusBar, //ios status bar only
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Platform,
   TextInput } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screens.js';
import { styled, ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';


export default function App() {

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if(!oswaldLoaded || !latoLoaded) { return null; }

  return (

    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style='auto' />
    </>

  );
}

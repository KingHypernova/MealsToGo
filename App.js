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
import { sizes } from './src/infrastructure/theme/sizes.js';
import { colors } from './src/infrastructure/theme/colors.js';
import { RestaurantsScreen } from './src/features/restaurants/components/screens/restaurants.screens.js';
import styled from 'styled-components';


export default function App() {

  return (

    <>

      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />

    </>

  );
}

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
import { sizes } from './src/utils/sizes.js';
import { colors } from './src/utils/colors.js';
import { RestaurantsScreen } from './src/features/restaurants/components/screens/restaurants.screens.js';

export default function App() {

  return (

    <>

      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />

    </>

  );
}

const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   //ios status bar 
  //   paddingTop: StatusBar.currentHeight,
  //   backgroundColor: colors.lavender
  // },

});

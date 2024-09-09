import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper'
import {
  StatusBar, //ios status bar only
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput } from 'react-native';

import { RestaurantInfo } from '../restaurant-info.js';
import { sizes } from '../../../../../src/utils/sizes.js';
import { colors } from '../../../../../src/utils/colors.js';


export const RestaurantsScreen = () => (

  <SafeAreaView style={styles.container}>

    <View style={styles.searchBarContainer}>
      <Searchbar
          style={styles.searchBar}
          placeholder="What would you like to eat?"
      />
    </View>

    <View style={styles.list}>
      <RestaurantInfo/>
    </View>

  </SafeAreaView>

);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    //ios status bar 
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.lavender
  },

  searchBarContainer: {
    flex: 0.1,
    justifyContent: 'center',
    paddingHorizontal:sizes.md,
    // paddingVertical:16,
    // backgroundColor: colors.aquamarine
  },

  searchBar: {
    // paddingHorizontal:50
    // verticalAlign: 'center',
    // paddingVertical:6
  },

  list: {
    flex: 0.9,
    paddingLeft: sizes.md,
    paddingTop: sizes.md,
    backgroundColor: colors.iris
  }

});
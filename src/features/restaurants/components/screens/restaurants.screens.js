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

import { RestaurantCard } from '../restaurant-card.js';
import { sizes } from '../../../../infrastructure/theme/sizes.js';
import { colors } from '../../../../infrastructure/theme/colors.js';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${()=>colors.lavender};
`;
const SearchContainer = styled(View)`
  flex: 0.1;
  justify-content: 'center';
  padding-horizontal:${()=>sizes.md}px;
`;
const RestaurantListContainer = styled(View)`
  flex: 0.9;
  padding: ${()=>sizes.md}px;
`;


export const RestaurantsScreen = () => (

  <SafeArea>

    <SearchContainer>
      <Searchbar placeholder="What would you like to eat?"/>
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantCard/>
    </RestaurantListContainer>

  </SafeArea>

);
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
import { RestaurantCard } from '../components/restaurant-card.js';
import styled from 'styled-components';
import { theme } from '../../../../src/infrastructure/theme/index.js'



const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props)=> props.theme.colors.bg.primary};
`;
const SearchContainer = styled(View)`
  justify-content: 'center';
  padding: ${(props)=> props.theme.space.lg};
`;

const FoodSearchBar = styled(Searchbar)`
  background-color: ${(props)=> props.theme.colors.bg.secondary};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props)=> props.theme.space.lg};
`;


export const RestaurantsScreen = () => (

  <SafeArea>

    <SearchContainer>
      <FoodSearchBar placeholder="What would you like to eat?"/>
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantCard/>
    </RestaurantListContainer>

  </SafeArea>

);
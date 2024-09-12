import React, { useState } from 'react';
import {
  StatusBar, //ios status bar only
  SafeAreaView,
  StyleSheet,
  Text,
  View } from 'react-native';
import { Card } from 'react-native-paper';
import { sizes } from '../../../infrastructure/theme/sizes.js';
import styled from 'styled-components';


const RestaurantContentCard = styled(Card)`
  background-color: white;
`;
const RestaurantName = styled(Card.Content)``;
const RestaurantPhoto = styled(Card.Cover)`
  padding:18px
`;

//Pass restaurant obj to RestaurantCard components 
//to be used in restaurant.screens.js
export const RestaurantCard = ({ restaurant = {}}) => {

  //Define restaurant obj
  const {
    name = 'dummy rest',
    icon,
    photos = [
      'https://images.squarespace-cdn.com/content/v1/5cf423ac7eb1290001ede256/1612896531610-44GAQNJQYWCWBQLN8V3B/Pic+.jpg?format=2500w'
    ],
    address = "999 random st",
    isOpenNow = true,
    rating = 4,
    isClosed
  } = restaurant;

  return(

    <RestaurantContentCard elevation={5}>

      <RestaurantPhoto
        key={name}
        source={{ uri: photos[0] }}
      />

      <RestaurantName>
        <Text> {name} </Text>
      </RestaurantName>

    </RestaurantContentCard>

  )
}